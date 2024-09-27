export const fetchOpenPositionsFromApi = async () => {
  const fetchUrl = `http://${config.host}/api/nalgoo`
  const response = await fetch(fetchUrl)

  //   const result = await fetch(
  //     `https://ats.nalgoo.com/api/rest/job-offer?api_key=${process.env.NEXT_PUBLIC_NALGOO_API_KEY}`,
  //   )

  if (!response.ok) {
    throw new Error(await response.text())
  }

  return response.json()
}
