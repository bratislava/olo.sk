import { NavigationConfig } from '@/src/services/navigation/typesNavigation'

export const fetchNonCachedNavigationFromApi = async <Config extends NavigationConfig>(
  config: Config,
) => {
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
