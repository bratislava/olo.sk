import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'

import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { VacanciesSectionFragment } from '@/src/services/graphql/api'
import {
  fetchProcurementsFromApiAll,
  fetchProcurementsFromApiEnded,
  fetchProcurementsFromApiRunning,
} from '@/src/services/josephine/fetchProcurementsFromApi'
import cn from '@/src/utils/cn'

type Props = {
  section: VacanciesSectionFragment | null | undefined
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-24959&t=GS5LOvt0zHZ1kXjq-4
 */

const ProcurementsSection = ({ section, className }: Props) => {
  const { t } = useTranslation()
  const { title, text, backgroundColorVacancies: backgroundColor } = section ?? {}

  const {
    isPending: pendingRunning,
    isError: isErrorRunning,
    error: errorRunning,
    data: procurementsRunning,
  } = useQuery({
    queryKey: ['Procurements running'],
    queryFn: fetchProcurementsFromApiRunning,
  })

  const {
    isPending: pendingEnded,
    isError: isErrorEnded,
    error: errorEnded,
    data: procurementsEnded,
  } = useQuery({
    queryKey: ['Procurements ended'],
    queryFn: fetchProcurementsFromApiEnded,
  })

  const {
    isPending: pendingAll,
    isError: isErrorAll,
    error: errorAll,
    data: procurementsAll,
  } = useQuery({
    queryKey: ['Procurements all'],
    queryFn: fetchProcurementsFromApiAll,
  })

  console.log('data running', procurementsRunning)

  console.log('data ended', procurementsEnded)

  console.log('data all', procurementsAll)

  return (
    <SectionContainer
      background={backgroundColor ?? undefined}
      className={cn('py-6 lg:py-12', className)}
    >
      {pendingRunning ? (
        <Typography>Loading...</Typography>
      ) : isErrorRunning ? (
        <Typography>{errorRunning.message}</Typography>
      ) : (
        <>
          <Typography>Running</Typography>
          <Typography>{JSON.stringify(procurementsRunning, null, 2)}</Typography>
        </>
      )}

      {pendingEnded ? (
        <Typography>Loading...</Typography>
      ) : isErrorEnded ? (
        <Typography>{errorEnded.message}</Typography>
      ) : (
        <>
          <Typography>Ended</Typography>
          <Typography>{JSON.stringify(procurementsEnded, null, 2)}</Typography>
        </>
      )}

      {pendingAll ? (
        <Typography>Loading...</Typography>
      ) : isErrorAll ? (
        <Typography>{errorAll.message}</Typography>
      ) : (
        <>
          <Typography>All procurements</Typography>
          <Typography>{JSON.stringify(procurementsAll, null, 2)}</Typography>
        </>
      )}
    </SectionContainer>
  )
}

export default ProcurementsSection
