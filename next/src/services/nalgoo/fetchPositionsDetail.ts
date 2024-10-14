/**
 * Fetches and parses client data from the Nalgoo client.
 * It's wrapped into function to use it both directly and in API handler.
 *
 */
export const fetchPositionsDetail = async (id: string | undefined | string[]) => {
  // TODO: this fetch should not directly fetch the data, but use OpenAPI generation and client with requests
  // more information about "expand" param can be found in the swagger documentation for Nalgoo https://ats.nalgoo.com/api/rest/swagger.json?api_key=
  const response = await fetch(
    // eslint-disable-next-line no-secrets/no-secrets
    `${process.env.NEXT_NALGOO_URL}/job-offer/${id}?expand=regions,employment_forms,positions,min_education,educations,workMode,position_type,business_unit,custom_fields&api_key=${process.env.NEXT_NALGOO_API_KEY}`,
  )

  return response.json()
}
