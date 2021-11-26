FROM node:14-buster-slim
RUN apt-get update && apt-get install -y git wget gnupg curl
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run prisma:generate
RUN npm run build
CMD ["npm","run","start:prod"]