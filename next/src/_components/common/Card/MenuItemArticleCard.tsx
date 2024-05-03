import CardBase from '@/_components/common/Card/CardBase'
import CardImage from '@/_components/common/Card/CardImage'
import Link from '@/_components/common/Link/Link'
import Tag from '@/_components/common/Tag/Tag'
import Typography from '@/_components/common/Typography/Typography'

type MenuItemArticleCardProps = {
  title: string
  linkHref: string
  tagText: string
  className?: string
  imgSrc?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1949-19741&m=dev
 */

const MenuItemArticleCard = ({
  title,
  className,
  linkHref,
  imgSrc,
  tagText,
}: MenuItemArticleCardProps) => {
  return (
    <CardBase className={className}>
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        {/* 6.25rem = 100px */}
        <CardImage imgSrc={imgSrc} className="aspect-[100/56] w-[6.25rem] rounded-lg" />
        <div className="center flex flex-col gap-3">
          <Tag variant="without-bg" text={tagText} />
          {/* TODO Add aria-label */}
          <Link variant="unstyled" href={linkHref} aria-label="" stretched>
            <Typography
              variant="h6"
              className_onlyWhenNecessary="line-clamp-1 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
          </Link>
        </div>
      </div>
    </CardBase>
  )
}

export default MenuItemArticleCard
