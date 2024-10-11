import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { Link } from 'react-aria-components'

import Table from '@/src/components/common/Table/Table'
import Typography from '@/src/components/common/Typography/Typography'
import Markdown from '@/src/components/formatting/Markdown'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { ProcurementsSectionFragment } from '@/src/services/graphql/api'
import { ProcurementObject } from '@/src/services/josephine/fetchProcurements'
import { fetchProcurementsFromApiRunning } from '@/src/services/josephine/fetchProcurementsFromApi'
import cn from '@/src/utils/cn'
import { formatPrice } from '@/src/utils/formatPrice'

type Props = {
  section: ProcurementsSectionFragment | null | undefined
  className?: string
}

const getRows = (procurements: ProcurementObject, allColumns: string[], locale: string) => {
  if (!procurements?.tenders || !allColumns) return []

  return procurements?.tenders.map((tender) => {
    const tenderAttributes = Object.fromEntries(
      Object.entries(tender).filter((entry: [key: string, value: string]) =>
        allColumns.includes(entry[0]),
      ),
    )

    const detailLink = <Link href={tender.tender_link}>{}</Link>
    const tenderValue =
      tender.tender_predicted_value && locale
        ? formatPrice(Number(tender.tender_predicted_value), locale)
        : ''

    return {
      id: tender.tender_id,
      attributes: {
        ...tenderAttributes,
        tender_link: detailLink,
        tender_predicted_value: tenderValue,
      },
    }
  })
}

const ProcurementsSection = ({ section, className }: Props) => {
  const { title, content } = section ?? {}

  const { i18n } = useTranslation()
  const locale = i18n.language

  const {
    isPending: pendingRunning,
    isError: isErrorRunning,
    error: errorRunning,
    data: procurementsRunning,
  } = useQuery({
    queryKey: ['Procurements running'], // TODO: add query key for pagination ['Procurement', currentPage]
    queryFn: () => fetchProcurementsFromApiRunning(7),
  })

  // TODO: add another param to fetch for ended

  const visibleColumns = [
    'tender_name',
    'tender_public_name',
    'tender_number',
    'tender_ted_number',
    'tender_reference_number',
    'tender_predicted_value',
    // 'tender_rounds', // TODO: wait for discussion
    'tender_link',
  ]

  const allColumns = [
    'tender_name', // nazov predmetu zakazky
    'tender_public_name', // druh postupu
    'tender_number', // cislo spisu VO
    'tender_ted_number', // cislo vestnika EU
    'tender_reference_number', // Číslo z vestníka VO,
    'tender_predicted_value', // predpokladaná hodnota
    // 'tender_rounds', // lehota na predkladanie ponuk (odtial: tender_round_from)
    'tender_link', // link na detail
  ]

  // TODO translations
  // Type has to be specified to satisfy Typescript so "headerAllColumns[column]" can be used
  const headerAllColumns: { [key: string]: string } = {
    tender_name: 'Názov predmetu zákazky',
    tender_public_name: 'Druh postupu',
    tender_number: 'Číslo spisu VO',
    tender_ted_number: 'Číslo z vestníka EU',
    tender_reference_number: 'Číslo z vestníka VO',
    tender_predicted_value: 'Predpokladaná hodnota',
    // tender_rounds: 'Lehota na predkladanie ponúk',
    tender_link: 'Detail zakázky',
  }

  return (
    <SectionContainer background="primary" className={cn('py-6 lg:py-12', className)}>
      <SectionHeader title={title} />
      <Markdown content={content} />

      {pendingRunning ? (
        <Typography>Loading...</Typography>
      ) : isErrorRunning ? (
        <Typography>{errorRunning.message}</Typography>
      ) : (
        <Table
          rows={getRows(procurementsRunning, allColumns, locale)}
          visibleColumns={visibleColumns}
          allColumns={allColumns}
          headerAllColumns={headerAllColumns}
        />
      )}
    </SectionContainer>
  )
}

export default ProcurementsSection
