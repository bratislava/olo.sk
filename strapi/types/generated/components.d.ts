import type { Schema, Attribute } from '@strapi/strapi'

export interface SectionsWorkshops extends Schema.Component {
  collectionName: 'components_sections_workshops'
  info: {
    displayName: 'Workshopy'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    showAll: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    workshops: Attribute.Relation<'sections.workshops', 'oneToMany', 'api::workshop.workshop'>
  }
}

export interface SectionsWasteSortingCards extends Schema.Component {
  collectionName: 'components_sections_waste_sorting_cards'
  info: {
    displayName: 'Komodity'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    cards: Attribute.Component<'items.waste-sorting-cards-item', true>
    banner: Attribute.Component<'sections.banner'>
  }
}

export interface SectionsVacancies extends Schema.Component {
  collectionName: 'components_sections_vacancies'
  info: {
    displayName: 'Pracovn\u00E9 poz\u00EDcie (placeholder)'
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']>
  }
}

export interface SectionsTable extends Schema.Component {
  collectionName: 'components_sections_tables'
  info: {
    displayName: 'Odvozov\u00E9 dni (placeholder)'
    description: ''
  }
  attributes: {
    title: Attribute.String
    anchorId: Attribute.String
    text: Attribute.Text
  }
}

export interface SectionsSortingGuide extends Schema.Component {
  collectionName: 'components_sections_sorting_guides'
  info: {
    displayName: 'Triedenie'
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    sortingGuide: Attribute.Component<'items.sorting-guide'>
    banner: Attribute.Component<'sections.banner'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
  }
}

export interface SectionsSortingGuideAccordions extends Schema.Component {
  collectionName: 'components_sections_sorting_guide_accordions'
  info: {
    displayName: 'Triedenie (akorde\u00F3ny)'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    sortingGuideAccordions: Attribute.Component<'items.sorting-guide-accordion-item', true>
    banner: Attribute.Component<'sections.banner'>
  }
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services'
  info: {
    displayName: 'Slu\u017Eby'
  }
  attributes: {
    title: Attribute.String
    text: Attribute.String
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

export interface SectionsOrderedCards extends Schema.Component {
  collectionName: 'components_sections_ordered_cards'
  info: {
    displayName: 'Karty na \u017Eltom pozad\u00ED'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
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

export interface SectionsOpeningTimes extends Schema.Component {
  collectionName: 'components_sections_opening_times'
  info: {
    displayName: 'Otv\u00E1racie hodiny'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    openingTimes: Attribute.Component<'items.opening-times-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    branchLocation: Attribute.Relation<'sections.opening-times', 'oneToOne', 'api::branch.branch'>
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
    mainCards: Attribute.Component<'items.cards-list-item', true> &
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

export interface SectionsImageAndText extends Schema.Component {
  collectionName: 'components_sections_image_and_texts'
  info: {
    displayName: 'Text s obr\u00E1zkom'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    image: Attribute.Media<'images'> & Attribute.Required
    primaryButton: Attribute.Component<'items.link'>
    secondaryButton: Attribute.Component<'items.link'>
  }
}

export interface SectionsImageAndTextOverlapped extends Schema.Component {
  collectionName: 'components_sections_image_and_text_overlappeds'
  info: {
    displayName: 'Text s obr\u00E1zkom (prekryt\u00FD)'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    imagePosition: Attribute.Enumeration<['left', 'right', 'left-shifted', 'right-shifted']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    image: Attribute.Media<'images'> & Attribute.Required
    readMoreLink: Attribute.Component<'items.link'>
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

export interface SectionsGlobalSearch extends Schema.Component {
  collectionName: 'components_sections_global_searches'
  info: {
    displayName: 'Vyh\u013Ead\u00E1vanie'
    description: ''
  }
  attributes: {
    title: Attribute.String
  }
}

export interface SectionsFormCtaBanner extends Schema.Component {
  collectionName: 'components_sections_form_cta_banners'
  info: {
    displayName: 'Formul\u00E1rov\u00FD CTA banner'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    bannerTitle: Attribute.String & Attribute.Required
    bannerLink: Attribute.Component<'items.form-cta-banner-link'> & Attribute.Required
  }
}

export interface SectionsFiles extends Schema.Component {
  collectionName: 'components_sections_files'
  info: {
    displayName: 'S\u00FAbory'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
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

export interface SectionsFaq extends Schema.Component {
  collectionName: 'components_sections_faqs'
  info: {
    displayName: 'FAQ'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'\u010Casto kladen\u00E9 ot\u00E1zky'>
    text: Attribute.Text
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    faqs: Attribute.Relation<'sections.faq', 'oneToMany', 'api::faq.faq'>
    showMoreLink: Attribute.Component<'items.link'>
  }
}

export interface SectionsFaqCategories extends Schema.Component {
  collectionName: 'components_sections_faq_categories'
  info: {
    displayName: 'FAQ kateg\u00F3rie'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    showAll: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    faqCategories: Attribute.Relation<
      'sections.faq-categories',
      'oneToMany',
      'api::faq-category.faq-category'
    >
  }
}

export interface SectionsDocuments extends Schema.Component {
  collectionName: 'components_sections_documents'
  info: {
    displayName: 'Dokumenty'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    showAll: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    documents: Attribute.Relation<'sections.documents', 'oneToMany', 'api::document.document'>
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

export interface SectionsContacts extends Schema.Component {
  collectionName: 'components_sections_contacts'
  info: {
    displayName: 'Kontakty'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    contacts: Attribute.Relation<'sections.contacts', 'oneToMany', 'api::contact.contact'>
  }
}

export interface SectionsColumns extends Schema.Component {
  collectionName: 'components_sections_columns'
  info: {
    displayName: 'St\u013Apce (nadpis, text, obr\u00E1zok)'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
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

export interface SectionsColumnsList extends Schema.Component {
  collectionName: 'components_sections_columns_lists'
  info: {
    displayName: 'St\u013Apce so zoznamom (ikonka + text)'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']>
    leftColumn: Attribute.Component<'items.columns-list-item', true>
    rightColumn: Attribute.Component<'items.columns-list-item', true>
  }
}

export interface SectionsCardsList extends Schema.Component {
  collectionName: 'components_sections_cards_lists'
  info: {
    displayName: 'Odkazy'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    linkLabelOverride: Attribute.Text
    cards: Attribute.Component<'items.cards-list-item', true>
  }
}

export interface SectionsCardSlider extends Schema.Component {
  collectionName: 'components_sections_card_sliders'
  info: {
    displayName: 'Karty (slider)'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    backgroundColor: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
    cards: Attribute.Component<'items.card-slider-card', true> & Attribute.Required
  }
}

export interface SectionsBranches extends Schema.Component {
  collectionName: 'components_sections_branches'
  info: {
    displayName: 'Pobo\u010Dky'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    branches: Attribute.Relation<'sections.branches', 'oneToMany', 'api::branch.branch'>
  }
}

export interface SectionsBoardMembers extends Schema.Component {
  collectionName: 'components_sections_board_members'
  info: {
    displayName: 'Spr\u00E1vna rada'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
    boardMembers: Attribute.Component<'items.board-members-item', true>
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
    image: Attribute.Media<'images'> & Attribute.Required
    primaryButtonLink: Attribute.Component<'items.link'> & Attribute.Required
    secondaryButtonLink: Attribute.Component<'items.link'>
  }
}

export interface SectionsArticles extends Schema.Component {
  collectionName: 'components_sections_articles'
  info: {
    displayName: '\u010Cl\u00E1nky'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
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
    hasDividers: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    specialSectionType: Attribute.Enumeration<['latest articles']>
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
    service: Attribute.Relation<'menu.menu-link', 'oneToOne', 'api::service.service'>
    workshop: Attribute.Relation<'menu.menu-link', 'oneToOne', 'api::workshop.workshop'>
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

export interface ItemsWorkshopDate extends Schema.Component {
  collectionName: 'components_items_workshop_dates'
  info: {
    displayName: 'Workshop date'
    description: ''
  }
  attributes: {
    internalName: Attribute.String & Attribute.Private
    datetime: Attribute.DateTime & Attribute.Required
  }
}

export interface ItemsWasteSortingCardsItem extends Schema.Component {
  collectionName: 'components_items_waste_sorting_cards_items'
  info: {
    displayName: 'Waste Sorting Cards item'
    description: ''
  }
  attributes: {
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
    link: Attribute.Component<'items.link'> & Attribute.Required
  }
}

export interface ItemsSortingGuide extends Schema.Component {
  collectionName: 'components_items_sorting_guides'
  info: {
    displayName: 'Sorting Guide'
    description: ''
  }
  attributes: {
    titleGoesHere: Attribute.String & Attribute.DefaultTo<'Patr\u00ED sem'>
    titleDoesntGoHere: Attribute.String & Attribute.DefaultTo<'Nepatr\u00ED sem'>
    goesHereItems: Attribute.Component<'items.sorting-guide-item', true>
    doesntGoHereItems: Attribute.Component<'items.sorting-guide-item', true>
    alertMessageGoesHere: Attribute.Component<'items.sorting-guide-alert-message'>
    alertMessageDoesntGoHere: Attribute.Component<'items.sorting-guide-alert-message'>
    alertMessageBottom: Attribute.Component<'items.sorting-guide-alert-message'>
  }
}

export interface ItemsSortingGuideItem extends Schema.Component {
  collectionName: 'components_items_sorting_guide_items'
  info: {
    displayName: 'Sorting Guide Item'
    description: ''
  }
  attributes: {
    label: Attribute.String & Attribute.Required
  }
}

export interface ItemsSortingGuideAlertMessage extends Schema.Component {
  collectionName: 'components_items_sorting_guide_alert_messages'
  info: {
    displayName: 'Sorting Guide Alert Message'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.Text
  }
}

export interface ItemsSortingGuideAccordionItem extends Schema.Component {
  collectionName: 'components_items_sorting_guide_accordion_items'
  info: {
    displayName: 'sorting guide accordion item'
  }
  attributes: {
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
    sortingGuide: Attribute.Component<'items.sorting-guide'>
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
    media: Attribute.Media<'images'> & Attribute.Required
    link: Attribute.Component<'items.link'>
  }
}

export interface ItemsOrderedCardsItem extends Schema.Component {
  collectionName: 'components_items_ordered_cards_items'
  info: {
    displayName: 'Ordered Cards item'
    description: ''
  }
  attributes: {
    title: Attribute.String
    text: Attribute.RichText
    iconName: Attribute.String
  }
}

export interface ItemsOpeningTimesItem extends Schema.Component {
  collectionName: 'components_items_opening_times_items'
  info: {
    displayName: 'Opening Times item'
    description: ''
  }
  attributes: {
    title: Attribute.String
    openingTime: Attribute.Relation<
      'items.opening-times-item',
      'oneToOne',
      'api::opening-time.opening-time'
    >
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

export interface ItemsMenuHeader extends Schema.Component {
  collectionName: 'components_items_menu_headers'
  info: {
    displayName: 'Menu header'
    description: ''
  }
  attributes: {
    contactsLink: Attribute.Component<'items.link'>
    searchLink: Attribute.Component<'items.link'>
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

export interface ItemsFormCtaBannerLink extends Schema.Component {
  collectionName: 'components_items_form_cta_banner_links'
  info: {
    displayName: 'form cta banner link'
    description: ''
  }
  attributes: {
    label: Attribute.String
    url: Attribute.String
    email: Attribute.Email
    form: Attribute.Relation<'items.form-cta-banner-link', 'oneToOne', 'api::form.form'>
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

export interface ItemsFileItem extends Schema.Component {
  collectionName: 'components_items_file_items'
  info: {
    displayName: 'File item'
    description: ''
  }
  attributes: {
    title: Attribute.String
    media: Attribute.Media<'images' | 'files'> & Attribute.Required
  }
}

export interface ItemsColumnsListItem extends Schema.Component {
  collectionName: 'components_items_columns_list_items'
  info: {
    displayName: 'Columns List item'
    description: ''
  }
  attributes: {
    icon: Attribute.Media<'images'>
    content: Attribute.RichText & Attribute.Required
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
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>
  }
}

export interface ItemsCardsListItem extends Schema.Component {
  collectionName: 'components_items_cards_list_items'
  info: {
    displayName: 'Cards List item'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtext: Attribute.String
    link: Attribute.Component<'items.link'> & Attribute.Required
  }
}

export interface ItemsCardSliderCard extends Schema.Component {
  collectionName: 'components_items_card_slider_cards'
  info: {
    displayName: 'Card Slider card'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    text: Attribute.Text
    image: Attribute.Media<'images'> & Attribute.Required
  }
}

export interface ItemsBoardMembersItem extends Schema.Component {
  collectionName: 'components_items_board_members_items'
  info: {
    displayName: 'Board Members item'
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    position: Attribute.String & Attribute.Required
    image: Attribute.Media<'images'>
    links: Attribute.Component<'items.link', true>
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

export interface HeaderSectionsSideImage extends Schema.Component {
  collectionName: 'components_header_sections_side_images'
  info: {
    displayName: 'Obr\u00E1zok vpravo'
    icon: 'picture'
    description: ''
  }
  attributes: {
    media: Attribute.Media<'images'> & Attribute.Required
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

export interface HeaderSectionsImage extends Schema.Component {
  collectionName: 'components_header_sections_images'
  info: {
    displayName: 'Obr\u00E1zok na cel\u00FA \u0161\u00EDrku'
    icon: 'picture'
    description: ''
  }
  attributes: {
    media: Attribute.Media<'images'> & Attribute.Required
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

export interface HeaderSectionsGallery extends Schema.Component {
  collectionName: 'components_header_sections_galleries'
  info: {
    displayName: 'Gal\u00E9ria'
    icon: 'landscape'
    description: ''
  }
  attributes: {
    medias: Attribute.Media<'images', true> & Attribute.Required
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.workshops': SectionsWorkshops
      'sections.waste-sorting-cards': SectionsWasteSortingCards
      'sections.vacancies': SectionsVacancies
      'sections.table': SectionsTable
      'sections.sorting-guide': SectionsSortingGuide
      'sections.sorting-guide-accordions': SectionsSortingGuideAccordions
      'sections.services': SectionsServices
      'sections.services-homepage-section': SectionsServicesHomepageSection
      'sections.richtext': SectionsRichtext
      'sections.ordered-cards': SectionsOrderedCards
      'sections.opening-times': SectionsOpeningTimes
      'sections.kolo-homepage-section': SectionsKoloHomepageSection
      'sections.image-and-text': SectionsImageAndText
      'sections.image-and-text-overlapped': SectionsImageAndTextOverlapped
      'sections.hero-homepage-section': SectionsHeroHomepageSection
      'sections.global-search': SectionsGlobalSearch
      'sections.form-cta-banner': SectionsFormCtaBanner
      'sections.files': SectionsFiles
      'sections.faq': SectionsFaq
      'sections.faq-categories': SectionsFaqCategories
      'sections.documents': SectionsDocuments
      'sections.divider': SectionsDivider
      'sections.contacts': SectionsContacts
      'sections.columns': SectionsColumns
      'sections.columns-list': SectionsColumnsList
      'sections.cards-list': SectionsCardsList
      'sections.card-slider': SectionsCardSlider
      'sections.branches': SectionsBranches
      'sections.board-members': SectionsBoardMembers
      'sections.banner': SectionsBanner
      'sections.articles': SectionsArticles
      'sections.articles-homepage-section': SectionsArticlesHomepageSection
      'menu.menu-section': MenuMenuSection
      'menu.menu-link': MenuMenuLink
      'menu.menu-item': MenuMenuItem
      'items.workshop-date': ItemsWorkshopDate
      'items.waste-sorting-cards-item': ItemsWasteSortingCardsItem
      'items.sorting-guide': ItemsSortingGuide
      'items.sorting-guide-item': ItemsSortingGuideItem
      'items.sorting-guide-alert-message': ItemsSortingGuideAlertMessage
      'items.sorting-guide-accordion-item': ItemsSortingGuideAccordionItem
      'items.slide': ItemsSlide
      'items.ordered-cards-item': ItemsOrderedCardsItem
      'items.opening-times-item': ItemsOpeningTimesItem
      'items.opening-hours-item': ItemsOpeningHoursItem
      'items.menu-header': ItemsMenuHeader
      'items.link': ItemsLink
      'items.homepage-service-tile': ItemsHomepageServiceTile
      'items.hero-small-tile': ItemsHeroSmallTile
      'items.hero-main-tile': ItemsHeroMainTile
      'items.form-cta-banner-link': ItemsFormCtaBannerLink
      'items.footer-column': ItemsFooterColumn
      'items.file-item': ItemsFileItem
      'items.columns-list-item': ItemsColumnsListItem
      'items.columns-item': ItemsColumnsItem
      'items.cards-list-item': ItemsCardsListItem
      'items.card-slider-card': ItemsCardSliderCard
      'items.board-members-item': ItemsBoardMembersItem
      'items.anchor': ItemsAnchor
      'header-sections.side-image': HeaderSectionsSideImage
      'header-sections.pickup-day': HeaderSectionsPickupDay
      'header-sections.image': HeaderSectionsImage
      'header-sections.icon': HeaderSectionsIcon
      'header-sections.gallery': HeaderSectionsGallery
      'header-sections.featured-news': HeaderSectionsFeaturedNews
      'header-sections.branch-map': HeaderSectionsBranchMap
    }
  }
}
