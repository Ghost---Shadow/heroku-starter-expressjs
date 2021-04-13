# heroku-starter-expressjs (WORK IN PROGRESS)

A dockerized starter project which deploys an expressjs app to heroku.

## Installation

Run `npm i` to install.

## Environment variables

| Name        | Description                 |
| ----------- | --------------------------- |
| DB_USERNAME | Username of the postgres DB |
| DB_PASSWORD | Password of the postgres DB |
| DB_NAME     | Name of the postgres DB     |
| DB_HOST     | Host of the postgres DB     |

## Sequelize

[Official Docs](https://sequelize.org/master/manual/migrations.html)

Create new model and migration

```bash
npx sequelize-cli model:generate --name=users --attributes=email:string,password:string
```

Run migration

```bash
npm run db:migrate
```

## Running

Run `npm run start:dev` to start in development mode.

Import the `./postman/*` into [Postman](https://www.postman.com/) to see the API docs
