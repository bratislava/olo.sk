import React from 'react'

import ArticlesSection from '@/src/components/sections/articles/ArticlesSection'
import BannerSection from '@/src/components/sections/BannerSection'
import BoardMembersSection from '@/src/components/sections/BoardMembersSection'
import BranchesSection from '@/src/components/sections/BranchesSection'
import CardSliderSection from '@/src/components/sections/CardSliderSection'
import CardsListSection from '@/src/components/sections/CardsListSection'
import ChildPagesCardsListSection from '@/src/components/sections/ChildPagesCardsListSection'
import ColumnsListSection from '@/src/components/sections/ColumnsListSection'
import ColumnsSection from '@/src/components/sections/ColumnsSection'
import ContactsSection from '@/src/components/sections/ContactsSection'
import DividerSection from '@/src/components/sections/DividerSection'
import DocumentsSection from '@/src/components/sections/DocumentsSection'
import FaqCategoriesSection from '@/src/components/sections/FaqCategoriesSection'
import FaqSection from '@/src/components/sections/FaqSection'
import FormCtaBannerSection from '@/src/components/sections/FormCtaBannerSection'
import GlobalSearchSection from '@/src/components/sections/GlobalSearchSection'
import IframeSection from '@/src/components/sections/IframeSection'
import ImageAndTextOverlappedSection from '@/src/components/sections/ImageAndTextOverlappedSection'
import ImageAndTextSection from '@/src/components/sections/ImageAndTextSection'
import OpeningTimesSection from '@/src/components/sections/OpeningTimesSection'
import OrderedCardsSection from '@/src/components/sections/OrderedCardsSection'
import ProcurementsSection from '@/src/components/sections/ProcurementsSection'
import RichtextSection from '@/src/components/sections/RichtextSection'
import ServicesSection from '@/src/components/sections/ServicesSection'
import SortingGuideAccordionsSection from '@/src/components/sections/SortingGuideAccordionsSection'
import SortingGuideSection from '@/src/components/sections/SortingGuideSection'
import VacanciesSection from '@/src/components/sections/VacanciesSection'
import WasteCollectionDays from '@/src/components/sections/WasteCollectionDays/WasteCollectionDays'
import WasteCollectionPointsSection from '@/src/components/sections/WasteCollectionPointsSection'
import WasteRemovalCardsSection from '@/src/components/sections/WasteRemovalCardsSection'
import WasteSortingCardsSection from '@/src/components/sections/WasteSortingCardsSection'
import WorkshopsSection from '@/src/components/sections/WorkshopsSection'
import { PageSectionsFragment, ServiceSectionsFragment } from '@/src/services/graphql/api'

type Section = PageSectionsFragment | ServiceSectionsFragment

type Props = {
  sections: Section[]
}

const SectionContent = ({ section }: { section: Section }) => {
  // eslint-disable-next-line sonarjs/max-switch-cases
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

    case 'ComponentSectionsWasteCollectionPoints':
      return <WasteCollectionPointsSection section={section} />

    case 'ComponentSectionsWasteCollectionDays':
      return <WasteCollectionDays section={section} />

    case 'ComponentSectionsFaq':
      return <FaqSection section={section} />

    case 'ComponentSectionsDocuments':
      return <DocumentsSection section={section} />

    case 'ComponentSectionsWasteRemovalCards':
      return <WasteRemovalCardsSection section={section} />

    // eslint-disable-next-line no-secrets/no-secrets
    case 'ComponentSectionsChildPagesCardsList':
      return <ChildPagesCardsListSection section={section} />

    // case 'ComponentSectionsFiles':
    //   return <FilesSection section={section} />

    case 'ComponentSectionsIframeSection':
      return <IframeSection section={section} />

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

    case 'ComponentSectionsCardSlider':
      return <CardSliderSection section={section} />

    case 'ComponentSectionsContacts':
      return <ContactsSection section={section} />

    case 'ComponentSectionsOpeningTimes':
      return <OpeningTimesSection section={section} />

    case 'ComponentSectionsBoardMembers':
      return <BoardMembersSection section={section} />

    case 'ComponentSectionsFormCtaBanner':
      return <FormCtaBannerSection section={section} />

    case 'ComponentSectionsVacancies':
      return <VacanciesSection section={section} />

    case 'ComponentSectionsProcurements':
      return <ProcurementsSection section={section} />

    case 'ComponentSectionsGlobalSearch':
      return <GlobalSearchSection section={section} />

    default:
      return null
  }
}

const Sections = ({ sections }: Props) => {
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SectionContent key={index} section={section} />
      ))}
    </div>
  )
}

export default Sections
