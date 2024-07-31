import { MenuEntityResponse } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

export const getParsedMenus = (menu: MenuEntityResponse) => {
  return menu?.data?.attributes?.menuItems?.map((menuItem) => {
    if (!menuItem?.sections) return null

    const menuItemId = menuItem.id
    const menuItemLabel = menuItem.label
    const menuSeeAllLink = menuItem.seeAllLink

    const menuSections =
      menuItem.sections
        .map((section) => {
          if (!section) return null

          const sectionId = section.id
          const sectionLabel = section.label
          const sectionColSpan = section.colSpan
          const sectionMulticolumnBehaviour = section.multicolumnBehaviour
          const sectionHasDivider = section.hasDivider
          const sectionSpecialSectionType = section.specialSectionType

          const sectionLinks =
            section.links
              ?.map((menuLink) => {
                return menuLink
              })
              .filter((element) => isDefined(element)) ?? []

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
        .filter((element) => isDefined(element)) ?? []

    return {
      id: menuItemId,
      label: menuItemLabel,
      seeAllLink: menuSeeAllLink,
      sections: menuSections,
    }
  })
}
