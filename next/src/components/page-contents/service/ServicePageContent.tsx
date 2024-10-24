import Image from 'next/image'

import DesktopTableOfContents from '@/src/components/common/TableOfContents/DesktopTableOfContents'
import MobileTableOfContents from '@/src/components/common/TableOfContents/MobileTableOfContents'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import Sections from '@/src/components/layout/Sections'
import { ServiceEntityFragment } from '@/src/services/graphql/api'
import { generateImageSizes } from '@/src/utils/generateImageSizes'
import { isDefined } from '@/src/utils/isDefined'

const SERVICE_PAGE_ROOT = 'service-page-content'

type Props = {
  service: ServiceEntityFragment
}

const ServicePageContent = ({ service }: Props) => {
  const { image, sections } = service.attributes ?? {}

  return (
    <>
      {/* Screen Mobile */}
      <div className="lg:hidden">
        <MobileTableOfContents rootId={SERVICE_PAGE_ROOT} />
      </div>
      <SectionContainer className="py-6 md:px-0 lg:py-12">
        <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-8">
          <div
            id={SERVICE_PAGE_ROOT}
            className="order-2 flex w-full shrink flex-col md:order-1 md:w-[50rem]"
          >
            {/* TODO fix y-paddings so we don't change it from here */}
            <div className="flex flex-col gap-12 [&>*]:py-0 [&>*]:lg:py-0 [&>div>*]:px-0 [&>div>*]:lg:px-0">
              {image?.data?.attributes?.url ? (
                <div className="relative aspect-[800/445] w-full shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={image.data.attributes.url}
                    alt={image.data.attributes.alternativeText ?? ''}
                    fill
                    sizes={generateImageSizes({ default: '100vw' })}
                    className="object-cover"
                  />
                </div>
              ) : null}
              <Sections sections={sections?.filter(isDefined) ?? []} />
            </div>
          </div>
          <div className="order-1 shrink grow max-md:w-full md:max-w-80 lg:order-2">
            {/* Screen Desktop */}
            <div className="hidden lg:block">
              <DesktopTableOfContents rootId={SERVICE_PAGE_ROOT} />
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default ServicePageContent
