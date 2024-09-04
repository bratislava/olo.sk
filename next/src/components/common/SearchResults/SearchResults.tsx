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

// TODO Taken from bratislava.sk

type SearchResultsProps = {
  filters: SearchFilters
  variant: 'allResults' | 'specificResults'
  searchOption: SearchOption
  onSetResultsCount: (searchOptionId: SearchOption['id'], count: number) => void
  onShowMore?: Dispatch<SetStateAction<Selection>>
  onPageChange?: Dispatch<SetStateAction<number>>
  onLoadingChange?: Dispatch<SetStateAction<boolean>>
}

const SearchResults = ({
  filters,
  variant,
  searchOption,
  onSetResultsCount,
  onShowMore,
  onPageChange,
  // TODO use onLoadingChange to signal loading state to parent component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onLoadingChange,
  // eslint-disable-next-line sonarjs/cognitive-complexity
}: SearchResultsProps) => {
  const { t } = useTranslation()

  const searchQuery = useQueryBySearchOption({ optionKey: searchOption.id, filters })

  const { data, isPending, isError, error } = searchQuery ?? {}
  const { searchResultsData, searchResultsCount } = data ?? { searchResultsCount: 0 }

  const GENERAL_RESULTS_COUNT = 5
  // eslint-disable-next-line const-case/uppercase
  // const RESULTS_COUNT =
  //   (searchResultsData?.length as number) < 5 ? searchResultsData?.length : GENERAL_RESULTS_COUNT // Logic based on TabPanelOfficialBoard.tsx

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
        {/* TODO maybe separate this header as a component */}
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
              .slice(0, variant === 'allResults' ? GENERAL_RESULTS_COUNT : undefined)
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
                    {/* <SearchResultRowCard data={{ ...item }} /> */}
                  </li>
                )
              })}
          </ul>
        ) : filters.search ? (
          <div data-cy="no-search-results">
            <Typography>{t('globalSearch.noResults')}</Typography>
          </div>
        ) : (
          /* Contacts show only for non-empty search query */
          // TODO keep this also during the first loading
          // TODO IS PENDING, but handle contacts separately
          <Typography>{t('globalSearch.enterSearchQuery')}</Typography>
        )}

        {searchResultsData?.length && variant === 'specificResults' && onPageChange ? (
          <div className="flex items-center justify-between">
            {/* TODO better message handling when less than pageSize results are shown */}
            <Typography>
              {t('common.showingResults', {
                current: Math.min(searchResultsCount, filters.pageSize),
                total: searchResultsCount,
              })}
            </Typography>
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
