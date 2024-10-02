import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'

import JobPositionRowCard from '@/src/components/common/Card/JobPositionRowCard'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { VacanciesSectionFragment } from '@/src/services/graphql/api'
import { fetchOpenPositionsFromApi } from '@/src/services/nalgoo/fetchOpenPositionsFromApi'
import { JobOfferListItem } from '@/src/services/todo-openapi-nalgoo'
import cn from '@/src/utils/cn'

type Props = {
  section: VacanciesSectionFragment | null | undefined
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-24959&t=GS5LOvt0zHZ1kXjq-4
 */

const VacanciesSection = ({ section, className }: Props) => {
  const { i18n, t } = useTranslation()
  const locale = i18n.language
  const { title, backgroundColorVacancies: backgroundColor } = section ?? {}

  const { error, data } = useQuery({
    queryKey: ['OpenPositions', locale],
    queryFn: () => fetchOpenPositionsFromApi(),
  })

  const openPositions: JobOfferListItem[] = data

  return (
    <SectionContainer
      background={backgroundColor ?? undefined}
      className={cn('py-6 lg:py-12', className)}
    >
      <div className="flex flex-col gap-6">
        <Typography variant="h2">{title}</Typography>
        {error && <Typography variant="h6">{t('errorMessage.integration')}</Typography>}
        <div className="divide-y divide-border-default rounded-xl bg-background-primary">
          {openPositions &&
            openPositions.map((position) => {
              return (
                <JobPositionRowCard
                  key={position.id}
                  // TODO: temporary strings as placeholder
                  metaData={['Oddelenie', 'Úväzok', 'Plat']}
                  linkHref={`/${position.id}`}
                  title={position.name}
                />
              )
            })}
        </div>
      </div>
    </SectionContainer>
  )
}

export default VacanciesSection
