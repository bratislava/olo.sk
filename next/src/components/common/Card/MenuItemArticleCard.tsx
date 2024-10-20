import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import Tag from '@/src/components/common/Tag/Tag'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MenuItemArticleCardProps = {
  title: string
  linkHref: string
  tagText?: string
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
    <NavMenuLink href={linkHref} isCard className={cn(className)}>
      <CardBase variant="unstyled">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <CardImage
            imgSrc={imgSrc}
            // 6.25rem = 100px
            className="aspect-[100/56] w-[6.25rem] rounded-lg"
          />

          <div className="flex flex-col justify-center gap-3">
            {tagText ? <Tag variant="without-bg" text={tagText} /> : null}
            <Typography
              variant="h6"
              className_onlyWhenNecessary="lg:group-hover/CardBase:underline text-wrap lg:line-clamp-1"
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
