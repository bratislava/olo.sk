import { fetchNonCachedNavigation } from '@/src/services/navigation/fetchNonCachedNavigation'
import { fetchNonCachedNavigationFromApi } from '@/src/services/navigation/fetchNonCachedNavigationFromApi'
import { ContentTypePathPrefixesMap } from '@/src/services/navigation/parseContentTypePathPrefixes'
import { PagePathsMap } from '@/src/services/navigation/parseTopLevelPages'
import { NavigationConfig, NavigationObject } from '@/src/services/navigation/typesNavigation'

// Inspired by City Library - Navikronos custom plugin
// https://github.com/bratislava/mestskakniznica.sk/blob/dfef31c799e1a903af4fa30aa1be5c3f27ae5418/next/navikronos/internal/fetch.ts

let cache: {
  timestamp: number
  value: {
    contentTypePathPrefixesMap: ContentTypePathPrefixesMap
    pagePathsMap: PagePathsMap
  }
} | null = null

/**
 * Fetches and cache navigation data directly from the Strapi client.
 * Use this function in getStaticProps or getServerSideProps.
 *
 * @param config
 */
export const fetchNavigation = async <Config extends NavigationConfig>(config: Config) => {
  if (cache?.timestamp && cache.timestamp + config.cacheTtl > Date.now()) {
    return cache.value
  }

  // TODO types - make it type safe, now it's any
  const navigation = (await fetchNonCachedNavigation()) as NavigationObject

  const { contentTypePathPrefixesMap, pagePathsMap } = navigation

  const value = { contentTypePathPrefixesMap, pagePathsMap }
  cache = { timestamp: Date.now(), value }

  return value
}

/**
 * Fetches and cache navigation data from the Strapi client via API endpoint.
 * Use this function in middleware.
 * It's not possible to use graphql client in middleware, because it depends on node runtime and middleware uses edge runtime,
 * so we fetch data through API endpoint.
 *
 * @param config
 */
export const fetchNavigationFromApi = async <Config extends NavigationConfig>(config: Config) => {
  if (cache?.timestamp && cache.timestamp + config.cacheTtl > Date.now()) {
    return cache.value
  }

  // TODO types - make it type safe, now it's any
  const navigation = (await fetchNonCachedNavigationFromApi(config)) as NavigationObject

  const { contentTypePathPrefixesMap, pagePathsMap } = navigation

  const value = { contentTypePathPrefixesMap, pagePathsMap }
  cache = { timestamp: Date.now(), value }

  return value
}
