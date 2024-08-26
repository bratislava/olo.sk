import cn from '@/src/utils/cn'

type SpinnerBase = {
  size?: 'large' | 'medium' | 'small'
  className?: string
}

/*
 * Figma: https://www.figma.com/file/17wbd0MDQcMW9NbXl6UPs8/DS-ESBS%2BBK%3A-Component-library?type=design&node-id=10-218&mode=design&t=1cbJf1GcvzdMNzSh-0
 *
 * Note: Figma is not followed exactly, because this implementation was much easier. Sizes should be implemented as in Figma.
 */

const Spinner = ({ size = 'medium', className }: SpinnerBase) => {
  const style = cn(
    'animate-spin rounded-[50%] border-solid border-content-primary border-t-content-secondaryInverted',
    {
      'h-5 w-5 border-2': size === 'small',
      'h-8 w-8 border-3': size === 'medium',
      'h-12 w-12 border-4': size === 'large',
    },
  )

  return (
    <div
      className={cn(
        {
          'h-6 w-6 p-0.5': size === 'small',
          'h-10 w-10 p-1': size === 'medium',
          'h-16 w-16 p-2': size === 'large',
        },
        className,
      )}
    >
      <div className={style} />
    </div>
  )
}

export default Spinner
