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
  let target: '_blank' | undefined

  // TODO Add article, branch and document links
  if (link?.page?.data?.attributes?.slug) {
    href = `/pages/${link.page.data.attributes.slug}`
  } else if (link?.url) {
    href = link.url
    target = '_blank'
  }

  // const plausibleProps: LinkPlausibleProps | undefined = link?.plausibleId
  //   ? { id: link.plausibleId }
  //   : undefined

  return { children: link?.label ?? null, href, target }
}
