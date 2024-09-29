import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MobileNavMenuContentHeaderProps = {
  label: string
  className?: string
}

const MobileNavMenuContentHeader = ({ label, className }: MobileNavMenuContentHeaderProps) => {
  return (
    <div
      className={cn(
        '-mx-4 flex w-dvw items-center justify-center border-y border-border-default px-6 py-4',
        className,
      )}
    >
      <Typography variant="p-default-black">{label}</Typography>
      <Icon name="sipka-dolava" className="absolute left-1" />
    </div>
  )
}

export default MobileNavMenuContentHeader
