import { ContentTypePathPrefixesMap } from '@/src/services/navigation/parseContentTypePathPrefixes'
import { PagePathsMap } from '@/src/services/navigation/parseTopLevelPages'

export type NavigationObject = {
  contentTypePathPrefixesMap: ContentTypePathPrefixesMap
  pagePathsMap: PagePathsMap
}

export type NavigationConfig = {
  cacheTtl: number
  host: string
}
