/* eslint-disable unicorn/prefer-spread */
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import { Selection, TagGroup, TagList } from 'react-aria-components'

import ServiceCard from '@/src/components/common/Card/ServiceCard'
import Chip from '@/src/components/common/Chip/Chip'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { client } from '@/src/services/graphql'
import { ServicesSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

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

  // TODO consider replacing with meilisearch
  const { data: servicesData } = useQuery({
    queryKey: ['Services', locale],
    queryFn: () => client.Services({ locale }),
  })

  const { data: serviceCategoriesData } = useQuery({
    queryKey: ['ServiceCategories', locale],
    queryFn: () => client.ServiceCategories({ locale }),
  })

  type SelectionOption = { id: string; title: string }

  const selectionOptions: SelectionOption[] = [
    { id: 'all', title: t('servicesSection.selectionOptions.allServices') },
    ...(serviceCategoriesData?.serviceCategories?.data
      .map((category) => {
        if (!category.attributes || !category.id) return null

        return { id: category.id, title: category.attributes.title }
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

  const servicesToRender =
    servicesData?.services?.data
      .filter((service) => {
        if (!service.attributes) return null

        if (Array.from(new Set(selection)).includes('all')) return true

        return service.attributes.serviceCategories?.data.some((category) => {
          if (!category.id) return null

          return Array.from(new Set(selection)).includes(category.id)
        })
      })
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []

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

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {servicesToRender
              .map((service, index) => {
                if (!service.attributes) return null

                const serviceCategories =
                  // eslint-disable-next-line unicorn/no-array-callback-reference
                  service.attributes.serviceCategories?.data.filter(isDefined) ?? []

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
        </div>
      </div>
    </SectionContainer>
  )
}

export default ServicesSection
