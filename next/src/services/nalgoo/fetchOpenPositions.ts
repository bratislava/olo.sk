// import { clientApiclient } from '@/src/services/graphql'
import { clientApi } from '@/src/services/nalgoo/client-api'
// import { parseContentTypePathPrefixes } from '@/src/services/navigation/parseContentTypePathPrefixes'
// import { parseTopLevelPages } from '@/src/services/navigation/parseTopLevelPages'

/**
 * Fetches and parses client data from the Nalgoo client.
 * It's wrapped into function to use it both directly and in API handler.
 *
 */
export const fetchOpenPositions = async () => {
  return clientApi.jobOfferGet()
}
