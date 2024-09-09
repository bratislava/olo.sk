import { QueryClient } from '@tanstack/react-query'

import { LATEST_ARTICLES_COUNT } from '@/src/components/sections/headers/PageHeaderPickupDay'
import { client } from '@/src/services/graphql'
import { PageEntityFragment } from '@/src/services/graphql/api'

export const prefetchPageSections = async (
  queryClient: QueryClient,
  page: PageEntityFragment,
  locale: string,
) => {
  const headerSectionTypes = page?.attributes?.header?.map((section) => section?.__typename) ?? []

  const sectionTypes = page?.attributes?.sections?.map((section) => section?.__typename) ?? []

  // eslint-disable-next-line no-secrets/no-secrets
  if (headerSectionTypes.includes('ComponentHeaderSectionsPickupDay')) {
    await queryClient.prefetchQuery({
      queryKey: ['LatestArticles', { limit: LATEST_ARTICLES_COUNT, locale }],
      queryFn: () => client.LatestArticles({ limit: LATEST_ARTICLES_COUNT, locale }),
    })
  }

  if (sectionTypes.includes('ComponentSectionsServices')) {
    await queryClient.prefetchQuery({
      queryKey: ['ServiceCategories', locale],
      queryFn: () => client.ServiceCategories({ locale }),
    })
    await queryClient.prefetchQuery({
      queryKey: ['Services', locale],
      queryFn: () => client.Services({ locale }),
    })
  }

  if (sectionTypes.includes('ComponentSectionsFaqCategories')) {
    await queryClient.prefetchQuery({
      queryKey: ['FaqCategories', locale],
      queryFn: () => client.FaqCategories({ locale }),
    })
  }
}
