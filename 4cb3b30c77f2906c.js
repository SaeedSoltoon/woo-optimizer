(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,79474,(e,s,i)=>{"use strict";var a=e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;i.c=function(e){return a.H.useMemoCache(e)}},932,(e,s,i)=>{"use strict";s.exports=e.r(79474)},31713,e=>{"use strict";var s=e.i(43476),i=e.i(932),a=e.i(71645);let n=e=>{let s=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,i)=>i?i.toUpperCase():s.toLowerCase());return s.charAt(0).toUpperCase()+s.slice(1)},t=(...e)=>e.filter((e,s,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===s).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let r=(0,a.forwardRef)(({color:e="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:r="",children:l,iconNode:c,...d},m)=>(0,a.createElement)("svg",{ref:m,...o,width:s,height:s,stroke:e,strokeWidth:n?24*Number(i)/Number(s):i,className:t("lucide",r),...!l&&!(e=>{for(let s in e)if(s.startsWith("aria-")||"role"===s||"title"===s)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,s])=>(0,a.createElement)(e,s)),...Array.isArray(l)?l:[l]])),l=(e,s)=>{let i=(0,a.forwardRef)(({className:i,...o},l)=>(0,a.createElement)(r,{ref:l,iconNode:s,className:t(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...o}));return i.displayName=n(e),i},c=l("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]),d=l("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),m=l("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),p=l("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),h=l("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]),g=l("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);function u(){let e,n,t,o,r,l,u,j,N,S,M,C,P,k,R,O,z,D,E,I,A,T,$,q,W,L,U,B,G,V,F,H,Q,X,K,Y,Z,J,ee,es,ei,ea,en,et,eo,er=(0,i.c)(80);er[0]===Symbol.for("react.memo_cache_sentinel")?(e={cpuCores:4,ramGB:8,storageType:"ssd",expectedTraffic:1e4,phpVersion:"8.2",dbEngine:"mysql",hasRedis:!0,hasVarnish:!1,avgProductCount:1e3,avgOrdersPerDay:100},er[0]=e):e=er[0];let[el,ec]=(0,a.useState)(e),[ed,em]=(0,a.useState)(null);er[1]===Symbol.for("react.memo_cache_sentinel")?(n=e=>{let s,i=e.target,{name:a,value:n,type:t,checked:o}=i;if("checkbox"===t)s=!!o;else if("number"===t){let e=Number(i.value);s=Number.isNaN(e)?0:e}else s=n;ec(e=>({...e,[a]:s}))},er[1]=n):n=er[1];let ep=n;er[2]!==el?(t=()=>{let{cpuCores:e,ramGB:s,storageType:i,expectedTraffic:a,phpVersion:n,dbEngine:t,hasRedis:o,hasVarnish:r,avgProductCount:l,avgOrdersPerDay:c}=el,d=1024*s,m=Math.max(10,Math.min(3*e,Math.floor(d/128))),p=Math.floor(1.5*m),h=Math.ceil(m/4),g=Math.ceil(m/5),u=Math.ceil(m/2),f=Math.floor(.5*d),x=Math.min(512,Math.floor(f/4)),_=Math.max(151,m+50),y=o?0:Math.min(256,Math.floor(.05*d)),b=o?Math.floor(.15*d):0;em({nginx:`# /etc/nginx/nginx.conf
user www-data;
worker_processes ${e};
worker_rlimit_nofile 65535;
pid /run/nginx.pid;

events {
    worker_connections ${a>5e4?4096:2048};
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
    ${!r?'fastcgi_cache_path /var/cache/nginx levels=1:2 keys_zone=WORDPRESS:100m \n                     inactive=60m max_size=1g;\n    fastcgi_cache_key "$scheme$request_method$host$request_uri";\n    fastcgi_cache_use_stale error timeout invalid_header http_500;\n    fastcgi_ignore_headers Cache-Control Expires Set-Cookie;':"# Using Varnish - FastCGI cache disabled"}
    
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # Logging
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;
    
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}`,nginxSite:`# /etc/nginx/sites-available/woocommerce
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
        fastcgi_pass unix:/var/run/php/php${n}-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        
        # FastCGI Cache (if not using Varnish)
        ${!r?"fastcgi_cache WORDPRESS;\n        fastcgi_cache_valid 200 60m;\n        fastcgi_cache_bypass $skip_cache;\n        fastcgi_no_cache $skip_cache;\n        add_header X-FastCGI-Cache $upstream_cache_status;":"# Varnish handles caching"}
        
        # Increase timeouts for WooCommerce
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 128k;
        fastcgi_buffers 256 16k;
        fastcgi_busy_buffers_size 256k;
        fastcgi_temp_file_write_size 256k;
    }
}`,phpFpm:`; /etc/php/${n}/fpm/pool.d/www.conf
[www]
user = www-data
group = www-data
listen = /var/run/php/php${n}-fpm.sock
listen.owner = www-data
listen.group = www-data
listen.mode = 0660

; Process Management
pm = dynamic
pm.max_children = ${p}
pm.start_servers = ${h}
pm.min_spare_servers = ${g}
pm.max_spare_servers = ${u}
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
slowlog = /var/log/php${n}-fpm-slow.log
request_slowlog_timeout = 5s

; Status
pm.status_path = /status
ping.path = /ping`,phpIni:`; /etc/php/${n}/fpm/php.ini - Key optimizations
; Memory
memory_limit = 256M
max_execution_time = 300
max_input_time = 300

; File Uploads
upload_max_filesize = 256M
post_max_size = 256M
max_file_uploads = 20

; Session
session.save_handler = ${o?"redis":"files"}
${o?'session.save_path = "tcp://127.0.0.1:6379?weight=1&timeout=2.5&database=0"':"session.save_path = /var/lib/php/sessions"}
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
error_log = /var/log/php${n}-error.log

; Limits for WooCommerce
max_input_vars = 5000
realpath_cache_size = 4096K
realpath_cache_ttl = 600`,mysql:`# /etc/mysql/my.cnf or /etc/my.cnf
[mysqld]
# General
user = mysql
pid-file = /var/run/mysqld/mysqld.pid
socket = /var/run/mysqld/mysqld.sock
port = 3306
datadir = /var/lib/mysql

# Connection Settings
max_connections = ${_}
max_connect_errors = 1000000
wait_timeout = 600
interactive_timeout = 600

# Buffer Pool Settings
innodb_buffer_pool_size = ${f}M
innodb_buffer_pool_instances = ${Math.min(e,Math.floor(f/1024))}
innodb_log_file_size = ${x}M
innodb_log_buffer_size = 16M
innodb_flush_log_at_trx_commit = 2
innodb_flush_method = O_DIRECT

# Performance Schema
performance_schema = ${s>=8?"ON":"OFF"}

# Query Cache (MySQL 5.7 only, removed in 8.0)
${"mysql"===t&&!o?`query_cache_type = 1
query_cache_size = ${y}M
query_cache_limit = 2M`:"# Query cache disabled or using Redis"}

# Thread Settings
thread_cache_size = ${Math.min(100,10*e)}
table_open_cache = ${Math.min(4e3,4*l)}
table_definition_cache = ${Math.min(2e3,2*l)}

# InnoDB Settings
innodb_file_per_table = 1
innodb_stats_on_metadata = 0
innodb_read_io_threads = ${Math.min(64,2*e)}
innodb_write_io_threads = ${Math.min(64,2*e)}
innodb_io_capacity = ${"ssd"===i?"2000":"200"}
innodb_io_capacity_max = ${"ssd"===i?"4000":"400"}

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
max_allowed_packet = 256M`,redis:o?`# /etc/redis/redis.conf - Key settings
bind 127.0.0.1
port 6379
protected-mode yes
daemonize yes
supervised systemd
pidfile /var/run/redis/redis-server.pid

# Memory
maxmemory ${b}mb
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
slowlog-max-len 128`:"Redis not enabled",sysctl:`# /etc/sysctl.conf - OS Kernel Optimization
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
kernel.shmmax = ${Math.floor(1024*d*819.2)}
kernel.shmall = ${Math.floor(256*d*.8)}

# Swappiness (reduce swap usage)
vm.swappiness = 10
vm.dirty_ratio = 15
vm.dirty_background_ratio = 5

# Apply with: sudo sysctl -p`,wpConfig:`// wp-config.php - Add these lines before "That's all, stop editing!"

// === PERFORMANCE OPTIMIZATIONS ===

// Memory Limits
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

// Database Optimization
define('WP_AUTO_UPDATE_CORE', false);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 3);
define('EMPTY_TRASH_DAYS', 7);

${o?"// Redis Object Cache\ndefine('WP_REDIS_HOST', '127.0.0.1');\ndefine('WP_REDIS_PORT', 6379);\ndefine('WP_REDIS_DATABASE', 0);\ndefine('WP_REDIS_TIMEOUT', 1);\ndefine('WP_REDIS_READ_TIMEOUT', 1);\ndefine('WP_REDIS_MAXTTL', 86400);":""}

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
define('WP_DEBUG_DISPLAY', false);`,recommendations:{plugins:[{name:"Redis Object Cache",purpose:"Object caching with Redis",required:o,url:"https://wordpress.org/plugins/redis-cache/"},{name:"WP Rocket or W3 Total Cache",purpose:"Page caching and optimization",required:!r,url:"https://wp-rocket.me/"},{name:"Imagify or ShortPixel",purpose:"Image optimization",required:!0,url:"https://wordpress.org/plugins/imagify/"},{name:"Query Monitor",purpose:"Performance debugging (dev only)",required:!1,url:"https://wordpress.org/plugins/query-monitor/"},{name:"WooCommerce Admin",purpose:"Enhanced WooCommerce dashboard",required:!0,url:"Built-in"},{name:"Autoptimize",purpose:"CSS/JS optimization",required:!0,url:"https://wordpress.org/plugins/autoptimize/"},{name:"Cloudflare",purpose:"CDN and DDoS protection",required:a>5e4,url:"https://www.cloudflare.com/"}],monitoring:["New Relic APM - Application performance monitoring","Netdata - Real-time system monitoring","Monit - Process monitoring and automatic restart","Prometheus + Grafana - Metrics and dashboards","WP-CLI - Command line management"],maintenance:["Set up automated daily database backups","Configure logrotate for all logs","Enable automated security updates","Monitor disk space and setup alerts","Regular WooCommerce database optimization","Monitor PHP-FPM slow log and error log","Setup MySQL slow query monitoring","Implement uptime monitoring (UptimeRobot, Pingdom)","Configure SSL/TLS with Let's Encrypt","Setup fail2ban for SSH protection"],woocommerce:["Enable WooCommerce REST API caching","Optimize product images (WebP format)","Use transients caching for expensive queries","Disable WooCommerce widgets if not needed","Limit order statuses in admin","Archive old orders to separate tables","Optimize checkout page (remove unnecessary fields)","Use lazy loading for product images","Implement infinite scroll for product listings","Consider splitting products into categories"],database:["Run WP-Optimize or WP-Sweep weekly","Optimize database tables monthly","Clean up post revisions and transients","Remove orphaned post meta","Delete spam comments regularly","Index optimization for WooCommerce tables","Consider partitioning large tables",`Archive orders older than 2 years (current: ~${365*c*2} orders)`]}})},er[2]=el,er[3]=t):t=er[3];let eh=t,eg=w;er[4]!==ed||er[5]!==el.hasRedis?(o=()=>{if(!ed)return;let e=[{name:"nginx.conf",content:ed.nginx},{name:"woocommerce-site.conf",content:ed.nginxSite},{name:"php-fpm-www.conf",content:ed.phpFpm},{name:"php.ini",content:ed.phpIni},{name:"my.cnf",content:ed.mysql},{name:"sysctl.conf",content:ed.sysctl},{name:"wp-config-additions.php",content:ed.wpConfig}];el.hasRedis&&e.push({name:"redis.conf",content:ed.redis}),e.forEach(e=>{let{name:s,content:i}=e;eg(s,i)})},er[4]=ed,er[5]=el.hasRedis,er[6]=o):o=er[6];let eu=o;return er[7]===Symbol.for("react.memo_cache_sentinel")?(r=(0,s.jsxs)("div",{className:"text-center mb-8",children:[(0,s.jsxs)("div",{className:"flex items-center justify-center gap-3 mb-4",children:[(0,s.jsx)(c,{className:"w-12 h-12 text-indigo-600"}),(0,s.jsx)("h1",{className:"text-4xl font-bold text-gray-900",children:"WooCommerce Server Optimizer"})]}),(0,s.jsx)("p",{className:"text-gray-600 text-lg",children:"Generate optimized configurations for high-traffic WordPress WooCommerce stores"})]}),er[7]=r):r=er[7],er[8]===Symbol.for("react.memo_cache_sentinel")?(l=(0,s.jsxs)("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[(0,s.jsx)(c,{className:"w-6 h-6 text-indigo-600"}),"Server Specifications"]}),er[8]=l):l=er[8],er[9]===Symbol.for("react.memo_cache_sentinel")?(u=(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"CPU Cores"}),er[9]=u):u=er[9],er[10]!==el.cpuCores?(j=(0,s.jsxs)("div",{children:[u,(0,s.jsx)("input",{type:"number",name:"cpuCores",value:el.cpuCores,onChange:ep,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",min:"1",max:"128"})]}),er[10]=el.cpuCores,er[11]=j):j=er[11],er[12]===Symbol.for("react.memo_cache_sentinel")?(N=(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"RAM (GB)"}),er[12]=N):N=er[12],er[13]!==el.ramGB?(S=(0,s.jsxs)("div",{children:[N,(0,s.jsx)("input",{type:"number",name:"ramGB",value:el.ramGB,onChange:ep,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",min:"2",max:"512"})]}),er[13]=el.ramGB,er[14]=S):S=er[14],er[15]===Symbol.for("react.memo_cache_sentinel")?(M=(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Storage Type"}),er[15]=M):M=er[15],er[16]===Symbol.for("react.memo_cache_sentinel")?(C=(0,s.jsx)("option",{value:"ssd",children:"SSD"}),P=(0,s.jsx)("option",{value:"nvme",children:"NVMe SSD"}),k=(0,s.jsx)("option",{value:"hdd",children:"HDD"}),er[16]=C,er[17]=P,er[18]=k):(C=er[16],P=er[17],k=er[18]),er[19]!==el.storageType?(R=(0,s.jsxs)("div",{children:[M,(0,s.jsxs)("select",{name:"storageType",value:el.storageType,onChange:ep,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[C,P,k]})]}),er[19]=el.storageType,er[20]=R):R=er[20],er[21]===Symbol.for("react.memo_cache_sentinel")?(O=(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"PHP Version"}),er[21]=O):O=er[21],er[22]===Symbol.for("react.memo_cache_sentinel")?(z=(0,s.jsx)("option",{value:"8.3",children:"PHP 8.3"}),D=(0,s.jsx)("option",{value:"8.2",children:"PHP 8.2"}),E=(0,s.jsx)("option",{value:"8.1",children:"PHP 8.1"}),I=(0,s.jsx)("option",{value:"8.0",children:"PHP 8.0"}),er[22]=z,er[23]=D,er[24]=E,er[25]=I):(z=er[22],D=er[23],E=er[24],I=er[25]),er[26]!==el.phpVersion?(A=(0,s.jsxs)("div",{children:[O,(0,s.jsxs)("select",{name:"phpVersion",value:el.phpVersion,onChange:ep,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[z,D,E,I]})]}),er[26]=el.phpVersion,er[27]=A):A=er[27],er[28]===Symbol.for("react.memo_cache_sentinel")?(T=(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Database Engine"}),er[28]=T):T=er[28],er[29]===Symbol.for("react.memo_cache_sentinel")?($=(0,s.jsx)("option",{value:"mysql",children:"MySQL 8.0"}),q=(0,s.jsx)("option",{value:"mariadb",children:"MariaDB 10.6+"}),er[29]=$,er[30]=q):($=er[29],q=er[30]),er[31]!==el.dbEngine?(W=(0,s.jsxs)("div",{children:[T,(0,s.jsxs)("select",{name:"dbEngine",value:el.dbEngine,onChange:ep,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[$,q]})]}),er[31]=el.dbEngine,er[32]=W):W=er[32],er[33]!==R||er[34]!==A||er[35]!==W||er[36]!==j||er[37]!==S?(L=(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[l,(0,s.jsxs)("div",{className:"space-y-4",children:[j,S,R,A,W]})]}),er[33]=R,er[34]=A,er[35]=W,er[36]=j,er[37]=S,er[38]=L):L=er[38],er[39]===Symbol.for("react.memo_cache_sentinel")?(U=(0,s.jsxs)("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[(0,s.jsx)(p,{className:"w-6 h-6 text-indigo-600"}),"Site Configuration"]}),er[39]=U):U=er[39],er[40]===Symbol.for("react.memo_cache_sentinel")?(B=(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Expected Daily Visitors"}),er[40]=B):B=er[40],er[41]!==el.expectedTraffic?(G=(0,s.jsxs)("div",{children:[B,(0,s.jsx)("input",{type:"number",name:"expectedTraffic",value:el.expectedTraffic,onChange:ep,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",min:"100",step:"1000"})]}),er[41]=el.expectedTraffic,er[42]=G):G=er[42],er[43]===Symbol.for("react.memo_cache_sentinel")?(V=(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Average Product Count"}),er[43]=V):V=er[43],er[44]!==el.avgProductCount?(F=(0,s.jsxs)("div",{children:[V,(0,s.jsx)("input",{type:"number",name:"avgProductCount",value:el.avgProductCount,onChange:ep,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",min:"10",step:"100"})]}),er[44]=el.avgProductCount,er[45]=F):F=er[45],er[46]===Symbol.for("react.memo_cache_sentinel")?(H=(0,s.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Average Orders Per Day"}),er[46]=H):H=er[46],er[47]!==el.avgOrdersPerDay?(Q=(0,s.jsxs)("div",{children:[H,(0,s.jsx)("input",{type:"number",name:"avgOrdersPerDay",value:el.avgOrdersPerDay,onChange:ep,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",min:"1",step:"10"})]}),er[47]=el.avgOrdersPerDay,er[48]=Q):Q=er[48],er[49]!==el.hasRedis?(X=(0,s.jsx)("input",{type:"checkbox",name:"hasRedis",checked:el.hasRedis,onChange:ep,className:"w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"}),er[49]=el.hasRedis,er[50]=X):X=er[50],er[51]===Symbol.for("react.memo_cache_sentinel")?(K=(0,s.jsx)("label",{className:"ml-2 block text-sm text-gray-700",children:"Install Redis for Object Caching"}),er[51]=K):K=er[51],er[52]!==X?(Y=(0,s.jsxs)("div",{className:"flex items-center",children:[X,K]}),er[52]=X,er[53]=Y):Y=er[53],er[54]!==el.hasVarnish?(Z=(0,s.jsx)("input",{type:"checkbox",name:"hasVarnish",checked:el.hasVarnish,onChange:ep,className:"w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"}),er[54]=el.hasVarnish,er[55]=Z):Z=er[55],er[56]===Symbol.for("react.memo_cache_sentinel")?(J=(0,s.jsx)("label",{className:"ml-2 block text-sm text-gray-700",children:"Use Varnish Cache (Advanced)"}),er[56]=J):J=er[56],er[57]!==Z?(ee=(0,s.jsxs)("div",{className:"flex items-center",children:[Z,J]}),er[57]=Z,er[58]=ee):ee=er[58],er[59]!==G||er[60]!==F||er[61]!==Q||er[62]!==Y||er[63]!==ee?(es=(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[U,(0,s.jsxs)("div",{className:"space-y-4",children:[G,F,Q,Y,ee]})]}),er[59]=G,er[60]=F,er[61]=Q,er[62]=Y,er[63]=ee,er[64]=es):es=er[64],er[65]!==L||er[66]!==es?(ei=(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[L,es]}),er[65]=L,er[66]=es,er[67]=ei):ei=er[67],er[68]===Symbol.for("react.memo_cache_sentinel")?(ea=(0,s.jsx)(m,{className:"w-5 h-5"}),er[68]=ea):ea=er[68],er[69]!==eh?(en=(0,s.jsx)("div",{className:"text-center mb-8",children:(0,s.jsxs)("button",{onClick:eh,className:"bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2 mx-auto",children:[ea,"Generate Optimized Configuration"]})}),er[69]=eh,er[70]=en):en=er[70],er[71]!==ed||er[72]!==eu||er[73]!==el.hasRedis||er[74]!==el.phpVersion?(et=ed&&(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsxs)("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:[(0,s.jsx)(d,{className:"w-6 h-6 text-indigo-600"}),"Generated Configurations"]}),(0,s.jsxs)("button",{onClick:eu,className:"bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200 flex items-center gap-2",children:[(0,s.jsx)(h,{className:"w-5 h-5"}),"Download All Configs"]})]}),(0,s.jsx)("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6",children:(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(g,{className:"w-5 h-5 text-yellow-400 mt-0.5"}),(0,s.jsx)("div",{className:"ml-3",children:(0,s.jsxs)("p",{className:"text-sm text-yellow-700",children:[(0,s.jsx)("strong",{children:"Important:"})," Always backup your current configuration before applying these changes. Test in a staging environment first. These configurations are optimized for your specific setup but may need fine-tuning based on actual usage patterns."]})})]})}),(0,s.jsxs)("div",{className:"grid gap-4",children:[(0,s.jsx)(v,{title:"NGINX Main Configuration",filename:"nginx.conf",content:ed.nginx,onDownload:()=>eg("nginx.conf",ed.nginx)}),(0,s.jsx)(v,{title:"NGINX Site Configuration",filename:"woocommerce-site.conf",content:ed.nginxSite,onDownload:()=>eg("woocommerce-site.conf",ed.nginxSite)}),(0,s.jsx)(v,{title:"PHP-FPM Pool Configuration",filename:"php-fpm-www.conf",content:ed.phpFpm,onDownload:()=>eg("php-fpm-www.conf",ed.phpFpm)}),(0,s.jsx)(v,{title:"PHP.ini Optimizations",filename:"php.ini",content:ed.phpIni,onDownload:()=>eg("php.ini",ed.phpIni)}),(0,s.jsx)(v,{title:"MySQL/MariaDB Configuration",filename:"my.cnf",content:ed.mysql,onDownload:()=>eg("my.cnf",ed.mysql)}),el.hasRedis&&(0,s.jsx)(v,{title:"Redis Configuration",filename:"redis.conf",content:ed.redis,onDownload:()=>eg("redis.conf",ed.redis)}),(0,s.jsx)(v,{title:"System Kernel Optimization (sysctl)",filename:"sysctl.conf",content:ed.sysctl,onDownload:()=>eg("sysctl.conf",ed.sysctl)}),(0,s.jsx)(v,{title:"WordPress Configuration (wp-config.php)",filename:"wp-config-additions.php",content:ed.wpConfig,onDownload:()=>eg("wp-config-additions.php",ed.wpConfig)})]})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-4 text-indigo-600",children:"Recommended Plugins"}),(0,s.jsx)("div",{className:"space-y-3",children:ed.recommendations.plugins.map(b)})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-4 text-indigo-600",children:"Monitoring Tools"}),(0,s.jsx)("ul",{className:"space-y-2",children:ed.recommendations.monitoring.map(y)})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-4 text-indigo-600",children:"WooCommerce Optimizations"}),(0,s.jsx)("ul",{className:"space-y-2",children:ed.recommendations.woocommerce.map(_)})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-4 text-indigo-600",children:"Database Maintenance"}),(0,s.jsx)("ul",{className:"space-y-2",children:ed.recommendations.database.map(x)})]})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-4 text-indigo-600",children:"Maintenance Checklist"}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 gap-4",children:ed.recommendations.maintenance.map(f)})]}),(0,s.jsxs)("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-6 text-white",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold mb-4",children:"Implementation Steps"}),(0,s.jsxs)("ol",{className:"space-y-3 list-decimal list-inside",children:[(0,s.jsx)("li",{className:"text-lg",children:"Backup all current configuration files and database"}),(0,s.jsx)("li",{className:"text-lg",children:"Set up a staging environment to test configurations"}),(0,s.jsx)("li",{className:"text-lg",children:"Apply system kernel optimizations (sysctl) and reboot"}),(0,s.jsx)("li",{className:"text-lg",children:"Update PHP-FPM and PHP.ini configurations, restart PHP-FPM"}),(0,s.jsx)("li",{className:"text-lg",children:"Update MySQL/MariaDB configuration, restart database"}),(0,s.jsxs)("li",{className:"text-lg",children:["Configure NGINX and test with: ",(0,s.jsx)("code",{className:"bg-black bg-opacity-30 px-2 py-1 rounded",children:"nginx -t"})]}),(0,s.jsx)("li",{className:"text-lg",children:"Install and configure Redis (if enabled)"}),(0,s.jsx)("li",{className:"text-lg",children:"Update wp-config.php with performance settings"}),(0,s.jsx)("li",{className:"text-lg",children:"Install recommended plugins and configure caching"}),(0,s.jsx)("li",{className:"text-lg",children:"Monitor performance with New Relic or similar tools"}),(0,s.jsx)("li",{className:"text-lg",children:"Fine-tune based on actual traffic patterns"})]})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-4 text-red-600",children:"Performance Testing Commands"}),(0,s.jsxs)("div",{className:"space-y-3 bg-gray-900 text-green-400 p-4 rounded font-mono text-sm",children:[(0,s.jsx)("p",{children:"# Test NGINX configuration"}),(0,s.jsx)("p",{children:"sudo nginx -t"}),(0,s.jsx)("p",{className:"mt-3",children:"# Test PHP-FPM configuration"}),(0,s.jsxs)("p",{children:["sudo php-fpm",el.phpVersion," -t"]}),(0,s.jsx)("p",{className:"mt-3",children:"# Check MySQL performance"}),(0,s.jsx)("p",{children:"mysqltuner"}),(0,s.jsx)("p",{className:"mt-3",children:"# Benchmark site with Apache Bench"}),(0,s.jsx)("p",{children:"ab -n 1000 -c 10 https://yoursite.com/"}),(0,s.jsx)("p",{className:"mt-3",children:"# Monitor PHP-FPM status"}),(0,s.jsx)("p",{children:"curl http://localhost/status"}),(0,s.jsx)("p",{className:"mt-3",children:"# Check Redis connectivity"}),(0,s.jsx)("p",{children:"redis-cli ping"}),(0,s.jsx)("p",{className:"mt-3",children:"# Monitor real-time MySQL queries"}),(0,s.jsx)("p",{children:"mysqladmin -u root -p processlist -i 1"})]})]})]}),er[71]=ed,er[72]=eu,er[73]=el.hasRedis,er[74]=el.phpVersion,er[75]=et):et=er[75],er[76]!==ei||er[77]!==en||er[78]!==et?(eo=(0,s.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto",children:[r,ei,en,et]})}),er[76]=ei,er[77]=en,er[78]=et,er[79]=eo):eo=er[79],eo}function f(e,i){return(0,s.jsxs)("div",{className:"flex items-start gap-3 p-3 bg-gray-50 rounded",children:[(0,s.jsx)("input",{type:"checkbox",className:"mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded"}),(0,s.jsx)("span",{className:"text-gray-700",children:e})]},i)}function x(e,i){return(0,s.jsxs)("li",{className:"flex items-start gap-2",children:[(0,s.jsx)("span",{className:"text-indigo-600 mt-1",children:"•"}),(0,s.jsx)("span",{className:"text-gray-700",children:e})]},i)}function _(e,i){return(0,s.jsxs)("li",{className:"flex items-start gap-2",children:[(0,s.jsx)("span",{className:"text-indigo-600 mt-1",children:"•"}),(0,s.jsx)("span",{className:"text-gray-700",children:e})]},i)}function y(e,i){return(0,s.jsxs)("li",{className:"flex items-start gap-2",children:[(0,s.jsx)("span",{className:"text-indigo-600 mt-1",children:"•"}),(0,s.jsx)("span",{className:"text-gray-700",children:e})]},i)}function b(e,i){return(0,s.jsx)("div",{className:"border-l-4 border-indigo-500 pl-4 py-2",children:(0,s.jsxs)("div",{className:"flex items-start justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"font-semibold text-gray-900",children:e.name}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:e.purpose})]}),e.required&&(0,s.jsx)("span",{className:"bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded",children:"Required"})]})},i)}function w(e,s){let i=new Blob([s],{type:"text/plain"}),a=URL.createObjectURL(i),n=document.createElement("a");n.href=a,n.download=e,n.click(),URL.revokeObjectURL(a)}function v(e){let n,t,o,r,l,c,d,m,p,g,u=(0,i.c)(24),{title:f,content:x,onDownload:_}=e,[y,b]=(0,a.useState)(!1);u[0]!==y?(n=()=>b(!y),u[0]=y,u[1]=n):n=u[1],u[2]!==f?(t=(0,s.jsx)("h3",{className:"font-semibold text-gray-900",children:f}),u[2]=f,u[3]=t):t=u[3],u[4]!==_?(o=e=>{e.stopPropagation(),_()},u[4]=_,u[5]=o):o=u[5],u[6]===Symbol.for("react.memo_cache_sentinel")?(r=(0,s.jsx)(h,{className:"w-4 h-4"}),u[6]=r):r=u[6],u[7]!==o?(l=(0,s.jsxs)("button",{onClick:o,className:"bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1 px-3 rounded transition-colors duration-200 flex items-center gap-1",children:[r,"Download"]}),u[7]=o,u[8]=l):l=u[8];let w=y?"▼":"▶";return u[9]!==w?(c=(0,s.jsx)("span",{className:"text-gray-500",children:w}),u[9]=w,u[10]=c):c=u[10],u[11]!==l||u[12]!==c?(d=(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[l,c]}),u[11]=l,u[12]=c,u[13]=d):d=u[13],u[14]!==n||u[15]!==t||u[16]!==d?(m=(0,s.jsxs)("div",{className:"bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100",onClick:n,children:[t,d]}),u[14]=n,u[15]=t,u[16]=d,u[17]=m):m=u[17],u[18]!==x||u[19]!==y?(p=y&&(0,s.jsx)("div",{className:"bg-gray-900 p-4 overflow-x-auto",children:(0,s.jsx)("pre",{className:"text-green-400 text-sm font-mono whitespace-pre-wrap",children:x})}),u[18]=x,u[19]=y,u[20]=p):p=u[20],u[21]!==p||u[22]!==m?(g=(0,s.jsxs)("div",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[m,p]}),u[21]=p,u[22]=m,u[23]=g):g=u[23],g}e.s(["default",()=>u],31713)}]);
