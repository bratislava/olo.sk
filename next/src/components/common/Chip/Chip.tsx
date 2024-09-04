import { Tag, TagProps } from 'react-aria-components'

import cn from '@/src/utils/cn'

type ChipProps = TagProps & {
  variant?: 'single-choice' | 'multiple-choice'
  size?: 'large' | 'small'
}

/**
/* Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/Chip/Chip.tsx
/* Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-26087&t=q3TaCd5xx2i98Dw1-4
/* For Chips to be responsive, we don't have three separate variants as in style guide, but only two which respond to window size.
 */

const Chip = ({ variant = 'single-choice', size = 'large', ...props }: ChipProps) => {
  // TODO implement multiple-choice variant

  return (
    <Tag
      {...props}
      className={cn(
        'flex shrink-0 cursor-pointer items-center rounded-lg border border-border-default bg-background-primary',
        'outline-none transition-all focus-visible:ring focus-visible:ring-offset-2',
        {
          'hover:border-border-hover selected:border-action-background-default selected:bg-action-background-default':
            variant === 'single-choice',
        },
        {
          'px-3 py-1.5 text-size-p-small lg:px-4 lg:py-2.5 lg:text-size-p-default':
            size === 'large',
          'px-2 text-size-p-small lg:px-3 lg:py-1.5': size === 'small',
        },
      )}
    />
  )
}

export default Chip
