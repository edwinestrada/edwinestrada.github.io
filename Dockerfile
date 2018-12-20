# Use an official Node as a base image
FROM node:8.7-slim

LABEL Author="Edwin Estrada"

COPY package.json /tmp/package.json
RUN cd /tmp &&\
  npm install --silent

RUN mkdir -p /app &&\
  cp -a /tmp/node_modules /app &&\
  rm -rf /tmp/node_modules
ADD . /app

WORKDIR /app

RUN npm run build-css

EXPOSE 3000
EXPOSE 9000
EXPOSE 9009

RUN npm run build
CMD npm start