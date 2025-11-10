# Tech Stack
- node.JS
- NestJS
- ExpressJS
- Typescript
- Apollo Federation
- TypeORM
- clss-validator
- GraphQL
- hbs
- nestjs/event-emitter
- cookie-parser
- mysql2 (also support postgresql)
- pino logger
- nodemailer
- rxjs
- socket.io
- Redis Pub/sub
- Swagger
- npm, nvm

# Code architecture
- Microservice based REST and GraphQL API, support both interface using single code base
- All microservices are availabe in /apps
  1. app
  2. business-app
  3. rest-app
  4. shared-app
  5. ws-app
- Main gateway is /apps/app for RETS and GraphQL
- For websocket it's /apps/ws-app

# Purpose
Enterprise mission critical application development

---
Disclaimer: This repository contains code that has been modified for security and privacy reasons before being made open source. Its primary purpose is to contribute to the developer community and support learning. Some parts may require refactoring to run as intended. This code is provided for educational purposes only and without warranty of any kind.