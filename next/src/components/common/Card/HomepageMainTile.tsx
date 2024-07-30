import cx from 'classnames'
import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'

type HomepageMainTileProps = {
  title: string
  linkHref: string
  text?: string | null | undefined
  ariaLabel?: string
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2096-19809&m=dev
 */

const HomepageMainTile = ({
  title,
  text,
  linkHref,
  ariaLabel,
  hasWhiteBackground = true,
  className,
}: HomepageMainTileProps) => {
  const { t } = useTranslation()

  return (
    <CardBase
      variant="background-yellow"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
    >
      <div className="flex h-full flex-col items-start justify-between p-4 lg:p-6">
        {/* Keep the div here even if it's empty to fill the space */}
        <Typography variant="p-default">{text}</Typography>
        <div className="flex flex-col gap-4 self-stretch">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          <Button
            variant="unstyled"
            href={linkHref}
            stretched
            asLink
            hasLinkIcon={false}
            // 1.5rem  = 24px
            icon={<Icon name="sipka-doprava" className="size-[1.5rem]" />}
            aria-label={ariaLabel ?? `${t('common.showMore')}: ${title}`}
            // 2.5rem = 40px
            className={cx('flex size-[2.5rem] items-center justify-center rounded-lg', {
              'bg-background-secondary': !hasWhiteBackground,
              'bg-background-primary': hasWhiteBackground,
            })}
          />
        </div>
      </div>
    </CardBase>
  )
}

export default HomepageMainTile
