import React from 'react'

import ArticlesSection from '@/src/components/sections/ArticlesSection'
import BannerSection from '@/src/components/sections/BannerSection'
import BranchesSection from '@/src/components/sections/BranchesSection'
import CardsListSection from '@/src/components/sections/CardsListSection'
import ColumnsListSection from '@/src/components/sections/ColumnsListSection'
import ColumnsSection from '@/src/components/sections/ColumnsSection'
import DividerSection from '@/src/components/sections/DividerSection'
import DocumentsSection from '@/src/components/sections/DocumentsSection'
import FaqCategoriesSection from '@/src/components/sections/FaqCategoriesSection'
import FaqSection from '@/src/components/sections/FaqSection'
import ImageAndTextOverlappedSection from '@/src/components/sections/ImageAndTextOverlappedSection'
import ImageAndTextSection from '@/src/components/sections/ImageAndTextSection'
import OrderedCardsSection from '@/src/components/sections/OrderedCardsSection'
import RichtextSection from '@/src/components/sections/RichtextSection'
import ServicesSection from '@/src/components/sections/ServicesSection'
import SortingGuideAccordionsSection from '@/src/components/sections/SortingGuideAccordionsSection'
import SortingGuideSection from '@/src/components/sections/SortingGuideSection'
import TableSection from '@/src/components/sections/TableSection'
import WasteSortingCardsSection from '@/src/components/sections/WasteSortingCardsSection'
import WorkshopsSection from '@/src/components/sections/WorkshopsSection'
import { PageSectionsFragment } from '@/src/services/graphql/api'

type Props = {
  sections: PageSectionsFragment[]
}

const SectionContent = ({ section }: { section: PageSectionsFragment }) => {
  switch (section.__typename) {
    case 'ComponentSectionsRichtext':
      return <RichtextSection section={section} />

    case 'ComponentSectionsOrderedCards':
      return <OrderedCardsSection section={section} />

    case 'ComponentSectionsImageAndText':
      return <ImageAndTextSection section={section} />

    case 'ComponentSectionsColumns':
      return <ColumnsSection section={section} />

    // eslint-disable-next-line no-secrets/no-secrets
    case 'ComponentSectionsImageAndTextOverlapped':
      return <ImageAndTextOverlappedSection section={section} />

    case 'ComponentSectionsBranches':
      return <BranchesSection section={section} />

    case 'ComponentSectionsWorkshops':
      return <WorkshopsSection section={section} />

    case 'ComponentSectionsColumnsList':
      return <ColumnsListSection section={section} />

    case 'ComponentSectionsTable':
      return <TableSection section={section} />

    case 'ComponentSectionsFaq':
      return <FaqSection section={section} />

    case 'ComponentSectionsDocuments':
      return <DocumentsSection section={section} />

    // case 'ComponentSectionsFiles':
    //   return <FilesSection section={section} />

    case 'ComponentSectionsBanner':
      return <BannerSection section={section} />

    case 'ComponentSectionsDivider':
      return <DividerSection section={section} />

    case 'ComponentSectionsCardsList':
      return <CardsListSection section={section} />

    case 'ComponentSectionsFaqCategories':
      return <FaqCategoriesSection section={section} />

    case 'ComponentSectionsServices':
      return <ServicesSection section={section} />

    case 'ComponentSectionsWasteSortingCards':
      return <WasteSortingCardsSection section={section} />

    case 'ComponentSectionsSortingGuide':
      return <SortingGuideSection section={section} />

    case 'ComponentSectionsSortingGuideAccordions':
      return <SortingGuideAccordionsSection section={section} />

    case 'ComponentSectionsArticles':
      return <ArticlesSection section={section} />

    default:
      return null
  }
}

const Sections = ({ sections }: Props) => {
  return (
    <>
      {sections.map((section, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SectionContent key={index} section={section} />
      ))}
    </>
  )
}

export default Sections
