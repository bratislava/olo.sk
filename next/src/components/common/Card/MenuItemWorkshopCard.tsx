import CardBase from '@/src/components/common/Card/CardBase'
import IconWrapper from '@/src/components/common/Icon/IconWrapper'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MenuItemWorkshopCardProps = {
  title: string
  linkHref: string
  subText?: string
  iconName?: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1949-19741&m=dev
 */

const MenuItemWorkshopCard = ({
  title,
  subText: mostRecentWorkshopDate,
  linkHref,
  iconName = 'live-help',
  className,
}: MenuItemWorkshopCardProps) => {
  return (
    <NavMenuLink href={linkHref} isCard className={cn(className)}>
      <CardBase variant="unstyled">
        <div className="flex items-start gap-4">
          <div
            // 1.25rem = 20px
            className="rounded-[1.25rem] bg-background-secondary p-4"
          >
            <IconWrapper name={iconName} className="size-6" />
          </div>

          <div
            className={cn('flex flex-col items-start gap-2 self-stretch', {
              'justify-center': !mostRecentWorkshopDate,
            })}
          >
            <Typography
              variant="h6"
              className_onlyWhenNecessary="lg:group-hover/CardBase:underline text-wrap"
            >
              {title}
            </Typography>
            {mostRecentWorkshopDate ? (
              <Typography variant="p-small">{mostRecentWorkshopDate}</Typography>
            ) : null}
          </div>
        </div>
      </CardBase>
    </NavMenuLink>
  )
}

export default MenuItemWorkshopCard
