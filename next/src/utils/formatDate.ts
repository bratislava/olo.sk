/*
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/utils/formatDate.ts
 */

// "01. 03. 2021"
export const formatDate = (dateISOString: string | undefined | null) => {
  if (!dateISOString) return ''
  const date = new Date(dateISOString)

  return date.toLocaleDateString('sk-SK', { month: '2-digit', day: '2-digit', year: 'numeric' })
}
