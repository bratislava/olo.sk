import { Link } from 'react-aria-components'

import { TendersObject } from '@/src/services/josephine/fetchTenders'
import { formatDate } from '@/src/utils/formatDate'
import { formatPrice } from '@/src/utils/formatPrice'

export const visibleColumns = [
  'tender_name',
  'tender_public_name',
  'tender_number',
  'tender_ted_number',
  'tender_reference_number',
  'tender_predicted_value',
  'tender_from',
  'tender_link',
]

export const allColumns = [
  'tender_name',
  'tender_public_name',
  'tender_number',
  'tender_ted_number',
  'tender_reference_number',
  'tender_predicted_value',
  'tender_from',
  'tender_link',
]

/**
 * data modification for Tenders object
 * @param tenders - object from the fetch from Josephine
 * @param locale
 * @param detailString - translated string
 * @return Simplified object for Tenders
 *
 */
export const getRows = (tenders: TendersObject, locale: string, detailString: string) => {
  if (!tenders?.tenders || !allColumns) return []

  return tenders?.tenders.map((tender) => {
    const tenderAttributes = Object.fromEntries(
      Object.entries(tender).filter((tenderEntry: [key: string, value: string]) =>
        allColumns.includes(tenderEntry[0]),
      ),
    )

    const detailLink = (
      <Link variant="underlined" href={tender.tender_link} target="_blank">
        {detailString}
      </Link>
    )
    const tenderValue =
      tender.tender_predicted_value && locale
        ? formatPrice(Number(tender.tender_predicted_value), locale)
        : ''

    const formattedTenderFrom = formatDate(tender.tender_rounds_mapped.toString())

    return {
      id: tender.tender_id,
      attributes: {
        ...tenderAttributes,
        tender_link: detailLink,
        tender_predicted_value: tenderValue,
        tender_from: formattedTenderFrom,
      },
    }
  })
}
