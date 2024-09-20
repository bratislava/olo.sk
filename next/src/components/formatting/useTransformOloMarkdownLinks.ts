import { useTranslation } from 'next-i18next'
import replaceAsync from 'string-replace-async'

import { MarkdownProps } from '@/src/components/formatting/Markdown'
import { client } from '@/src/services/graphql'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

export const useTransformOloMarkdownLinks = () => {
  const { getFullPath } = useGetFullPath()

  const { i18n } = useTranslation()
  const locale = i18n.language

  const transformLink = async (entityType: string, entityId: string) => {
    const type = entityType.replace('\\', '')

    if (type === 'page') {
      const { page } = await client.PageById({ id: entityId, locale })

      return page?.data ? getFullPath(page.data) : null
    }

    if (type === 'article') {
      const { article } = await client.ArticleById({ id: entityId, locale })

      return article?.data ? getFullPath(article.data) : null
    }

    if (type === 'document') {
      const { document } = await client.DocumentById({ id: entityId })

      return document?.data ? getFullPath(document.data) : null
    }

    if (type === 'service') {
      const { service } = await client.ServiceById({ id: entityId, locale })

      return service?.data ? getFullPath(service.data) : null
    }

    if (type === 'workshop') {
      const { workshop } = await client.WorkshopById({ id: entityId })

      return workshop?.data ? getFullPath(workshop.data) : null
    }

    return null
  }

  const transformOloMarkdownLinks = async (content: MarkdownProps['content']) => {
    if (!content) return null

    // this regex matches the [something](~/something/number) pattern
    const OLO_LINK_REGEX = /\[(.*?)]\((~\/.*?\/\d+?)\)/g

    return replaceAsync(content, OLO_LINK_REGEX, async (match, title, rawLink) => {
      // e.g. ~/page/123 -> ['~', 'page', '123']
      const [, entityType, entityId] = rawLink.split('/')
      const transformedLink = await transformLink(entityType, entityId)

      return `[${title}](${transformedLink ?? '#'})`
    })
  }

  return { transformOloMarkdownLinks }
}
