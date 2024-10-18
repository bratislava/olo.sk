import { useTranslation } from 'next-i18next'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Selection } from 'react-aria-components'

import Button from '@/src/components/common/Button/Button'
import SearchResultRowCard from '@/src/components/common/Card/SearchResultRowCard'
import Icon from '@/src/components/common/Icon/Icon'
import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import Spinner from '@/src/components/common/Spinner/Spinner'
import Typography from '@/src/components/common/Typography/Typography'
import { SearchOption } from '@/src/components/sections/GlobalSearchSection'
import { isDefined } from '@/src/utils/isDefined'
import { SearchFilters, useQueryBySearchOption } from '@/src/utils/useQueryBySearchOption'

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1521-16524&m=dev
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/sections/SearchSection/SearchResults.tsx
 */

type SearchResultsProps = {
  filters: SearchFilters
  variant: 'allResults' | 'specificResults'
  generalResultsCount?: number
  searchOption: SearchOption
  resultsCountMessage?: string
  onSetResultsCount: (searchOptionId: SearchOption['id'], count: number) => void
  onShowMore?: Dispatch<SetStateAction<Selection>>
  onPageChange?: Dispatch<SetStateAction<number>>
  // onLoadingChange?: Dispatch<SetStateAction<boolean>>
}

const SearchResults = ({
  filters,
  variant,
  generalResultsCount,
  searchOption,
  resultsCountMessage,
  onSetResultsCount,
  onShowMore,
  onPageChange,
  // TODO use onLoadingChange to signal loading state to parent component
  // onLoadingChange,
  // eslint-disable-next-line sonarjs/cognitive-complexity
}: SearchResultsProps) => {
  const { t } = useTranslation()

  const searchQuery = useQueryBySearchOption({ optionKey: searchOption.id, filters })

  const { data, isPending, isError, error } = searchQuery ?? {}
  const { searchResultsData, searchResultsCount } = data ?? { searchResultsCount: 0 }

  useEffect(() => {
    onSetResultsCount(searchOption.id, searchResultsCount ?? 0)
  }, [searchResultsCount, onSetResultsCount, searchOption.id])

  if (!searchQuery) {
    return null
  }

  if (isPending) {
    return <Spinner />
  }

  if (isError && error) {
    return <Typography>{`Error${error.message}`}</Typography>
  }

  return (
    <div
      className="flex flex-col gap-y-8"
      data-cy={`search-section-${searchOption?.displayNamePlural.replaceAll(' ', '-')}`}
    >
      <div className="flex flex-col gap-y-6">
        {variant === 'allResults' && (
          <div className="flex flex-col flex-wrap items-baseline justify-between gap-y-2 lg:flex-row">
            <Typography variant="h4" as="h2">
              {`${searchOption?.displayNamePlural}` ?? ''}
            </Typography>
            {searchResultsCount > 0 ? (
              <Button
                variant="black-link"
                endIcon={<Icon name="sipka-doprava" />}
                onPress={() => {
                  if (!onShowMore) return
                  onShowMore(new Set([searchOption.id]))
                }}
                // data-cy="search-section-more-button"
              >
                {t('globalSearch.showAll')}
              </Button>
            ) : null}
          </div>
        )}

        {searchResultsData?.length ? (
          <ul className="flex flex-col divide-y divide-border-default rounded-lg border border-border-default">
            {searchResultsData
              .slice(0, variant === 'allResults' ? generalResultsCount : undefined)
              .map((item) => {
                return (
                  <li
                    key={`item-${variant}-${searchOption.id}-${[
                      item.uniqueId,
                      item.title,
                      ...(item?.metadata ?? []),
                    ].join('')}`}
                  >
                    <SearchResultRowCard
                      title={item.title ?? ''}
                      type={searchOption.id}
                      // TODO handle icons when no image is passed
                      imgSrc={item.coverImageSrc ?? ''}
                      metadata={item.metadata?.filter(isDefined) ?? []}
                      linkHref={item.linkHref ?? '#'}
                    />
                  </li>
                )
              })}
          </ul>
        ) : filters.search ? (
          <div data-cy="no-search-results">
            <Typography>{t('globalSearch.noResults')}</Typography>
          </div>
        ) : (
          // TODO keep this also during the first loading
          <Typography>{t('globalSearch.enterSearchQuery')}</Typography>
        )}

        {searchResultsData?.length && variant === 'specificResults' && onPageChange ? (
          // TODO separate this results count message and pagination into separate component
          <div className="flex items-center justify-between">
            <Typography>{resultsCountMessage}</Typography>
            <PaginationWithInput
              currentPage={filters.page}
              totalCount={
                searchResultsCount > 0 ? Math.ceil(searchResultsCount / filters.pageSize) : 1
              }
              onPageChange={onPageChange}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SearchResults
