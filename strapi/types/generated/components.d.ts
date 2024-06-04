import type { Schema, Attribute } from '@strapi/strapi'

export interface HeaderSectionsArticles extends Schema.Component {
  collectionName: 'components_header_sections_articles'
  info: {
    displayName: '\u010Cl\u00E1nky (aktuality)'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    articlesTitle: Attribute.String & Attribute.Required
    firstArticle: Attribute.Relation<'header-sections.articles', 'oneToOne', 'api::article.article'>
    secondArticle: Attribute.Relation<
      'header-sections.articles',
      'oneToOne',
      'api::article.article'
    >
  }
}

export interface HeaderSectionsBasic extends Schema.Component {
  collectionName: 'components_header_sections_basics'
  info: {
    displayName: 'Basic'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
  }
}

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

export interface HeaderSectionsGallery extends Schema.Component {
  collectionName: 'components_header_sections_galleries'
  info: {
    displayName: 'Gal\u00E9ria'
    icon: 'landscape'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    medias: Attribute.Media & Attribute.Required
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
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    media: Attribute.Media & Attribute.Required
  }
}

export interface HeaderSectionsSideImage extends Schema.Component {
  collectionName: 'components_header_sections_side_images'
  info: {
    displayName: 'Obr\u00E1zok vpravo'
    icon: 'picture'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    media: Attribute.Media & Attribute.Required
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

export interface SectionsOrderedCards extends Schema.Component {
  collectionName: 'components_sections_ordered_cards'
  info: {
    displayName: 'Ordered Cards'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
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
    displayName: 'richtext'
    icon: 'apps'
    description: ''
  }
  attributes: {
    content: Attribute.Blocks
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
      'header-sections.articles': HeaderSectionsArticles
      'header-sections.basic': HeaderSectionsBasic
      'header-sections.branch-map': HeaderSectionsBranchMap
      'header-sections.gallery': HeaderSectionsGallery
      'header-sections.image': HeaderSectionsImage
      'header-sections.side-image': HeaderSectionsSideImage
      'items.columns-item': ItemsColumnsItem
      'items.link': ItemsLink
      'items.opening-hours-item': ItemsOpeningHoursItem
      'items.ordered-cards-item': ItemsOrderedCardsItem
      'items.slide': ItemsSlide
      'sections.branches': SectionsBranches
      'sections.columns': SectionsColumns
      'sections.image-and-text-overlapped': SectionsImageAndTextOverlapped
      'sections.image-and-text': SectionsImageAndText
      'sections.ordered-cards': SectionsOrderedCards
      'sections.richtext': SectionsRichtext
      'sections.workshops': SectionsWorkshops
    }
  }
}
