import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'

import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { VacanciesSectionFragment } from '@/src/services/graphql/api'
import { fetchOpenPositionsFromApi } from '@/src/services/nalgoo/fetchOpenPositionsFromApi'
import cn from '@/src/utils/cn'

type Props = {
  section: VacanciesSectionFragment | null | undefined
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-24959&t=GS5LOvt0zHZ1kXjq-4
 */

const VacanciesSection = ({ section, className }: Props) => {
  const { i18n } = useTranslation()
  const locale = i18n.language
  const { title, text, backgroundColorVacancies: backgroundColor } = section ?? {}

  const { data } = useQuery({
    queryKey: ['OpenPositions', locale],
    queryFn: () => fetchOpenPositionsFromApi(),
  })

  console.log('data', data)

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer
      background={backgroundColor ?? undefined}
      className={cn('py-6 lg:py-12', className)}
    >
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={`${text}`} />

        {/* TODO get and show positions from Nalgoo */}
        <div className="h-40 rounded-xl border border-dashed bg-background-primary" />
      </div>
    </SectionContainer>
  )
}

export default VacanciesSection
