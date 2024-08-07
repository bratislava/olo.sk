import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'

import { MarkdownProps } from '@/src/components/formatting/Markdown'
import { client } from '@/src/services/graphql'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type StrapiEntityType =
  | 'article'
  | 'page'
  | 'faqCategory'
  | 'document'
  | 'branch'
  | 'workshop'
  | 'service'

export const useTransformOloMarkdownLinks = () => {
  const { getFullPath } = useGetFullPath()

  const { i18n } = useTranslation()
  const locale = i18n.language

  const { data: articlesData } = useQuery({
    queryFn: () => client.Articles(),
    queryKey: ['articles'],
  })

  const { data: pagesData } = useQuery({
    queryFn: () => client.Pages({ locale }),
    queryKey: ['pages', locale],
  })

  const { data: workshopsData } = useQuery({
    queryFn: () => client.Workshops(),
    queryKey: ['workshops'],
  })

  const { data: faqCategoriesData } = useQuery({
    queryFn: () => client.FaqCategories({ locale: 'sk' }),
    queryKey: ['faqcategories'],
  })

  const { data: documentsData } = useQuery({
    queryFn: () => client.Documents(),
    queryKey: ['documents'],
  })

  const { data: servicesData } = useQuery({
    queryFn: () => client.Services({ locale: 'sk' }),
    queryKey: ['services'],
  })

  const getEntityPathById = (entities: any, id: string) => {
    if (!entities) return null
    const foundEntity = entities.find((entity: any) => {
      if (!entity.id) return null

      return entity.id === id
    })

    return getFullPath(foundEntity)
  }

  const transformLink = (entityType: StrapiEntityType, entityId: string) => {
    // for some reason the entityType arrives here ending with '\'
    switch (entityType.replace('\\', '')) {
      case 'page':
        return getEntityPathById(pagesData?.pages?.data, entityId)

      case 'article':
        return getEntityPathById(articlesData?.articles?.data, entityId)

      case 'workshop':
        return getEntityPathById(workshopsData?.workshops?.data, entityId)

      case 'faqCategory':
        return getEntityPathById(faqCategoriesData?.faqCategories?.data, entityId)

      case 'document':
        return getEntityPathById(documentsData?.documents?.data, entityId)

      case 'service':
        return getEntityPathById(servicesData?.services?.data, entityId)

      default:
        return null
    }
  }

  const transformOloMarkdownLinks = (content: MarkdownProps['content']) => {
    if (!content) return null

    // this regex matches the [something](~something) pattern
    const OLO_LINK_REGEX = /\\\[(.*?)\\]\\\((\\~.*?)\\\)/g

    return content.replaceAll(OLO_LINK_REGEX, (_, title, rawLink) => {
      const [, type, id] = rawLink.split('/')

      return `[${title}](${transformLink(type, id) ?? '#'})`
    })
  }

  return { transformOloMarkdownLinks }
}
