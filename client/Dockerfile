FROM node:latest AS build
WORKDIR ./client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx/default.conf ./etc/nginx/conf.d/default.conf
COPY --from=build ./client/build ./usr/share/nginx/client

EXPOSE 80
