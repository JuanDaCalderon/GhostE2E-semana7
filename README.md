# README Entrega semana 7

## Grupo 12
- Leonardo Barrios 
- Juan David Calderon 
- Sneyder Amado 
- Luis Alberto Cortes

## URL repositorio github
https://github.com/JuanDaCalderon/GhostE2E-semana7


## Funcionalidades cubiertas
- Inicio de sesion.
- Post.
- Tags.
- Pages.
- Staff
- General settings

## 120 Escenarios de pruebas con generación de datos
A continuacion se listan los escenarios desarrollados en cypress y en Kraken.
El data pool utilizado se identifica al final del nombre del escenario despues del simbolo `-`, apriori, api y aleatorio

De igual forma, para facilidad, los archivos se agrupan por funcionalidad en carpetas dentro del arbol del repositorio, tanto para cypress como para Kraken  

#Cypress
01.login_success-aleatorio.cy.js
02.login_invalid_password-aleatorio.cy.js
03.login_fake_email-aleatorio.cy.js
04.login_correo_valido_contrase¤a_vacia-a-priori.cy.js
05.login_correo_vacio_contrase¤a_valida-a-priori.cy.js
06.login_correo_invalido_sin_@-aleatorio.cy.js
07.login_click_forgotpassword_sin_correo-a-priori.cy.js
08.login_click_forgotpassword_con_correo-a-priori.cy.js
09.crear_tag_con_nombre_y_descripcion-aleatorio.cy.js
10.crear_tag_sin_nombre_y_con_descripcion-aleatorio.cy.js
11.crear_tag_con_nombre_y_sin_descripcion-aleatorio.cy.js
12.crear_tag_nombre_menos191_y_descripcion_menos500-aleatorio.cy.js
13.crear_tag_nombre_mas191_y_descripcion_mas500-aleatorio.cy.js
14.crear_tag_nombre_menos191_y_descripcion_mas500-aleatorio.cy.js
15.crear_tag_nombre_mas191_y_descripcion_menos500-aleatorio.cy.js
16.crear_tag_nombre_caracter_especial_y_numero-aleatorio.cy.js
17.crear_tag_descripcion_caracter_especial_y_numero-aleatorio.cy.js
18.Crear_post_borrador-aleatorio.cy.js
19.Crear_post_programado_excerpt_299_caract-aleatorio.cy.js
20.Crear_post_programado_excerpt_300_caract.-aleatorio.cy.js
21.Crear_post_programado_excerpt_301_caract-aleatorio.cy.js
22.Crear_post_programado-aleatorio.cy.js
23.Crear_post_publicado_con_fecha_invalida-aleatorio.cy.js
24.Crear_post_publicado_titulo_100_caract_contenido_vacio-aleatorio.cy.js
25.Crear_post_publicado_titulo_igual_255_caract-aleatorio.cy.js
26.Crear_post_publicado_titulo_mas_255_caract-aleatorio.cy.js
27.Crear_post_publicado_titulo_vacio_contenido_100_caract-aleatorio.cy.js
28.Crear_post_publicado-aleatorio.cy.js
29.Editar_post_autor_invalido-aleatorio.cy.js
30.Editar_post_seleccionar_feature-aleatorio.cy.js
31.Editar_post_titulo_y_contenido-aleatorio.cy.js
32.Eiminar_post-aleatorio.cy.js
33.invitar_usuario_con_correo_valido_aleatorio.cy.js
34.invitar_usuario_con_correo_invalido_aleatorio.cy.js
35.editar_informacion_general_titulo_y_descripci¢n_aleatorio.cy.js
36.editar_informacion_general_titulo_y_descripci¢n_con_caracteres_especiales_y_numeros_aleatorio.cy.js
37.editar_informacion_staff_full_name_limite_superior.cy.js
38.editar_informacion_staff_slug_limite_superior.cy.js
39.editar_informacion_staff_con_email_invalido.cy.js
40.editar_informacion_staff_con_location_limite_superior.cy.js
41.editar_informacion_staff_con_website_invalido.cy.js
42.editar_informacion_staff_con_facebok_limite_superior.cy.js
43.editar_informacion_staff_con_twitter_no_valido.cy.js
44.editar_informacion_staff_Bio_limite_superior.cy.js
45.editar_informacion_staff_cambiar_password.cy.js
46.editar_informacion_staff_old_password_vacio.cy.js
47.editar_informacion_staff_new_password_y_verify_password_diferentes.cy.js
48.editar_informacion_staff_new_password_menos_de_10_caracteres.cy.js
49.crear_pagina-api.cy.js
50.crear_pagina_borrador-api.cy.js
51.crear_pagina_programada-api.cy.js
52.crear_pagina_titulo_mas_255-api.cy.js
53.editar_pagina_titulo_mas_255-api.cy.js
54.crear_pagina_caracteres_especiales-api.cy.js
55.crear_pagina_sin_descripcion-api.cy.js
56.crear_pagina_sin_titulo-api.cy.js
57.editar_url_valido-api.cy.js
58.editar_url_caracteres_especiales-api.cy.js
59.editar_excerpt_menos_300-api.cy.js
60.editar_excerpt_mas_300-api.cy.js
61.login_click_forgotpassword_con_correo-a-priori.cy.js
62.login_correo_invalido_sin_@-a-priori.cy.js
63.crear_tag_con_nombre_y_descripcion_a-priori.cy.js
64.crear_tag_con_nombre_y_sin_descripcion_a-priori.cy.js
65.crear_tag_descripcion_caracter_especial_y_numero_a-priori.cy.js
66.crear_tag_nombre_caracter_especial_y_numero_a-priori.cy.js
67.crear_tag_nombre_mas191_y_descripcion_mas500_a-priori.cy.js
68.crear_tag_nombre_mas191_y_descripcion_menos500_a-priori.cy.js
69.crear_tag_nombre_menos191_y_descripcion_mas500_a-priori.cy.js
70crear_tag_nombre_menos191_y_descripcion_menos500_a-priori.cy.js
71.crear_tag_sin_nombre_y_con_descripcion_a-priori.cy.js
72.Crear_post_programado_excerpt_299_caract-apriori.cy.js
73.Crear_post_programado_excerpt_300_caract-apriori.cy.js
74.Crear_post_programado_excerpt_301_caract-apriori.cy.js
75.Crear_post_publicado_titulo_igual_255_caract-aprior.cy.js
76.Crear_post_publicado_titulo_mas_255_caract-apriori.cy.js
77.Crear_post_publicado_titulo_100_caract_contenido_vacio - apriori.cy.js
78.Editar_post_titulo_y_contenido-apriori.cy.js
79.Editar_post_autor_invalido-apriori.cy.js
80.Crear_post_publicado_con_fecha_invalida-apriori.cy.js
81.Editar_post_seleccionar_feature-apriori.cy.js
82. editar_usuario.cy.js
83.crear_pagina-priori.cy.js
84.crear_pagina_borrador-priori.cy.js
85.crear_pagina_programada-priori.cy.js
86.crear_pagina_titulo_mas_255-priori.cy.js
87.editar_pagina_titulo_mas_255-priori.cy.js
88.crear_pagina_caracteres_especiales-priori.cy.js
89.crear_pagina_sin_descripcion-priori.cy.js
90.crear_pagina_sin_titulo-priori.cy.js
91.editar_url_valido-priori.cy.js
92.editar_url_caracteres_especiales-priori.cy.js
93.editar_excerpt_menos_300-priori.cy.js
94.editar_excerpt_mas_300-priori.cy.js
95.login_correo_vacio_contraseña_valida_a-priori.cy.js
96.login_correo_valido_contraseña_vacia_a-priori.cy.js
97.invitar_usuario_con_correo_valido_apriori.cy.js
98.invitar_usuario_con_correo_invalido_apriori.cy.js
99.editar_informacion_staff_full_name_limite_superior_apriori.cy.js
100.editar_informacion_staff_slug_limite_superior_apriori.cy.js
101.editar_informacion_staff_con_email_invalido_apriori.cy.js
102.editar_informacion_staff_con_location_limite_superior_apriori.cy.js
103.editar_informacion_staff_con_website_invalido_apriori.cy.js
104.editar_informacion_staff_con_facebok_limite_superior_apriori.cy.js
105.editar_informacion_staff_con_twitter_no_valido_apriori.cy.js
106.editar_informacion_staff_Bio_limite_superior_apriori.cy.js
107.editar_informacion_staff_cambiar_password_apriori.cy.js
108.editar_informacion_staff_old_password_vacio_apriori.cy.js
109.editar_informacion_staff_new_password_y_verify_password_diferentes_apriori.cy.js
110.editar_informacion_staff_new_password_menos_de_10_caracteres_apriori.cy.js
111.editar_usuario_apriori.cy.js
112.editar_informacion_general_titulo_y_descripción_apriori.cy.js
113.editar_informacion_general_titulo_y_descripción_con_caracteres_especiales_y_numeros_apriori.cy.js

# Kraken
- 114.login_correo_invalido_sin_@-aleatorio.feature
- 115.login_correo_vacio_contrase¤a_valida-aleatorio.feature
- 116.login_correo_valido_contrase¤a_vacia-aleatorio.feature
- 117.crear_page_schedule-aleatorio.feature
- 118.crear_page-aleatorio.feature
- 119.editar_page-aleatorio.feature
- 120.eliminar_page-aleatorio.feature
- 121.filtrar_pagina-aleatorio.feature
- 122.crear_post_borrador-aletorio.feature
- 123.crear_post_programado-aleatorio.feature
- 124.crear_post_publicado-aletorio.feature
- 125.editar_post-aletorio.feature
- 126.eliminar_post-aletorio.feature
- 127.crear_tag_con_nombre_y_descripcion-aleatorio.feature
- 128.crear_tag_con_nombre_y_sin_descripcion-aleatorio.feature
- 129.crear_tag_sin_nombre_y_con_descripcion-aleatorio.feature
- 130.edit_info_usuario_aleatorio.feature
- 131.invitar_usuario_aleatorio.feature
- 132.invitar_usuario_email_invalido_aleatorio.feature
- 133.edit_info_general_aleatorio.feature

# Incidentes

Las incidenciass identificadas en el siguinte sitio del repositorio

https://github.com/JuanDaCalderon/GhostE2E-semana7/issues

# Instrucciones para ejecutar tests - Kraken

## Dependencias globales
* Tener instalado Cypress V12.9.0. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0
* Tener instalado Ghost. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#0
  Para Ghost se utilizo la version 4.44, en caso de utilizar docker, se puede utilizar la imagen ejecutando el siguiente comando: *docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0*
* Node V14.21.3.

# Ejecución de las pruebas
## Kraken
Desde la carpeta raiz del proyecto, `kraken_ghost`  :
* Ejecutar el comando `npm install` para instalar las dependencias. 
* En caso no instalarse, las dependencias son: 
 - Faker V7.6.0. Ejecutar en la terminal el comando `npm install @faker-js/faker --save-dev`
 - Chai V4.3.7. Ejecutar en la terminal el comando `npm install chai`
* Desde la raiz del proyecto, en el archivo `properties.json` configurar los valores para Usuario1 y Password1
* En la carpeta `features\Escenarios` se encuentran los archivos .feature correspondients a los casos de prueba.
* Para su ejecucion, de la carpeta `features\Escenarios_completos` mover el escenario deseado a la carpeta `.\features\`. Debe ser el unico en esta ubicacion.
* Desde la raiz del proyecto Kraken ejecutar el comando `./node_modules/kraken-node/bin/kraken-node run`


## Cypress
Desde la carpeta raiz del proyecto, `GHOSTE2E-SEMANA7`  :
* Ejecutar el comando `npm install` para instalar las dependencias
* En caso no instalarse, las dependencias son: 
 - Faker V7.6.0. Ejecutar en la terminal el comando `npm install @faker-js/faker --save-dev`
 - Chai V4.3.7. Ejecutar en la terminal el comando `npm install chai`
* Desde la carpeta raiz del proyecto de cypresss, en el archivo `.\cypress-ghost\config\config.json` configurar host, user y password
* Ejecutar el comando `cypress open` para abrir la consola de la aplicacion
* En la consola adicionar el proyecto. Buscar la carpeta cypress-ghost descargada del repositorio github
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


## Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas
# Pool de datos a-priori
Pra estos datos, se genero un dataset con la aplicacion mockaroo que se incluyo dentro del repositorio. Este dataset contiene 100 paquetes de datos diferentes con las caracteristicas requeridas para las pruebas, como longitudes especificas, con caracteres especiales, formato email, etc. El archivo se encuentra en la siguinte ruta del repositorio `cypress-ghost\data-pool\a-priori-data.json`. 
Adicionalmente, se crearon los metodos necesarios para hacer el llamado de los datos de manera aleatorio, estos se encuentran en la siguiente ruta `cypress-ghost\cypress\helpers\prioriData.js`.
Dentro de los archivos de los escenarios de prueba identificados el texto `-apriori` al final del nombre, se importo este archivo y llama el metodo segun el dato requerido.

# Pool de datos (psudo)
Para esto, en la aplicacion mockaro se creo un esquema llamado `pseudo-data-pool` que se consume a traves de la api https://my.api.mockaroo.com/data-pool.json?key=7d257dd0 .
En el repositorio se incluyo el archivo `cypress-ghost\cypress\helpers\apiData.js` que incluye la clase creada con los metodos para la conexion y la recuperacion de los datos desde la aplicacion. 
Dentro de los archivos de los escenarios de prueba identificados el texto `-api` al final del nombre, se importo esta la clase y se hace el consumo del dato requerido.

# Escenario aleatorio
Para esto, se instalo la libreria faker.
Dentro de los archivos de los escenarios de prueba identificados el texto `-aleatorio` al final del nombre, se importo la libreria y se incluyen los metodos de faker segun el dato requerido.
