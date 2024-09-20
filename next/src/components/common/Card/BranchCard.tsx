import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase, { CardBaseProps } from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type BranchCardProps = {
  title: string
  linkHref: string
  address?: string | null | undefined
  imgSrc?: string
  hasWhiteBackground?: boolean
  className?: string
  innerClassName?: string
  typographyClassName?: string
} & Pick<CardBaseProps, 'variant'>

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1205-14699&mode=dev
 */

const BranchCard = ({
  title,
  address,
  linkHref,
  imgSrc,
  variant,
  hasWhiteBackground = true,
  className,
  innerClassName,
  typographyClassName,
}: BranchCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase
      variant={variant}
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
      title={title}
    >
      <div
        className={cn(
          'flex h-full flex-col items-start gap-6 lg:gap-4',
          {
            'p-4': variant !== 'unstyled',
          },
          innerClassName,
        )}
      >
        <CardImage imgSrc={imgSrc} className="aspect-square size-16 rounded-lg lg:size-32" />
        <div className="flex h-full flex-col justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Typography
              variant="h4"
              className_onlyWhenNecessary={cn(
                'line-clamp-3 group-hover/CardBase:underline',
                typographyClassName,
              )}
            >
              {title}
            </Typography>
            {address ? (
              <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
                {address}
              </Typography>
            ) : null}
          </div>
          <Button variant="black-link" href={linkHref} asLink stretched>
            {t('common.showMore')}
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default BranchCard
