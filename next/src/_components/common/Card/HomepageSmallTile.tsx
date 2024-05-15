import CardBase from '@/_components/common/Card/CardBase'
import Icon, { iconNameMap } from '@/_components/common/Icon/Icon'
import Link from '@/_components/common/Link/Link'
import Typography from '@/_components/common/Typography/Typography'

type HomepageSmallTileProps = {
  title: string
  linkHref: string
  iconName?: keyof typeof iconNameMap
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
      <div className="flex flex-col items-center gap-6 px-4 py-5">
        <div className="rounded-[20px] bg-background-secondary p-4">
          <Icon name={iconName} className="size-6" />
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
