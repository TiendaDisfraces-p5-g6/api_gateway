# Proyecto de Ciclo IV: Tienda de alquiler de Disfraces
  Este proyecto está enfocado en la creación de una página web que permita de forma sistemática el alquiler de disfraces y en una versión siguiente de manera adicional el alquiler de trajes, el valor agregado está en la personalización de los disfraces, adicional a la opción de alquiler de prendas en stock

### Api-gateway
 Para la realización del api-gateway se utilizo el lenguaje de programación javaScript, junto con el entorno NodeJS y el servidor de
 GraphQL: Apollo Server.

### Contenido de Este repositorio: 

   1. Se tiene una carpeta llamada src donde se ubican todos los archivos que conforman el API Gateway, esta carpeta contiene las carpetas:   dataSources, resolvers, typeDefs y utils asi como los archivos index.js y server.js. 

   2. se creo un archivo dockerfile el cual es un archivo de texto plano que contiene una serie de instrucciones necesarias para crear una   imagen en un contenedor

 ### Requerimientos 
```
  {
    "name": "tiendaapigateway",
    "version": "1.0.0",
    "description": "Este es un API gateway para manejar solicitudes de alquiler de trajes y disfraces",
    "main": "src/index",
    "scripts": {},
    "author": "grupo 6",
    "license": "ISC",
    "dependencies": {
        "apollo-datasource-rest": "^3.1.1",
        "apollo-server": "^3.1.2",
        "graphql": "^15.5.1",
        "lodash": "^4.17.21",
        "node-fetch": "^2.6.1"
    }
}
```
### Ejecución del proyecto

   El proyecto se encuentra en un contenedor docker desplegado en la plataforma heroku:

     https://api-gateway-p5-g6.herokuapp.com/

