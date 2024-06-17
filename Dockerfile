FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src .

EXPOSE 3000

CMD ["node", "index.js"]