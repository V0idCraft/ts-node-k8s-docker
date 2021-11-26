FROM node:14-buster-slim
RUN apt-get update && apt-get install -y git wget gnupg curl
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","run","start:dev"]