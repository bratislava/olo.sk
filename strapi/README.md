# 🚀 Strapi

## Setup

Before you start, install all dependencies and create `.env.local` file which is .gitignored and used for local dev.

```
yarn
cp .env.example .env.local
```

You need postgres running locally (with correct credentials & database available). The easiest way to get a postgres db with the right credentials up&running is via `docker-compose.yml` file. Check the readme in the root of this repo.

## Build

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
yarn build
```

## Start development server

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
yarn dev
```

## Start server

Start your Strapi application with autoReload disabled (not needed for development). [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
yarn start
```

## Set permissions

To allow graphql queries, you need to give access to Public role:

Open Strapi admin panel, go to Settings > USERS & PERMISSIONS PLUGIN > Roles > Public. Check `find` and `findOne` for all content types.

## [project-specific docs]

[Add your project-specific docs for strapi here.]
