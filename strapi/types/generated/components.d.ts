import type { Attribute, Schema } from '@strapi/strapi'

export interface HeaderSectionsBranchMap extends Schema.Component {
  collectionName: 'components_header_sections_branch_maps'
  info: {
    description: ''
    displayName: 'Mapa pobo\u010Diek'
    icon: 'pinMap'
  }
  attributes: {
    branches: Attribute.Relation<'header-sections.branch-map', 'oneToMany', 'api::branch.branch'>
  }
}

export interface HeaderSectionsCareers extends Schema.Component {
  collectionName: 'components_header_sections_careers'
  info: {
    description: ''
    displayName: 'Kari\u00E9ra'
  }
  attributes: {
    alternativeTextVideo: Attribute.Text
    image: Attribute.Media<'images'>
    imageQuote: Attribute.Text
    videoUrl: Attribute.String & Attribute.Required
  }
}

export interface HeaderSectionsFeaturedNews extends Schema.Component {
  collectionName: 'components_header_sections_featured_news'
  info: {
    description: ''
    displayName: 'Aktuality (\u010Dl\u00E1nky)'
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
    description: ''
    displayName: 'Gal\u00E9ria'
    icon: 'landscape'
  }
  attributes: {
    medias: Attribute.Media<'images', true> & Attribute.Required
  }
}

export interface HeaderSectionsIcon extends Schema.Component {
  collectionName: 'components_header_sections_icons'
  info: {
    description: ''
    displayName: 'Ikonka'
  }
  attributes: {
    iconName: Attribute.String & Attribute.Required
  }
}

export interface HeaderSectionsImage extends Schema.Component {
  collectionName: 'components_header_sections_images'
  info: {
    description: ''
    displayName: 'Obr\u00E1zok na cel\u00FA \u0161\u00EDrku'
    icon: 'picture'
  }
  attributes: {
    media: Attribute.Media<'images'> & Attribute.Required
  }
}

export interface HeaderSectionsPickupDay extends Schema.Component {
  collectionName: 'components_header_sections_pickup_days'
  info: {
    description: ''
    displayName: 'Odvozov\u00E9 dni'
  }
  attributes: {
    anchors: Attribute.Component<'items.anchor', true>
    carouselTitle: Attribute.String & Attribute.Required
    showMoreLink: Attribute.Component<'items.link'>
    tags: Attribute.Relation<'header-sections.pickup-day', 'oneToMany', 'api::tag.tag'>
  }
}

export interface HeaderSectionsSideImage extends Schema.Component {
  collectionName: 'components_header_sections_side_images'
  info: {
    description: ''
    displayName: 'Obr\u00E1zok vpravo'
    icon: 'picture'
  }
  attributes: {
    media: Attribute.Media<'images'> & Attribute.Required
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

export interface ItemsBoardMembersItem extends Schema.Component {
  collectionName: 'components_items_board_members_items'
  info: {
    displayName: 'Board Members item'
  }
  attributes: {
    image: Attribute.Media<'images'>
    links: Attribute.Component<'items.link', true>
    name: Attribute.String & Attribute.Required
    position: Attribute.String & Attribute.Required
  }
}

export interface ItemsCardSliderCard extends Schema.Component {
  collectionName: 'components_items_card_slider_cards'
  info: {
    description: ''
    displayName: 'Card Slider card'
  }
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required
    text: Attribute.Text
    title: Attribute.String & Attribute.Required
  }
}

export interface ItemsCardsListItem extends Schema.Component {
  collectionName: 'components_items_cards_list_items'
  info: {
    displayName: 'Cards List item'
  }
  attributes: {
    link: Attribute.Component<'items.link'> & Attribute.Required
    subtext: Attribute.String
    title: Attribute.String & Attribute.Required
  }
}

export interface ItemsColumnsItem extends Schema.Component {
  collectionName: 'components_items_columns_items'
  info: {
    description: ''
    displayName: 'Columns item'
  }
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface ItemsColumnsListItem extends Schema.Component {
  collectionName: 'components_items_columns_list_items'
  info: {
    description: ''
    displayName: 'Columns List item'
  }
  attributes: {
    content: Attribute.RichText & Attribute.Required
    icon: Attribute.Media<'images'>
  }
}

export interface ItemsContactsBranch extends Schema.Component {
  collectionName: 'components_items_contacts_branches'
  info: {
    displayName: 'Contacts branch'
  }
  attributes: {
    branch: Attribute.Relation<'items.contacts-branch', 'oneToOne', 'api::branch.branch'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface ItemsContactsContact extends Schema.Component {
  collectionName: 'components_items_contacts_contacts'
  info: {
    displayName: 'Contacts contact'
  }
  attributes: {
    contact: Attribute.Relation<'items.contacts-contact', 'oneToOne', 'api::contact.contact'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface ItemsContactsOpeningTime extends Schema.Component {
  collectionName: 'components_items_contacts_opening_times'
  info: {
    displayName: 'Contacts opening time'
  }
  attributes: {
    openingTime: Attribute.Relation<
      'items.contacts-opening-time',
      'oneToOne',
      'api::opening-time.opening-time'
    >
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface ItemsFileItem extends Schema.Component {
  collectionName: 'components_items_file_items'
  info: {
    description: ''
    displayName: 'File item'
  }
  attributes: {
    media: Attribute.Media<'images' | 'files'> & Attribute.Required
    title: Attribute.String
  }
}

export interface ItemsFooterColumn extends Schema.Component {
  collectionName: 'components_items_footer_columns'
  info: {
    description: ''
    displayName: 'Footer column'
  }
  attributes: {
    links: Attribute.Component<'items.link', true>
    title: Attribute.String & Attribute.Required
  }
}

export interface ItemsFormCtaBannerLink extends Schema.Component {
  collectionName: 'components_items_form_cta_banner_links'
  info: {
    description: ''
    displayName: 'form cta banner link'
  }
  attributes: {
    email: Attribute.Email
    form: Attribute.Relation<'items.form-cta-banner-link', 'oneToOne', 'api::form.form'>
    label: Attribute.String
    url: Attribute.String
  }
}

export interface ItemsHeroMainTile extends Schema.Component {
  collectionName: 'components_items_hero_main_tiles'
  info: {
    displayName: 'hero main tile'
  }
  attributes: {
    link: Attribute.Component<'items.link'>
    text: Attribute.String
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
    link: Attribute.Component<'items.link'>
    text: Attribute.Text
    title: Attribute.String & Attribute.Required
  }
}

export interface ItemsLink extends Schema.Component {
  collectionName: 'components_items_links'
  info: {
    description: ''
    displayName: 'link'
    icon: 'link'
  }
  attributes: {
    article: Attribute.Relation<'items.link', 'oneToOne', 'api::article.article'>
    branch: Attribute.Relation<'items.link', 'oneToOne', 'api::branch.branch'>
    document: Attribute.Relation<'items.link', 'oneToOne', 'api::document.document'>
    label: Attribute.String
    page: Attribute.Relation<'items.link', 'oneToOne', 'api::page.page'>
    service: Attribute.Relation<'items.link', 'oneToOne', 'api::service.service'>
    url: Attribute.String
    workshop: Attribute.Relation<'items.link', 'oneToOne', 'api::workshop.workshop'>
  }
}

export interface ItemsLocationCardsItem extends Schema.Component {
  collectionName: 'components_items_location_cards_items'
  info: {
    displayName: 'Location Cards item'
  }
  attributes: {
    address: Attribute.String
    link: Attribute.Component<'items.link'> & Attribute.Required
    title: Attribute.String & Attribute.Required
  }
}

export interface ItemsMenuHeader extends Schema.Component {
  collectionName: 'components_items_menu_headers'
  info: {
    description: ''
    displayName: 'Menu header'
  }
  attributes: {
    contactsLink: Attribute.Component<'items.link'>
    searchLink: Attribute.Component<'items.link'>
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

export interface ItemsOpeningTimesItem extends Schema.Component {
  collectionName: 'components_items_opening_times_items'
  info: {
    description: ''
    displayName: 'Opening Times item'
  }
  attributes: {
    openingTime: Attribute.Relation<
      'items.opening-times-item',
      'oneToOne',
      'api::opening-time.opening-time'
    >
    title: Attribute.String
  }
}

export interface ItemsOrderedCardsItem extends Schema.Component {
  collectionName: 'components_items_ordered_cards_items'
  info: {
    description: ''
    displayName: 'Ordered Cards item'
  }
  attributes: {
    iconName: Attribute.String
    text: Attribute.RichText
    title: Attribute.String
  }
}

export interface ItemsSlide extends Schema.Component {
  collectionName: 'components_items_slides'
  info: {
    description: ''
    displayName: 'slide'
  }
  attributes: {
    backgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>
    link: Attribute.Component<'items.link'>
    media: Attribute.Media<'images'> & Attribute.Required
    text: Attribute.Text
    title: Attribute.Text & Attribute.Required
  }
}

export interface ItemsSortingGuide extends Schema.Component {
  collectionName: 'components_items_sorting_guides'
  info: {
    description: ''
    displayName: 'Sorting Guide'
  }
  attributes: {
    alertMessageBottom: Attribute.Component<'items.sorting-guide-alert-message'>
    alertMessageDoesntGoHere: Attribute.Component<'items.sorting-guide-alert-message'>
    alertMessageGoesHere: Attribute.Component<'items.sorting-guide-alert-message'>
    doesntGoHereItems: Attribute.Component<'items.sorting-guide-item', true>
    goesHereItems: Attribute.Component<'items.sorting-guide-item', true>
    titleDoesntGoHere: Attribute.String & Attribute.DefaultTo<'Nepatr\u00ED sem'>
    titleGoesHere: Attribute.String & Attribute.DefaultTo<'Patr\u00ED sem'>
  }
}

export interface ItemsSortingGuideAccordionItem extends Schema.Component {
  collectionName: 'components_items_sorting_guide_accordion_items'
  info: {
    displayName: 'sorting guide accordion item'
  }
  attributes: {
    sortingGuide: Attribute.Component<'items.sorting-guide'>
    title: Attribute.String & Attribute.Required
    wasteType: Attribute.Enumeration<
      [
        'paper',
        'plastic',
        'glass',
        'civicAmenitySite',
        'cookingOilsAndFats',
        'kitchen',
        'organic',
        'mixed',
        'cemetery',
        'christmasTrees',
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'paper'>
  }
}

export interface ItemsSortingGuideAlertMessage extends Schema.Component {
  collectionName: 'components_items_sorting_guide_alert_messages'
  info: {
    description: ''
    displayName: 'Sorting Guide Alert Message'
  }
  attributes: {
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface ItemsSortingGuideItem extends Schema.Component {
  collectionName: 'components_items_sorting_guide_items'
  info: {
    description: ''
    displayName: 'Sorting Guide Item'
  }
  attributes: {
    label: Attribute.String & Attribute.Required
  }
}

export interface ItemsWasteSortingCardsItem extends Schema.Component {
  collectionName: 'components_items_waste_sorting_cards_items'
  info: {
    description: ''
    displayName: 'Waste Sorting Cards item'
  }
  attributes: {
    link: Attribute.Component<'items.link'> & Attribute.Required
    title: Attribute.String & Attribute.Required
    variant: Attribute.Enumeration<
      [
        'mixed',
        'paper',
        'plastic',
        'glass',
        'kitchen',
        'cookingOilsAndFats',
        'organic',
        'civicAmenitySite',
        'cemetery',
        'christmasTrees',
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'mixed'>
  }
}

export interface ItemsWorkshopDate extends Schema.Component {
  collectionName: 'components_items_workshop_dates'
  info: {
    description: ''
    displayName: 'Workshop date'
  }
  attributes: {
    datetime: Attribute.DateTime & Attribute.Required
    internalName: Attribute.String & Attribute.Private
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
    description: ''
    displayName: 'menu link'
  }
  attributes: {
    branch: Attribute.Relation<'menu.menu-link', 'oneToOne', 'api::branch.branch'>
    label: Attribute.String
    page: Attribute.Relation<'menu.menu-link', 'oneToOne', 'api::page.page'>
    service: Attribute.Relation<'menu.menu-link', 'oneToOne', 'api::service.service'>
    url: Attribute.String
    workshop: Attribute.Relation<'menu.menu-link', 'oneToOne', 'api::workshop.workshop'>
  }
}

export interface MenuMenuSection extends Schema.Component {
  collectionName: 'components_menu_menu_sections'
  info: {
    description: ''
    displayName: 'menu section'
  }
  attributes: {
    colSpan: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 3
          min: 0
        },
        number
      > &
      Attribute.DefaultTo<1>
    hasDividers: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    label: Attribute.String & Attribute.Required
    links: Attribute.Component<'menu.menu-link', true>
    multicolumnBehaviour: Attribute.Enumeration<['fullwidth', 'split equally']>
    specialSectionType: Attribute.Enumeration<['latest articles']>
  }
}

export interface SectionsArticles extends Schema.Component {
  collectionName: 'components_sections_articles'
  info: {
    description: ''
    displayName: '\u010Cl\u00E1nky'
  }
  attributes: {
    categories: Attribute.Relation<
      'sections.articles',
      'oneToMany',
      'api::article-category.article-category'
    >
    showMoreLink: Attribute.Component<'items.link'>
    tags: Attribute.Relation<'sections.articles', 'oneToMany', 'api::tag.tag'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsArticlesHomepageSection extends Schema.Component {
  collectionName: 'components_sections_articles_homepage_sections'
  info: {
    displayName: 'articles homepage section'
  }
  attributes: {
    articles: Attribute.Relation<
      'sections.articles-homepage-section',
      'oneToMany',
      'api::article.article'
    >
    showMoreLink: Attribute.Component<'items.link'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsBanner extends Schema.Component {
  collectionName: 'components_sections_banners'
  info: {
    displayName: 'Banner'
  }
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required
    primaryButtonLink: Attribute.Component<'items.link'> & Attribute.Required
    secondaryButtonLink: Attribute.Component<'items.link'>
    text: Attribute.Text
    title: Attribute.String & Attribute.Required
    variant: Attribute.Enumeration<['background-grey', 'background-black']> &
      Attribute.Required &
      Attribute.DefaultTo<'background-grey'>
  }
}

export interface SectionsBoardMembers extends Schema.Component {
  collectionName: 'components_sections_board_members'
  info: {
    description: ''
    displayName: 'Spr\u00E1vna rada'
  }
  attributes: {
    boardMembers: Attribute.Component<'items.board-members-item', true>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsBranches extends Schema.Component {
  collectionName: 'components_sections_branches'
  info: {
    description: ''
    displayName: 'Pobo\u010Dky'
  }
  attributes: {
    branches: Attribute.Relation<'sections.branches', 'oneToMany', 'api::branch.branch'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsCardSlider extends Schema.Component {
  collectionName: 'components_sections_card_sliders'
  info: {
    description: ''
    displayName: 'Karty (slider)'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    cards: Attribute.Component<'items.card-slider-card', true> & Attribute.Required
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsCardsList extends Schema.Component {
  collectionName: 'components_sections_cards_lists'
  info: {
    description: ''
    displayName: 'Odkazy'
  }
  attributes: {
    cards: Attribute.Component<'items.cards-list-item', true>
    columnCount: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 4
          min: 2
        },
        number
      > &
      Attribute.DefaultTo<3>
    linkLabelOverride: Attribute.Text
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsChildPagesCardsList extends Schema.Component {
  collectionName: 'components_sections_child_pages_cards_lists'
  info: {
    displayName: 'Karty (zoznam dc\u00E9rskych str\u00E1nok)'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    page: Attribute.Relation<'sections.child-pages-cards-list', 'oneToOne', 'api::page.page'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsColumns extends Schema.Component {
  collectionName: 'components_sections_columns'
  info: {
    description: ''
    displayName: 'St\u013Apce (nadpis, text, obr\u00E1zok)'
  }
  attributes: {
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
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsColumnsList extends Schema.Component {
  collectionName: 'components_sections_columns_lists'
  info: {
    description: ''
    displayName: 'St\u013Apce so zoznamom (ikonka + text)'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']>
    leftColumn: Attribute.Component<'items.columns-list-item', true>
    rightColumn: Attribute.Component<'items.columns-list-item', true>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsContacts extends Schema.Component {
  collectionName: 'components_sections_contacts'
  info: {
    description: ''
    displayName: 'Kontakty'
  }
  attributes: {
    branches: Attribute.Component<'items.contacts-branch', true>
    contacts: Attribute.Component<'items.contacts-contact', true>
    openingTimes: Attribute.Component<'items.contacts-opening-time', true>
    title: Attribute.String
  }
}

export interface SectionsDivider extends Schema.Component {
  collectionName: 'components_sections_dividers'
  info: {
    description: ''
    displayName: 'Divider'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
  }
}

export interface SectionsDocuments extends Schema.Component {
  collectionName: 'components_sections_documents'
  info: {
    description: ''
    displayName: 'Dokumenty'
  }
  attributes: {
    documents: Attribute.Relation<'sections.documents', 'oneToMany', 'api::document.document'>
    showAll: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsFaq extends Schema.Component {
  collectionName: 'components_sections_faqs'
  info: {
    description: ''
    displayName: 'FAQ'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    faqCategories: Attribute.Relation<'sections.faq', 'oneToMany', 'api::faq-category.faq-category'>
    faqs: Attribute.Relation<'sections.faq', 'oneToMany', 'api::faq.faq'>
    showMoreLink: Attribute.Component<'items.link'>
    text: Attribute.Text
    title: Attribute.String & Attribute.DefaultTo<'\u010Casto kladen\u00E9 ot\u00E1zky'>
  }
}

export interface SectionsFaqCategories extends Schema.Component {
  collectionName: 'components_sections_faq_categories'
  info: {
    description: ''
    displayName: 'FAQ kateg\u00F3rie'
  }
  attributes: {
    faqCategories: Attribute.Relation<
      'sections.faq-categories',
      'oneToMany',
      'api::faq-category.faq-category'
    >
    showAll: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsFiles extends Schema.Component {
  collectionName: 'components_sections_files'
  info: {
    description: ''
    displayName: 'S\u00FAbory'
  }
  attributes: {
    files: Attribute.Component<'items.file-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsFormCtaBanner extends Schema.Component {
  collectionName: 'components_sections_form_cta_banners'
  info: {
    description: ''
    displayName: 'Formul\u00E1rov\u00FD CTA banner'
  }
  attributes: {
    bannerLink: Attribute.Component<'items.form-cta-banner-link'> & Attribute.Required
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsGlobalSearch extends Schema.Component {
  collectionName: 'components_sections_global_searches'
  info: {
    description: ''
    displayName: 'Vyh\u013Ead\u00E1vanie'
  }
  attributes: {
    title: Attribute.String
  }
}

export interface SectionsHeroHomepageSection extends Schema.Component {
  collectionName: 'components_sections_hero_homepage_sections'
  info: {
    displayName: 'hero homepage section'
  }
  attributes: {
    mainTiles: Attribute.Component<'items.hero-main-tile', true> &
      Attribute.SetMinMax<
        {
          max: 2
        },
        number
      >
    slides: Attribute.Component<'items.slide', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    smallTiles: Attribute.Component<'items.hero-small-tile', true> &
      Attribute.SetMinMax<
        {
          max: 6
        },
        number
      >
  }
}

export interface SectionsIframeSection extends Schema.Component {
  collectionName: 'components_sections_iframe_sections'
  info: {
    description: ''
    displayName: 'Iframe'
  }
  attributes: {
    iframeTitle: Attribute.String & Attribute.Required
    isFullScreen: Attribute.Boolean & Attribute.DefaultTo<false>
    text: Attribute.Text
    title: Attribute.String
    url: Attribute.String & Attribute.Required
  }
}

export interface SectionsImageAndText extends Schema.Component {
  collectionName: 'components_sections_image_and_texts'
  info: {
    description: ''
    displayName: 'Text s obr\u00E1zkom'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    image: Attribute.Media<'images'> & Attribute.Required
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>
    primaryButton: Attribute.Component<'items.link'>
    secondaryButton: Attribute.Component<'items.link'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsImageAndTextOverlapped extends Schema.Component {
  collectionName: 'components_sections_image_and_text_overlappeds'
  info: {
    description: ''
    displayName: 'Text s obr\u00E1zkom (prekryt\u00FD)'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    image: Attribute.Media<'images'> & Attribute.Required
    imagePosition: Attribute.Enumeration<['left', 'right', 'left-shifted', 'right-shifted']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>
    readMoreLink: Attribute.Component<'items.link'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsKoloHomepageSection extends Schema.Component {
  collectionName: 'components_sections_kolo_homepage_sections'
  info: {
    displayName: 'kolo homepage section'
  }
  attributes: {
    branches: Attribute.Relation<
      'sections.kolo-homepage-section',
      'oneToMany',
      'api::branch.branch'
    >
    branchesTitle: Attribute.String
    mainCards: Attribute.Component<'items.cards-list-item', true> &
      Attribute.SetMinMax<
        {
          max: 2
        },
        number
      >
    showMoreLink: Attribute.Component<'items.link'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsOpeningTimes extends Schema.Component {
  collectionName: 'components_sections_opening_times'
  info: {
    description: ''
    displayName: 'Otv\u00E1racie hodiny'
  }
  attributes: {
    branchLocation: Attribute.Relation<'sections.opening-times', 'oneToOne', 'api::branch.branch'>
    openingTimes: Attribute.Component<'items.opening-times-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsOrderedCards extends Schema.Component {
  collectionName: 'components_sections_ordered_cards'
  info: {
    description: ''
    displayName: 'Karty na \u017Eltom pozad\u00ED'
  }
  attributes: {
    cards: Attribute.Component<'items.ordered-cards-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    text: Attribute.Text
    title: Attribute.String
    variant: Attribute.Enumeration<['numbers', 'icons']> &
      Attribute.Required &
      Attribute.DefaultTo<'numbers'>
  }
}

export interface SectionsRichtext extends Schema.Component {
  collectionName: 'components_sections_richtexts'
  info: {
    description: ''
    displayName: 'Richtext'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    content: Attribute.RichText
  }
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services'
  info: {
    displayName: 'Slu\u017Eby'
  }
  attributes: {
    text: Attribute.String
    title: Attribute.String
  }
}

export interface SectionsServicesHomepageSection extends Schema.Component {
  collectionName: 'components_sections_services_homepage_sections'
  info: {
    displayName: 'services homepage section'
  }
  attributes: {
    showMoreLink: Attribute.Component<'items.link'>
    text: Attribute.Text
    tiles: Attribute.Component<'items.homepage-service-tile', true> &
      Attribute.SetMinMax<
        {
          max: 3
        },
        number
      >
    title: Attribute.String
  }
}

export interface SectionsSortingGuide extends Schema.Component {
  collectionName: 'components_sections_sorting_guides'
  info: {
    displayName: 'Triedenie'
  }
  attributes: {
    banner: Attribute.Component<'sections.banner'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    sortingGuide: Attribute.Component<'items.sorting-guide'>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsSortingGuideAccordions extends Schema.Component {
  collectionName: 'components_sections_sorting_guide_accordions'
  info: {
    description: ''
    displayName: 'Triedenie (akorde\u00F3ny)'
  }
  attributes: {
    banner: Attribute.Component<'sections.banner'>
    sortingGuideAccordions: Attribute.Component<'items.sorting-guide-accordion-item', true>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsTenders extends Schema.Component {
  collectionName: 'components_sections_tenders'
  info: {
    description: ''
    displayName: 'Verejn\u00E9 obstar\u00E1vania'
  }
  attributes: {
    content: Attribute.RichText
    tendersPerPage: Attribute.Integer
    title: Attribute.String
  }
}

export interface SectionsVacancies extends Schema.Component {
  collectionName: 'components_sections_vacancies'
  info: {
    description: ''
    displayName: 'Pracovn\u00E9 poz\u00EDcie'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsWasteCollectionDays extends Schema.Component {
  collectionName: 'components_sections_waste_collection_days'
  info: {
    description: ''
    displayName: 'Odvozov\u00E9 dni'
  }
  attributes: {
    anchorId: Attribute.String
    text: Attribute.RichText
    title: Attribute.String
    validityMessage: Attribute.RichText
    visibleColumns: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Adresa:address',
          'Eviden\u010Dn\u00E9 \u010D\u00EDslo:registrationNumber',
          'P\u00E1rny t\u00FD\u017Ede\u0148:evenWeek',
          'Nep\u00E1rny t\u00FD\u017Ede\u0148:oddWeek',
          'D\u00E1tumy odvozov:collectionDates',
          'Pozn\u00E1mka:note',
        ]
      >
    wasteCollectionDaysType: Attribute.String
  }
}

export interface SectionsWasteCollectionPoints extends Schema.Component {
  collectionName: 'components_sections_waste_collection_points'
  info: {
    description: ''
    displayName: 'Zbern\u00E9 miesta'
  }
  attributes: {
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    cards: Attribute.Component<'items.location-cards-item', true>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsWasteRemovalCards extends Schema.Component {
  collectionName: 'components_sections_waste_removal_cards'
  info: {
    displayName: 'Karty (odvoz odpadu kontajnerom)'
  }
  attributes: {
    cards: Attribute.Component<'items.card-slider-card', true>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsWasteSortingCards extends Schema.Component {
  collectionName: 'components_sections_waste_sorting_cards'
  info: {
    description: ''
    displayName: 'Komodity'
  }
  attributes: {
    banner: Attribute.Component<'sections.banner'>
    cards: Attribute.Component<'items.waste-sorting-cards-item', true>
    text: Attribute.Text
    title: Attribute.String
  }
}

export interface SectionsWorkshops extends Schema.Component {
  collectionName: 'components_sections_workshops'
  info: {
    description: ''
    displayName: 'Workshopy'
  }
  attributes: {
    showAll: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    text: Attribute.Text
    title: Attribute.String
    workshops: Attribute.Relation<'sections.workshops', 'oneToMany', 'api::workshop.workshop'>
  }
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials'
  info: {
    displayName: 'metaSocial'
    icon: 'project-diagram'
  }
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65
      }>
    image: Attribute.Media<'images' | 'files' | 'videos'>
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> & Attribute.Required
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60
      }>
  }
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos'
  info: {
    displayName: 'seo'
    icon: 'search'
  }
  attributes: {
    canonicalURL: Attribute.String
    keywords: Attribute.Text
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160
        minLength: 50
      }>
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>
    metaRobots: Attribute.String
    metaSocial: Attribute.Component<'shared.meta-social', true>
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60
      }>
    metaViewport: Attribute.String
    structuredData: Attribute.JSON
  }
}

export interface SidebarsContactsSidebar extends Schema.Component {
  collectionName: 'components_sidebars_contacts_sidebars'
  info: {
    displayName: 'Kontakty'
  }
  attributes: {
    branch: Attribute.Relation<'sidebars.contacts-sidebar', 'oneToOne', 'api::branch.branch'>
    contact: Attribute.Relation<'sidebars.contacts-sidebar', 'oneToOne', 'api::contact.contact'>
  }
}

export interface SidebarsEmptySidebar extends Schema.Component {
  collectionName: 'components_sidebars_empty_sidebars'
  info: {
    displayName: 'Pr\u00E1zdny sidebar'
  }
  attributes: {}
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header-sections.branch-map': HeaderSectionsBranchMap
      'header-sections.careers': HeaderSectionsCareers
      'header-sections.featured-news': HeaderSectionsFeaturedNews
      'header-sections.gallery': HeaderSectionsGallery
      'header-sections.icon': HeaderSectionsIcon
      'header-sections.image': HeaderSectionsImage
      'header-sections.pickup-day': HeaderSectionsPickupDay
      'header-sections.side-image': HeaderSectionsSideImage
      'items.anchor': ItemsAnchor
      'items.board-members-item': ItemsBoardMembersItem
      'items.card-slider-card': ItemsCardSliderCard
      'items.cards-list-item': ItemsCardsListItem
      'items.columns-item': ItemsColumnsItem
      'items.columns-list-item': ItemsColumnsListItem
      'items.contacts-branch': ItemsContactsBranch
      'items.contacts-contact': ItemsContactsContact
      'items.contacts-opening-time': ItemsContactsOpeningTime
      'items.file-item': ItemsFileItem
      'items.footer-column': ItemsFooterColumn
      'items.form-cta-banner-link': ItemsFormCtaBannerLink
      'items.hero-main-tile': ItemsHeroMainTile
      'items.hero-small-tile': ItemsHeroSmallTile
      'items.homepage-service-tile': ItemsHomepageServiceTile
      'items.link': ItemsLink
      'items.location-cards-item': ItemsLocationCardsItem
      'items.menu-header': ItemsMenuHeader
      'items.opening-hours-item': ItemsOpeningHoursItem
      'items.opening-times-item': ItemsOpeningTimesItem
      'items.ordered-cards-item': ItemsOrderedCardsItem
      'items.slide': ItemsSlide
      'items.sorting-guide': ItemsSortingGuide
      'items.sorting-guide-accordion-item': ItemsSortingGuideAccordionItem
      'items.sorting-guide-alert-message': ItemsSortingGuideAlertMessage
      'items.sorting-guide-item': ItemsSortingGuideItem
      'items.waste-sorting-cards-item': ItemsWasteSortingCardsItem
      'items.workshop-date': ItemsWorkshopDate
      'menu.menu-item': MenuMenuItem
      'menu.menu-link': MenuMenuLink
      'menu.menu-section': MenuMenuSection
      'sections.articles': SectionsArticles
      'sections.articles-homepage-section': SectionsArticlesHomepageSection
      'sections.banner': SectionsBanner
      'sections.board-members': SectionsBoardMembers
      'sections.branches': SectionsBranches
      'sections.card-slider': SectionsCardSlider
      'sections.cards-list': SectionsCardsList
      'sections.child-pages-cards-list': SectionsChildPagesCardsList
      'sections.columns': SectionsColumns
      'sections.columns-list': SectionsColumnsList
      'sections.contacts': SectionsContacts
      'sections.divider': SectionsDivider
      'sections.documents': SectionsDocuments
      'sections.faq': SectionsFaq
      'sections.faq-categories': SectionsFaqCategories
      'sections.files': SectionsFiles
      'sections.form-cta-banner': SectionsFormCtaBanner
      'sections.global-search': SectionsGlobalSearch
      'sections.hero-homepage-section': SectionsHeroHomepageSection
      'sections.iframe-section': SectionsIframeSection
      'sections.image-and-text': SectionsImageAndText
      'sections.image-and-text-overlapped': SectionsImageAndTextOverlapped
      'sections.kolo-homepage-section': SectionsKoloHomepageSection
      'sections.opening-times': SectionsOpeningTimes
      'sections.ordered-cards': SectionsOrderedCards
      'sections.richtext': SectionsRichtext
      'sections.services': SectionsServices
      'sections.services-homepage-section': SectionsServicesHomepageSection
      'sections.sorting-guide': SectionsSortingGuide
      'sections.sorting-guide-accordions': SectionsSortingGuideAccordions
      'sections.tenders': SectionsTenders
      'sections.vacancies': SectionsVacancies
      'sections.waste-collection-days': SectionsWasteCollectionDays
      'sections.waste-collection-points': SectionsWasteCollectionPoints
      'sections.waste-removal-cards': SectionsWasteRemovalCards
      'sections.waste-sorting-cards': SectionsWasteSortingCards
      'sections.workshops': SectionsWorkshops
      'shared.meta-social': SharedMetaSocial
      'shared.seo': SharedSeo
      'sidebars.contacts-sidebar': SidebarsContactsSidebar
      'sidebars.empty-sidebar': SidebarsEmptySidebar
    }
  }
}
