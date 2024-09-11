import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React from 'react'

import FaqCategoryCard from '@/src/components/common/Card/FaqCategoryCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { client } from '@/src/services/graphql'
import { FaqCategoriesSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type Props = {
  section: FaqCategoriesSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-25310&m=dev
 */

const FaqCategoriesSection = ({ section }: Props) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { getFullPath } = useGetFullPath()

  const { title, text, faqCategories, showAll } = section

  // TODO consider optimalizing so that we don't fetch this much when showAll is false
  const { data: allFaqCategories } = useQuery({
    queryKey: ['FaqCategories', locale],
    queryFn: () => client.FaqCategories({ locale }),
  })

  const faqCategoriesToRender =
    // eslint-disable-next-line unicorn/no-array-callback-reference
    (showAll ? allFaqCategories?.faqCategories : faqCategories)?.data.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {faqCategoriesToRender
            .map((faqCategory, index) => {
              if (!faqCategory.attributes) return null

              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index} className="h-full [&>*]:h-full">
                  <FaqCategoryCard
                    title={faqCategory.attributes.title}
                    linkHref={getFullPath(faqCategory) ?? '#'}
                  />
                </li>
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default FaqCategoriesSection
