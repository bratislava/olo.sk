import type { Schema, Attribute } from '@strapi/strapi'

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

export interface ItemsOpeningTimeItem extends Schema.Component {
  collectionName: 'components_items_opening_time_items'
  info: {
    displayName: 'opening time item'
  }
  attributes: {
    label: Attribute.String & Attribute.Required
    value: Attribute.String & Attribute.Required
  }
}

export interface SectionsSection1 extends Schema.Component {
  collectionName: 'components_sections_section_1s'
  info: {
    displayName: 'section 1'
  }
  attributes: {
    title: Attribute.String
  }
}

export interface SectionsSection2 extends Schema.Component {
  collectionName: 'components_sections_section_2s'
  info: {
    displayName: 'section 2'
  }
  attributes: {
    title: Attribute.String
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'items.link': ItemsLink
      'items.opening-time-item': ItemsOpeningTimeItem
      'sections.section-1': SectionsSection1
      'sections.section-2': SectionsSection2
    }
  }
}
