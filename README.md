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

1.  Iniciar sesión, se ingresa un correo y una contraseña valida
2.  Iniciar sesión, se ingresa un correo valido pero una contraseña invalida
3.  Iniciar sesión, se ingresa una contraseña valida pero un correo no registrado
4.  Iniciar sesión, se ingresa un correo valido pero se deja la contraseña vacia
5.  Iniciar sesión, se ingresa una contraseña pero se deja el correo vacio
6.  Iniciar sesión, se ingresa un correo invalido (sin @, .com)
7.  Iniciar sesión, se da click en el boton "forgot password" sin escribir un correo
8.  Iniciar sesión, se da click en el boton "forgot password" escribiendo un correo

9.   Crear nuevo tag con nombre y con descripción
10.  Crear nuevo tag sin nombre y con descripción
11.  Crear nuevo tag con nombre y sin descripción
12.  Crear nuevo tag con nombre de menos de 191 caracteres y descripción de menos de 500 caracteres
13.  Crear nuevo tag con nombre de más de 191 caracteres  y descripción de más de 500 caracteres
14.  Crear nuevo tag con nombre de menos de 191 caracteres y descripción de más de 500 caracteres
15.  Crear nuevo tag con nombre de más de 191 caracteres y descripción de menos de 500 caracteres
16.  Crear nuevo tag con nombre que contenga al menos un carácter especial y un número
17.  Crear nuevo tag con descripción que contenga al menos un carácter especial y un número

18. Crear post borrador con titulo y contenido
19. Crear post programado con campo excerpt de 299 caracteres
20. Crear post programado con campo excerpt de 300 caracteres (frontera)
21. Crear post programado con campo excerpt de 301 caracteres (fontera +1)
22. Crear post programado con titulo y contenido
23. Crear post publicado con fecha invalida
24. Crear post publicado con titulo de 100 caracteres y contenido vacio
25. Crear post publicado con titulo igual 255 caract
26. Crear post publicado con titulo de mas de 255 caracteres
27. Crear post publicado con titulo vacio y contenido de 100 caracteres
28. Crear post publicado con titulo y contenido
29. Editar post con autor invalido
30. Editar post seleccionando feature
31. Editar post titulo y contenido
32. Eiminar post

33.  invitar usuario con correo valido aleatorio
34.  invitar usuario con correo invalido aleatorio
35.  editar informacion general, titulo y descripción aleatorio
36.  editar informacion general, titulo y descripción con caracteres especiales y numeros aleatorio
37.  editar informacion staff, full name limite superior aleatorio
38.  editar informacion staff, slug limite superior aleatorio
39.  editar informacion staff, con email invalido aleatorio
40.  editar informacion staff, con location limite superior aleatorio
41.  editar informacion staff, con website invalido aleatorio
42.  editar informacion staff, con facebok limite superior aleatorio
43.  editar informacion staff, con twitter no valido aleatorio
44.  editar informacion staff, Bio limite superior aleatorio  
45.  editar informacion staff, cambiar password aleatorio
46.  editar informacion staff, old password vacio aleatorio
47.  editar informacion staff, new password y verify password diferentes aleatorio
48.  editar informacion staff, new password menos de 10 caracteres aleatorio

49.  Página, crear página con titulo de menos de 255 caracteres y descripción y publicarla
50.  Página, crear página con titulo de menos de 255 caracteres y descripción y dejarla en borrador
51.  Página, crear página con titulo de menos de 255 caracteres y descripción y dejarla programada
52.  Página, crear página con titulo de mas de 255 caracteres y publicarla
53.  Página, editar el titulo de una página con un titulo de mas de 255 caracteres
54.  Página, crear página con un titulo y una descripción con caracteres especiales y caracteres númericos
55.  Página, crear página con titulo pero sin descripción y publicarla
56.  Página, crear página con contenido pero sin titulo y publicarla
57.  Página, editar la URL de la página con un texto valido
58.  Página, editar URL de la página con una cadena de caracteres especiales y numericos
59.  Página, editar el campo Excerpt de la página con una cadena de menos de 300 caracteres
60.  Página, editar el campo Excerpt de la página con una cadena de mas de 300 caracteres




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
