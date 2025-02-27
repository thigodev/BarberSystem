# Dockerfile
FROM node:20

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev:server"]
