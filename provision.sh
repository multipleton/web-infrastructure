#!/bin/sh

# Update and install packages
apt-get -y update
apt-get -y install nginx

# install NVM (Node.js version manager)
curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh" | bash

# export NVM namespace
export NVM_DIR="$HOME/.nvm"

# this loads nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# this loads nvm bash_completion
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# switch Node.js version
nvm install v16
nvm use v16

# install npm dependencies and build the client
npm install --prefix client
npm run build --prefix client

# move nginx config and client build
cp ./nginx/default.conf ./etc/nginx/conf.d/default.conf
cp ./client/build ./usr/share/nginx/client
# TODO: copy server

# start nginx service
service nginx start

# TODO: start server
