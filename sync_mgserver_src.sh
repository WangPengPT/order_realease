#!/bin/bash

SRC="/Users/sanxiongwang/Documents/GitHub/orderDemo/mgServer/src"
DEST="/Users/sanxiongwang/Documents/GitHub/order_realease/main/src"

if [ ! -d "$SRC" ]; then
  echo "Error: source directory not found: $SRC"
  exit 1
fi

cp -r "$SRC/." "$DEST/"
echo "Done: copied $SRC -> $DEST"
