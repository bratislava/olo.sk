export const usePlaceholderMenuData = () => {
  const sections = [
    {
      id: '100',
      label: 'Section 1',
      colSpan: 1,
      multicolumnBehaviour: null,
      hasDivider: true,
      specialSectionType: null,
      links: [
        { id: '21', label: 'Link 1', url: '/' },
        { id: '22', label: 'Link 2', url: '/' },
        { id: '23', label: 'Link 3', url: '/' },
        { id: '24', label: 'Link 4', url: '/' },
      ],
    },
    {
      id: '200',
      label: 'Section 2',
      colSpan: 1,
      multicolumnBehaviour: null,
      hasDivider: true,
      specialSectionType: null,
      links: [
        { id: '31', label: 'Link 1', url: '/' },
        { id: '32', label: 'Link 2', url: '/' },
        { id: '33', label: 'Link 3', url: '/' },
        { id: '34', label: 'Link 4', url: '/' },
      ],
    },
    {
      id: '300',
      label: 'Section 3',
      colSpan: 1,
      multicolumnBehaviour: null,
      hasDivider: true,
      specialSectionType: null,
      links: [
        { id: '51', label: 'Link 1', url: '/' },
        { id: '52', label: 'Link 2', url: '/' },
        { id: '53', label: 'Link 3', url: '/' },
        { id: '54', label: 'Link 4', url: '/' },
      ],
    },
  ]

  const SEE_ALL = 'Zobraziť všetko'

  const seeAllLink = { id: '4000', label: SEE_ALL, url: '/odpad' }

  const menus = [
    {
      id: '1',
      label: 'Odpad',
      sections,
      seeAllLink: { id: '1000', label: SEE_ALL, url: '/odpad' },
    },
    {
      id: '2',
      label: 'Služby',
      sections,
      seeAllLink: { id: '1001', label: SEE_ALL, url: '/sluzby' },
    },
    {
      id: '3',
      label: 'Aktuality',
      sections,
      seeAllLink: { id: '1002', label: SEE_ALL, url: '/aktuality' },
    },
    {
      id: '4',
      label: 'KOLO',
      sections,
      seeAllLink: { id: '1003', label: SEE_ALL, url: '/kolo' },
    },
    {
      id: '5',
      label: 'ZEVO',
      sections,
      seeAllLink: { id: '1004', label: SEE_ALL, url: '/zevo' },
    },
    {
      id: '6',
      label: 'O nás',
      sections,
      seeAllLink: { id: '1004', label: SEE_ALL, url: '/o-nas' },
    },
  ]

  return { menus, sections, seeAllLink }
}
