<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

# Nominas API

### Sistema para generar nominas de la empresa japonsesa cinematografica Riku

## Detalles del desarrollo del sistema:
### IDE´s y herramientas utilizados
  1. Git y GitHub
  2. ESLint
  3. Postman
  4. Stack Overflow
  5. Chrome Developer Tools
  6. TablePlus
  7. Visual Studio Code

## Lenguajes de programación, frameworks y versiones utilizados
  1. NestJS - v10.0.5
  2. Angular - v16.1.4
  3. Docker - v4.10.1
  4. JavaScript - ECMAScript 2021
  5. TypeScript - v5.1.3
  6. Reactive JS - v7.8.0
  7. PostgreSQL - v14.3.00
  8. Express - v4.17.17
  9. TypeORM - v10.0.0

## Arquitectura utilizada
#### La arquitectura que se utilizo fue la arquitectura modular.

### Motivo por el cual se utilizo.

#### El motivo por el que se uso esta arquitectura es porque de este modo podemos identificar y diseñar mejor los limites del modulo lo que lleva a que se puedan analizar los diversos componentes y funcionalidades del sistema.

#### Gracias a que se trabaja por modulos de manera independiente se tiene una alta cohesion y un bajo acoplamiento dando una menor dependencia entre ellos. Ayuda a que cualquier cambio realizado a un modulo especifico tenga un menor o casi nulo efecto en otro modulo reduciendo los errores y facilitando su mantenimiento en un futuro.

> La modularidad es el arte de construir sistemas complejos a partir de partes simples e intercambiables. – Jeff Sutherland

~~~
Desarrollador: Ing. Carlos Alberto Mendoza Contreras
Correo Electronico: camendozacontreras5@gmail.com
Telefono: (662)-104-93-97
GitHub: https://github.com/MsCarlitos
~~~

# Pasos para ejecutar el proyecto

1. Clonar proyecto
2. ```yarn install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-compose up -d
```
6. Levantar: ```yarn start:dev```