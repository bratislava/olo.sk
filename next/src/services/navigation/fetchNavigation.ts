import { ContentTypePathPrefixesMap } from '@/src/services/navigation/parseContentTypePathPrefixes'
import { NavigationConfig } from '@/src/services/navigation/typesNavigation'

// Inspired by City Library - Navikronos custom plugin
// https://github.com/bratislava/mestskakniznica.sk/blob/dfef31c799e1a903af4fa30aa1be5c3f27ae5418/next/navikronos/internal/fetch.ts

let cache: {
  timestamp: number
  value: {
    contentTypePathPrefixesMap: ContentTypePathPrefixesMap
  }
} | null = null

const fetchNonCached = async (host: string) => {
  /**
   * The request is handled on server, so we have to use http instead of https.
   * `pathname` contains leading "/"
   */
  const fetchUrl = `http://${host}/api/navigation`

  const response = await fetch(fetchUrl)

  if (!response.ok) {
    throw new Error(await response.text())
  }

  return response.json()
}

export const fetchNavigation = async <Config extends NavigationConfig>(
  config: Config,
  host: string,
) => {
  if (cache?.timestamp && cache.timestamp + config.cacheTtl > Date.now()) {
    return cache.value
  }

  // TODO types
  const { contentTypePathPrefixesMap } = await fetchNonCached(host)

  const value = { contentTypePathPrefixesMap }
  cache = { timestamp: Date.now(), value }

  return value
}
