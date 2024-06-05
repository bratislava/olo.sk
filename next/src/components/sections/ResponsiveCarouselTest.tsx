import React, { ReactNode, useState } from 'react'

import ArticleCard from '@/src/components/common/Card/ArticleCard'
import BAResponsiveCarousel from '@/src/components/common/Carousel/BAResponsiveCarousel'
import ResponsiveCarousel from '@/src/components/common/Carousel/ResponsiveCarousel'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'

type Props = {
  items?: ReactNode[]
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-14043&m=dev
 */

const carouselItems = [
  <ArticleCard title="helo0" tagText="uooo" linkHref="#" />,
  <ArticleCard title="helo1" tagText="uooo" linkHref="#" />,
  <ArticleCard title="helo2" tagText="uooo" linkHref="#" />,
  <ArticleCard title="helo3" tagText="uooo" linkHref="#" />,
  <ArticleCard title="helo4" tagText="uooo" linkHref="#" />,
  <ArticleCard title="helo5" tagText="uooo" linkHref="#" />,
]

const CardSliderSection = ({ items = carouselItems }: Props) => {
  // const { title, text, backgroundColor } = section

  const [isBottom, setIsBottom] = useState(true)

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="secondary" className="w-full py-6 lg:py-18">
      <div className="flex gap-1 pb-4 [&>*]:border [&>*]:p-1">
        <button type="button" onClick={() => setIsBottom(!isBottom)}>
          Toggle variant
        </button>
      </div>

      <div className="flex flex-col items-stretch gap-6 lg:gap-12">
        <ResponsiveCarousel items={items} controlsVariant={isBottom ? 'bottom' : 'side'} />
        <BAResponsiveCarousel items={items} useOldStyledControls={!isBottom} />
      </div>
    </SectionContainer>
  )
}

export default CardSliderSection
