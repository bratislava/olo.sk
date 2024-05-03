import { ReactNode, useState } from 'react'

import Button from '@/_components/common/Button/Button'
import Icon from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'
import cn from '@/app/_utils/cn'

export type AccordionProps = {
  title: string
  hasBottomBorder?: boolean
  children?: ReactNode
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=39-2172&mode=dev
 *
 * Component inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/ui/Accordion/Accordion.tsx
 * Animation inspired by https://www.youtube.com/watch?v=oOXExNA8A48
 */

const Accordion = ({ title, hasBottomBorder = true, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative bg-background-primary px-4 lg:px-5">
      <div
        className={cn('flex w-full flex-col py-5', {
          'border-b border-border-default ': hasBottomBorder,
        })}
      >
        <div className="flex items-center gap-4 text-left">
          <Typography variant="h5" className_onlyWhenNecessary="grow min-w-0 break-words">
            {title}
          </Typography>
          {/* TODO add aria-label */}
          <Button
            variant="unstyled"
            aria-label=""
            className="after:absolute after:inset-0"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            onPress={() => {
              setIsOpen(!isOpen)
            }}
            icon={
              <Icon
                name="chevron-dole"
                className={cn('size-6 transform fill-content-secondary duration-300 ease-in-out', {
                  'rotate-180 ': isOpen,
                })}
              />
            }
          />
        </div>
        <div
          className={cn('grid overflow-hidden transition-all duration-300 ease-in-out', {
            'lg:pt-4s grid-rows-[1fr] pt-3 opacity-100': isOpen,
            'grid-rows-[0fr] opacity-0 ': !isOpen,
          })}
        >
          <div className={cn('overflow-hidden')}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
