import { ArticleCardEntityFragment } from '@/src/services/graphql/api'

import { meiliClient } from '../meiliClient'
import { ArticleMeili, SearchIndexWrapped } from '../types'
import { getMeilisearchPageOptions, unwrapFromSearchIndex } from '../utils'

export type ArticlesFilters = {
  search: string
  page: number
  pageSize: number
}

export const articlesDefaultFilters: ArticlesFilters = {
  search: '',
  page: 1,
  pageSize: 5,
}

export const getMeiliArticlesQueryKey = (filters: ArticlesFilters, locale: string) => [
  'Search',
  'Articles',
  filters,
  locale,
]

export const meiliArticlesFetcher = (filters: ArticlesFilters, locale: string) => {
  return meiliClient
    .index('search_index')
    .search<SearchIndexWrapped<'article', ArticleMeili>>(filters.search, {
      ...getMeilisearchPageOptions({ page: filters.page, pageSize: filters.pageSize }),
      filter: ['type = "article"', `locale = ${locale}`],
      sort: ['article.publishedAtTimestamp:desc'],
      attributesToRetrieve: [
        // Only properties that are required to display listing are retrieved
        'article.id',
        'article.title',
        'article.slug',
        'article.addedAt',
        'article.updatedAt',
        'article.coverMedia.url',
        'article.coverMedia.name',
        'article.articleCategory.title',
        'article.articleCategory.slug',
      ],
    })
    .then(unwrapFromSearchIndex('article'))
    .then((response) => {
      const hits: ArticleCardEntityFragment[] = response.hits.map((hit) => {
        return {
          __typename: 'ArticleEntity',
          id: hit.id,
          attributes: {
            __typename: 'Article',
            slug: hit.slug,
            title: hit.title,
            addedAt: hit.addedAt,
            updatedAt: hit.updatedAt,
            coverMedia:
              hit.coverMedia?.url && hit.coverMedia?.name
                ? {
                    data: {
                      attributes: {
                        url: hit.coverMedia.url,
                        name: hit.coverMedia.name,
                      },
                    },
                  }
                : undefined,
            articleCategory:
              hit.articleCategory?.title && hit.articleCategory?.slug
                ? {
                    data: {
                      attributes: {
                        title: hit.articleCategory.title,
                        slug: hit.articleCategory.slug,
                      },
                    },
                  }
                : undefined,
          },
        }
      })

      return { ...response, hits }
    })
}
