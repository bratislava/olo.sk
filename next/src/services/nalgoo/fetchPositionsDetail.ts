/**
 * Fetches and parses client data from the Nalgoo client.
 * It's wrapped into function to use it both directly and in API handler.
 *
 */
export const fetchPositionsDetail = async (id: string | undefined | string[]) => {
  // TODO: this fetch should not directly fetch the data, but use OpenAPI generation and client with requests
  // console.log('query', query)

  const response = await fetch(
    `${process.env.NEXT_NALGOO_URL}/job-offer/${id}?expand=regions,employment_forms,positions,min_education,educations,workMode,position_type,business_unit,custom_fields&api_key=${process.env.NEXT_PUBLIC_NALGOO_API_KEY}`,
  )

  return response.json()
}
