import Image from 'next/image'
import React from 'react'

import Typography from '@/_components/common/Typography/Typography'
import SectionContainer from '@/_components/layout/Section/SectionContainer'
import SectionHeader from '@/_components/layout/Section/SectionHeader'
import { isDefined } from '@/_utils/isDefined'
import cn from '@/app/_utils/cn'
import { ColumnsSectionFragment } from '@/services/graphql/api'

type Props = {
  section: ColumnsSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13672&t=MZpsUzCxw11KJPJr-4
 */

const ColumnedItemsSection = ({ section }: Props) => {
  const { title, text, backgroundColor, items } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background={backgroundColor ?? 'primary'} className="w-full py-6 lg:py-18">
      <div className="flex flex-col items-center gap-6 lg:gap-18">
        <SectionHeader title={title} text={text} isCentered />
        <ul className="flex w-full flex-wrap items-stretch justify-center gap-4 lg:gap-8">
          {
            // eslint-disable-next-line unicorn/no-array-callback-reference
            items.filter(isDefined).map((item) => {
              return (
                <li
                  className={cn(
                    'flex grow justify-center',
                    // control number of items per row based on their count so it looks good
                    'w-[33%] max-w-[50%]',
                    {
                      'w-full max-w-[100%] sm:max-w-full': items.length === 1,
                      'w-[40%] max-w-[100%] sm:max-w-full': items.length === 2,
                      'sm:w-[25%]': items.length % 3 === 0,
                      'sm:w-[20%] sm:max-w-[22%]': items.length > 2 && items.length % 3 === 1,
                      'sm:w-[25%] sm:max-w-[33%]': items.length > 2 && items.length % 3 === 2,
                    },
                  )}
                >
                  <div className="flex flex-col items-center gap-4">
                    {item.image?.data?.attributes ? (
                      <div>
                        <Image
                          src={item.image.data.attributes.url}
                          alt={item.image.data.attributes.alternativeText ?? ''}
                          width={item.image.data.attributes.width ?? 100}
                          height={item.image.data.attributes.height ?? 100}
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-col gap-2 empty:hidden">
                      {item.itemTitle ? (
                        <Typography variant="h5" className_onlyWhenNecessary="text-center">
                          {item.itemTitle}
                        </Typography>
                      ) : null}
                      {item.text ? (
                        <Typography className_onlyWhenNecessary="text-center">
                          {item.text}
                        </Typography>
                      ) : null}
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </SectionContainer>
  )
}

export default ColumnedItemsSection
