#!/bin/sh

# update and install packages
apt -y update
apt -y install nodejs nginx

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
