FROM node:latest AS build
WORKDIR ./lab-1
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx/default.conf ./etc/nginx/conf.d/default.conf
COPY --from=build ./lab-1/build ./usr/share/nginx/lab-1
