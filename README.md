# App Administracion Hoteles
El Sistema de Gestión Hotelera es una aplicación web dinámica y versátil diseñada para simplificar la gestión de hoteles. Con esta aplicación, puedes realizar una variedad de operaciones, desde el registro y edición de hoteles hasta la asignación de habitaciones y la gestión completa del ciclo de vida de las reservas. Además, cuenta con un módulo de usuarios que permite a los clientes realizar reservas cómodamente desde cualquier lugar.

## Instalación
### Ejecución con Docker (recomendado)
1. Clona el repositorio desde: [https://github.com/roberth1927/hotels.git]
2. Navega al branch "hotels-docker"
3. En la raíz del proyecto, asegúrate de tener Docker instalado en tu sistema.
4. Ejecuta el siguiente comando para construir la imagen Docker de la aplicación:

    ```bash
    docker build -t hotels .
    ```
5. Una vez que la imagen se haya construido correctamente, puedes ejecutar los contenedores Docker:
   
    ```bash
     docker container run -p 4300:80 -p 3000:3000 hotels
     ```

5.  Abre un navegador y navega a [http://0.0.0.0:4300/] para acceder a la aplicación.

### Ejecución en Modo de Desarrollo (sin Docker)
1. Clona el repositorio desde: [https://github.com/roberth1927/hotels.git]

2. Navega al branch "main"

2. Instala json-server
     ```bash
     npm install -g json-server
   ```
3. En la raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias:
    ```bash
    npm install
  ```
4. Luego, para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:
    ```bash
    ng serve
  ```
    
5. Ejecutar json-server:
    ```bash
        json-server --watch db.json
    ```
5. Abre un navegador y navega a [http://localhost:4200/] para acceder a la aplicación.

## Versiones
Angular: 16.1.x
Docker: 20.0.x (para ejecución con Docker)
json-server: 0.17.4

## Contacto
Si tienes alguna pregunta, no dudes en contactarnos a través del correo electrónico: [robinmoralesquiroz@gmail.com]. Si deseas obtener más información sobre cómo ejecutar la aplicación con Docker, también estamos disponibles para ayudarte.\





**************************************************************************************************************

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


****************************************************************************************************************


FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install -g json-server

EXPOSE 3000

CMD ["json-server", "--watch", "db.json", "--host", "0.0.0.0", "--port", "3000"]

