import { useMemo } from 'react'

import { SectionType } from '@/src/components/common/NavBar/NavMenu/NavMenuContent'

export const useNavMenuCells = (
  sections: SectionType[],
): { navMenuCells: (SectionType | SectionType[])[] } => {
  const navMenuCells = useMemo(() => {
    const cells: (SectionType | SectionType[])[] = []
    let group: SectionType[] = []
    const processedSections: SectionType[] = []

    sections.forEach((section) => {
      if (section.colSpan === 0) {
        group.push(section)
        processedSections.push(section)
      }

      // Assuming that a group can hold at max 2 sections
      if (section.colSpan === 1 && group.length > 0) {
        group.push(section)
        processedSections.push(section)
        cells.push(group)
        group = []
      }

      if (
        processedSections.filter((groupedSection) => groupedSection.id === section.id).length === 0
      ) {
        cells.push(section) // If no matching section was found
      }
    })

    return cells
  }, [sections])

  return {
    navMenuCells,
  }
}
