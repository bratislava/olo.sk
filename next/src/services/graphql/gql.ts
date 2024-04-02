import { GraphQLClient } from 'graphql-request'

import { getSdk } from '@/services/graphql/index'

// TODO test if this works with build and deployment
const gql = new GraphQLClient(`${process.env.STRAPI_URL}/graphql`)

export const client = getSdk(gql)
