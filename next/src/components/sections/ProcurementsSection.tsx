import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { Link } from 'react-aria-components'

import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
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

    const detailLink = (
      <Link className="underline" href={tender.tender_link} target="_blank">
        Detail
      </Link>
    )
    const tenderValue =
      tender.tender_predicted_value && locale
        ? formatPrice(Number(tender.tender_predicted_value), locale)
        : ''

    // find the right Date where tender is valid
    const tenderRounds = tender.tender_rounds?.tender_round

    console.log(
      'tenderRounds',
      ['2021-10-28 14:36:44', '2022-10-28 14:36:44'].sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime(),
      ),
    )
    const tenderFrom = Array.isArray(tenderRounds)
      ? tenderRounds?.sort(
          (tenderA, tenderB) =>
            new Date(tenderB.tender_round_from).getTime() -
            new Date(tenderA.tender_round_to).getTime(),
        )[0]?.tender_round_from
      : tenderRounds?.tender_round_from

    // format date
    const formattedTenderFrom = new Date(tenderFrom).toLocaleDateString('sk-SK', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })

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

const ProcurementsSection = ({ section, className }: Props) => {
  const { title, content, tendersPerPage } = section ?? {}

  const { i18n, t } = useTranslation()
  const locale = i18n.language

  const [currentPage, setCurrentPage] = useState(1)

  const {
    isPending: pendingRunning,
    isError: isErrorRunning,
    error: errorRunning,
    data: procurementsRunning,
  } = useQuery({
    queryKey: ['Procurements running', tendersPerPage, currentPage], // TODO: add query key for pagination ['Procurement', currentPage]
    queryFn: () => fetchProcurementsFromApiRunning('running', currentPage, tendersPerPage ?? 5),
    placeholderData: keepPreviousData,
  })

  // TODO: add another param to fetch for ended procurements

  const visibleColumns = [
    'tender_name',
    'tender_public_name',
    'tender_number',
    'tender_ted_number',
    'tender_reference_number',
    'tender_predicted_value',
    'tender_from',
    'tender_link',
  ]

  const allColumns = [
    'tender_name', // nazov predmetu zakazky
    'tender_public_name', // druh postupu
    'tender_number', // cislo spisu VO
    'tender_ted_number', // cislo vestnika EU
    'tender_reference_number', // Číslo z vestníka VO,
    'tender_predicted_value', // predpokladaná hodnota
    'tender_from', // lehota na predkladanie ponuk (odtial: tender_round_from)
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
    tender_from: 'Lehota na predkladanie ponúk',
    tender_link: 'Detail zakázky',
  }

  return (
    <SectionContainer background="primary" className={cn('py-6 lg:py-12', className)}>
      <SectionHeader title={title} />
      <Markdown content={content} />

      {pendingRunning ? (
        <Typography variant="p-default">{t('common.loading')}</Typography>
      ) : isErrorRunning ? (
        <Typography>{errorRunning.message}</Typography>
      ) : (
        <div className="py-6">
          <Table
            rows={getRows(procurementsRunning, allColumns, locale)}
            visibleColumns={visibleColumns}
            allColumns={allColumns}
            headerAllColumns={headerAllColumns}
          />
        </div>
      )}
      <div className="flex justify-between">
        <div>Zobrazujeme x z y</div>
        <PaginationWithInput
          currentPage={Number(currentPage)}
          totalCount={
            tendersPerPage && procurementsRunning?.tendersCount
              ? Math.round(procurementsRunning.tendersCount / tendersPerPage)
              : 0
          }
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </SectionContainer>
  )
}

export default ProcurementsSection
