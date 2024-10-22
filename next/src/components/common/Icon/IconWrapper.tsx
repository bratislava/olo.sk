import Icon, { isBaIcon } from '@/src/components/common/Icon/Icon'
import OloIcon, { isOloIcon } from '@/src/components/common/Icon/OloIcon'
import cn from '@/src/utils/cn'

type IconWrapperProps = {
  name: string
  className?: string
}

const IconWrapper = ({ name, className }: IconWrapperProps) => {
  return isBaIcon(name) ? (
    <Icon name={name} className={cn('size-5 lg:size-6', className)} />
  ) : isOloIcon(name) ? (
    <OloIcon name={name} className={cn('size-5 lg:size-6', className)} />
  ) : null
}

export default IconWrapper
