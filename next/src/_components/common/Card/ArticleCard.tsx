import { useTranslation } from 'next-i18next'

import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import CardImage from '@/_components/common/Card/CardImage'
import Tag from '@/_components/common/Tag/Tag'
import Typography from '@/_components/common/Typography/Typography'

type ArticleCardProps = {
  title: string
  linkHref: string
  tagText: string
  className?: string
  imgSrc?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=8-4117&mode=dev
 */

const ArticleCard = ({ title, className, linkHref, imgSrc, tagText }: ArticleCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase variant="unstyled" className={className}>
      <div className="flex flex-col gap-4">
        <CardImage imgSrc={imgSrc} className="aspect-[70/39] rounded-lg" />
        <div className="flex grow flex-col justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Tag variant="without-bg" text={tagText} />
            <Typography
              variant="h4"
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

export default ArticleCard
