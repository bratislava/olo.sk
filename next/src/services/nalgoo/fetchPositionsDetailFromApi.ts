import { JobOfferDetail } from '@/src/services/todo-openapi-nalgoo'

export const fetchPositionsDetailFromApi = async (id: string) => {
  // more information about "expand" param can be found in the swagger documentation for Nalgoo https://ats.nalgoo.com/api/rest/swagger.json?api_key=
  const fetchUrl = `http://${process.env.NEXT_PUBLIC_NEXT_HOST}/api/nalgoo-detail/?id=${id}`

  const response = await fetch(fetchUrl)

  return response.json() as Promise<JobOfferDetail>
}
