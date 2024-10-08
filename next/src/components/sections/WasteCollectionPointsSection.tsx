import LocationCard from '@/src/components/common/Card/LocationCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { WasteCollectionPointsSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type WasteCollectionPointsSectionProps = {
  section: WasteCollectionPointsSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=380-19411&m=dev
 */

const WasteCollectionPointsSection = ({ section }: WasteCollectionPointsSectionProps) => {
  const { getLinkProps } = useGetLinkProps()

  const {
    title: sectionTitle,
    text,
    cardsWasteCollectionPointsCards: cards,
    backgroundColorWasteCollectionPoints: backgroundColor,
  } = section

  const filteredCards = cards?.filter(isDefined) ?? []

  return (
    // TODO: Padding-y should probably be managed by the SectionContainer
    <SectionContainer
      background={backgroundColor}
      // 5.5rem = 88px
      className="py-6 lg:pb-18 lg:pt-[5.5rem]"
    >
      <div className="flex flex-col gap-8">
        <SectionHeader title={sectionTitle} text={text} />

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
          {filteredCards
            .map((card, index) => {
              const { title, address, link } = card

              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <LocationCard
                    title={title}
                    address={address}
                    linkHref={getLinkProps(link).href}
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

export default WasteCollectionPointsSection
