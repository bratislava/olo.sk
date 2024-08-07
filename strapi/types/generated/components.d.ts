import type { Schema, Attribute } from '@strapi/strapi'

export interface HeaderSectionsBranchMap extends Schema.Component {
  collectionName: 'components_header_sections_branch_maps'
  info: {
    displayName: 'Mapa pobo\u010Diek'
    icon: 'pinMap'
    description: ''
  }
  attributes: {
    branches: Attribute.Relation<'header-sections.branch-map', 'oneToMany', 'api::branch.branch'>
  }
}

export interface HeaderSectionsFeaturedNews extends Schema.Component {
  collectionName: 'components_header_sections_featured_news'
  info: {
    displayName: 'Aktuality (\u010Dl\u00E1nky)'
    description: ''
  }
  attributes: {
    articlesTitle: Attribute.String & Attribute.Required
    firstArticle: Attribute.Relation<
      'header-sections.featured-news',
      'oneToOne',
      'api::article.article'
    >
    secondArticle: Attribute.Relation<
      'header-sections.featured-news',
      'oneToOne',
      'api::article.article'
    >
  }
}

export interface HeaderSectionsGallery extends Schema.Component {
  collectionName: 'components_header_sections_galleries'
  info: {
    displayName: 'Gal\u00E9ria'
    icon: 'landscape'
    description: ''
  }
  attributes: {
    medias: Attribute.Media & Attribute.Required
  }
}

export interface HeaderSectionsIcon extends Schema.Component {
  collectionName: 'components_header_sections_icons'
  info: {
    displayName: 'Ikonka'
    description: ''
  }
  attributes: {
    iconName: Attribute.String & Attribute.Required
  }
}

export interface HeaderSectionsImage extends Schema.Component {
  collectionName: 'components_header_sections_images'
  info: {
    displayName: 'Obr\u00E1zok'
    icon: 'picture'
    description: ''
  }
  attributes: {
    media: Attribute.Media & Attribute.Required
  }
}

export interface HeaderSectionsPickupDay extends Schema.Component {
  collectionName: 'components_header_sections_pickup_days'
  info: {
    displayName: 'Odvozov\u00FD de\u0148'
    description: ''
  }
  attributes: {
    carouselTitle: Attribute.String & Attribute.Required
    anchors: Attribute.Component<'items.anchor', true>
    showMoreLink: Attribute.Component<'items.link'>
  }
}

export interface HeaderSectionsSideImage extends Schema.Component {
  collectionName: 'components_header_sections_side_images'
  info: {
    displayName: 'Obr\u00E1zok vpravo'
    icon: 'picture'
    description: ''
  }
  attributes: {
    media: Attribute.Media & Attribute.Required
  }
}

export interface ItemsAnchor extends Schema.Component {
  collectionName: 'components_items_anchors'
  info: {
    displayName: 'Anchor'
  }
  attributes: {
    label: Attribute.String & Attribute.Required
    targetId: Attribute.String & Attribute.Required
  }
}

export interface ItemsCardsListItem extends Schema.Component {
  collectionName: 'components_items_cards_list_items'
  info: {
    displayName: 'Cards List item'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    link: Attribute.Component<'items.link'> & Attribute.Required
  }
}

export interface ItemsColumnsItem extends Schema.Component {
  collectionName: 'components_items_columns_items'
  info: {
    displayName: 'Columns item'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    image: Attribute.Media
  }
}

export interface ItemsColumnsListItem extends Schema.Component {
  collectionName: 'components_items_columns_list_items'
  info: {
    displayName: 'Columns List item'
    description: ''
  }
  attributes: {
    icon: Attribute.Media
    content: Attribute.RichText & Attribute.Required
  }
}

export interface ItemsFileItem extends Schema.Component {
  collectionName: 'components_items_file_items'
  info: {
    displayName: 'File item'
    description: ''
  }
  attributes: {
    title: Attribute.String
    media: Attribute.Media & Attribute.Required
  }
}

export interface ItemsFooterColumn extends Schema.Component {
  collectionName: 'components_items_footer_columns'
  info: {
    displayName: 'Footer column'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    links: Attribute.Component<'items.link', true>
  }
}

export interface ItemsHeroMainTile extends Schema.Component {
  collectionName: 'components_items_hero_main_tiles'
  info: {
    displayName: 'hero main tile'
  }
  attributes: {
    text: Attribute.String
    link: Attribute.Component<'items.link'>
  }
}

export interface ItemsHeroSmallTile extends Schema.Component {
  collectionName: 'components_items_hero_small_tiles'
  info: {
    displayName: 'hero small tile'
  }
  attributes: {
    icon: Attribute.String
    link: Attribute.Component<'items.link'>
  }
}

export interface ItemsHomepageServiceTile extends Schema.Component {
  collectionName: 'components_items_homepage_service_tiles'
  info: {
    displayName: 'homepage service tile'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    link: Attribute.Component<'items.link'>
  }
}

export interface ItemsLink extends Schema.Component {
  collectionName: 'components_items_links'
  info: {
    displayName: 'link'
    icon: 'link'
    description: ''
  }
  attributes: {
    label: Attribute.String
    url: Attribute.String
    page: Attribute.Relation<'items.link', 'oneToOne', 'api::page.page'>
    article: Attribute.Relation<'items.link', 'oneToOne', 'api::article.article'>
    branch: Attribute.Relation<'items.link', 'oneToOne', 'api::branch.branch'>
    document: Attribute.Relation<'items.link', 'oneToOne', 'api::document.document'>
    service: Attribute.Relation<'items.link', 'oneToOne', 'api::service.service'>
    workshop: Attribute.Relation<'items.link', 'oneToOne', 'api::workshop.workshop'>
  }
}

export interface ItemsOpeningHoursItem extends Schema.Component {
  collectionName: 'components_items_opening_hours_items'
  info: {
    displayName: 'opening hours item'
  }
  attributes: {
    label: Attribute.String & Attribute.Required
    value: Attribute.String & Attribute.Required
  }
}

export interface ItemsOrderedCardsItem extends Schema.Component {
  collectionName: 'components_items_ordered_cards_items'
  info: {
    displayName: 'Ordered Cards item'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text & Attribute.Required
    iconName: Attribute.String
  }
}

export interface ItemsSlide extends Schema.Component {
  collectionName: 'components_items_slides'
  info: {
    displayName: 'slide'
    description: ''
  }
  attributes: {
    title: Attribute.Text & Attribute.Required
    text: Attribute.Text
    backgroundColor: Attribute.String & Attribute.CustomField<'plugin::color-picker.color'>
    media: Attribute.Media & Attribute.Required
    link: Attribute.Component<'items.link'>
  }
}

export interface MenuMenuItem extends Schema.Component {
  collectionName: 'components_menu_menu_items'
  info: {
    displayName: 'menu item'
  }
  attributes: {
    label: Attribute.String & Attribute.Required
    sections: Attribute.Component<'menu.menu-section', true>
    seeAllLink: Attribute.Component<'items.link'>
  }
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_link'
  info: {
    displayName: 'menu link'
    description: ''
  }
  attributes: {
    label: Attribute.String
    url: Attribute.String
    page: Attribute.Relation<'menu.menu-link', 'oneToOne', 'api::page.page'>
    branch: Attribute.Relation<'menu.menu-link', 'oneToOne', 'api::branch.branch'>
    workshop: Attribute.Relation<'menu.menu-link', 'oneToOne', 'api::workshop.workshop'>
  }
}

export interface MenuMenuSection extends Schema.Component {
  collectionName: 'components_menu_menu_sections'
  info: {
    displayName: 'menu section'
    description: ''
  }
  attributes: {
    label: Attribute.String & Attribute.Required
    links: Attribute.Component<'menu.menu-link', true>
    colSpan: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0
          max: 3
        },
        number
      > &
      Attribute.DefaultTo<1>
    multicolumnBehaviour: Attribute.Enumeration<['fullwidth', 'split equally']>
    hasDivider: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    specialSectionType: Attribute.Enumeration<['latest articles']>
  }
}

export interface SectionsArticlesHomepageSection extends Schema.Component {
  collectionName: 'components_sections_articles_homepage_sections'
  info: {
    displayName: 'articles homepage section'
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    articles: Attribute.Relation<
      'sections.articles-homepage-section',
      'oneToMany',
      'api::article.article'
    >
    showMoreLink: Attribute.Component<'items.link'>
  }
}

export interface SectionsBanner extends Schema.Component {
  collectionName: 'components_sections_banners'
  info: {
    displayName: 'Banner'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    variant: Attribute.Enumeration<['background-grey', 'background-black']> &
      Attribute.Required &
      Attribute.DefaultTo<'background-grey'>
    image: Attribute.Media & Attribute.Required
    primaryButtonLink: Attribute.Component<'items.link'> & Attribute.Required
    secondaryButtonLink: Attribute.Component<'items.link'>
  }
}

export interface SectionsBranches extends Schema.Component {
  collectionName: 'components_sections_branches'
  info: {
    displayName: 'Branches'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    showAll: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    branches: Attribute.Relation<'sections.branches', 'oneToMany', 'api::branch.branch'>
  }
}

export interface SectionsCardsList extends Schema.Component {
  collectionName: 'components_sections_cards_lists'
  info: {
    displayName: 'Cards List'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    cards: Attribute.Component<'items.cards-list-item', true>
  }
}

export interface SectionsColumnsList extends Schema.Component {
  collectionName: 'components_sections_columns_lists'
  info: {
    displayName: 'Columns List'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']>
    leftColumn: Attribute.Component<'items.columns-list-item', true>
    rightColumn: Attribute.Component<'items.columns-list-item', true>
  }
}

export interface SectionsColumns extends Schema.Component {
  collectionName: 'components_sections_columns'
  info: {
    displayName: 'Columns'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.String
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    items: Attribute.Component<'items.columns-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
  }
}

export interface SectionsDivider extends Schema.Component {
  collectionName: 'components_sections_dividers'
  info: {
    displayName: 'Divider'
    description: ''
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
  }
}

export interface SectionsFaq extends Schema.Component {
  collectionName: 'components_sections_faqs'
  info: {
    displayName: 'FAQ'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    faqs: Attribute.Relation<'sections.faq', 'oneToMany', 'api::faq.faq'>
    showMoreLink: Attribute.Component<'items.link'>
  }
}

export interface SectionsFiles extends Schema.Component {
  collectionName: 'components_sections_files'
  info: {
    displayName: 'Files'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    files: Attribute.Component<'items.file-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
  }
}

export interface SectionsHeroHomepageSection extends Schema.Component {
  collectionName: 'components_sections_hero_homepage_sections'
  info: {
    displayName: 'hero homepage section'
  }
  attributes: {
    slides: Attribute.Component<'items.slide', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    mainTiles: Attribute.Component<'items.hero-main-tile', true> &
      Attribute.SetMinMax<
        {
          max: 2
        },
        number
      >
    smallTiles: Attribute.Component<'items.hero-small-tile', true> &
      Attribute.SetMinMax<
        {
          max: 6
        },
        number
      >
  }
}

export interface SectionsImageAndTextOverlapped extends Schema.Component {
  collectionName: 'components_sections_image_and_text_overlappeds'
  info: {
    displayName: 'Image and Text Overlapped'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    imagePosition: Attribute.Enumeration<['left', 'right', 'left-shifted', 'right-shifted']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    image: Attribute.Media & Attribute.Required
    link: Attribute.Component<'items.link'>
  }
}

export interface SectionsImageAndText extends Schema.Component {
  collectionName: 'components_sections_image_and_texts'
  info: {
    displayName: 'Image and Text'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    image: Attribute.Media & Attribute.Required
    primaryButton: Attribute.Component<'items.link'>
    secondaryButton: Attribute.Component<'items.link'>
  }
}

export interface SectionsKoloHomepageSection extends Schema.Component {
  collectionName: 'components_sections_kolo_homepage_sections'
  info: {
    displayName: 'kolo homepage section'
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    mainCards: Attribute.Component<'items.link', true> &
      Attribute.SetMinMax<
        {
          max: 2
        },
        number
      >
    branchesTitle: Attribute.String
    branches: Attribute.Relation<
      'sections.kolo-homepage-section',
      'oneToMany',
      'api::branch.branch'
    >
    showMoreLink: Attribute.Component<'items.link'>
  }
}

export interface SectionsOrderedCards extends Schema.Component {
  collectionName: 'components_sections_ordered_cards'
  info: {
    displayName: 'Ordered Cards'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    variant: Attribute.Enumeration<['numbers', 'icons']> &
      Attribute.Required &
      Attribute.DefaultTo<'numbers'>
    cards: Attribute.Component<'items.ordered-cards-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
  }
}

export interface SectionsRichtext extends Schema.Component {
  collectionName: 'components_sections_richtexts'
  info: {
    displayName: 'Richtext'
    description: ''
  }
  attributes: {
    content: Attribute.RichText
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
  }
}

export interface SectionsServicesHomepageSection extends Schema.Component {
  collectionName: 'components_sections_services_homepage_sections'
  info: {
    displayName: 'services homepage section'
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    tiles: Attribute.Component<'items.homepage-service-tile', true> &
      Attribute.SetMinMax<
        {
          max: 3
        },
        number
      >
    showMoreLink: Attribute.Component<'items.link'>
  }
}

export interface SectionsTable extends Schema.Component {
  collectionName: 'components_sections_tables'
  info: {
    displayName: 'Tabu\u013Eka'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    anchorId: Attribute.String
    text: Attribute.Text
  }
}

export interface SectionsWorkshops extends Schema.Component {
  collectionName: 'components_sections_workshops'
  info: {
    displayName: 'Workshops'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    showAll: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    workshops: Attribute.Relation<'sections.workshops', 'oneToMany', 'api::workshop.workshop'>
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header-sections.branch-map': HeaderSectionsBranchMap
      'header-sections.featured-news': HeaderSectionsFeaturedNews
      'header-sections.gallery': HeaderSectionsGallery
      'header-sections.icon': HeaderSectionsIcon
      'header-sections.image': HeaderSectionsImage
      'header-sections.pickup-day': HeaderSectionsPickupDay
      'header-sections.side-image': HeaderSectionsSideImage
      'items.anchor': ItemsAnchor
      'items.cards-list-item': ItemsCardsListItem
      'items.columns-item': ItemsColumnsItem
      'items.columns-list-item': ItemsColumnsListItem
      'items.file-item': ItemsFileItem
      'items.footer-column': ItemsFooterColumn
      'items.hero-main-tile': ItemsHeroMainTile
      'items.hero-small-tile': ItemsHeroSmallTile
      'items.homepage-service-tile': ItemsHomepageServiceTile
      'items.link': ItemsLink
      'items.opening-hours-item': ItemsOpeningHoursItem
      'items.ordered-cards-item': ItemsOrderedCardsItem
      'items.slide': ItemsSlide
      'menu.menu-item': MenuMenuItem
      'menu.menu-link': MenuMenuLink
      'menu.menu-section': MenuMenuSection
      'sections.articles-homepage-section': SectionsArticlesHomepageSection
      'sections.banner': SectionsBanner
      'sections.branches': SectionsBranches
      'sections.cards-list': SectionsCardsList
      'sections.columns-list': SectionsColumnsList
      'sections.columns': SectionsColumns
      'sections.divider': SectionsDivider
      'sections.faq': SectionsFaq
      'sections.files': SectionsFiles
      'sections.hero-homepage-section': SectionsHeroHomepageSection
      'sections.image-and-text-overlapped': SectionsImageAndTextOverlapped
      'sections.image-and-text': SectionsImageAndText
      'sections.kolo-homepage-section': SectionsKoloHomepageSection
      'sections.ordered-cards': SectionsOrderedCards
      'sections.richtext': SectionsRichtext
      'sections.services-homepage-section': SectionsServicesHomepageSection
      'sections.table': SectionsTable
      'sections.workshops': SectionsWorkshops
    }
  }
}
