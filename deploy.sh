#!/bin/zsh

HOST=pi@67.177.189.251

ssh $HOST << EOF
  printf "\nLogged into host. Navigating to backend directory..."
  cd /var/www/dev.embrycode.com/backend

  printf "\n\nPulling from GitHub...\n"
  git pull

  printf "\nInstalling dependencies...\n"
  NODE_ENV=production
  npm i

  printf "\nStarting server...\n"
  pm2 start npm --name "raspberry-pi-server-api" -- start

  printf "\nSuccess. Exiting..."
  exit
EOF