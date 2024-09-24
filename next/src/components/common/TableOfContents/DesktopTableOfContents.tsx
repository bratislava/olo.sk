import { useTranslation } from 'next-i18next'

import Content from '@/src/components/common/TableOfContents/Content'
import useHeadings from '@/src/components/common/TableOfContents/useHeadings'
import Typography from '@/src/components/common/Typography/Typography'

const HEADER_OFFSET = 130

type Props = {
  rootId: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=3480-20808&node-type=symbol&t=Sy9hMuI0D75f0mQ0-0
 *
 */

const DesktopHeadingsList = ({ rootId }: Props) => {
  const { t } = useTranslation()

  const headings = useHeadings(rootId)

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary">
      <div className="flex flex-col overflow-hidden border-b border-border-default p-6">
        <Typography variant="h5">{t('serviceSection.headingsList')}</Typography>
      </div>
      <Content headings={headings} headerOffset={HEADER_OFFSET} />
    </div>
  )
}

export default DesktopHeadingsList
