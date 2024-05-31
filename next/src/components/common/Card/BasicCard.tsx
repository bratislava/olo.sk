import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import Typography from '@/src/components/common/Typography/Typography'

type BasicCardProps = {
  title: string
  subtext: string
  linkHref: string
  imgSrc?: string
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1199-13816&mode=dev
 */

const BasicCard = ({
  title,
  subtext,
  linkHref,
  imgSrc,
  hasWhiteBackground = true,
  className,
}: BasicCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
    >
      <CardImage imgSrc={imgSrc} className="aspect-[384/204] rounded-t-lg" />
      <div className="flex flex-col gap-5 px-4 py-4 lg:px-5">
        <div className="flex flex-col gap-3">
          <Typography
            variant="h5"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
            {subtext}
          </Typography>
        </div>
        <Button variant="black-link" href={linkHref} asLink stretched>
          {t('common.readMore')}
        </Button>
      </div>
    </CardBase>
  )
}

export default BasicCard
