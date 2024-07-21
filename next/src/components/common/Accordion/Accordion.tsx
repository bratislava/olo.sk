import React, { ReactNode } from 'react'

import AnimateHeight from '@/src/components/common/Accordion/AnimateHeight'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export type AccordionProps = {
  title: string
  hasBottomBorder?: boolean
  icon?: ReactNode
  children?: ReactNode
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=39-2172&mode=dev
 *
 * Component inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/ui/Accordion/Accordion.tsx
 *
 */

const Accordion = ({ title, icon, hasBottomBorder, children, className }: AccordionProps) => {
  return (
    <AnimateHeight isVisible className="relative">
      <div className="bg-background-primary">
        <details
          className={cn(
            'group flex w-full flex-col p-4 lg:p-5',
            {
              'px-4 py-0 lg:py-0': hasBottomBorder && icon,
            },
            className,
          )}
        >
          <summary
            className={cn(
              'relative flex cursor-pointer items-center justify-center gap-4 text-left after:absolute after:inset-0',
              'ring-offset-2 focus:outline-none focus:ring',
              {
                'px-0 py-4 group-open:border-b group-open:border-border-default lg:py-8':
                  hasBottomBorder && icon,
              },
            )}
          >
            {icon}
            <Typography variant="h5" className_onlyWhenNecessary="grow min-w-0 break-words">
              {title}
            </Typography>

            <div aria-hidden>
              <Icon
                name="chevron-dole"
                className="size-6 transform fill-content-secondary transition-transform group-open:rotate-180"
              />
            </div>
          </summary>

          <div className={cn({ 'group-open:pt-3 group-open:lg:pt-4': icon === undefined })}>
            {children}
          </div>
        </details>
      </div>
    </AnimateHeight>
  )
}

export default Accordion
