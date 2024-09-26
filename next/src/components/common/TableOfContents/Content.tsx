import { useState } from 'react'

import Button from '@/src/components/common/Button/Button'
import cn from '@/src/utils/cn'

type HeadingProps = {
  level: number
  text: string
  id: string
}

type Props = {
  headings: HeadingProps[] | null
  headerOffset: number
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=3480-20808&node-type=symbol&t=Sy9hMuI0D75f0mQ0-0
 *
 */

const Content = ({ headings, headerOffset }: Props) => {
  const [activeHeadingId, setActiveHeadingId] = useState<string>()

  const handleContentItemPress = (id: string) => {
    const href = `#${id}`
    const element = document.querySelector(href)
    if (!element) return

    const elementPosition = element?.getBoundingClientRect().top || 0 // current offset regarding to the current window scroll
    const windowOffset = window.scrollY
    const offsetPosition = elementPosition + windowOffset - headerOffset

    setActiveHeadingId(id)
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  return (
    <div key="table-of-contents" className="flex flex-col lg:px-6 lg:py-2">
      {headings &&
        headings.map((heading) => {
          return heading.level === 2 ? (
            <Button
              key={heading.id}
              variant="unstyled"
              onPress={() => handleContentItemPress(heading.id)}
              className={cn('py-3 text-left hover:font-black lg:py-4', {
                'font-black': heading.id === activeHeadingId,
              })}
            >
              {heading.text}
            </Button>
          ) : (
            <div key={heading.id} className="flex flex-col px-4 first:pt-4 last:pb-4">
              <Button
                key={heading.id}
                variant="unstyled"
                onPress={() => handleContentItemPress(heading.id)}
                className={cn(
                  'border-l border-border-default py-2 pl-4 text-left hover:font-black',
                  {
                    'font-black': heading.id === activeHeadingId,
                  },
                )}
              >
                {heading.text}
              </Button>
            </div>
          )
        })}
    </div>
  )
}

export default Content
