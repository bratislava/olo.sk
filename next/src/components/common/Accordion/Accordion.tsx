import { ReactNode } from 'react'

import AnimateHeight from '@/src/components/common/Accordion/AnimateHeight'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export type AccordionProps = {
  title: string
  hasBottomBorder?: boolean
  hasHeaderBorder?: boolean
  sectionPadding?: boolean // mainly used in HeadingsList
  icon?: ReactNode
  children?: ReactNode
  className?: string
  innerClassName?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=39-2172&mode=dev
 *
 * Component inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/ui/Accordion/Accordion.tsx
 *
 */

const Accordion = ({
  title,
  icon,
  hasBottomBorder,
  hasHeaderBorder = false,
  sectionPadding = false,
  children,
  className,
  innerClassName,
}: AccordionProps) => {
  return (
    <AnimateHeight
      isVisible
      className="relative ring-offset-2 focus-within:z-1 focus-within:[&:has(:focus-visible)]:ring"
    >
      <div>
        <details className={cn('group flex w-full flex-col', className)}>
          <summary
            className={cn(
              'relative flex cursor-pointer items-center justify-center gap-4 text-left after:absolute after:inset-0',
              'group-open:pb-0 focus:outline-none',
              {
                'group-open:py-5 group-open:pb-3 lg:group-open:pb-4': !icon && !hasHeaderBorder,
                'py-5': !icon,
                'py-4 group-open:pb-4': hasHeaderBorder,
                'px-4': sectionPadding,
                'p-4 group-open:p-4 lg:p-8 lg:group-open:p-8': icon,
                'group-open:border-none': !icon && !hasHeaderBorder,
                'group-open:border-b group-open:border-border-default': icon || hasHeaderBorder,
                'border-b border-border-default': hasBottomBorder,
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
                className="size-6 fill-content-secondary transition-transform group-open:rotate-180"
              />
            </div>
          </summary>

          <div
            className={cn(
              {
                'border-b border-border-default': !sectionPadding,
                'pb-5': !icon && !sectionPadding,
                'px-4': sectionPadding,
              },
              innerClassName,
            )}
          >
            {children}
          </div>
        </details>
      </div>
    </AnimateHeight>
  )
}

export default Accordion
