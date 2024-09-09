import { createContext, ReactNode, useContext } from 'react'

import { GeneralQuery } from '@/src/services/graphql/api'
import { ContentTypePathPrefixesMap } from '@/src/services/navigation/parseContentTypePathPrefixes'
import { PagePathsMap } from '@/src/services/navigation/parseTopLevelPages'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'

type GeneralContextType = GeneralQuery & {
  pagePathsMap: PagePathsMap
  contentTypePathPrefixesMap: ContentTypePathPrefixesMap
}

const GeneralContext = createContext<GeneralContextType | null>(null)

// pagePathsMap is used to get path for Pages from their slug
// contentTypePathPrefixesMap is used to get path of Content Type's parent page, e.g. path prefix for Articles or Documents etc.
type GeneralContextProviderProps = {
  children: ReactNode
  general: GeneralQuery
  navigation: NavigationObject
}

export const GeneralContextProvider = ({
  children,
  general,
  navigation,
}: GeneralContextProviderProps) => {
  return (
    <GeneralContext.Provider value={{ ...general, ...navigation }}>
      {children}
    </GeneralContext.Provider>
  )
}

export const useGeneralContext = () => {
  const result = useContext(GeneralContext)

  // General context is required in the whole app, so it's correct that it fails when used and not initialized.
  if (!result) {
    throw new Error('GeneralContext is not initialized.')
  }

  return result
}
