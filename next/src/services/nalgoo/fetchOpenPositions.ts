/**
 * Fetches and parses client data from the Nalgoo client.
 * It's wrapped into function to use it both directly and in API handler.
 *
 */
export const fetchOpenPositions = async () => {
  // TODO: this fetch should not directly fetch the data, but use OpenAPI generation and client with requests

  const response = await fetch(
    // eslint-disable-next-line no-secrets/no-secrets
    `${process.env.NEXT_NALGOO_URL}/job-offer?expand=company_sectors,regions,employment_forms,position_type,business_unit,custom_fields&api_key=${process.env.NEXT_PUBLIC_NALGOO_API_KEY}`,
  )

  return response.json()
}
