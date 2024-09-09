import { queryOptions } from '@tanstack/react-query'

import { client } from '@/src/services/graphql'

export const generalQuery = (locale: string) =>
  queryOptions({
    queryKey: ['General', locale],
    queryFn: () => client.General({ locale }),
  })
