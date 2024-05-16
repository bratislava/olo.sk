import { useTranslation } from 'next-i18next'

import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import Icon, { iconNameMap } from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'
import cn from '@/app/_utils/cn'

export type DocumentRowCardProps = {
  title: string
  linkHref: string
  metaData?: string[]
  iconName?: keyof typeof iconNameMap
  hasBottomBorder?: boolean
  className?: string
  ariaLabel?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=42-2223&mode=dev
 */

const DocumentRowCard = ({
  title,
  linkHref,
  metaData,
  iconName = 'priloha',
  hasBottomBorder = false,
  className,
  ariaLabel,
}: DocumentRowCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase variant="unstyled" className={className}>
      <div className="bg-background-primary px-4 lg:px-5">
        <div
          className={cn('flex items-center gap-3 py-4 lg:gap-4 ', {
            'border-b border-border-default': hasBottomBorder,
          })}
        >
          <div className="flex grow gap-3 lg:gap-4">
            <div className="lg:rounded-lg lg:bg-background-secondary lg:p-3">
              <Icon name={iconName} className="size-5 lg:size-6" />
            </div>
            <div className="flex grow flex-col gap-1">
              <Typography
                variant="h6"
                className_onlyWhenNecessary="line-clamp-1 group-hover/CardBase:underline"
              >
                {title}
              </Typography>
              {metaData?.length ? (
                <div className="flex items-center gap-3">
                  {metaData.map((item, index) => (
                    <>
                      {index > 0 ? (
                        <div className="size-1 rounded-full bg-content-secondary" />
                      ) : null}
                      <Typography variant="p-small">{item}</Typography>
                    </>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          {/* Screen: desktop */}
          <Button
            variant="category-outline"
            href={linkHref}
            asLink
            stretched
            hasLinkIcon={false}
            startIcon={<Icon name="stiahnut" />}
            className="max-lg:hidden"
          >
            {t('common.download')}
          </Button>
          {/* Screen: mobile */}
          <Button
            variant="unstyled"
            href={linkHref}
            asLink
            aria-label={ariaLabel ?? `${t('common.showMore')}: ${title}`}
            stretched
            hasLinkIcon={false}
            icon={<Icon name="stiahnut" />}
            className="ml-auto p-1.5 lg:hidden"
          />
        </div>
      </div>
    </CardBase>
  )
}

export default DocumentRowCard
