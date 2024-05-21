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

export interface ItemsLink extends Schema.Component {
  collectionName: 'components_items_links'
  info: {
    displayName: 'link'
    icon: 'link'
    description: ''
  }
  attributes: {
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

export interface ItemsOrderedCardItem extends Schema.Component {
  collectionName: 'components_items_ordered_card_items'
  info: {
    displayName: 'Ordered Card item'
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

export interface SectionsOrderedCards extends Schema.Component {
  collectionName: 'components_sections_ordered_cards'
  info: {
    displayName: 'Ordered Cards'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    cards: Attribute.Component<'items.ordered-card-item', true> &
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header-sections.branch-map': HeaderSectionsBranchMap
      'header-sections.gallery': HeaderSectionsGallery
      'header-sections.image': HeaderSectionsImage
      'items.link': ItemsLink
      'items.opening-hours-item': ItemsOpeningHoursItem
      'items.ordered-card-item': ItemsOrderedCardItem
      'items.slide': ItemsSlide
      'sections.ordered-cards': SectionsOrderedCards
      'sections.richtext': SectionsRichtext
    }
  }
}
