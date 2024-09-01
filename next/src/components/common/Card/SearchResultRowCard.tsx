import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import Icon, { IconName } from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import { SearchOption } from '@/src/components/page-contents/search/GlobalSearchSectionContent'

type SearchResultRowCardProps = {
  title: string
  type: SearchOption['id']
  linkHref: string
  imgSrc?: string
  metadata?: string[]
  className?: string
  ariaLabel?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1521-17165&mode=dev
 */

const SearchResultRowCard = ({
  title,
  type,
  className,
  linkHref,
  metadata,
  imgSrc,
  ariaLabel,
}: SearchResultRowCardProps) => {
  const { t } = useTranslation()

  const iconNameBySearchOption: Record<SearchOption['id'], IconName | undefined> = {
    allResults: undefined,
    pages: 'lupa',
    articles: undefined,
    documents: 'dokument',
  }

  const iconName = iconNameBySearchOption[type]

  return (
    <CardBase variant="unstyled" className={className}>
      <div className="flex items-center gap-4 p-4">
        {/* 2.25rem = 36px, 3.5rem = 56px */}
        <div className="relative flex size-14 shrink-0 items-center justify-center">
          {iconName ? (
            <Icon name={iconName} className="size-9" />
          ) : (
            <CardImage imgSrc={imgSrc} className="aspect-square size-full rounded-lg" />
          )}
        </div>
        <div className="flex grow flex-col gap-2">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="line-clamp-1 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          {metadata?.length ? (
            <div className="flex items-center gap-3">
              {[metadata].map((metadataItem, index) => (
                <>
                  {index > 0 ? <div className="size-1 rounded-full bg-content-secondary" /> : null}
                  <Typography variant="p-small">{metadataItem}</Typography>
                </>
              ))}
            </div>
          ) : null}
        </div>
        <Button
          variant="unstyled"
          href={linkHref}
          asLink
          hasLinkIcon={false}
          aria-label={ariaLabel ?? `${t('common.showMore')}: ${title}`}
          stretched
          icon={<Icon name="chevron-doprava" />}
          className=""
        />
      </div>
    </CardBase>
  )
}

export default SearchResultRowCard
