<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
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
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Backend with NestJS
This Api was generated with NestJS For create -Read-Update-Delete products . Please, before running make sure you have run your MongoDB services and make sure you are connected to database and localhost with $npm start:dev or $npm run start when u want testing with unit test or e2e test Also For Testing You Can Use [Postman](https://www.postman.com/) if u want u can test this api with UI just going in to your http://localhost:3000 and before that makesure use npm start:dev or other start way of in product-store directory u can see in package.json script   .

## DOWNLOAD CODE
FIRST DOWNLOAD MYCOD OF GITHUB OR Clone of it

``` bash
$ git clone https://github.com/Amirhoseinpg/myshoppingapi.git
```

## Installation


```bash
#Install nestjs if you dont have it 
$ npm i -g @nestjs/cli
```

```bash
cd product-store
#for example if your file is on your desktop follow:
cd Desktop 
cd product-store
```

```bash
#Then open Program and USE this in program(code) dicrectory Terminal:
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test


```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## USE



```bash

# FIRST WAY :
#after makesure your server is up :

# for get all product of database  With GET METHOD
 http://localhost:3000/api/products

# for create post send post request with postman or axios & POST METHOD
 http://localhost:3000/api/products


# this is example for get just one product with iD
 http://localhost:3000/api/products/productid

 #like this WITH GET METHOD
 http://localhost:3000/api/products/60d5573b51737b0f74f8bfcb

# this is example for delete just one product send delete request with ID prodcut >> use postman or axios
 http://localhost:3000/api/products/productid

 #like this FOR>>> DELETE METHOD 
 http://localhost:3000/api/products/60d5573b51737b0f74f8bfcb


# for update product send PUT request with postman & axios & PUT METHOD
http://localhost:3000/api/products/productid

 #like this send prodcut id + new content>>> PUT
 http://localhost:3000/api/products/60d5573b51737b0f74f8bfcb

#SECOND WAY :

#just use UI I make it in first page after connect to your localhost & database:
http://localhost:3000/

# HAVE FUN :)
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).



## License

Nest is [MIT licensed](LICENSE).
