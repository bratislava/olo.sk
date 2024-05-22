import Image from 'next/image'
import React from 'react'

import Typography from '@/_components/common/Typography/Typography'
import SectionContainer, {
  SectionContainerProps,
} from '@/_components/layout/Section/SectionContainer'
import { isDefined } from '@/_utils/isDefined'
import cn from '@/app/_utils/cn'
import { ColumnedItemsSectionFragment } from '@/services/graphql/api'

type Props = {
  section: ColumnedItemsSectionFragment
}

const backgroundValueMap: Record<
  ColumnedItemsSectionFragment['sectionBackgroundColor'],
  SectionContainerProps['background']
> = {
  white: 'primary',
  yellow: 'secondary',
}

/*
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13672&t=MZpsUzCxw11KJPJr-4
 */

const ColumnedItemsSection = ({ section }: Props) => {
  const { title, text, sectionBackgroundColor, items } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer
      background={backgroundValueMap[sectionBackgroundColor]}
      className="py-6 lg:py-18"
    >
      <div className="flex flex-col items-center gap-6 lg:gap-18">
        {/* 50rem = 800px */}
        <div className="flex flex-col items-center gap-4 text-center lg:max-w-[50rem]">
          <Typography variant="h2">{title}</Typography>
          <Typography>{text}</Typography>
        </div>
        <ul className="flex w-full flex-wrap items-start justify-center gap-4 lg:gap-8">
          {
            // eslint-disable-next-line unicorn/no-array-callback-reference
            items.filter(isDefined).map((item) => {
              return (
                <li
                  className={cn(
                    'flex shrink-0 grow flex-col items-center gap-4',
                    // control number of items per row based on their count so it looks good
                    'max-w-[50%] basis-[33%]',
                    { 'sm:basis-[25%]': items.length % 3 === 0 },
                    { 'sm:basis-[20%]': items.length % 3 === 1 },
                    { 'sm:max-w-[33%] sm:basis-[25%]': items.length % 3 === 2 },
                  )}
                >
                  {item?.icon?.data?.attributes ? (
                    <Image
                      src={item.icon.data.attributes.url}
                      alt=""
                      width={item.icon.data.attributes.width ?? 100}
                      height={item.icon.data.attributes.height ?? 100}
                    />
                  ) : null}
                  <div className="flex flex-col gap-2">
                    <Typography variant="h5" className_onlyWhenNecessary="text-center">
                      {item.title}
                    </Typography>
                    <Typography className_onlyWhenNecessary="text-center">
                      {item.description}
                    </Typography>
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
