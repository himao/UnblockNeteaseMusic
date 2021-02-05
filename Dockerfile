FROM node:15.8.0-alpine3.12

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production --registry=https://registry.npm.taobao.org
COPY . .

EXPOSE 8080 8081

ENTRYPOINT ["node", "app.js"]
