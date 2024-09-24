import { useTranslation } from 'next-i18next'

import Accordion from '@/src/components/common/Accordion/Accordion'
import useHeadings from '@/src/components/common/HeadingList/useHeadings'
import { handleOnClick } from '@/src/components/common/HeadingList/utils'
import Typography from '@/src/components/common/Typography/Typography'

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
        <div key="table-of-contents" className="flex flex-col">
          {headings &&
            headings.map((heading) => {
              return heading.level === 2 ? (
                <div
                  key={heading.id}
                  className="cursor-pointer py-3 hover:font-black"
                  onClick={() =>
                    handleOnClick({ id: `#${heading.id}`, headerOffset: HEADER_OFFSET })
                  }
                  aria-hidden="true"
                >
                  <Typography key={heading.id} variant="p-default">
                    {heading.text}
                  </Typography>
                </div>
              ) : (
                <div
                  className="flex cursor-pointer flex-col px-4 first:pt-4 last:pb-4 hover:font-black"
                  key={heading.id}
                >
                  <div
                    className={`${heading.level === 3 ? 'pl-4' : 'pl-8'} flex flex-col border-l border-border-default pb-2`}
                    onClick={() =>
                      handleOnClick({ id: `#${heading.id}`, headerOffset: HEADER_OFFSET })
                    }
                    aria-hidden="true"
                  >
                    <Typography key={heading.text} variant="p-default">
                      {heading.text}
                    </Typography>
                  </div>
                </div>
              )
            })}
        </div>
      </Accordion>
    </div>
  )
}

export default MobileHeadingsList
