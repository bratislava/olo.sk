import { Tag, TagProps } from 'react-aria-components'

import cn from '@/src/utils/cn'

type ChipProps = TagProps & {
  variant?: 'large' | 'small'
}

/**
/* Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/Chip/Chip.tsx
/* FIGMA: https://www.figma.com/file/17wbd0MDQcMW9NbXl6UPs8/DS-ESBS%2BBK%3A-Component-library?node-id=10277%3A26616&mode=dev
/* For Chips to be responsive, we don't have three separate variants as in style guide, but only two which respond to window size.
 */

const Chip = ({ variant = 'large', ...props }: ChipProps) => {
  return (
    <Tag
      {...props}
      className={cn(
        // TODO: change text-white to correct token
        'flex shrink-0 cursor-pointer items-center rounded-lg',
        'border-2 border-border-default outline-none focus-visible:ring focus-visible:ring-offset-2',
        'selected:border-action-content-default selected:bg-action-content-default selected:text-white',
        'hover:border-action-content-hover hover:bg-action-content-hover hover:text-white',
        {
          'px-3 py-1.5 text-size-p-small lg:px-4 lg:py-2.5 lg:text-size-p-default':
            variant === 'large',
          'px-2 text-size-p-small lg:px-3 lg:py-1.5': variant === 'small',
        },
      )}
    />
  )
}

export default Chip
