#!/bin/zsh

HOST=raspi

printf "Logging into host...\n"

ssh $HOST << EOF
  printf "\nLogged into host.\n"

  printf "\nPulling from GitHub...\n"
  cd /home/pi/code/raspberry-pi-server-api
  git pull

  printf "\nInstalling dependencies...\n"
  NODE_ENV=production
  yarn

  printf "Reloading server...\n"
  pm2 reload raspberry-pi-server-api

  printf "\nSuccess. Exiting..."
  exit
EOF