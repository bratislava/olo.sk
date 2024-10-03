import Icon from '@/src/components/common/Icon/Icon'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MobileNavMenuContentHeaderProps = {
  label: string
  className?: string
}

const MobileNavMenuContentHeader = ({ label, className }: MobileNavMenuContentHeaderProps) => {
  const { setMenuValue } = useNavMenuContext()

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={() => setMenuValue('')}
      className={cn(
        '-mx-4 flex w-dvw cursor-pointer items-center justify-center border-b border-border-default px-6 py-4',
        className,
      )}
    >
      <Typography variant="p-default-black">{label}</Typography>
      <Icon name="sipka-dolava" className="absolute left-1" />
    </div>
  )
}

export default MobileNavMenuContentHeader
