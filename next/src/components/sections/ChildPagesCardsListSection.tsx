import { useTranslation } from 'next-i18next'

import ListingCard from '@/src/components/common/Card/ListingCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { ChildPagesCardsListSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type ChildPagesCardsListSectionProps = {
  section: ChildPagesCardsListSectionFragment
}

const ChildPagesCardsListSection = ({ section }: ChildPagesCardsListSectionProps) => {
  const { t } = useTranslation()

  const {
    title,
    text,
    backgroundColorChildPagesCardsList: backgroundColor,
    parentPage: page,
  } = section

  const { childPages } = page?.data?.attributes ?? {}
  const filteredChildPages = childPages?.data?.filter(isDefined) ?? []

  return (
    <SectionContainer background={backgroundColor} className="py-18">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {filteredChildPages
            .map((childPage) => {
              return (
                <li key={childPage.id}>
                  <ListingCard
                    title={childPage?.attributes?.title ?? ''}
                    subtext="" // TODO: Add an attribute `subtext` to each page
                    link={{ page: { data: childPage }, label: t('common.findOutMore') }}
                    className="h-full"
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

export default ChildPagesCardsListSection
