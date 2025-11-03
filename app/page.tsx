"use client"

import React, { useState } from 'react';
import { Server, Database, Zap, Settings, Download, AlertCircle } from 'lucide-react';

type FormDataType = {
  cpuCores: number;
  ramGB: number;
  storageType: string;
  expectedTraffic: number;
  phpVersion: string;
  dbEngine: string;
  hasRedis: boolean;
  hasVarnish: boolean;
  avgProductCount: number;
  avgOrdersPerDay: number;
  // allow other form fields; use unknown to avoid `any`
  [key: string]: number | string | boolean | unknown;
};

type Recommendation = {
  plugins: { name: string; purpose: string; required: boolean; url: string }[];
  monitoring: string[];
  maintenance: string[];
  woocommerce: string[];
  database: string[];
};

type ConfigType = {
  nginx: string;
  nginxSite: string;
  phpFpm: string;
  phpIni: string;
  mysql: string;
  redis: string;
  sysctl: string;
  wpConfig: string;
  recommendations: Recommendation;
};

export default function WooCommerceOptimizer() {
  const [formData, setFormData] = useState<FormDataType>({
    cpuCores: 4,
    ramGB: 8,
    storageType: 'ssd',
    expectedTraffic: 10000,
    phpVersion: '8.2',
    dbEngine: 'mysql',
    hasRedis: true,
    hasVarnish: false,
    avgProductCount: 1000,
    avgOrdersPerDay: 100
  });

  const [config, setConfig] = useState<ConfigType | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type, checked } = target as HTMLInputElement;

    // coerce numeric inputs to numbers for the typed formData fields
    let parsedValue: string | number | boolean;
    if (type === 'checkbox') {
      parsedValue = !!checked;
    } else if (type === 'number') {
      const num = Number((target as HTMLInputElement).value);
      parsedValue = Number.isNaN(num) ? 0 : num;
    } else {
      parsedValue = value;
    }

    const key = name as keyof FormDataType;
    setFormData(prev => ({ ...prev, [key]: parsedValue }));
  };

  const generateConfig = () => {
    const { cpuCores, ramGB, storageType, expectedTraffic, phpVersion, dbEngine, hasRedis, hasVarnish, avgProductCount, avgOrdersPerDay } = formData;
    
    // Calculate optimal values based on server specs
    const ramMB = ramGB * 1024;
    const phpFpmChildren = Math.max(10, Math.min(cpuCores * 3, Math.floor(ramMB / 128)));
    const maxChildren = Math.floor(phpFpmChildren * 1.5);
    const startServers = Math.ceil(phpFpmChildren / 4);
    const minSpareServers = Math.ceil(phpFpmChildren / 5);
    const maxSpareServers = Math.ceil(phpFpmChildren / 2);
    
    // MySQL/MariaDB calculations
    const innodbBufferPool = Math.floor(ramMB * 0.5); // 50% of RAM for InnoDB
    const innodbLogFileSize = Math.min(512, Math.floor(innodbBufferPool / 4));
    const maxConnections = Math.max(151, phpFpmChildren + 50);
    const queryCacheSize = hasRedis ? 0 : Math.min(256, Math.floor(ramMB * 0.05));
    
    // Redis calculations
    const redisMaxMemory = hasRedis ? Math.floor(ramMB * 0.15) : 0;
    
    // NGINX worker calculations
    const workerProcesses = cpuCores;
    const workerConnections = expectedTraffic > 50000 ? 4096 : 2048;
    
    const configurations = {
      nginx: `# /etc/nginx/nginx.conf
user www-data;
worker_processes ${workerProcesses};
worker_rlimit_nofile 65535;
pid /run/nginx.pid;

events {
    worker_connections ${workerConnections};
    use epoll;
    multi_accept on;
}

http {
    # Basic Settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    server_tokens off;
    client_max_body_size 256M;
    
    # Buffer Settings
    client_body_buffer_size 128k;
    client_header_buffer_size 1k;
    large_client_header_buffers 4 16k;
    
    # Gzip Settings
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript 
               application/json application/javascript application/xml+rss 
               application/rss+xml font/truetype font/opentype 
               application/vnd.ms-fontobject image/svg+xml;
    
    # FastCGI Cache (if not using Varnish)
    ${!hasVarnish ? `fastcgi_cache_path /var/cache/nginx levels=1:2 keys_zone=WORDPRESS:100m 
                     inactive=60m max_size=1g;
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    fastcgi_cache_use_stale error timeout invalid_header http_500;
    fastcgi_ignore_headers Cache-Control Expires Set-Cookie;` : '# Using Varnish - FastCGI cache disabled'}
    
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # Logging
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;
    
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}`,

      nginxSite: `# /etc/nginx/sites-available/woocommerce
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/html;
    index index.php index.html;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    
    # Static file handling with aggressive caching
    location ~* \\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 365d;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Deny access to sensitive files
    location ~ /\\.(ht|git|env) {
        deny all;
    }
    
    location ~ /wp-content/uploads/.*\\.php$ {
        deny all;
    }
    
    # WooCommerce specific
    location ~ ^/wp-content/uploads/wc-logs/ {
        deny all;
    }
    
    # Main location block
    location / {
        try_files $uri $uri/ /index.php?$args;
    }
    
    # PHP processing
    location ~ \\.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php/php${phpVersion}-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        
        # FastCGI Cache (if not using Varnish)
        ${!hasVarnish ? `fastcgi_cache WORDPRESS;
        fastcgi_cache_valid 200 60m;
        fastcgi_cache_bypass $skip_cache;
        fastcgi_no_cache $skip_cache;
        add_header X-FastCGI-Cache $upstream_cache_status;` : '# Varnish handles caching'}
        
        # Increase timeouts for WooCommerce
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 128k;
        fastcgi_buffers 256 16k;
        fastcgi_busy_buffers_size 256k;
        fastcgi_temp_file_write_size 256k;
    }
}`,

      phpFpm: `; /etc/php/${phpVersion}/fpm/pool.d/www.conf
[www]
user = www-data
group = www-data
listen = /var/run/php/php${phpVersion}-fpm.sock
listen.owner = www-data
listen.group = www-data
listen.mode = 0660

; Process Management
pm = dynamic
pm.max_children = ${maxChildren}
pm.start_servers = ${startServers}
pm.min_spare_servers = ${minSpareServers}
pm.max_spare_servers = ${maxSpareServers}
pm.max_requests = 500
pm.process_idle_timeout = 10s

; PHP Settings
php_admin_value[memory_limit] = 256M
php_admin_value[max_execution_time] = 300
php_admin_value[max_input_time] = 300
php_admin_value[upload_max_filesize] = 256M
php_admin_value[post_max_size] = 256M
php_admin_value[max_input_vars] = 5000

; Performance
php_admin_flag[opcache.enable] = on
php_admin_value[opcache.memory_consumption] = 256
php_admin_value[opcache.interned_strings_buffer] = 16
php_admin_value[opcache.max_accelerated_files] = 10000
php_admin_value[opcache.revalidate_freq] = 60
php_admin_flag[opcache.validate_timestamps] = on
php_admin_flag[opcache.save_comments] = on

; Slow log
slowlog = /var/log/php${phpVersion}-fpm-slow.log
request_slowlog_timeout = 5s

; Status
pm.status_path = /status
ping.path = /ping`,

      phpIni: `; /etc/php/${phpVersion}/fpm/php.ini - Key optimizations
; Memory
memory_limit = 256M
max_execution_time = 300
max_input_time = 300

; File Uploads
upload_max_filesize = 256M
post_max_size = 256M
max_file_uploads = 20

; Session
session.save_handler = ${hasRedis ? 'redis' : 'files'}
${hasRedis ? 'session.save_path = "tcp://127.0.0.1:6379?weight=1&timeout=2.5&database=0"' : 'session.save_path = /var/lib/php/sessions'}
session.gc_maxlifetime = 3600

; OPcache
opcache.enable=1
opcache.memory_consumption=256
opcache.interned_strings_buffer=16
opcache.max_accelerated_files=10000
opcache.revalidate_freq=60
opcache.fast_shutdown=1
opcache.enable_cli=0

; Security
expose_php = Off
display_errors = Off
log_errors = On
error_log = /var/log/php${phpVersion}-error.log

; Limits for WooCommerce
max_input_vars = 5000
realpath_cache_size = 4096K
realpath_cache_ttl = 600`,

      mysql: `# /etc/mysql/my.cnf or /etc/my.cnf
[mysqld]
# General
user = mysql
pid-file = /var/run/mysqld/mysqld.pid
socket = /var/run/mysqld/mysqld.sock
port = 3306
datadir = /var/lib/mysql

# Connection Settings
max_connections = ${maxConnections}
max_connect_errors = 1000000
wait_timeout = 600
interactive_timeout = 600

# Buffer Pool Settings
innodb_buffer_pool_size = ${innodbBufferPool}M
innodb_buffer_pool_instances = ${Math.min(cpuCores, Math.floor(innodbBufferPool / 1024))}
innodb_log_file_size = ${innodbLogFileSize}M
innodb_log_buffer_size = 16M
innodb_flush_log_at_trx_commit = 2
innodb_flush_method = O_DIRECT

# Performance Schema
performance_schema = ${ramGB >= 8 ? 'ON' : 'OFF'}

# Query Cache (MySQL 5.7 only, removed in 8.0)
${dbEngine === 'mysql' && !hasRedis ? `query_cache_type = 1
query_cache_size = ${queryCacheSize}M
query_cache_limit = 2M` : '# Query cache disabled or using Redis'}

# Thread Settings
thread_cache_size = ${Math.min(100, cpuCores * 10)}
table_open_cache = ${Math.min(4000, avgProductCount * 4)}
table_definition_cache = ${Math.min(2000, avgProductCount * 2)}

# InnoDB Settings
innodb_file_per_table = 1
innodb_stats_on_metadata = 0
innodb_read_io_threads = ${Math.min(64, cpuCores * 2)}
innodb_write_io_threads = ${Math.min(64, cpuCores * 2)}
innodb_io_capacity = ${storageType === 'ssd' ? '2000' : '200'}
innodb_io_capacity_max = ${storageType === 'ssd' ? '4000' : '400'}

# MyISAM Settings (for older WP tables)
key_buffer_size = 32M
myisam_sort_buffer_size = 8M

# Temp & Sort Settings
tmp_table_size = 64M
max_heap_table_size = 64M
sort_buffer_size = 2M
read_buffer_size = 2M
read_rnd_buffer_size = 4M
join_buffer_size = 2M

# Binary Logging (for replication/backup)
log_bin = /var/log/mysql/mysql-bin.log
binlog_format = ROW
expire_logs_days = 7
max_binlog_size = 100M

# Slow Query Log
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2

[mysql]
no-auto-rehash

[mysqldump]
quick
max_allowed_packet = 256M`,

      redis: hasRedis ? `# /etc/redis/redis.conf - Key settings
bind 127.0.0.1
port 6379
protected-mode yes
daemonize yes
supervised systemd
pidfile /var/run/redis/redis-server.pid

# Memory
maxmemory ${redisMaxMemory}mb
maxmemory-policy allkeys-lru
maxmemory-samples 5

# Persistence (adjust based on needs)
save 900 1
save 300 10
save 60 10000
stop-writes-on-bgsave-error yes
rdbcompression yes
rdbchecksum yes
dbfilename dump.rdb
dir /var/lib/redis

# Replication
replica-serve-stale-data yes
replica-read-only yes
repl-diskless-sync no

# Performance
tcp-backlog 511
timeout 0
tcp-keepalive 300
databases 16

# Logging
loglevel notice
logfile /var/log/redis/redis-server.log

# Slow Log
slowlog-log-slower-than 10000
slowlog-max-len 128` : 'Redis not enabled',

      sysctl: `# /etc/sysctl.conf - OS Kernel Optimization
# Network Performance
net.core.somaxconn = 65535
net.core.netdev_max_backlog = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.ipv4.tcp_fin_timeout = 15
net.ipv4.tcp_keepalive_time = 300
net.ipv4.tcp_keepalive_probes = 5
net.ipv4.tcp_keepalive_intvl = 15
net.ipv4.tcp_tw_reuse = 1
net.ipv4.ip_local_port_range = 10240 65535

# File Descriptors
fs.file-max = 2097152
fs.nr_open = 2097152

# Shared Memory (for MySQL)
kernel.shmmax = ${Math.floor(ramMB * 1024 * 1024 * 0.8)}
kernel.shmall = ${Math.floor(ramMB * 256 * 0.8)}

# Swappiness (reduce swap usage)
vm.swappiness = 10
vm.dirty_ratio = 15
vm.dirty_background_ratio = 5

# Apply with: sudo sysctl -p`,

      wpConfig: `// wp-config.php - Add these lines before "That's all, stop editing!"

// === PERFORMANCE OPTIMIZATIONS ===

// Memory Limits
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

// Database Optimization
define('WP_AUTO_UPDATE_CORE', false);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 3);
define('EMPTY_TRASH_DAYS', 7);

${hasRedis ? `// Redis Object Cache
define('WP_REDIS_HOST', '127.0.0.1');
define('WP_REDIS_PORT', 6379);
define('WP_REDIS_DATABASE', 0);
define('WP_REDIS_TIMEOUT', 1);
define('WP_REDIS_READ_TIMEOUT', 1);
define('WP_REDIS_MAXTTL', 86400);` : ''}

// Disable File Editing
define('DISALLOW_FILE_EDIT', true);

// Cron Optimization (use system cron instead)
define('DISABLE_WP_CRON', true);
// Add to system crontab: */15 * * * * wget -q -O - https://yoursite.com/wp-cron.php?doing_wp_cron >/dev/null 2>&1

// WooCommerce Specific
define('WOOCOMMERCE_UPDATE_DB_IN_BACKGROUND', false);
define('WC_ADMIN_DISABLED', false);

// Debug (disable in production)
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);`,

      recommendations: {
        plugins: [
          {
            name: 'Redis Object Cache',
            purpose: 'Object caching with Redis',
            required: hasRedis,
            url: 'https://wordpress.org/plugins/redis-cache/'
          },
          {
            name: 'WP Rocket or W3 Total Cache',
            purpose: 'Page caching and optimization',
            required: !hasVarnish,
            url: 'https://wp-rocket.me/'
          },
          {
            name: 'Imagify or ShortPixel',
            purpose: 'Image optimization',
            required: true,
            url: 'https://wordpress.org/plugins/imagify/'
          },
          {
            name: 'Query Monitor',
            purpose: 'Performance debugging (dev only)',
            required: false,
            url: 'https://wordpress.org/plugins/query-monitor/'
          },
          {
            name: 'WooCommerce Admin',
            purpose: 'Enhanced WooCommerce dashboard',
            required: true,
            url: 'Built-in'
          },
          {
            name: 'Autoptimize',
            purpose: 'CSS/JS optimization',
            required: true,
            url: 'https://wordpress.org/plugins/autoptimize/'
          },
          {
            name: 'Cloudflare',
            purpose: 'CDN and DDoS protection',
            required: expectedTraffic > 50000,
            url: 'https://www.cloudflare.com/'
          }
        ],
        monitoring: [
          'New Relic APM - Application performance monitoring',
          'Netdata - Real-time system monitoring',
          'Monit - Process monitoring and automatic restart',
          'Prometheus + Grafana - Metrics and dashboards',
          'WP-CLI - Command line management'
        ],
        maintenance: [
          'Set up automated daily database backups',
          'Configure logrotate for all logs',
          'Enable automated security updates',
          'Monitor disk space and setup alerts',
          'Regular WooCommerce database optimization',
          'Monitor PHP-FPM slow log and error log',
          'Setup MySQL slow query monitoring',
          'Implement uptime monitoring (UptimeRobot, Pingdom)',
          'Configure SSL/TLS with Let\'s Encrypt',
          'Setup fail2ban for SSH protection'
        ],
        woocommerce: [
          'Enable WooCommerce REST API caching',
          'Optimize product images (WebP format)',
          'Use transients caching for expensive queries',
          'Disable WooCommerce widgets if not needed',
          'Limit order statuses in admin',
          'Archive old orders to separate tables',
          'Optimize checkout page (remove unnecessary fields)',
          'Use lazy loading for product images',
          'Implement infinite scroll for product listings',
          'Consider splitting products into categories'
        ],
        database: [
          'Run WP-Optimize or WP-Sweep weekly',
          'Optimize database tables monthly',
          'Clean up post revisions and transients',
          'Remove orphaned post meta',
          'Delete spam comments regularly',
          'Index optimization for WooCommerce tables',
          'Consider partitioning large tables',
          `Archive orders older than 2 years (current: ~${avgOrdersPerDay * 365 * 2} orders)`
        ]
      }
    };

    setConfig(configurations);
  };

  const downloadConfig = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAllConfigs = () => {
    if (!config) return;
    
    const configs = [
      { name: 'nginx.conf', content: config.nginx },
      { name: 'woocommerce-site.conf', content: config.nginxSite },
      { name: 'php-fpm-www.conf', content: config.phpFpm },
      { name: 'php.ini', content: config.phpIni },
      { name: 'my.cnf', content: config.mysql },
      { name: 'sysctl.conf', content: config.sysctl },
      { name: 'wp-config-additions.php', content: config.wpConfig }
    ];
    
    if (formData.hasRedis) {
      configs.push({ name: 'redis.conf', content: config.redis });
    }
    
    configs.forEach(({ name, content }) => {
      downloadConfig(name, content);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Server className="w-12 h-12 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              WooCommerce Server Optimizer
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Generate optimized configurations for high-traffic WordPress WooCommerce stores
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-indigo-600" />
              Server Specifications
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CPU Cores
                </label>
                <input
                  type="number"
                  name="cpuCores"
                  value={formData.cpuCores}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="1"
                  max="128"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RAM (GB)
                </label>
                <input
                  type="number"
                  name="ramGB"
                  value={formData.ramGB}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="2"
                  max="512"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Storage Type
                </label>
                <select
                  name="storageType"
                  value={formData.storageType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="ssd">SSD</option>
                  <option value="nvme">NVMe SSD</option>
                  <option value="hdd">HDD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PHP Version
                </label>
                <select
                  name="phpVersion"
                  value={formData.phpVersion}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="8.3">PHP 8.3</option>
                  <option value="8.2">PHP 8.2</option>
                  <option value="8.1">PHP 8.1</option>
                  <option value="8.0">PHP 8.0</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Database Engine
                </label>
                <select
                  name="dbEngine"
                  value={formData.dbEngine}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="mysql">MySQL 8.0</option>
                  <option value="mariadb">MariaDB 10.6+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="w-6 h-6 text-indigo-600" />
              Site Configuration
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Daily Visitors
                </label>
                <input
                  type="number"
                  name="expectedTraffic"
                  value={formData.expectedTraffic}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="100"
                  step="1000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Average Product Count
                </label>
                <input
                  type="number"
                  name="avgProductCount"
                  value={formData.avgProductCount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="10"
                  step="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Average Orders Per Day
                </label>
                <input
                  type="number"
                  name="avgOrdersPerDay"
                  value={formData.avgOrdersPerDay}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="1"
                  step="10"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="hasRedis"
                  checked={formData.hasRedis}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Install Redis for Object Caching
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="hasVarnish"
                  checked={formData.hasVarnish}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Use Varnish Cache (Advanced)
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <button
            onClick={generateConfig}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            <Zap className="w-5 h-5" />
            Generate Optimized Configuration
          </button>
        </div>

        {config && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <Database className="w-6 h-6 text-indigo-600" />
                  Generated Configurations
                </h2>
                <button
                  onClick={downloadAllConfigs}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download All Configs
                </button>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important:</strong> Always backup your current configuration before applying these changes. 
                      Test in a staging environment first. These configurations are optimized for your specific setup 
                      but may need fine-tuning based on actual usage patterns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <ConfigSection 
                  title="NGINX Main Configuration" 
                  filename="nginx.conf"
                  content={config.nginx}
                  onDownload={() => downloadConfig('nginx.conf', config.nginx)}
                />

                <ConfigSection 
                  title="NGINX Site Configuration" 
                  filename="woocommerce-site.conf"
                  content={config.nginxSite}
                  onDownload={() => downloadConfig('woocommerce-site.conf', config.nginxSite)}
                />

                <ConfigSection 
                  title="PHP-FPM Pool Configuration" 
                  filename="php-fpm-www.conf"
                  content={config.phpFpm}
                  onDownload={() => downloadConfig('php-fpm-www.conf', config.phpFpm)}
                />

                <ConfigSection 
                  title="PHP.ini Optimizations" 
                  filename="php.ini"
                  content={config.phpIni}
                  onDownload={() => downloadConfig('php.ini', config.phpIni)}
                />

                <ConfigSection 
                  title="MySQL/MariaDB Configuration" 
                  filename="my.cnf"
                  content={config.mysql}
                  onDownload={() => downloadConfig('my.cnf', config.mysql)}
                />

                {formData.hasRedis && (
                  <ConfigSection 
                    title="Redis Configuration" 
                    filename="redis.conf"
                    content={config.redis}
                    onDownload={() => downloadConfig('redis.conf', config.redis)}
                  />
                )}

                <ConfigSection 
                  title="System Kernel Optimization (sysctl)" 
                  filename="sysctl.conf"
                  content={config.sysctl}
                  onDownload={() => downloadConfig('sysctl.conf', config.sysctl)}
                />

                <ConfigSection 
                  title="WordPress Configuration (wp-config.php)" 
                  filename="wp-config-additions.php"
                  content={config.wpConfig}
                  onDownload={() => downloadConfig('wp-config-additions.php', config.wpConfig)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Recommended Plugins</h3>
                <div className="space-y-3">
                  {config.recommendations.plugins.map((plugin, idx) => (
                    <div key={idx} className="border-l-4 border-indigo-500 pl-4 py-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{plugin.name}</h4>
                          <p className="text-sm text-gray-600">{plugin.purpose}</p>
                        </div>
                        {plugin.required && (
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Monitoring Tools</h3>
                <ul className="space-y-2">
                  {config.recommendations.monitoring.map((tool, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span className="text-gray-700">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">WooCommerce Optimizations</h3>
                <ul className="space-y-2">
                  {config.recommendations.woocommerce.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Database Maintenance</h3>
                <ul className="space-y-2">
                  {config.recommendations.database.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Maintenance Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {config.recommendations.maintenance.map((task, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded" />
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Implementation Steps</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-lg">Backup all current configuration files and database</li>
                <li className="text-lg">Set up a staging environment to test configurations</li>
                <li className="text-lg">Apply system kernel optimizations (sysctl) and reboot</li>
                <li className="text-lg">Update PHP-FPM and PHP.ini configurations, restart PHP-FPM</li>
                <li className="text-lg">Update MySQL/MariaDB configuration, restart database</li>
                <li className="text-lg">Configure NGINX and test with: <code className="bg-black bg-opacity-30 px-2 py-1 rounded">nginx -t</code></li>
                <li className="text-lg">Install and configure Redis (if enabled)</li>
                <li className="text-lg">Update wp-config.php with performance settings</li>
                <li className="text-lg">Install recommended plugins and configure caching</li>
                <li className="text-lg">Monitor performance with New Relic or similar tools</li>
                <li className="text-lg">Fine-tune based on actual traffic patterns</li>
              </ol>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Performance Testing Commands</h3>
              <div className="space-y-3 bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
                <p># Test NGINX configuration</p>
                <p>sudo nginx -t</p>
                <p className="mt-3"># Test PHP-FPM configuration</p>
                <p>sudo php-fpm{formData.phpVersion} -t</p>
                <p className="mt-3"># Check MySQL performance</p>
                <p>mysqltuner</p>
                <p className="mt-3"># Benchmark site with Apache Bench</p>
                <p>ab -n 1000 -c 10 https://yoursite.com/</p>
                <p className="mt-3"># Monitor PHP-FPM status</p>
                <p>curl http://localhost/status</p>
                <p className="mt-3"># Check Redis connectivity</p>
                <p>redis-cli ping</p>
                <p className="mt-3"># Monitor real-time MySQL queries</p>
                <p>mysqladmin -u root -p processlist -i 1</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type ConfigSectionProps = {
  title: string;
  // filename is optional (passed for clarity) but not required by the component
  filename?: string;
  content: string;
  onDownload: () => void;
};

function ConfigSection({ title, content, onDownload }: ConfigSectionProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div 
        className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDownload();
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1 px-3 rounded transition-colors duration-200 flex items-center gap-1"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          <span className="text-gray-500">
            {isExpanded ? '▼' : '▶'}
          </span>
        </div>
      </div>
      {isExpanded && (
        <div className="bg-gray-900 p-4 overflow-x-auto">
          <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">{content}</pre>
        </div>
      )}
    </div>
  );
}