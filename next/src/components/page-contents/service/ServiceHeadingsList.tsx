import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

import Typography from '@/src/components/common/Typography/Typography'

type Props = {
  rootId: string
}

type HeadingLevels = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = {
  id: string
  text: string
  level: HeadingLevels
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=3480-20808&node-type=symbol&t=Sy9hMuI0D75f0mQ0-0
 *
 */

const ServiceHeadingsList = ({ rootId }: Props) => {
  const [headings, setHeadings] = useState<HeadingProps[]>([])
  const { t } = useTranslation()

  useEffect(() => {
    const queryList = `#${rootId} h2, #${rootId} h3, #${rootId} h4, #${rootId} h5, #${rootId} h6`
    const headingsNodeList = document.querySelectorAll(queryList)
    // eslint-disable-next-line unicorn/prefer-spread
    const headingsElements = Array.from(headingsNodeList).map((element) => ({
      id: element.id,
      text: element.textContent ?? '""',
      level: String(element.tagName).toLowerCase() as HeadingLevels,
    })) // mapping from a list of nodes to array
    setHeadings(headingsElements)
  }, [rootId])

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary">
      <div className="flex flex-col overflow-hidden border-b border-border-default p-6">
        <Typography variant="h5">{t('serviceSection.headingsList')}</Typography>
      </div>
      <div className="flex flex-col px-6 py-2">
        {headings &&
          headings.map((heading) => {
            return heading.level === 'h2' ? (
              <div className="py-4">
                <Typography key={heading.text} variant="p-default">
                  {heading.text}
                </Typography>
              </div>
            ) : (
              <div className="flex flex-col px-4 first:pt-4 last:pb-4">
                <div className="flex border-l border-border-default pl-4">
                  <Typography key={heading.text} variant="p-default">
                    {heading.text}
                  </Typography>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ServiceHeadingsList
