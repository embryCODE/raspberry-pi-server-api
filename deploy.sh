#!/bin/zsh

HOST=pi@67.177.189.251

ssh $HOST << EOF
  cd /var/www/dev.embrycode.com/backend
  touch deleteMe
  exit
EOF