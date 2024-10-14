import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import Icon from '@/src/components/common/Icon/Icon'
import Pictogram, { PictogramName } from '@/src/components/common/Icon/Pictogram'
import Typography from '@/src/components/common/Typography/Typography'
import { SearchOption } from '@/src/components/sections/GlobalSearchSection'
import { isDefined } from '@/src/utils/isDefined'

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

  const pictogramNameBySearchOption: Record<SearchOption['id'], PictogramName | undefined> = {
    allResults: undefined,
    pages: 'transparentne-mesto',
    articles: undefined,
    documents: 'dokumenty',
    services: 'elektronicke-sluzby',
  }

  const pictogramName = pictogramNameBySearchOption[type]

  const filteredMetadata = metadata?.filter(isDefined)

  return (
    <CardBase variant="unstyled" className={className}>
      <div className="flex items-center gap-4 p-4">
        <div className="relative flex size-14 shrink-0 items-center justify-center">
          {pictogramName ? (
            <Pictogram name={pictogramName} />
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
          {filteredMetadata?.length ? (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {filteredMetadata.map((item, index) => {
                return (
                  <Fragment key={item}>
                    {index > 0 && (
                      <div className="size-1 rounded-full bg-content-secondary" aria-hidden />
                    )}
                    <Typography variant="p-small">{item}</Typography>
                  </Fragment>
                )
              })}
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
        />
      </div>
    </CardBase>
  )
}

export default SearchResultRowCard
