import { MouseEventHandler, PropsWithChildren } from 'react'

import cn from '@/src/utils/cn'

type ClickableContainerProps = {
  handleClick: MouseEventHandler<HTMLDivElement>
  className?: string
}

// TODO: We could move this into the Layout folder
const ClickableContainer = ({
  children,
  handleClick,
  className,
}: PropsWithChildren<ClickableContainerProps>) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={cn(className)} onClick={handleClick}>
      {children}
    </div>
  )
}

export default ClickableContainer
