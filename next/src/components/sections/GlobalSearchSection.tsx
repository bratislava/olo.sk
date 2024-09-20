import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef, useState } from 'react'
import { Selection, TagGroup, TagList } from 'react-aria-components'
import { useDebounceValue } from 'usehooks-ts'

import Chip from '@/src/components/common/Chip/Chip'
import SearchBar from '@/src/components/common/SearchBar/SearchBar'
import SearchResults from '@/src/components/common/SearchResults/SearchResults'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { GlobalSearchSectionFragment } from '@/src/services/graphql/api'
import { articlesDefaultFilters } from '@/src/services/meili/fetchers/articlesFetcher'
import { SearchFilters } from '@/src/utils/useQueryBySearchOption'
import { useRoutePreservedState } from '@/src/utils/useRoutePreservedState'

export type SearchOption = {
  id: 'allResults' | 'pages' | 'articles' | 'services' | 'documents'
  displayName?: string
  displayNamePlural: string
}

type Props = {
  section: GlobalSearchSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1521-16524&m=dev
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/sections/SearchSection/GlobalSearchSectionContent.tsx
 */

const GlobalSearchSectionContent = ({ section }: Props) => {
  // Initial variables --------------------------------------------------------------------------------
  const { t } = useTranslation()

  // SearchOptions --------------------------------------------------------------------------------

  const defaultSearchOption: SearchOption = {
    id: 'allResults',
    displayNamePlural: t('globalSearch.searchOption.allResults'),
  }

  const searchOptions: SearchOption[] = [
    {
      id: 'pages',
      displayName: t('globalSearch.searchOption.page'),
      displayNamePlural: t('globalSearch.searchOption.pages'),
    },
    {
      id: 'articles',
      displayName: t('globalSearch.searchOption.article'),
      displayNamePlural: t('globalSearch.searchOption.articles'),
    },
    {
      id: 'services',
      displayName: t('globalSearch.searchOption.service'),
      displayNamePlural: t('globalSearch.searchOption.services'),
    },
    {
      id: 'documents',
      displayName: t('globalSearch.searchOption.document'),
      displayNamePlural: t('globalSearch.searchOption.documents'),
    },
  ]

  const getSearchOptionByKeyValue = (key: string) => {
    return searchOptions.find((option) => option.id === key) ?? defaultSearchOption
  }

  // Search  --------------------------------------------------------------------------------------------------
  const [input, setInput] = useState('')
  const [debouncedInput] = useDebounceValue(input, 300)

  const [filters, setFilters] = useRoutePreservedState(articlesDefaultFilters)

  useEffect(() => {
    setFilters((previousState) => ({ ...previousState, search: debouncedInput, page: 1 }))
  }, [debouncedInput, setFilters])

  const [currentPage, setCurrentPage] = useState(1)

  // Selection ------------------------------------------------------------------------------------------------

  const defaultSelection = new Set([defaultSearchOption.id])

  const [selection, setSelection] = useState<Selection>(defaultSelection)
  // This is how you get first element from Set
  // (we can do it because we use selectionMode="single" on TagGroup)
  const selectedKey: SearchOption['id'] =
    selection !== 'all' && selection.size === 1
      ? selection.values().next().value
      : defaultSearchOption.id

  /**
   * If the user clicks other Chip than the selected one, the new selection size will be 1. We can safely set the selected option to the new selection.
   * If the user clicks the selected Chip, the new selection size will be 0, and therefore we set the default selection.
   *
   * Prerequisites are selectionMode="single" (and disallowEmptySelection={false} but it's default) on TagGroup.
   *
   * @param newSelection
   */
  const handleSelection = (newSelection: Selection) => {
    // Checking 'all' just to get pure Set type, 'all' is not used in our case
    if (newSelection !== 'all' && newSelection.size === 1) {
      // If user click other chip than the selected one, the selection is changed to the new chip
      // If user click an already selected chip, the selection is changed to default (no filtering)
      setSelection(newSelection)
    } else {
      setSelection(defaultSelection)
    }
  }

  // Filters -----------------------------------------------------------------------------------------------
  const searchFilters: SearchFilters = {
    // search: searchValue,
    search: debouncedInput,
    page: currentPage,
    pageSize: 12,
    // tagIds need to be here for now, because BlogPost and InbaArticle fetchers filter by tagIds
    // tagIds: [],
    // publicationState: publicationState ?? undefined,
  }

  // Results count ------------------------------------------------------------------------------------------

  // TODO use resultsCount to display the number of results for each search option
  const [, setResultsCount] = useState(
    Object.fromEntries(searchOptions.map((option): [string, number] => [option.id, 0])),
  )

  const setResultsCountById = (optionId: SearchOption['id'], count: number) => {
    setResultsCount((prevResultsCount) => {
      return {
        ...prevResultsCount,
        [optionId]: count,
      }
    })
  }

  // Scroll into view ---------------------------------------------------------------------------------------

  // TODO check
  const searchRef = useRef<null | HTMLInputElement>(null)

  useEffect(() => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [filters.page, filters.pageSize])

  return (
    <SectionContainer className="py-6 lg:py-12">
      <div className="flex flex-col gap-6 lg:gap-8">
        <SectionHeader title={section?.title} />
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-3">
            {/* SEARCH BAR --------------------------------------------------------------- */}
            <SearchBar
              ref={searchRef}
              input={input}
              setInput={setInput}
              setSearchQuery={(value) =>
                setFilters((previousState) => ({ ...previousState, search: value, page: 1 }))
              }
              // isLoading={isFetching}
            />

            {/* SELECTION & totalCound --------------------------------------------------- */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <TagGroup
                aria-label={t('globalSearch.searchOptions')}
                selectionMode="single"
                defaultSelectedKeys={defaultSelection}
                selectedKeys={selection}
                onSelectionChange={handleSelection}
              >
                <TagList className="max-md:negative-x-spacing -m-1.5 flex gap-x-3 overflow-auto p-1.5 scrollbar-hide max-md:flex-nowrap lg:gap-x-4">
                  {[defaultSearchOption, ...searchOptions].map((option) => {
                    return (
                      <Chip
                        variant="single-choice"
                        size="large"
                        key={option.id}
                        id={option.id}
                        // data-cy={`${option.title}-tab`}
                      >
                        {option.displayNamePlural}
                      </Chip>
                    )
                  })}
                </TagList>
              </TagGroup>
              {/* TODO total results count message */}
              {/* <Typography>{getTotalResultsCountMessage()}</Typography> */}
            </div>
          </div>
          {/* TODO ERROR DISPLAY ------------------------------------------------------------ */}
          {/* {isError ? (
          <Typography variant="p-default">{error?.message}</Typography>
        ) : isPending ? (
          <Typography variant="p-default">{t('common.loading')}</Typography>
        ) : null} */}
          {/* RESULTS DISPLAY ---------------------------------------------------------- */}
          {selectedKey === 'allResults' ? (
            <div className="flex flex-col gap-8">
              {searchOptions.map((option) => {
                return (
                  <SearchResults
                    variant="allResults"
                    searchOption={option}
                    filters={searchFilters}
                    onSetResultsCount={setResultsCountById}
                    onShowMore={setSelection}
                    key={`allResults-${option.id}`}
                  />
                )
              })}
            </div>
          ) : (
            <SearchResults
              variant="specificResults"
              searchOption={getSearchOptionByKeyValue(selectedKey)}
              filters={searchFilters}
              onSetResultsCount={setResultsCountById}
              onShowMore={setSelection}
              onPageChange={setCurrentPage}
              key={`specificResults-${selectedKey}`}
            />
          )}
        </div>
      </div>
    </SectionContainer>
  )
}
export default GlobalSearchSectionContent
