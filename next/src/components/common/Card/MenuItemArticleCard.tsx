import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
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
  tagText,
  imgSrc,
  className,
}: MenuItemArticleCardProps) => {
  return (
    <NavMenuLink href={linkHref} className={cn(className)}>
      <CardBase>
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          {/* 6.25rem = 100px */}
          <CardImage imgSrc={imgSrc} className="aspect-[100/56] w-[6.25rem] rounded-lg" />
          <div className="center flex flex-col gap-3">
            <Tag variant="without-bg" text={tagText} />
            <Typography
              variant="h6"
              className_onlyWhenNecessary="line-clamp-1 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
          </div>
        </div>
      </CardBase>
    </NavMenuLink>
  )
}

export default MenuItemArticleCard
