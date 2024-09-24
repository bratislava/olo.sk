import { useTranslation } from 'next-i18next'

import Accordion from '@/src/components/common/Accordion/Accordion'
import Content from '@/src/components/common/TableOfContents/Content'
import useHeadings from '@/src/components/common/TableOfContents/useHeadings'

const HEADER_OFFSET = 90

type Props = {
  rootId: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=3480-20808&node-type=symbol&t=Sy9hMuI0D75f0mQ0-0
 *
 */

const MobileHeadingsList = ({ rootId }: Props) => {
  const { t } = useTranslation()
  const headings = useHeadings(rootId)

  return (
    <div className="border-b border-border-default">
      <Accordion title={t('serviceSection.headingsList')} hasHeaderBorder sectionPadding>
        <Content headings={headings} headerOffset={HEADER_OFFSET} />
      </Accordion>
    </div>
  )
}

export default MobileHeadingsList
