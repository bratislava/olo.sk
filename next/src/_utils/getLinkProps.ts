import { ReactNode } from 'react'

// import { LinkPlausibleProps } from '@/components/common/Link/Link'
import { LinkFragment } from '@/services/graphql/api'

export type LinkProps = {
  children: ReactNode
  href: string
  target?: '_blank'
  // plausibleProps?: LinkPlausibleProps
}

/*
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/utils/getCommonLinkProps.ts
 */

export const getLinkProps = (link: LinkFragment | null | undefined) => {
  let href = '#'
  let label = link?.label ?? null
  let target: '_blank' | undefined

  // TODO Add article, branch and document links
  if (link?.page?.data?.attributes?.slug) {
    label = link.page.data.attributes.title
    href = `/pages/${link.page.data.attributes.slug}`
  } else if (link?.url) {
    if (!link.label) label = link.url
    href = link.url
    target = '_blank'
  }

  // const plausibleProps: LinkPlausibleProps | undefined = link?.plausibleId
  //   ? { id: link.plausibleId }
  //   : undefined

  return { children: label, href, target }
}
