import { Configuration, JobOfferApiFactory } from '@/src/services/openapi-nalgoo'

export const apiUrl = process.env.NEXT_NALGOO_URL

const configuration = new Configuration({
  basePath: apiUrl,
  apiKey: process.env.NEXT_NALGOO_API_KEY,
})

export const clientApi = {
  ...JobOfferApiFactory(configuration),
}
