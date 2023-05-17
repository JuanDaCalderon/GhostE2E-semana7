# README Entrega semana 67

## Grupo 12
- Leonardo Barrios 
- Juan David Calderon 
- Sneyder Amado 
- Luis Alberto Cortes

## URL repositorio github
https://github.com/JuanDaCalderon/GhostE2E-semana7


## Funcionalidades cubiertas
- xxxxxxxxxxxxxxxxxxxx

## Notación Screenshots
- {escenario}_p{xx}

## 120 Escenarios de pruebas con generación de datos

1.  Iniciar sesión, se ingresa un correo y una contraseña valida
2.  Iniciar sesión, se ingresa un correo valido pero una contraseña invalida
3.  Iniciar sesión, se ingresa una contraseña valida pero un correo no registrado
4.  Iniciar sesión, se ingresa un correo valido pero se deja la contraseña vacia
5.  Iniciar sesión, se ingresa una contraseña pero se deja el correo vacio
6.  Iniciar sesión, se ingresa un correo invalido (sin @, 
7.  Iniciar sesión, se da click en el boton "forgot password" sin escribir un correo
8.  Iniciar sesión, se da click en el boton "forgot password" escribiendo un correo

9.   Crear nuevo tag con nombre y con descripción
10.  Crear nuevo tag sin nombre y con descripción
11.  Crear nuevo tag con nombre y sin descripción
12.  Crear nuevo tag con nombre de menos de 191 caracteres y descripción de menos de 500 caracteres
13.  Crear nuevo tag con nombre de más de 191 caracteres  y descripción de más de 500 caracteres
14.  Crear nuevo tag con nombre de menos de 191 caracteres y descripción de más de 500 caracteres
15.  Crear nuevo tag con nombre de más de 191 caracteres y descripción de menos de 500 caracteres
16.  Crear nuevo tag con nombre que contenga al menos un carácter especial y un número
17.  Crear nuevo tag con descripción que contenga al menos un carácter especial y un número

18.  Crear post publicado
19.  Post publicado con Titulo mayor a 255
20.  Post publicado con Titulo igual a 255
21.  Post publicado con Titulo vacio y contenido
22.  Post publicado con Titulo y contenido vacio
23.  Crear post borrador
24.  Crear post borrador con cuerpo mayor a la 1000000 caracteres
25.  Crear post borrador con except menor a 300 caracteres
26.  Crear post borrador con except con 300 caracteres
27.  Crear post borrador con except mayor 300 caracteres
28.  Crear post programadao
29.  Editar post pasar de publish to draft
30.  Editar post pasar de draft a publicado
31.  Editar post de draft a publish
32.  Editar post de schedule to draft
33.  Editar post con URL
34.  Editar post Feature
35.  Editar post con autor no valido
36.  Eliminar post

37.  invitar usuario con correo valido 
38.  invitar usuario con correo invalido
39.  editar informacion general, titulo y descripción
40.  editar informacion general, titulo y descripción con caracteres especiales y numeros
41.  editar informacion staff, full name limite superior
42.  editar informacion staff, slug limite superior
43.  editar informacion staff, con email invalido
44.  editar informacion staff, con location limite superior
45.  editar informacion staff, con website invalido
46.  editar informacion staff, con facebok limite superior
47.  editar informacion staff, con twitter no valido
48.  editar informacion staff, Bio limite superior 
49.  editar informacion staff, cambiar password
50.  editar informacion staff, old password vacio
51.  editar informacion staff, new password y verify password diferentes
52.  editar informacion staff, new password manos de 10 caracteres

53.  Página, crear página con titulo de menos de 255 caracteres y descripción y publicarla
54.  Página, crear página con titulo de menos de 255 caracteres y descripción y dejarla en borrador
55.  Página, crear página con titulo de menos de 255 caracteres y descripción y dejarla programada
56.  Página, crear página con titulo de 255 caracteres y publicarla
57.  Página, crear página con titulo de mas de 255 caracteres y publicarla
58.  Página, editar el titulo de una página con un titulo de mas de 255 caracteres
59.  Página, crear página con un titulo y una descripción con caracteres especiales y caracteres númericos
60.  Página, crear página con titulo pero sin descripción y publicarla
61.  Página, crear página con contenido pero sin titulo y publicarla
62.  Página, editar la URL de la página con un texto valido
63.  Página, editar URL de la página con una cadena de caracteres especiales y numericos
64.  Página, editar el campo Excerpt de la página con una cadena de menos de 300 caracteres



# Instrucciones para ejecutar tests - Kraken

## Dependencias globales
* Tener instalado Cypress V12.9.0. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0
* Tener instalado Ghost. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#0
  Para Ghost se utilizo la version 4.44, en caso de utilizar docker, se puede utilizar la imagen ejecutando el siguiente comando: *docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0*
* Node V14.21.3.


# Ejecución de las pruebas

## Cypress
Desde la carpeta raiz del proyecto, `GHOSTE2E-SEMANA7`  :
* Ejecutar el comando `npm install` para instalar las dependencias
* En caso no instalarse, las dependencias son: 
 - Faker V7.6.0. Ejecutar en la terminal el comando `npm install @faker-js/faker --save-dev`
 - Chai V4.3.7. Ejecutar en la terminal el comando `npm install chai`
* Desde la carpeta raiz del proyecto de cypresss, en el archivo `.\cypress-ghost\config\config.json` configurar host, user y password
* Ejecutar el comando `cypress open` para abrir la consola de la aplicacion
* En la consola Adicionar el proyecto. Buscar la carpeta cypress-ghost descargada del repositorio github
  <img width="938" alt="agregar proyecto" src="https://user-images.githubusercontent.com/124101392/236691524-aa3a4466-a381-4126-992b-d9f663863a85.png">
* Ya se ve debe ver el proyecto, seleccionar cypress-ghost
![image](https://user-images.githubusercontent.com/124101392/236691843-b257f1a5-0f5e-47bd-8e2f-9781e49cf96a.png)
* Seleccionar E2E testing
![image](https://user-images.githubusercontent.com/124101392/236691572-a8561b8a-e8e2-4aa6-b7ec-25a44f11a4de.png)
* Seleccionar el navegador Chrome y hacer click en el boton Start E2E Testing in Chrome
![image](https://user-images.githubusercontent.com/124101392/236691553-aa01b58c-2099-47f2-8fbb-3ae422889d55.png)
* En la ventana se mostraran los archivos correspondientes a los casos de prueba.
![image](https://user-images.githubusercontent.com/124101392/236692105-1516e344-7398-47a9-8896-c0a39a4433aa.png)
* Elegir el que se desee ejecutar
