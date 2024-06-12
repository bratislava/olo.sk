import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type CategoryCardProps = {
  title: string
  linkHref: string
  className?: string
  imgSrc?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=8-4128&m=dev
 */

const CategoryCard = ({ title, className, linkHref, imgSrc }: CategoryCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase variant="unstyled" className={cn('rounded-lg', className)}>
      <div className="flex flex-col gap-4">
        <CardImage imgSrc={imgSrc} className="aspect-square rounded-lg" />
        <div className="flex flex-col gap-2">
          <Typography
            variant="h5"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          <Button variant="black-link" href={linkHref} asLink stretched>
            {t('common.readMore')}
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default CategoryCard
