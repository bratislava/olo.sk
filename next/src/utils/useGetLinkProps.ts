import { ReactNode } from 'react'

// import { LinkPlausibleProps } from '@/src/components/common/Link/Link'
import {
  FormCtaBannerLinkFragment,
  LinkFragment,
  MenuLinkFragment,
} from '@/src/services/graphql/api'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

export type LinkProps = {
  children: ReactNode
  href: string
  target?: '_blank'
  // plausibleProps?: LinkPlausibleProps
}

// eslint-disable-next-line const-case/uppercase
export const ROUTES = {
  form: '/form',
}

/*
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/utils/getCommonLinkProps.ts
 */

export const useGetLinkProps = () => {
  const { getFullPath } = useGetFullPath()

  // eslint-disable-next-line sonarjs/cognitive-complexity
  const getLinkProps = (
    link: LinkFragment | MenuLinkFragment | FormCtaBannerLinkFragment | null | undefined,
  ) => {
    let href = '#'
    let label = link?.label ?? ''
    let target: '_blank' | undefined

    if (!link) {
      return { children: label, href } // TODO
    }

    // Some content types are not in MenuLinkFragment, so we have to check if they exist in the object
    if ('page' in link && link.page?.data?.attributes) {
      label = link.label ?? link.page.data.attributes.title
      href = getFullPath(link.page.data) ?? '#'
    } else if ('article' in link && link.article?.data?.attributes) {
      label = link.label ?? link.article.data.attributes.title
      href = getFullPath(link.article.data) ?? '#'
    } else if ('branch' in link && link.branch?.data?.attributes) {
      label = link.label ?? link.branch.data.attributes.title
      href = getFullPath(link.branch.data) ?? '#'
    } else if ('workshop' in link && link.workshop?.data?.attributes) {
      label = link.label ?? link.workshop.data.attributes.title
      href = getFullPath(link.workshop.data) ?? '#'
    } else if ('document' in link && link.document?.data?.attributes) {
      label = link.label ?? link.document.data.attributes.title
      href = getFullPath(link.document.data) ?? '#'
    } else if ('form' in link && link.form?.data?.attributes) {
      label = link.label ?? link.form.data.attributes.title
      href = `${ROUTES.form}/${link.form.data.attributes.slug}` ?? '#'
    } else if ('email' in link && link.email) {
      label = link.label ?? link.email
      href = `mailto:${link.email}`
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
