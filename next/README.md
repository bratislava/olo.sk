# Next

This readme should get you up & running.

## First-time setup

To install dependencies run:

```
yarn
```

For CMS setup see `strapi` directory. You can also run the project against staging or production strapi (useful when developing and debugging) - provided that you're not working on Strapi model changes.

## Run project locally

```
yarn dev
```

## Generate GraphQL

When you change something in Strapi Content type builder, and/or if you change GraphQL queries, you always need to generate new types using Strapi SKD. To update queries, modify files in `services/graphql` directory.

> Note: Strapi V4 does not export schema.graphql by default - instead, you'll need a running server to generate types from graphql endpoint. The Strapi url is set up directly in `codege.yml` file.

To generate new types run:

```bash
yarn gen
```

For more information, refer to [the documentation](/docs/libs/Strapi-SDK.md).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Static Site Generation

If you want to test static site generation locally, you need to run `yarn build` and `yarn start`. This commands run by default with the prod env variable, so in order to have the local env variable for strapi, you need to create `.env.local` with `STRAPI_URL=localhost:1337` to override the prod values. This file is ignored by git, because it often contains sensitive secrets.
