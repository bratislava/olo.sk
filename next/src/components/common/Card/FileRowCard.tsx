import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import Icon, { IconName } from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export type FileRowCardProps = {
  variant: 'single-file' | 'multiple-files'
  title: string
  linkHref: string
  metaData?: string[]
  iconName?: IconName
  hasBottomBorder?: boolean
  className?: string
  ariaLabel?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=42-2223&mode=dev
 */

const FileRowCard = ({
  variant,
  title,
  linkHref,
  metaData,
  iconName = 'priloha',
  hasBottomBorder = false,
  className,
  ariaLabel,
}: FileRowCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase variant="unstyled" className={className}>
      <div className="bg-background-primary px-4 lg:px-5" title={title}>
        <div
          className={cn('flex items-center gap-3 py-4 lg:gap-4', {
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
                    // eslint-disable-next-line react/no-array-index-key
                    <Fragment key={index}>
                      {index > 0 ? (
                        <div className="size-1 rounded-full bg-content-secondary" aria-hidden />
                      ) : null}
                      <Typography variant="p-small">{item}</Typography>
                    </Fragment>
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
            // eslint-disable-next-line sonarjs/no-duplicate-string
            startIcon={variant === 'single-file' ? <Icon name="stiahnut" /> : undefined}
            // eslint-disable-next-line sonarjs/no-duplicate-string
            aria-label={ariaLabel ?? `${t('common.showMore')}: ${title}`}
            endIcon={variant === 'multiple-files' ? <Icon name="sipka-doprava" /> : undefined}
            className="whitespace-nowrap max-lg:hidden"
          >
            {variant === 'single-file' ? t('common.download') : t('common.show')}
          </Button>
          {/* Screen: mobile */}
          <Button
            variant="unstyled"
            href={linkHref}
            asLink
            aria-label={ariaLabel ?? `${t('common.showMore')}: ${title}`}
            stretched
            hasLinkIcon={false}
            icon={
              variant === 'single-file' ? <Icon name="stiahnut" /> : <Icon name="sipka-doprava" />
            }
            className="ml-auto p-1.5 lg:hidden"
          />
        </div>
      </div>
    </CardBase>
  )
}

export default FileRowCard
