import { NextRequest, NextResponse } from 'next/server'

import { fetchNavigationFromApi } from '@/src/services/navigation/fetchNavigation'
import { NavigationConfig } from '@/src/services/navigation/typesNavigation'

// Inspired by City Library - Navikronos custom plugin
// https://github.com/bratislava/mestskakniznica.sk/blob/dfef31c799e1a903af4fa30aa1be5c3f27ae5418/next/navikronos/getNavikronosMiddleware.ts

/**
 * This middleware rewrites path based on given path and data from Strapi "Navigation" content type.
 *
 * @param config
 */

export const getNavigationMiddleware = (config: NavigationConfig) => {
  // eslint-disable-next-line consistent-return,sonarjs/cognitive-complexity
  return async (request: NextRequest) => {
    const { contentTypePathPrefixesMap } = await fetchNavigationFromApi(config)

    const pathnameString = request.nextUrl.pathname
    const pathname = pathnameString.split('/')

    /**
     * Important note:
     * - `pathnameString` and `articlesPath` contains leading slash
     * - `articlesPath` contains also trailing slash
     * - `pathnameString` does not contain trailing slash
     *
     * Therefore, when we do `pathnameString.startsWith(articlesPath)` it does not match articles' parent page, but matches only paths that contains also article's slug.
     */
    const articlesPath = contentTypePathPrefixesMap.article
      ? `${contentTypePathPrefixesMap.article}/`
      : null
    const documentsPath = contentTypePathPrefixesMap.document
      ? `${contentTypePathPrefixesMap.document}/`
      : null
    const faqCategoriesPath = contentTypePathPrefixesMap.faqCategory
      ? `${contentTypePathPrefixesMap.faqCategory}/`
      : null
    const servicesPath = contentTypePathPrefixesMap.service
      ? `${contentTypePathPrefixesMap.service}/`
      : null
    const workshopsPath = contentTypePathPrefixesMap.workshop
      ? `${contentTypePathPrefixesMap.workshop}/`
      : null

    // const pathnameString = `/${pathname.join('/')}`

    let destination: string | null = null

    if (articlesPath && pathnameString.startsWith(articlesPath)) {
      destination = `/articles/${pathname.at(-1)}`
    }
    if (documentsPath && pathnameString.startsWith(documentsPath)) {
      destination = `/documents/${pathname.at(-1)}`
    }
    if (faqCategoriesPath && pathnameString.startsWith(faqCategoriesPath)) {
      destination = `/faq-categories/${pathname.at(-1)}`
    }
    if (servicesPath && pathnameString.startsWith(servicesPath)) {
      destination = `/services/${pathname.at(-1)}`
    }
    if (workshopsPath && pathnameString.startsWith(workshopsPath)) {
      destination = `/workshops/${pathname.at(-1)}`
    }

    if (typeof destination === 'string' && destination.length > 0) {
      const newUrl = new URL(destination, request.nextUrl.origin)
      console.log('Middleware: newUrl', newUrl.toString())

      return NextResponse.rewrite(newUrl)
    }
  }
}
