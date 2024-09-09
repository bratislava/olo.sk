import { client } from '@/src/services/graphql'
import { parseContentTypePathPrefixes } from '@/src/services/navigation/parseContentTypePathPrefixes'
import { parseTopLevelPages } from '@/src/services/navigation/parseTopLevelPages'

// Inspired by City Library - Navikronos custom plugin
// https://github.com/bratislava/mestskakniznica.sk/blob/dfef31c799e1a903af4fa30aa1be5c3f27ae5418/next/navikronos/internal/fetch.ts

/**
 * Fetches and parses navigation data from the Strapi client.
 * It's wrapped into function to use it both directly and in API handler.
 *
 */
export const fetchNonCachedNavigation = async () => {
  const { navigation, topLevelPages } = await client.Navigation({ locale: 'sk' }) // TODO locale

  const { pagePathsMap } = parseTopLevelPages(topLevelPages?.data ?? [])
  const { contentTypePathPrefixesMap } = parseContentTypePathPrefixes(navigation, pagePathsMap)

  return {
    contentTypePathPrefixesMap,
    pagePathsMap,
  }
}
