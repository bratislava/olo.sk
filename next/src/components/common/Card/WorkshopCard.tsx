import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import Icon, { IconName, isBaIcon } from '@/src/components/common/Icon/Icon'
import OloIcon, { isOloIcon, OloIconName } from '@/src/components/common/Icon/OloIcon'
import Typography from '@/src/components/common/Typography/Typography'

type WorkshopCardProps = {
  title: string
  linkHref: string
  iconName?: OloIconName | IconName
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1202-14657&mode=dev
 */

const WorkshopCard = ({
  title,
  linkHref,
  iconName = 'live-help',
  hasWhiteBackground = true,
  className,
}: WorkshopCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
      title={title}
    >
      <div className="flex h-full flex-col items-start gap-6 p-4 lg:p-6">
        <div className="rounded-2xl bg-background-secondary p-4">
          {
            // TODO This should be extracted to a separate component
            isBaIcon(iconName) ? (
              <Icon name={iconName} className="size-6" />
            ) : isOloIcon(iconName) ? (
              <OloIcon name={iconName} className="size-6" />
            ) : null
          }
        </div>
        <div className="flex h-full flex-col items-start justify-between gap-4 self-stretch lg:gap-10">
          <Typography
            variant="h4"
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

export default WorkshopCard
