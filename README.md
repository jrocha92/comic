# Webcomic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

___________________________________________________________________________________________________________________________________

## How to activate it
- Para iniciar el proyecto necesitamos dos cosas:
1) reconstruir la carpeta node_modules por medio del comando: npm i o npm install
2) utilizar el comando npm start para ejecutar la aplicación.

## How to use it
- Una vez inicializado el aplicativo, se cargará automaticamente el comic consumido por la API y en ese momento el usuario podrá darle una valoración en forma de estrellas donde 1 estrella de color es la más baja y 5 estrellas de colores es la más alta. Solamente cuando el usuario de click en una estrella, quedará definida la valoración hecha por el usuario. Si el usuario desea cambiar dicha valñoración, lo puede hacer de dos formas:
1) Refrescar la página del aplicativo ya que al no contar con interacción Backend, la votación seleccionada se reiniciarar a su estado inicial.
2) Dar click a la estrella seleccionada inicialmente ya que si intenta seleccionar otra estrella (sin importar si esta coloreada o no), saltará un mensaje de alerta, explicando que solo esta permitido dar click a la estrella seleccionada para asi cambiar la valoración del comic.

## Note
- En este momento solo carga el mismo comic por defecto, esta sugeto a cambios si es necesraio.
