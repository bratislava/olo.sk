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

const fetchNonCached = async <Config extends NavigationConfig>(config: Config) => {
  /**
   * The request is handled on server, so we have to use http instead of https.
   * `pathname` contains leading "/"
   */
  const fetchUrl = `http://${config.host}/api/navigation`

  const response = await fetch(fetchUrl)

  if (!response.ok) {
    throw new Error(await response.text())
  }

  return response.json()
}

export const fetchNavigation = async <Config extends NavigationConfig>(config: Config) => {
  if (cache?.timestamp && cache.timestamp + config.cacheTtl > Date.now()) {
    return cache.value
  }

  // TODO types - make it type safe, now it's any
  const navigation = (await fetchNonCached(config)) as NavigationObject

  const { contentTypePathPrefixesMap, pagePathsMap } = navigation

  const value = { contentTypePathPrefixesMap, pagePathsMap }
  cache = { timestamp: Date.now(), value }

  return value
}
