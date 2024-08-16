::: warning
后续使用的指令是基于以下两种系统的 9.x 版本记录
::: 

::: danger
其他系统使用时, 特别注意安装环境的版本问题, 旧版系统非常容易安装低版本应用
:::
## 基础环境
~~~sh
# 更新
sudo yum update -y
# 安装vim
sudo yum install vim wget tar -y
# 停止防火墙
systemctl stop firewalld
# 禁用防火墙
systemctl disable firewalld
~~~

## 网络代理

> 注意替换IP地址

~~~sh
echo '# 网络代理
export proxy="http://10.0.0.222:7897"
export http_proxy=$proxy
export https_proxy=$proxy
export ftp_proxy=$proxy
export no_proxy="localhost, 127.0.0.1, ::1"' >> /etc/profile
source /etc/profile
~~~

## Redis 7

~~~sh
# 安装
sudo dnf install https://rpms.remirepo.net/enterprise/remi-release-9.rpm -y
sudo dnf module enable -y redis:remi-7.2
sudo dnf install redis -y
# 配置
vim /etc/redis/redis.conf
# 找到 requirepass 你要设置的密码
# 注释掉 bind 127.0.0.1 -::1
# 找protected-mode yes 把yes修改为no

# 启动并加入开机启动
sudo systemctl start redis
sudo systemctl enable redis
~~~

## Nginx

~~~sh
# 删除旧版本
sudo dnf remove nginx -y
# 配置源
echo '[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true' > /etc/yum.repos.d/nginx.repo
# 安装启动、开机启动、状态
sudo dnf install nginx -y
systemctl enable nginx
systemctl start nginx
systemctl status nginx
~~~

## Mysql

~~~sh
# 安装、启动、开机启动、状态
sudo yum install mysql-server -y
sudo systemctl enable --now mysqld
sudo systemctl start mysqld
sudo systemctl status mysqld
# 配置
mysql_secure_installation

# 远程访问
sudo mysql -u root -p
use mysql;
update user set host = '%' where user ='root';
flush privileges;
exit;
~~~

## Docker

~~~sh
# 安装依赖
sudo dnf install -y device-mapper-persistent-data lvm2
# 配置源
sudo dnf config-manager --add-repo=https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 安装docker
sudo dnf install -y docker-ce --nobest
# 启动、开机启动
systemctl start docker
systemctl enable docker
~~~

## docker-compose安装

> 最新文件地址: https://github.com/docker/compose/releases/

~~~sh
# 下载
wget https://mirror.ghproxy.com/https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64
# 移动并重命名
mv docker-compose-linux-x86_64 /usr/local/bin/docker-compose
# 权限
sudo chmod +x /usr/local/bin/docker-compose
# 查看docker-compose版本
docker-compose -v
~~~

## onlyoffice

~~~sh
# 基于Docker安装
docker pull frost1123/office:7.3.3.40
docker run -d -p 8989:80 --name=onlyoffice --restart=always frost1123/office:7.3.3.40
~~~


## livekit

~~~sh
curl -sSL https://get.livekit.io | bash
echo '[Unit]
Description=livekit-server
After=network.target

[Service]
ExecStart=/usr/local/bin/livekit-server --dev --bind 0.0.0.0
Restart=always
User=root

[Install]
WantedBy=default.target' > /etc/systemd/system/livekit.service
systemctl daemon-reload
# 开启、开机启动
systemctl start livekit
systemctl enable livekit
~~~

## minio

~~~sh
mkdir -p /home/minio/data
wget https://dl.min.io/server/minio/release/linux-amd64/archive/minio-20231223071911.0.0-1.x86_64.rpm -O minio.rpm
sudo dnf install minio.rpm -y
# 创建默认配置文件
echo 'MINIO_OPTS="--address :9000 --console-address :9001"
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_VOLUMES="/home/minio/data"
# MINIO_SERVER_URL=https://file.yixi.top
# MINIO_BROWSER_REDIRECT_URL=https://minio.yixi.top' > /etc/default/minio
# 创建用户和用户组
sudo groupadd -r minio-user
sudo useradd -M -r -g minio-user minio-user
sudo chown minio-user:minio-user /home/minio/data
# 启动、开机启动
sudo systemctl start minio
sudo systemctl enable minio
~~~

## SDKMAN

~~~sh
sudo dnf install unzip zip -y
# 删除旧配置
rm -rf /root/.sdkman/
# 开始安装，需要翻墙
curl -s "https://get.sdkman.io" | bash
#
source "/root/.sdkman/bin/sdkman-init.sh"
sdk install java 21.0.1-graalce
sdk install java 17.0.9-graalce

# 可通过 sdk list java 查询最新版本

# 安装 openjdk 21
sdk install java 21.0.1-open

# GraalVM Community JDK
sdk install java 21.0.1-graalce
sdk install java 17.0.9-graalce
~~~

## openjdk 8

~~~sh
# 安装OpenJDK8
yum -y install java-1.8.0-openjdk java-1.8.0-openjdk-devel
# 配置环境变量
cat > /etc/profile.d/java21.sh <<EOF
export JAVA_HOME=\$(dirname \$(dirname \$(readlink \$(readlink \$(which javac)))))
export PATH=\$PATH:\$JAVA_HOME/bin
export CLASSPATH=.:\$JAVA_HOME/jre/lib:\$JAVA_HOME/lib:\$JAVA_HOME/lib/tools.jar
EOF
# 环境变量生效
source /etc/profile.d/java21.sh
# 检查环境变量
echo $JAVA_HOME
# 检查Java版本
java -version
javac -version
~~~

## openjdk 17

~~~sh
# yum 安装 open jdk 17
sudo yum install java-17-openjdk-devel -y
~~~


##  graalvm-jdk-21

~~~sh
cd /usr/local/src/
wget https://download.oracle.com/graalvm/21/latest/graalvm-jdk-21_linux-x64_bin.tar.gz
tar -xzvf graalvm-jdk-21_linux-x64_bin.tar.gz
# 注意版本变化
mv graalvm-jdk-21.0.1+12.1/ ../jdk
# 配置环境变量
cat > /etc/profile.d/java21.sh <<EOF
export JAVA_HOME=/usr/local/jdk
export PATH=\$PATH:\$JAVA_HOME/bin
export CLASSPATH=.:\$JAVA_HOME/jre/lib:\$JAVA_HOME/lib:\$JAVA_HOME/lib/tools.jar
EOF
# 环境变量生效
source /etc/profile.d/java21.sh
# 检查环境变量
echo $JAVA_HOME
# 检查Java版本
java -version
javac -version
~~~

## tdengin rpm  (版本3.0.5.0）

~~~sh
wget https://www.taosdata.com/assets-download/3.0/TDengine-server-3.0.5.0-Linux-x64.rpm
sudo rpm -ivh TDengine-server-3.0.5.0-Linux-x64.rpm
systemctl start taosd
systemctl enable taosd
systemctl status taosd
# taosAdapter(可选)
systemctl start taosadapter
systemctl enable taosadapter
~~~



##  maven

~~~sh
# 下载、解压到指定目录
cd /usr/local/src/
wget -P /usr/local/src https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz
tar -zxvf /usr/local/src/apache-maven-3.9.6-bin.tar.gz
rm -rf /usr/local/maven
mv /usr/local/src/apache-maven-3.9.6 /usr/local/maven

# 配置环境变量 # 理论上openjdk的目录都是一样的、如果是其他安装方式更换对应位置
echo 'export JAVA_HOME=/root/.sdkman/candidates/java/current
export M2_HOME=/usr/local/maven
export MAVEN_HOME=/usr/local/maven
export PATH=${M2_HOME}/bin:${PATH}' > /etc/profile.d/maven.sh
# 配置可执行权限
sudo chmod +x /etc/profile.d/maven.sh
# 加载
source /etc/profile.d/maven.sh
# 创建软链接，不然运行时依然找不到mvn
ln -s /usr/local/maven/bin/mvn /usr/bin/mvn
# 查看版本信息
mvn -version
~~~


##  nodejs、pnpm

~~~sh
yum module install nodejs:20 -y
npm install -g pnpm
~~~

