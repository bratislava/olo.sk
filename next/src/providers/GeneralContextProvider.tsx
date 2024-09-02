import { createContext, ReactNode, useContext, useMemo } from 'react'

import { GeneralQuery } from '@/src/services/graphql/api'
import {
  ContentTypePathPrefixesMap,
  parseContentTypePathPrefixes,
} from '@/src/services/navigation/parseContentTypePathPrefixes'
import { PagePathsMap, parseTopLevelPages } from '@/src/services/navigation/parseTopLevelPages'

type GeneralContextType = Omit<GeneralQuery, 'navigation' | 'topLevelPages'> & {
  pagePathsMap: PagePathsMap
  contentTypePathPrefixesMap: ContentTypePathPrefixesMap
}

const GeneralContext = createContext<GeneralContextType | null>(null)

export const GeneralContextProvider = ({
  children,
  general,
}: {
  children: ReactNode
  general: GeneralQuery
}) => {
  // pagePathsMap is used to get path for Pages from their slug
  const { pagePathsMap } = useMemo(() => {
    return parseTopLevelPages(general.topLevelPages?.data ?? [], '')
  }, [general.topLevelPages?.data])

  // contentTypePathPrefixesMap is used to get path of Content Type's parent page, e.g. path prefix for Articles or Documents etc.
  const { contentTypePathPrefixesMap } = useMemo(() => {
    return parseContentTypePathPrefixes(general.navigation, pagePathsMap)
  }, [general.navigation, pagePathsMap])

  return (
    <GeneralContext.Provider value={{ ...general, pagePathsMap, contentTypePathPrefixesMap }}>
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
