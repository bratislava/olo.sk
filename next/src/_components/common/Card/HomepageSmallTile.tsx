import CardBase from '@/_components/common/Card/CardBase'
import Icon, { iconNameMap } from '@/_components/common/Icon/Icon'
import Link from '@/_components/common/Link/Link'
import Typography from '@/_components/common/Typography/Typography'

type HomepageSmallTileProps = {
  title: string
  iconName: keyof typeof iconNameMap
  linkHref: string
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1202-14657&mode=dev
 */

const HomepageSmallTile = ({ title, className, linkHref, iconName }: HomepageSmallTileProps) => {
  return (
    <CardBase variant="solid" className={className}>
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
