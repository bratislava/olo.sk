import { useTranslation } from 'next-i18next'

import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import CardImage from '@/_components/common/Card/CardImage'
import Tag from '@/_components/common/Tag/Tag'
import Typography from '@/_components/common/Typography/Typography'
import cn from '@/app/_utils/cn'

type ArticleRowCardProps = {
  title: string
  linkHref: string
  tagText: string
  className?: string
  imgSrc?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=44-5000&m=dev
 */

const ArticleRowCard = ({ title, className, linkHref, imgSrc, tagText }: ArticleRowCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase variant="unstyled" className={cn('rounded-lg', className)}>
      <div className="flex flex-col items-start gap-3 lg:flex-row lg:gap-8">
        {/* 6.25rem = 100px, 14.5rem = 232px */}
        <CardImage
          imgSrc={imgSrc}
          className="aspect-[232/130] rounded-lg max-lg:w-[6.25rem] lg:w-[14.5rem]"
        />
        <div className="flex flex-col items-start self-stretch max-lg:gap-3 lg:justify-between">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <Tag variant="without-bg" text={tagText} />
            <Typography
              variant="h5"
              className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
          </div>
          <Button variant="black-link" href={linkHref} asLink stretched>
            {t('common.readMore')}
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default ArticleRowCard
