import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'

import { client } from '@/src/services/graphql'
import { isDefined } from '@/src/utils/isDefined'

export const useLatestArticles = (limit: number) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { data: articlesData } = useQuery({
    queryFn: () => client.LatestArticles({ limit, locale }),
    queryKey: ['LatestArticles', { limit, locale }],
  })

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredArticles = articlesData?.articles?.data.filter(isDefined) ?? []

  return {
    latestArticles: filteredArticles.length === 0 ? null : filteredArticles,
  }
}