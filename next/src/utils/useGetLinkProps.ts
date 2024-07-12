import { ReactNode } from 'react'

// import { LinkPlausibleProps } from '@/src/components/common/Link/Link'
import { LinkFragment } from '@/src/services/graphql/api'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

export type LinkProps = {
  children: ReactNode
  href: string
  target?: '_blank'
  // plausibleProps?: LinkPlausibleProps
}

/*
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/utils/getCommonLinkProps.ts
 */

export const useGetLinkProps = () => {
  const { getFullPath } = useGetFullPath()

  const getLinkProps = (link: LinkFragment | null | undefined) => {
    let href = '#'
    let label = link?.label ?? undefined
    let target: '_blank' | undefined

    if (!link) {
      return { children: label, href } // TODO
    }

    // TODO Add article, branch and document links
    if (link.page?.data?.attributes) {
      label = link.label ?? link.page.data.attributes.title
      href = getFullPath(link.page.data) ?? '#'
    } else if (link.article?.data?.attributes) {
      label = link.label ?? link.article.data.attributes.title
      href = getFullPath(link.article.data) ?? '#'
    } else if (link?.url) {
      label = link.label ?? link.url
      href = link.url
      target = '_blank'
    }

    // const plausibleProps: LinkPlausibleProps | undefined = link?.plausibleId
    //   ? { id: link.plausibleId }
    //   : undefined

    return { children: label, href, target }
  }

  return { getLinkProps }
}
