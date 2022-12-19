#!/bin/sh

# update and install packages
apt -y update
apt -y install nodejs nginx

# install npm dependencies and build the project
npm install
npm run build

# move nginx config and build
cp ./nginx/default.conf ./etc/nginx/conf.d/default.conf
cp ./lab-1/build ./usr/share/nginx/lab-1

# start nginx service
service nginx start 
