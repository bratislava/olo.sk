import Icon, { isBaIcon } from '@/src/components/common/Icon/Icon'
import OloIcon, { isOloIcon } from '@/src/components/common/Icon/OloIcon'

type IconWrapperProps = {
  name: string
}

const IconWrapper = ({ name }: IconWrapperProps) => {
  return isBaIcon(name) ? (
    <Icon name={name} className="size-5 lg:size-6" />
  ) : isOloIcon(name) ? (
    <OloIcon name={name} className="size-5 lg:size-6" />
  ) : null
}

export default IconWrapper
