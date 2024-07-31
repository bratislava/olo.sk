import { MenuEntityResponse } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

export const getParsedMenus = (menu: MenuEntityResponse) => {
  return menu?.data?.attributes?.menuItems?.map((menuItem) => {
    if (!menuItem?.sections) return null

    const { id: menuItemId, label: menuItemLabel, seeAllLink: menuSeeAllLink, sections } = menuItem

    const menuSections =
      sections
        .map((section) => {
          if (!section) return null

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
        .filter((element) => isDefined(element)) ?? []

    return {
      id: menuItemId,
      label: menuItemLabel,
      seeAllLink: menuSeeAllLink,
      sections: menuSections,
    }
  })
}
