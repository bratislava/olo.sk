export const usePlaceholderMenuData = () => {
  const sections = [
    {
      __typename: 'ComponentMenuMenuSection',
      id: '1300',
      label: 'Section 1',
      colSpan: 1,
      multicolumnBehaviour: null,
      hasDivider: true,
      specialSectionType: null,
      links: [
        {
          id: '351',
          label: 'External: Zberný dvor',
          url: 'https://www.olo.sk/zberny-dvor-olo-a-s/',
          page: {
            data: {},
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
        {
          id: '352',
          label: null,
          url: null,
          page: {
            data: {
              __typename: 'PageEntity',
              attributes: {
                title: 'Stanovište zberných nádob',
                slug: 'stanoviste-zbernych-nadob',
              },
            },
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
        {
          id: '353',
          label: null,
          url: null,
          page: {
            data: {
              __typename: 'PageEntity',
              attributes: {
                title: 'Ako triediť odpad?',
                slug: 'ako-triedit-odpad',
              },
            },
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
        {
          id: '354',
          label: 'External: Zákaznícke centrum',
          url: 'https://www.olo.sk/zakaznickecentrum/',
          page: {
            data: {},
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
      ],
    },
    {
      __typename: 'ComponentMenuMenuSection',
      id: '2200',
      label: 'Section 2',
      colSpan: 1,
      multicolumnBehaviour: null,
      hasDivider: true,
      specialSectionType: null,
      links: [
        {
          id: '251',
          label: 'External: OLO',
          url: 'https://www.olo.sk',
          page: {
            data: {},
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
        {
          id: '252',
          label: null,
          url: null,
          page: {
            data: {
              __typename: 'PageEntity',
              attributes: {
                title: 'Zistite si váš odvozový deň',
                slug: 'zistite-si-vas-odvozovy-den',
              },
            },
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
        {
          id: '253',
          label: null,
          url: null,
          page: {
            data: {
              __typename: 'PageEntity',
              attributes: {
                title: 'Neodviezli mi odpad',
                slug: 'neodviezli-mi-odpad',
              },
            },
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
        {
          id: '254',
          label: 'External: Bratislava',
          url: 'https://bratislava.sk',
          page: {
            data: {},
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
      ],
    },
    {
      __typename: 'ComponentMenuMenuSection',
      id: '300',
      label: 'Section 3',
      colSpan: 1,
      multicolumnBehaviour: null,
      hasDivider: true,
      specialSectionType: null,
      links: [
        {
          id: '51',
          label: 'External: OLO',
          url: 'https://www.olo.sk',
          page: {
            data: {},
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
        {
          id: '52',
          label: null,
          url: null,
          page: {
            data: {
              __typename: 'PageEntity',
              attributes: {
                title: 'Zistite si váš odvozový deň',
                slug: 'zistite-si-vas-odvozovy-den',
              },
            },
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
        {
          id: '53',
          label: null,
          url: null,
          page: {
            data: {
              __typename: 'PageEntity',
              attributes: {
                title: 'Neodviezli mi odpad',
                slug: 'neodviezli-mi-odpad',
              },
            },
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
        {
          id: '54',
          label: 'External: Bratislava',
          url: 'https://bratislava.sk',
          page: {
            data: {},
          },
          branch: {
            data: {},
          },
          document: {
            data: {},
          },
        },
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
      seeAllLink: { __typename: 'ComponentItemsLink', id: '1000', label: SEE_ALL, url: '/odpad' },
    },
    {
      id: '2',
      label: 'Služby',
      sections,
      seeAllLink: { __typename: 'ComponentItemsLink', id: '1001', label: SEE_ALL, url: '/sluzby' },
    },
    {
      id: '3',
      label: 'Aktuality',
      sections,
      seeAllLink: {
        __typename: 'ComponentItemsLink',
        id: '1002',
        label: SEE_ALL,
        url: '/aktuality',
      },
    },
    {
      id: '4',
      label: 'KOLO',
      sections,
      seeAllLink: { __typename: 'ComponentItemsLink', id: '1003', label: SEE_ALL, url: '/kolo' },
    },
    {
      id: '5',
      label: 'ZEVO',
      sections,
      seeAllLink: { __typename: 'ComponentItemsLink', id: '1004', label: SEE_ALL, url: '/zevo' },
    },
    {
      id: '6',
      label: 'O nás',
      sections,
      seeAllLink: { __typename: 'ComponentItemsLink', id: '1004', label: SEE_ALL, url: '/o-nas' },
    },
  ]

  return { menus, sections, seeAllLink }
}
