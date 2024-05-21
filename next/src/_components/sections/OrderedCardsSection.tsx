import React from 'react'

import Typography from '@/_components/common/Typography/Typography'
import SectionContainer from '@/_components/layout/Section/SectionContainer'
import { isDefined } from '@/_utils/isDefined'
import cn from '@/app/_utils/cn'
import { OrderedCardsSectionFragment } from '@/services/graphql/api'

type Props = {
  section: OrderedCardsSectionFragment
}

/*
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-14423&m=dev
 */

const OrderedCardsSection = ({ section }: Props) => {
  const { title, cards } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="secondary" className="py-6 lg:py-18">
      <div className="flex flex-col items-center gap-6 lg:gap-12">
        <Typography variant="h2">{title}</Typography>
        <ol className="grid w-full gap-4 lg:grid-cols-2 lg:gap-8">
          {
            // eslint-disable-next-line unicorn/no-array-callback-reference
            cards.filter(isDefined).map((card, index) => {
              return (
                <li
                  key={card.title}
                  className={cn(
                    'flex flex-col items-start gap-4 rounded-lg bg-background-primary p-4 last:odd:col-span-2 lg:gap-6 lg:p-6',
                  )}
                >
                  <div className="rounded-full bg-action-background-default p-4">
                    <div className="flex size-6 items-center justify-center">
                      <Typography variant="p-default-black">{index + 1}</Typography>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography variant="h5" className_onlyWhenNecessary="line-clamp-1">
                      {card.title}
                    </Typography>
                    <Typography>{card.text}</Typography>
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
