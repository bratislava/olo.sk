import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import Typography from '@/src/components/common/Typography/Typography'

type BranchCardProps = {
  title: string
  linkHref: string
  address: string
  imgSrc?: string
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1205-14699&mode=dev
 */

const BranchCard = ({
  title,
  address,
  linkHref,
  imgSrc,
  hasWhiteBackground = true,
  className,
}: BranchCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
    >
      <div className="flex flex-col items-start gap-6 p-4 lg:gap-4">
        {/* 4 rem = 64px, 8 rem = 128px */}
        <CardImage imgSrc={imgSrc} className="aspect-square size-16 rounded-lg lg:size-32" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Typography
              variant="h4"
              className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
            <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
              {address}
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

export default BranchCard
