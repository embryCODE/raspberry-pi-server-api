#!/bin/zsh

HOST=pi@67.177.189.251

ssh $HOST << EOF
  echo "\nLogged into host. Navigating to backend directory..."
  cd /var/www/dev.embrycode.com/backend

  echo "\nPulling from GitHub..."
  git pull

  echo "\nInstalling dependencies..."
  NODE_ENV=production
  npm i

  echo "\nSuccess. Exiting..."
  exit
EOF