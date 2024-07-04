import CardBase from '@/src/components/common/Card/CardBase'
import OloIcon, { oloIconNameMap } from '@/src/components/common/Icon/OloIcon'
import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'

type MenuItemWorkshopCardProps = {
  title: string
  linkHref: string
  subText: string
  iconName?: keyof typeof oloIconNameMap
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1949-19741&m=dev
 */

const MenuItemWorkshopCard = ({
  title,
  className,
  linkHref,
  iconName = 'live-help',
  subText,
}: MenuItemWorkshopCardProps) => {
  return (
    <CardBase className={className}>
      <div className="flex items-start gap-4">
        <div className="rounded-[20px] bg-background-secondary p-4">
          <OloIcon name={iconName} className="size-6" />
        </div>
        <div className="flex flex-col items-start gap-2 self-stretch">
          <Link variant="unstyled" href={linkHref} stretched>
            <Typography
              variant="h6"
              className_onlyWhenNecessary="line-clamp-1 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
          </Link>
          <Typography variant="p-small">{subText}</Typography>
        </div>
      </div>
    </CardBase>
  )
}

export default MenuItemWorkshopCard
