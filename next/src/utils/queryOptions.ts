import { queryOptions } from '@tanstack/react-query'

import { client } from '@/src/services/graphql'

export const generalQuery = (locale: string) =>
  queryOptions({
    queryKey: ['General', locale],
    queryFn: () => client.General({ locale }),
  })

export const latestArticlesQuery = (limit: number, locale: string) =>
  queryOptions({
    queryFn: () => client.LatestArticles({ limit, locale }),
    queryKey: ['LatestArticles', { limit, locale }],
  })
