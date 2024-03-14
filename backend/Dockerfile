FROM node:current

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY build/ .

EXPOSE 8080

CMD ["npm", "run", "docker-start"]
