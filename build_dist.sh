#!/bin/bash
# package, update used git
# server will auto update.

rm -rf dist

script_dir="$(cd "$(dirname "$0")" && pwd)"
echo "$script_dir"

SRC_PATH="$script_dir/../orderDemo"
DST_PATH="$script_dir/dist"

cd "$SRC_PATH"
cp -R ./server "$DST_PATH"

mkdir -p "$DST_PATH/public"

cd ..
cd ordersystemmanager
npm install
npm run build
cp -R ./dist/. "$DST_PATH/public"
mv "$DST_PATH/public/index.html" "$DST_PATH/public/manager.html"

cd ..
cd ordersystemclient
npm install
npm run build
cp -R ./dist/. "$DST_PATH/public"

cd "$DST_PATH"
