import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { BasicHeaderSectionFragment } from '@/src/services/graphql/api'

type Props = {
  header: BasicHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1189-12938&m=dev
 */

const PageHeaderBasic = ({ header }: Props) => {
  const { title, text } = header

  return (
    <SectionContainer background="secondary">
      <HeaderTitleText title={title} text={text} />
    </SectionContainer>
  )
}

export default PageHeaderBasic
