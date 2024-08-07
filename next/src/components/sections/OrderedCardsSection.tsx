import React from 'react'

import Icon, { isBaIcon } from '@/src/components/common/Icon/Icon'
import OloIcon, { isOloIcon } from '@/src/components/common/Icon/OloIcon'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import {
  Enum_Componentsectionsorderedcards_Variant,
  OrderedCardsSectionFragment,
} from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: OrderedCardsSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-14423&m=dev
 */

const OrderedCardsSection = ({ section }: Props) => {
  const { title, variantOrderedCards: variant, cards } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="secondary" className="py-6 lg:py-18">
      <div className="flex flex-col items-center gap-6 lg:gap-12">
        <SectionHeader title={title} isCentered />
        <ol className="grid w-full gap-4 lg:grid-cols-2 lg:gap-8">
          {
            // eslint-disable-next-line unicorn/no-array-callback-reference
            cards.filter(isDefined).map((card, index) => {
              const { title: cardTitle, text, iconName } = card

              // TODO This should be extracted to a separate component
              const CardIcon = iconName ? (
                isBaIcon(iconName) ? (
                  <Icon name={iconName} className="size-6" />
                ) : isOloIcon(iconName) ? (
                  <OloIcon name={iconName} className="size-6" />
                ) : null
              ) : null

              return (
                <li
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={cn(
                    'flex flex-col items-start gap-4 rounded-lg bg-background-primary p-4 lg:gap-6 lg:p-6 lg:last:odd:col-span-2',
                  )}
                >
                  <div className="rounded-full bg-action-background-default p-4">
                    <div className="flex size-6 items-center justify-center">
                      {variant === Enum_Componentsectionsorderedcards_Variant.Numbers ? (
                        <Typography variant="p-default-black">{index + 1}</Typography>
                      ) : variant === Enum_Componentsectionsorderedcards_Variant.Icons ? (
                        CardIcon
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography variant="h5">{cardTitle}</Typography>
                    <Typography>{text}</Typography>
                  </div>
                </li>
              )
            })
          }
        </ol>
      </div>
    </SectionContainer>
  )
}

export default OrderedCardsSection
