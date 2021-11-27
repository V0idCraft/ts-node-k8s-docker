FROM node:14 as Build
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
RUN npm run build

FROM nginx:1.1.24
COPY --from=Build /app/build /usr/share/nginx/html