import Badge, { BadgeProps } from '@/src/components/common/Badge/Badge'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import {
  Enum_Servicecategory_Categorycolor,
  ServiceCategoryEntityFragment,
} from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

export type ServicePageHeaderProps = {
  title: string
  serviceCategories: ServiceCategoryEntityFragment[]
}

export const serviceCategoryMap: Record<Enum_Servicecategory_Categorycolor, BadgeProps['variant']> =
  {
    // TODO extract to single file and discuss style of 'none'
    none: 'public',
    red: 'public',
    green: 'firms',
    blue: 'institutions',
  }

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1189-12905&m=dev
 */

const ServicePageHeader = ({ title, serviceCategories }: ServicePageHeaderProps) => {
  return (
    <SectionContainer background="secondary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {serviceCategories
            .map((serviceCategory, index) => {
              if (!serviceCategory.attributes) return null
              const { title: categoryTitle } = serviceCategory.attributes ?? {}

              return (
                <Badge
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  label={categoryTitle}
                  variant={serviceCategoryMap[serviceCategory.attributes.categoryColor]}
                />
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        </div>
        <HeaderTitleText title={title} hasVerticalPadding={false} />
      </div>
    </SectionContainer>
  )
}

export default ServicePageHeader
