FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli && npm install

COPY . .

RUN ng build

FROM nginx:alpine

COPY --from=build /app/dist/hotels /usr/share/nginx/html

EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
