/* eslint-disable unicorn/prefer-spread */
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useState } from 'react'
import { Selection, TagGroup, TagList } from 'react-aria-components'
import { StringParam, useQueryParam, withDefault } from 'use-query-params'

import ServiceCard from '@/src/components/common/Card/ServiceCard'
import Chip from '@/src/components/common/Chip/Chip'
import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { client } from '@/src/services/graphql'
import { ServicesSectionFragment } from '@/src/services/graphql/api'
import {
  getMeiliServicesQueryKey,
  meiliServicesFetcher,
  servicesDefaultFilters,
} from '@/src/services/meili/fetchers/servicesFetcher'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'
import { useRoutePreservedState } from '@/src/utils/useRoutePreservedState'

type Props = {
  section: ServicesSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=3481-23207&m=dev
 */

const ServicesSection = ({ section }: Props) => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language

  const { getFullPath } = useGetFullPath()

  const { title, text } = section

  const [filters, setFilters] = useRoutePreservedState(servicesDefaultFilters)

  // CATEGORY SELECTION
  // - TODO consider extracting to separate hook

  const { data: serviceCategoriesData } = useQuery({
    queryKey: ['ServiceCategories', locale],
    queryFn: () => client.ServiceCategories({ locale }),
  })

  type SelectionOption = { id: string; title: string }

  const selectionOptions: SelectionOption[] = [
    { id: 'all', title: t('servicesSection.selectionOptions.allServices') },
    ...(serviceCategoriesData?.serviceCategories?.data
      .map((category) => {
        if (!category.attributes) return null

        return { id: category.attributes.slug, title: category.attributes.title }
      })
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []),
  ]

  const [selection, setSelection] = useState<Selection>(new Set([selectionOptions[0].id]))

  const handleSelectionChange = (newSelection: Selection) => {
    // We use Array.from(new Set()) because Selection is of typ Set | "all" and turning it into an array makes it easier to work with
    // If the new selection is empty, select the first option that displays all services
    if (Array.from(new Set(newSelection)).length === 0)
      setSelection(new Set([selectionOptions[0].id]))
    else setSelection(newSelection)
  }

  const selectedKey: SelectionOption['id'] =
    selection !== 'all' && selection.size === 1
      ? selection.values().next().value
      : selectionOptions[0].id

  // URL QUERY PARAMS

  const [routerQueryCategoryValue] = useQueryParam(
    'serviceCategory',
    withDefault(StringParam, 'all'),
  )

  useEffect(() => {
    setSelection(new Set([routerQueryCategoryValue]))
  }, [routerQueryCategoryValue])

  // FETCHING

  useEffect(() => {
    setFilters((previousState) => ({
      ...previousState,
      page: 1,
      categorySlugs: selectedKey === 'all' ? undefined : [selectedKey],
    }))
  }, [selectedKey, setFilters])

  const { data, isPending, isError, error } = useQuery({
    queryFn: () => meiliServicesFetcher(filters),
    queryKey: getMeiliServicesQueryKey(filters),
    placeholderData: keepPreviousData,
  })

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:p-12">
      <div className="flex flex-col gap-4 lg:gap-8">
        <TagGroup
          aria-label={t('servicesSection.selectionOptions.aria')}
          selectionMode="single"
          selectedKeys={selection}
          onSelectionChange={handleSelectionChange}
        >
          <TagList className="max-md:negative-x-spacing -m-1.5 flex gap-x-2 overflow-auto p-1.5 scrollbar-hide max-md:flex-nowrap lg:gap-x-4">
            {selectionOptions.map((option, index) => {
              return (
                <Chip
                  variant="single-choice"
                  size="large"
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  id={option.id}
                  data-cy={`${option.title}-tab`}
                >
                  {option.title}
                </Chip>
              )
            })}
          </TagList>
        </TagGroup>

        <div className="flex flex-col gap-6">
          <SectionHeader title={title} text={text} />

          {isError ? (
            // TODO display proper error
            <Typography variant="p-default">{error?.message}</Typography>
          ) : isPending ? (
            <Typography variant="p-default">{t('common.loading')}</Typography>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {data?.hits
                .map((service, index) => {
                  if (!service.attributes) return null

                  const serviceCategories =
                    // eslint-disable-next-line unicorn/no-array-callback-reference
                    service.attributes.serviceCategories?.data?.filter(isDefined) ?? []

                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>
                      <ServiceCard
                        title={service.attributes.title}
                        linkHref={getFullPath(service) ?? '#'}
                        serviceCategories={serviceCategories}
                        className="h-full"
                      />
                    </li>
                  )
                })
                // eslint-disable-next-line unicorn/no-array-callback-reference
                .filter(isDefined)}
            </ul>
          )}
        </div>
        {data?.estimatedTotalHits ? (
          <>
            {/* TODO separate this results count message and pagination into separate component */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-between">
              <Typography>
                {t('globalSearch.searchResultsFound.specific', {
                  from: (filters.page - 1) * filters.pageSize + 1,
                  to: Math.min(data.estimatedTotalHits, filters.page * filters.pageSize),
                  all: data.estimatedTotalHits,
                })}
              </Typography>
              <PaginationWithInput
                currentPage={filters.page}
                totalCount={Math.ceil(data.estimatedTotalHits / filters.pageSize)}
                onPageChange={(page) => setFilters((previousState) => ({ ...previousState, page }))}
              />
            </div>
          </>
        ) : null}
      </div>
    </SectionContainer>
  )
}

export default ServicesSection
