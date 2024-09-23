import { useTranslation } from 'next-i18next'

import useHeadings from '@/src/components/common/HeadingList/useHeadings'
import { handleOnClick } from '@/src/components/common/HeadingList/utils'
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
      <div className="flex flex-col px-6 py-2">
        {headings &&
          headings.map((heading) => {
            return heading.level === 2 ? (
              <div
                className="py-4"
                key={heading.id}
                onClick={() => handleOnClick({ id: `#${heading.id}`, headerOffset: HEADER_OFFSET })}
                aria-hidden="true"
              >
                <Typography key={heading.text} variant="p-default">
                  {heading.text}
                </Typography>
              </div>
            ) : (
              <div key={heading.id} className="flex flex-col px-4 first:pt-4 last:pb-4">
                <div
                  className={`${heading.level === 3 ? 'pl-4' : 'pl-8'} flex flex-col border-l border-border-default pb-3`}
                  onClick={() =>
                    handleOnClick({ id: `#${heading.id}`, headerOffset: HEADER_OFFSET })
                  }
                  aria-hidden="true"
                  key={heading.id}
                >
                  <Typography variant="p-default">{heading.text}</Typography>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default DesktopHeadingsList
