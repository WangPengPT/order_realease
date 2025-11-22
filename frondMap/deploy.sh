#!/bin/bash

# 当前脚本所在目录
SCRIPT_DIR=$(cd "$(dirname "$0")"; pwd)

# dist 的路径（就在脚本目录下）
DIST_DIR="$SCRIPT_DIR/dist"

# Nginx 静态文件目录
NGINX_HTML="/usr/share/nginx/html"

echo "开始部署 Vite React 项目..."
echo "构建目录: $DIST_DIR"
echo "目标目录: $NGINX_HTML"

# 检查 dist 是否存在
if [ ! -d "$DIST_DIR" ]; then
    echo "❌ dist 目录不存在，请先运行：npm run build"
    exit 1
fi

# 删除 Nginx 旧文件
echo "清理旧文件..."
sudo rm -rf $NGINX_HTML/*

# 复制新文件
echo "复制新文件到 Nginx..."
sudo cp -r $DIST_DIR/* $NGINX_HTML/

# 重启 Nginx
echo "重启 Nginx..."
sudo systemctl restart nginx

echo "✅ 部署完成！"