import Image from 'next/image'

import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import Sections from '@/src/components/layout/Sections'
import ServiceSideBarPlaceholder from '@/src/components/page-contents/service/ServiceSidebarPlaceholder'
import { ServiceEntityFragment } from '@/src/services/graphql/api'
import { generateImageSizes } from '@/src/utils/generateImageSizes'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  service: ServiceEntityFragment
}

const ServicePageContent = ({ service }: Props) => {
  if (!service.attributes) return null

  const { image, sections } = service.attributes ?? {}

  const hasContent = image?.data || sections?.length

  return (
    <SectionContainer className="py-6 lg:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-8">
        {hasContent ? (
          <div className="order-2 flex w-full shrink flex-col md:order-1 md:w-[50rem]">
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
        ) : null}
        {/* TODO replace with proper Sidebar */}
        <div className="order-1 shrink grow max-md:w-full md:max-w-80 lg:order-2">
          <ServiceSideBarPlaceholder />
        </div>
      </div>
    </SectionContainer>
  )
}

export default ServicePageContent
