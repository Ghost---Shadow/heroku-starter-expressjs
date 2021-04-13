# heroku-starter-expressjs (WORK IN PROGRESS)

A dockerized starter project which deploys an expressjs app to heroku.

## Installation

Make sure [Docker](https://www.docker.com/) and [nodejs](https://nodejs.org/en/) are installed

1. Run `npm i` to install.
2. Run `docker-compose up` to start the postgres DB
3. Run `npm run db:migrate` to run the migrations

## Environment variables

| Name        | Description                 |
| ----------- | --------------------------- |
| NODE_ENV    | `development`/`production`  |
| DB_USERNAME | Username of the postgres DB |
| DB_PASSWORD | Password of the postgres DB |
| DB_NAME     | Name of the postgres DB     |
| DB_HOST     | Host of the postgres DB     |

## CI Secrets

| Name            | Description                  |
| --------------- | ---------------------------- |
| HEROKU_API_KEY  | Heroku API key               |
| HEROKU_APP_NAME | Heroku app name              |
| HEROKU_EMAIL    | Your email address on Heroku |

## Sequelize

[Official Docs](https://sequelize.org/master/manual/migrations.html)

Create new model and migration

```bash
npx sequelize-cli model:generate --name=users --attributes=email:string,password:string
```

## Running

Run `npm run start:dev` to start in development mode.

Import the `./postman/*` into [Postman](https://www.postman.com/) to see the API docs
