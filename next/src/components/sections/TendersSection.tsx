import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import Table from '@/src/components/common/Table/Table'
import Typography from '@/src/components/common/Typography/Typography'
import Markdown from '@/src/components/formatting/Markdown'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { TendersSectionFragment } from '@/src/services/graphql/api'
import { fetchTendersFromApiRunning } from '@/src/services/josephine/fetchTendersFromApi'
import { allColumns, getRows, visibleColumns } from '@/src/services/josephine/utils'
import cn from '@/src/utils/cn'

type Props = {
  section: TendersSectionFragment | null | undefined
  className?: string
}

// TODO: add ended Tenders if needed
const TendersSection = ({ section, className }: Props) => {
  const { title, content, tendersPerPage } = section ?? {}

  const { i18n, t } = useTranslation()
  const locale = i18n.language

  const [currentPage, setCurrentPage] = useState(1)

  const {
    isPending: pendingRunning,
    isError: isErrorRunning,
    error: errorRunning,
    data: tendersRunning,
  } = useQuery({
    queryKey: ['TendersRunning', tendersPerPage, currentPage],
    queryFn: () => fetchTendersFromApiRunning('running', currentPage, tendersPerPage ?? 5),
    placeholderData: keepPreviousData,
  })

  // Type has to be specified to satisfy Typescript so "headerAllColumns[column]" can be used
  const headerAllColumns: { [key: string]: string } = {
    tender_name: t('tenders.tenderName'),
    tender_public_name: t('tenders.type'),
    tender_number: t('tenders.voNumber'),
    tender_ted_number: t('tenders.euNumber'),
    tender_reference_number: t('tenders.voNumber2'),
    tender_predicted_value: t('tenders.value'),
    tender_from: t('tenders.deadline'),
    tender_link: t('tenders.detail'),
  }

  return (
    <SectionContainer background="primary" className={cn('py-6 lg:py-12', className)}>
      <SectionHeader title={title} />
      <div className="pt-4">
        <Markdown content={content} />
      </div>

      {pendingRunning ? (
        <Typography variant="p-default">{t('common.loading')}</Typography>
      ) : isErrorRunning ? (
        <Typography>{errorRunning.message}</Typography>
      ) : (
        <>
          <div className="py-6">
            <div className="pb-4">
              <Typography variant="h4">{t('tenders.actual')}</Typography>
            </div>
            <Table
              rows={getRows(tendersRunning, locale, t('tenders.detail'))}
              visibleColumns={visibleColumns}
              allColumns={allColumns}
              headerAllColumns={headerAllColumns}
            />
          </div>

          {tendersPerPage && tendersRunning?.tendersCount && (
            <div className="flex justify-end">
              <PaginationWithInput
                currentPage={currentPage}
                totalCount={Math.round(tendersRunning.tendersCount / tendersPerPage)}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          )}
        </>
      )}
    </SectionContainer>
  )
}

export default TendersSection
