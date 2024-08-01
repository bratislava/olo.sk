import { GeneralQuery } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

export const getParsedMenus = (menu: GeneralQuery['menu']) => {
  return (
    menu?.data?.attributes?.menuItems
      ?.filter(isDefined)
      ?.map((menuItem) => {
        const {
          id: menuItemId,
          label: menuItemLabel,
          seeAllLink: menuSeeAllLink,
          sections,
        } = menuItem

        const menuSections =
          sections
            ?.filter(isDefined)
            .map((section) => {
              const {
                id: sectionId,
                label: sectionLabel,
                colSpan: sectionColSpan,
                multicolumnBehaviour: sectionMulticolumnBehaviour,
                hasDivider: sectionHasDivider,
                specialSectionType: sectionSpecialSectionType,
                links,
              } = section

              const sectionLinks = links?.filter(isDefined) ?? []

              return {
                id: sectionId,
                label: sectionLabel,
                colSpan: sectionColSpan,
                multicolumnBehaviour: sectionMulticolumnBehaviour,
                hasDivider: sectionHasDivider,
                specialSectionType: sectionSpecialSectionType,
                links: sectionLinks,
              }
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined) ?? []

        return {
          id: menuItemId,
          label: menuItemLabel,
          seeAllLink: menuSeeAllLink,
          sections: menuSections,
        }
      })
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []
  )
}
