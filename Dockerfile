# Fase de construcción
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

RUN ng build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist/hotels /usr/share/nginx/html
COPY --from=build /app/db.json /app/db.json

EXPOSE 80
EXPOSE 3000

RUN apk --no-cache add nodejs npm
RUN npm install -g http-server json-server

CMD ["sh", "-c", "json-server --watch /app/db.json --port 3000 --host 0.0.0.0 & http-server /usr/share/nginx/html -p 80"]
