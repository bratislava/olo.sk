import { SectionType } from '@/src/components/common/NavBar/NavMenu/NavMenuContent'

export const getNavMenuCells = (sections: SectionType[]) => {
  const cells: (SectionType | SectionType[])[] = []
  let group: SectionType[] = []

  sections.forEach((section) => {
    if (section.colSpan === 0) {
      group.push(section)
    } else if (section.colSpan === 1 && group.length > 0) {
      group.push(section)
      cells.push(group)
      group = []
    } else if (!cells.flat().some((processedSection) => processedSection.id === section.id)) {
      cells.push(section)
    }
  })

  if (group.length > 0) {
    cells.push(group)
  }

  return cells
}
