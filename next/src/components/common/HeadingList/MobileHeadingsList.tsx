import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import Accordion from '@/src/components/common/Accordion/Accordion'
import Typography from '@/src/components/common/Typography/Typography'

type Props = {
  rootId: string
}

type HeadingLevels = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = {
  id: string
  text: string
  level: number
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=3480-20808&node-type=symbol&t=Sy9hMuI0D75f0mQ0-0
 *
 */

const MobileHeadingsList = ({ rootId }: Props) => {
  const [headings, setHeadings] = useState<HeadingProps[]>([])
  const { t } = useTranslation()

  useEffect(() => {
    const queryList = `#${rootId} h2, #${rootId} h3, #${rootId} h4, #${rootId} h5, #${rootId} h6`
    const headingsNodeList = document.querySelectorAll(queryList)
    // eslint-disable-next-line unicorn/prefer-spread
    const headingsElements = Array.from(headingsNodeList).map((element) => ({
      id: element.id,
      text: element.textContent ?? '""',
      level: Number(String(element.tagName).slice(1).toLowerCase() as HeadingLevels),
    })) // mapping from a list of nodes to array

    setHeadings(headingsElements)
  }, [rootId])

  return (
    <div className="border-b border-border-default">
      <Accordion title={t('serviceSection.headingsList')} hasHeaderBorder sectionPadding>
        <div className="flex flex-col">
          {headings &&
            headings.map((heading) => {
              return heading.level === 2 ? (
                <div className="py-3">
                  <Typography key={heading.text} variant="p-default">
                    {heading.text}
                  </Typography>
                </div>
              ) : (
                <div className="flex flex-col px-4 first:pt-4 last:pb-4">
                  <div
                    className={`${heading.level === 3 ? 'pl-4' : 'pl-8'} flex flex-col border-l border-border-default pb-2`}
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
