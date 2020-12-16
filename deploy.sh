#!/bin/zsh

HOST=pi@67.177.189.251

ssh $HOST << EOF
  echo "Logged into host. Navigating to backend directory..."
  cd /var/www/dev.embrycode.com/backend

  echo "Pulling from GitHub..."
  git pull

  echo "Installing dependencies..."
  npm i

  echo "Success. Exiting..."
  exit
EOF