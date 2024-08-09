import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import Link from '@/src/components/common/Link/Link'
import Tag from '@/src/components/common/Tag/Tag'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MenuItemArticleCardProps = {
  title: string
  linkHref: string
  tagText: string
  imgSrc?: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1949-19741&m=dev
 */

const MenuItemArticleCard = ({
  title,
  linkHref,
  imgSrc,
  tagText,
  className,
}: MenuItemArticleCardProps) => {
  return (
    <CardBase className={cn('rounded-lg', className)}>
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        {/* 6.25rem = 100px */}
        <CardImage imgSrc={imgSrc} className="aspect-[100/56] w-[6.25rem] rounded-lg" />
        <div className="center flex flex-col gap-3">
          <Tag variant="without-bg" text={tagText} />
          <Link variant="unstyled" href={linkHref} stretched>
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
