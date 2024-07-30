import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'

type Props = {
  title: string
  perex?: string | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1189-12938&m=dev
 */

const PageHeaderBasic = ({ title, perex }: Props) => {
  return (
    <SectionContainer background="secondary">
      <HeaderTitleText title={title} text={perex} />
    </SectionContainer>
  )
}

export default PageHeaderBasic
