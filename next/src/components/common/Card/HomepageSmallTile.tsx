import CardBase from '@/src/components/common/Card/CardBase'
import Icon, { isBaIcon } from '@/src/components/common/Icon/Icon'
import OloIcon, { isOloIcon } from '@/src/components/common/Icon/OloIcon'
import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'

type HomepageSmallTileProps = {
  title: string
  linkHref: string
  // TODO change when common icon name type is ready
  iconName?: string
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2096-19809&m=dev
 */

const HomepageSmallTile = ({
  title,
  linkHref,
  iconName = 'live-help',
  hasWhiteBackground,
  className,
}: HomepageSmallTileProps) => {
  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
    >
      <div className="flex flex-col items-center gap-6 px-4 py-5 text-center">
        <div className="rounded-[20px] bg-background-secondary p-4">
          {
            // TODO Extract this into a separate component
            isBaIcon(iconName) ? (
              <Icon name={iconName} className="size-6" />
            ) : isOloIcon(iconName) ? (
              <OloIcon name={iconName} className="size-6" />
            ) : null
          }
        </div>
        <div className="flex flex-col gap-4">
          <Link variant="unstyled" href={linkHref} stretched>
            <Typography
              variant="h6"
              className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
          </Link>
        </div>
      </div>
    </CardBase>
  )
}

export default HomepageSmallTile
