import ListingCard from '@/src/components/common/Card/ListingCard'
import { ATTRIBUTE_TABLE_OF_CONTENT } from '@/src/components/common/TableOfContents/useHeadings'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { CardsListSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: CardsListSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-27870&m=dev
 */

const CardsListSection = ({ section }: Props) => {
  const { title, text, linkLabelOverride, columnCount, cardsCardsList: cards } = section

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredCards = cards?.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} dataAttribute={`${ATTRIBUTE_TABLE_OF_CONTENT}`} />
        <ul
          className={cn('grid grid-cols-1 gap-4', {
            'md:grid-cols-2': columnCount === 2,
            'md:grid-cols-2 lg:grid-cols-3': columnCount === 3,
            'md:grid-cols-3 lg:grid-cols-4': columnCount === 4,
          })}
        >
          {filteredCards
            .map((card, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <ListingCard
                    title={card.title}
                    subtext={card.subtext}
                    link={{ ...card.link, label: linkLabelOverride ?? card.link?.label }}
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

export default CardsListSection
