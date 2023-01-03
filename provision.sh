#!/bin/sh

# Update and install packages
apt-get -y update || exit 1
apt-get -y install nginx || exit 1

# Install NVM (Node.js version manager)
curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh" | bash

# Export NVM namespace
export NVM_DIR="$HOME/.nvm"

# This loads nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# This loads nvm bash_completion
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Switch Node.js version
nvm install v16
nvm use v16

# Move to /vagrant
cd /vagrant

# Install npm dependencies
npm install || exit 1

# Build the project
npm run build || exit 1

# Move nginx config and build
cp ./nginx/default.conf /etc/nginx/conf.d/default.conf
cp -r ./build /usr/share/nginx/lab-1

# Start nginx service
service nginx start
