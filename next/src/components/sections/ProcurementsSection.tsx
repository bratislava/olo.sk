import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import Table from '@/src/components/common/Table/Table'
import Typography from '@/src/components/common/Typography/Typography'
import Markdown from '@/src/components/formatting/Markdown'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { ProcurementsSectionFragment } from '@/src/services/graphql/api'
import { fetchProcurementsFromApiRunning } from '@/src/services/josephine/fetchProcurementsFromApi'
import { allColumns, getRows, visibleColumns } from '@/src/services/josephine/utils'
import cn from '@/src/utils/cn'

type Props = {
  section: ProcurementsSectionFragment | null | undefined
  className?: string
}

// TODO: add ended Procurements if needed
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

  // Type has to be specified to satisfy Typescript so "headerAllColumns[column]" can be used
  const headerAllColumns: { [key: string]: string } = {
    tender_name: t('procurements.tenderName'),
    tender_public_name: t('procurements.type'),
    tender_number: t('procurements.voNumber'),
    tender_ted_number: t('procurements.euNumber'),
    tender_reference_number: t('procurements.voNumber2'),
    tender_predicted_value: t('procurements.value'),
    tender_from: t('procurements.deadline'),
    tender_link: t('procurements.detail'),
  }

  return (
    <SectionContainer background="primary" className={cn('py-6 lg:py-12', className)}>
      <SectionHeader title={title} />
      <div className='pt-4'><Markdown content={content} /></div>

      {pendingRunning ? (
        <Typography variant="p-default">{t('common.loading')}</Typography>
      ) : isErrorRunning ? (
        <Typography>{errorRunning.message}</Typography>
      ) : (
        <div className="py-6">
          <div className="pb-4">
            <Typography variant="h4">{t('procurements.actual')}</Typography>
          </div>
          <Table
            rows={getRows(procurementsRunning, locale, t('procurements.detail'))}
            visibleColumns={visibleColumns}
            allColumns={allColumns}
            headerAllColumns={headerAllColumns}
          />
        </div>
      )}
      <div className="flex justify-end">
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
