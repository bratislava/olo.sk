import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import { LinkFragment } from '@/src/services/graphql/api'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type ListingCardProps = {
  title: string
  subtext?: string | null | undefined
  link: LinkFragment | null | undefined
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1341-11042&mode=dev
 */

const ListingCard = ({
  title,
  subtext,
  link,
  hasWhiteBackground = true,
  className,
}: ListingCardProps) => {
  const { t } = useTranslation()
  const { getLinkProps } = useGetLinkProps()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
    >
      <div className="flex h-full flex-col justify-between gap-6 p-4" title={title}>
        <div className="flex flex-col gap-2">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          {subtext ? <Typography>{subtext}</Typography> : null}
        </div>
        <Button
          variant="unstyled"
          asLink
          stretched
          hasLinkIcon={false}
          aria-label={`${t('common.showMore')}: ${title}`}
          className="flex w-full items-center justify-between"
          {...getLinkProps(link)}
        >
          <Typography variant="button-default">{getLinkProps(link).children}</Typography>
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background-secondary">
            <Icon name={getLinkProps(link).href.startsWith('http') ? 'export' : 'sipka-doprava'} />
          </div>
        </Button>
      </div>
    </CardBase>
  )
}

export default ListingCard
