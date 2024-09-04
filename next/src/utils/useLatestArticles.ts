import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { useMemo } from 'react'

import { client } from '@/src/services/graphql'
import { isDefined } from '@/src/utils/isDefined'

export const useLatestArticles = (limit: number) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { data: articlesData } = useQuery({
    queryFn: () => client.LatestArticles({ limit, locale }),
    queryKey: ['latestArticles', { limit, locale }],
  })

  const filteredArticles = useMemo(
    // eslint-disable-next-line unicorn/no-array-callback-reference
    () => articlesData?.articles?.data.filter(isDefined) ?? [],
    [articlesData],
  )

  return {
    latestArticles: filteredArticles.length === 0 ? null : filteredArticles,
  }
}
