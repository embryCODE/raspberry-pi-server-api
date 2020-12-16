#!/bin/zsh

HOST=pi@67.177.189.251

printf "Logging into host...\n"

ssh $HOST << EOF
  printf "\nLogged into host.\n"

  printf "\nPulling from GitHub...\n"
  cd /var/www/dev.embrycode.com/backend
  git pull

  printf "\nInstalling dependencies...\n"
  NODE_ENV=production
  npm i

  printf "Reloading server...\n"
  pm2 reload raspberry-pi-server-api

  printf "\nSuccess. Exiting..."
  exit
EOF