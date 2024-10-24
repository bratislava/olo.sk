import type { Attribute, Schema } from '@strapi/strapi'

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens'
  info: {
    description: ''
    displayName: 'Api Token'
    name: 'Api Token'
    pluralName: 'api-tokens'
    singularName: 'api-token'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    expiresAt: Attribute.DateTime
    lastUsedAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    permissions: Attribute.Relation<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions'
  info: {
    description: ''
    displayName: 'API Token Permission'
    name: 'API Token Permission'
    pluralName: 'api-token-permissions'
    singularName: 'api-token-permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    token: Attribute.Relation<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions'
  info: {
    description: ''
    displayName: 'Permission'
    name: 'Permission'
    pluralName: 'permissions'
    singularName: 'permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    properties: Attribute.JSON & Attribute.DefaultTo<{}>
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles'
  info: {
    description: ''
    displayName: 'Role'
    name: 'Role'
    pluralName: 'roles'
    singularName: 'role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
    description: Attribute.String
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    permissions: Attribute.Relation<'admin::role', 'oneToMany', 'admin::permission'>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>
  }
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens'
  info: {
    description: ''
    displayName: 'Transfer Token'
    name: 'Transfer Token'
    pluralName: 'transfer-tokens'
    singularName: 'transfer-token'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    expiresAt: Attribute.DateTime
    lastUsedAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions'
  info: {
    description: ''
    displayName: 'Transfer Token Permission'
    name: 'Transfer Token Permission'
    pluralName: 'transfer-token-permissions'
    singularName: 'transfer-token-permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users'
  info: {
    description: ''
    displayName: 'User'
    name: 'User'
    pluralName: 'users'
    singularName: 'user'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    preferedLanguage: Attribute.String
    registrationToken: Attribute.String & Attribute.Private
    resetPasswordToken: Attribute.String & Attribute.Private
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> & Attribute.Private
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
    username: Attribute.String
  }
}

export interface ApiArticleCategoryArticleCategory extends Schema.CollectionType {
  collectionName: 'article_categories'
  info: {
    displayName: '\u010Cl\u00E1nky - kateg\u00F3rie'
    pluralName: 'article-categories'
    singularName: 'article-category'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    articles: Attribute.Relation<
      'api::article-category.article-category',
      'oneToMany',
      'api::article.article'
    >
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::article-category.article-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    locale: Attribute.String
    localizations: Attribute.Relation<
      'api::article-category.article-category',
      'oneToMany',
      'api::article-category.article-category'
    >
    publishedAt: Attribute.DateTime
    slug: Attribute.UID<'api::article-category.article-category', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<
      'api::article-category.article-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles'
  info: {
    description: ''
    displayName: '\u010Cl\u00E1nky'
    pluralName: 'articles'
    singularName: 'article'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    addedAt: Attribute.DateTime &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    alias: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    articleCategory: Attribute.Relation<
      'api::article.article',
      'manyToOne',
      'api::article-category.article-category'
    >
    content: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    coverMedia: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::article.article', 'oneToOne', 'admin::user'> &
      Attribute.Private
    gallery: Attribute.Media<'images', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    isCurrentChangeInOpeningHours: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.DefaultTo<false>
    locale: Attribute.String
    localizations: Attribute.Relation<'api::article.article', 'oneToMany', 'api::article.article'>
    perex: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    publishedAt: Attribute.DateTime
    slug: Attribute.UID<'api::article.article', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    tags: Attribute.Relation<'api::article.article', 'manyToMany', 'api::tag.tag'>
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::article.article', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiBranchBranch extends Schema.CollectionType {
  collectionName: 'branches'
  info: {
    description: ''
    displayName: 'Pobo\u010Dky'
    pluralName: 'branches'
    singularName: 'branch'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    address: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    barrierFreeInfo: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    contacts: Attribute.Relation<'api::branch.branch', 'manyToMany', 'api::contact.contact'>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::branch.branch', 'oneToOne', 'admin::user'> &
      Attribute.Private
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    latitude: Attribute.Float &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    locale: Attribute.String
    localizations: Attribute.Relation<'api::branch.branch', 'oneToMany', 'api::branch.branch'>
    longitude: Attribute.Float &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    mapIconName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    navigateToLink: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    openingTimes: Attribute.Relation<
      'api::branch.branch',
      'manyToMany',
      'api::opening-time.opening-time'
    >
    page: Attribute.Relation<'api::branch.branch', 'oneToOne', 'api::page.page'>
    parkingInfo: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    publicTransportInfo: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    publishedAt: Attribute.DateTime
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::branch.branch', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiContactContact extends Schema.CollectionType {
  collectionName: 'contacts'
  info: {
    description: ''
    displayName: 'Kontakty'
    pluralName: 'contacts'
    singularName: 'contact'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    branches: Attribute.Relation<'api::contact.contact', 'manyToMany', 'api::branch.branch'>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::contact.contact', 'oneToOne', 'admin::user'> &
      Attribute.Private
    label: Attribute.String & Attribute.Required
    primaryEmail: Attribute.Email
    primaryPhone: Attribute.String
    publishedAt: Attribute.DateTime
    secondaryEmail: Attribute.Email
    secondaryPhone: Attribute.String
    text: Attribute.String
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::contact.contact', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiContentOwnerContentOwner extends Schema.CollectionType {
  collectionName: 'content_owners'
  info: {
    description: ''
    displayName: 'Zodpovedn\u00E9 osoby'
    pluralName: 'content-owners'
    singularName: 'content-owner'
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::content-owner.content-owner', 'oneToOne', 'admin::user'> &
      Attribute.Private
    email: Attribute.Email
    name: Attribute.String & Attribute.Required
    pages: Attribute.Relation<'api::content-owner.content-owner', 'oneToMany', 'api::page.page'>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::content-owner.content-owner', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiDocumentCategoryDocumentCategory extends Schema.CollectionType {
  collectionName: 'document_categories'
  info: {
    description: ''
    displayName: 'Dokumenty - kateg\u00F3rie'
    pluralName: 'document-categories'
    singularName: 'document-category'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::document-category.document-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    documents: Attribute.Relation<
      'api::document-category.document-category',
      'oneToMany',
      'api::document.document'
    >
    locale: Attribute.String
    localizations: Attribute.Relation<
      'api::document-category.document-category',
      'oneToMany',
      'api::document-category.document-category'
    >
    publishedAt: Attribute.DateTime
    slug: Attribute.UID<'api::document-category.document-category', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<
      'api::document-category.document-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiDocumentDocument extends Schema.CollectionType {
  collectionName: 'documents'
  info: {
    description: ''
    displayName: 'Dokumenty'
    pluralName: 'documents'
    singularName: 'document'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::document.document', 'oneToOne', 'admin::user'> &
      Attribute.Private
    description: Attribute.Text
    documentCategory: Attribute.Relation<
      'api::document.document',
      'manyToOne',
      'api::document-category.document-category'
    >
    files: Attribute.Component<'items.file-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    publishedAt: Attribute.DateTime
    slug: Attribute.UID<'api::document.document', 'title'> & Attribute.Required
    tags: Attribute.Relation<'api::document.document', 'manyToMany', 'api::tag.tag'>
    title: Attribute.String & Attribute.Required
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::document.document', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiFaqCategoryFaqCategory extends Schema.CollectionType {
  collectionName: 'faq_categories'
  info: {
    description: ''
    displayName: 'FAQs - kateg\u00F3rie'
    pluralName: 'faq-categories'
    singularName: 'faq-category'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    banner: Attribute.Component<'sections.banner'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::faq-category.faq-category', 'oneToOne', 'admin::user'> &
      Attribute.Private
    faqs: Attribute.Relation<'api::faq-category.faq-category', 'oneToMany', 'api::faq.faq'>
    locale: Attribute.String
    localizations: Attribute.Relation<
      'api::faq-category.faq-category',
      'oneToMany',
      'api::faq-category.faq-category'
    >
    publishedAt: Attribute.DateTime
    slug: Attribute.UID<'api::faq-category.faq-category', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::faq-category.faq-category', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs'
  info: {
    description: ''
    displayName: 'FAQs'
    pluralName: 'faqs'
    singularName: 'faq'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> & Attribute.Private
    faqCategory: Attribute.Relation<'api::faq.faq', 'manyToOne', 'api::faq-category.faq-category'>
    locale: Attribute.String
    localizations: Attribute.Relation<'api::faq.faq', 'oneToMany', 'api::faq.faq'>
    publishedAt: Attribute.DateTime
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers'
  info: {
    description: ''
    displayName: 'P\u00E4ti\u010Dka'
    pluralName: 'footers'
    singularName: 'footer'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    bottomLinks: Attribute.Component<'items.link', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    columns: Attribute.Component<'items.footer-column', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMax<
        {
          max: 2
        },
        number
      >
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::footer.footer', 'oneToOne', 'admin::user'> &
      Attribute.Private
    facebookUrl: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    instagramUrl: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    linkedinUrl: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    locale: Attribute.String
    localizations: Attribute.Relation<'api::footer.footer', 'oneToMany', 'api::footer.footer'>
    text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::footer.footer', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiFormForm extends Schema.CollectionType {
  collectionName: 'forms'
  info: {
    description: ''
    displayName: 'Formul\u00E1re'
    pluralName: 'forms'
    singularName: 'form'
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> & Attribute.Private
    formSlug: Attribute.String
    parentService: Attribute.Relation<'api::form.form', 'oneToOne', 'api::service.service'>
    slug: Attribute.UID<'api::form.form', 'title'> & Attribute.Required
    subtext: Attribute.Text
    title: Attribute.String & Attribute.Required
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages'
  info: {
    description: ''
    displayName: 'Domov'
    pluralName: 'homepages'
    singularName: 'homepage'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    articlesSection: Attribute.Component<'sections.articles-homepage-section'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      Attribute.Private
    heroSection: Attribute.Component<'sections.hero-homepage-section'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    koloSection: Attribute.Component<'sections.kolo-homepage-section'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    locale: Attribute.String
    localizations: Attribute.Relation<
      'api::homepage.homepage',
      'oneToMany',
      'api::homepage.homepage'
    >
    servicesSection: Attribute.Component<'sections.services-homepage-section'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiMenuMenu extends Schema.SingleType {
  collectionName: 'menus'
  info: {
    description: ''
    displayName: 'Menu'
    pluralName: 'menus'
    singularName: 'menu'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::menu.menu', 'oneToOne', 'admin::user'> & Attribute.Private
    locale: Attribute.String
    localizations: Attribute.Relation<'api::menu.menu', 'oneToMany', 'api::menu.menu'>
    menuHeader: Attribute.Component<'items.menu-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    menuItems: Attribute.Component<'menu.menu-item', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::menu.menu', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiNavigationNavigation extends Schema.SingleType {
  collectionName: 'navigations'
  info: {
    description: ''
    displayName: 'Navigation'
    pluralName: 'navigations'
    singularName: 'navigation'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    articlesParentPage: Attribute.Relation<
      'api::navigation.navigation',
      'oneToOne',
      'api::page.page'
    >
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::navigation.navigation', 'oneToOne', 'admin::user'> &
      Attribute.Private
    documentsParentPage: Attribute.Relation<
      'api::navigation.navigation',
      'oneToOne',
      'api::page.page'
    >
    faqCategoriesParentPage: Attribute.Relation<
      'api::navigation.navigation',
      'oneToOne',
      'api::page.page'
    >
    locale: Attribute.String
    localizations: Attribute.Relation<
      'api::navigation.navigation',
      'oneToMany',
      'api::navigation.navigation'
    >
    servicesParentPage: Attribute.Relation<
      'api::navigation.navigation',
      'oneToOne',
      'api::page.page'
    >
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::navigation.navigation', 'oneToOne', 'admin::user'> &
      Attribute.Private
    workshopsParentPage: Attribute.Relation<
      'api::navigation.navigation',
      'oneToOne',
      'api::page.page'
    >
  }
}

export interface ApiOpeningTimeOpeningTime extends Schema.CollectionType {
  collectionName: 'opening_times'
  info: {
    description: ''
    displayName: 'Otv\u00E1racie hodiny'
    pluralName: 'opening-times'
    singularName: 'opening-time'
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    branches: Attribute.Relation<
      'api::opening-time.opening-time',
      'manyToMany',
      'api::branch.branch'
    >
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::opening-time.opening-time', 'oneToOne', 'admin::user'> &
      Attribute.Private
    internalName: Attribute.String & Attribute.Private
    openingHours: Attribute.Component<'items.opening-hours-item', true>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::opening-time.opening-time', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages'
  info: {
    description: ''
    displayName: 'Str\u00E1nky'
    pluralName: 'pages'
    singularName: 'page'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    alias: Attribute.UID &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    branch: Attribute.Relation<'api::page.page', 'oneToOne', 'api::branch.branch'>
    contentOwner: Attribute.Relation<
      'api::page.page',
      'manyToOne',
      'api::content-owner.content-owner'
    > &
      Attribute.Private
    contentState: Attribute.Enumeration<
      [
        'contentState.todo',
        'contentState.inProgress',
        'contentState.finalising',
        'contentState.inReview',
        'contentState.done',
      ]
    > &
      Attribute.Private &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }> &
      Attribute.DefaultTo<'contentState.todo'>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> & Attribute.Private
    header: Attribute.DynamicZone<
      [
        'header-sections.featured-news',
        'header-sections.gallery',
        'header-sections.image',
        'header-sections.side-image',
        'header-sections.pickup-day',
        'header-sections.branch-map',
        'header-sections.careers',
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMax<
        {
          max: 1
        },
        number
      >
    childPages: Attribute.Relation<'api::page.page', 'oneToMany', 'api::page.page'>
    locale: Attribute.String
    localizations: Attribute.Relation<'api::page.page', 'oneToMany', 'api::page.page'>
    parentPage: Attribute.Relation<'api::page.page', 'manyToOne', 'api::page.page'>
    perex: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    publishedAt: Attribute.DateTime
    sections: Attribute.DynamicZone<
      [
        'sections.banner',
        'sections.articles',
        'sections.divider',
        'sections.documents',
        'sections.faq',
        'sections.faq-categories',
        'sections.iframe-section',
        'sections.card-slider',
        'sections.child-pages-cards-list',
        'sections.ordered-cards',
        'sections.waste-sorting-cards',
        'sections.contacts',
        'sections.cards-list',
        'sections.waste-collection-days',
        'sections.opening-times',
        'sections.branches',
        'sections.vacancies',
        'sections.richtext',
        'sections.services',
        'sections.board-members',
        'sections.columns',
        'sections.columns-list',
        'sections.image-and-text',
        'sections.image-and-text-overlapped',
        'sections.sorting-guide',
        'sections.sorting-guide-accordions',
        'sections.tenders',
        'sections.global-search',
        'sections.workshops',
        'sections.waste-collection-points',
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    sidebar: Attribute.DynamicZone<['sidebars.empty-sidebar', 'sidebars.contacts-sidebar']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMax<
        {
          max: 1
        },
        number
      >
    slug: Attribute.UID<'api::page.page', 'title'> & Attribute.Required
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiServiceCategoryServiceCategory extends Schema.CollectionType {
  collectionName: 'service_categories'
  info: {
    description: ''
    displayName: 'Slu\u017Eby - kateg\u00F3rie'
    pluralName: 'service-categories'
    singularName: 'service-category'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    categoryColor: Attribute.Enumeration<['none', 'red', 'green', 'blue']> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }> &
      Attribute.DefaultTo<'none'>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::service-category.service-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    locale: Attribute.String
    localizations: Attribute.Relation<
      'api::service-category.service-category',
      'oneToMany',
      'api::service-category.service-category'
    >
    publishedAt: Attribute.DateTime
    services: Attribute.Relation<
      'api::service-category.service-category',
      'manyToMany',
      'api::service.service'
    >
    slug: Attribute.UID<'api::service-category.service-category', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<
      'api::service-category.service-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services'
  info: {
    description: ''
    displayName: 'Slu\u017Eby'
    pluralName: 'services'
    singularName: 'service'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::service.service', 'oneToOne', 'admin::user'> &
      Attribute.Private
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    locale: Attribute.String
    localizations: Attribute.Relation<'api::service.service', 'oneToMany', 'api::service.service'>
    publishedAt: Attribute.DateTime
    sections: Attribute.DynamicZone<
      [
        'sections.richtext',
        'sections.documents',
        'sections.faq',
        'sections.cards-list',
        'sections.form-cta-banner',
        'sections.waste-removal-cards',
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    serviceCategories: Attribute.Relation<
      'api::service.service',
      'manyToMany',
      'api::service-category.service-category'
    >
    slug: Attribute.UID<'api::service.service', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::service.service', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags'
  info: {
    description: ''
    displayName: 'Tagy'
    pluralName: 'tags'
    singularName: 'tag'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    articles: Attribute.Relation<'api::tag.tag', 'manyToMany', 'api::article.article'>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> & Attribute.Private
    documents: Attribute.Relation<'api::tag.tag', 'manyToMany', 'api::document.document'>
    locale: Attribute.String
    localizations: Attribute.Relation<'api::tag.tag', 'oneToMany', 'api::tag.tag'>
    publishedAt: Attribute.DateTime
    slug: Attribute.UID<'api::tag.tag', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiWasteCollectionDayWasteCollectionDay extends Schema.CollectionType {
  collectionName: 'waste_collection_days'
  info: {
    description: ''
    displayName: 'Odvozov\u00E9 dni'
    pluralName: 'waste-collection-days'
    singularName: 'waste-collection-day'
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    address: Attribute.String
    collectionDates: Attribute.Text
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::waste-collection-day.waste-collection-day',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    evenWeek: Attribute.String
    importId: Attribute.String
    note: Attribute.Text
    oddWeek: Attribute.String
    registrationNumber: Attribute.String
    type: Attribute.String
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<
      'api::waste-collection-day.waste-collection-day',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface ApiWorkshopWorkshop extends Schema.CollectionType {
  collectionName: 'workshops'
  info: {
    description: ''
    displayName: 'Workshopy'
    pluralName: 'workshops'
    singularName: 'workshop'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::workshop.workshop', 'oneToOne', 'admin::user'> &
      Attribute.Private
    dates: Attribute.Component<'items.workshop-date', true>
    iconName: Attribute.String
    publishedAt: Attribute.DateTime
    sections: Attribute.DynamicZone<['sections.richtext', 'sections.faq', 'sections.documents']>
    sidebar: Attribute.DynamicZone<['sidebars.empty-sidebar']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMax<
        {
          max: 1
        },
        number
      >
    slug: Attribute.UID<'api::workshop.workshop', 'title'> & Attribute.Required
    title: Attribute.String & Attribute.Required
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'api::workshop.workshop', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases'
  info: {
    displayName: 'Release'
    pluralName: 'releases'
    singularName: 'release'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private
    name: Attribute.String & Attribute.Required
    releasedAt: Attribute.DateTime
    scheduledAt: Attribute.DateTime
    status: Attribute.Enumeration<['ready', 'blocked', 'failed', 'done', 'empty']> &
      Attribute.Required
    timezone: Attribute.String
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
  collectionName: 'strapi_release_actions'
  info: {
    displayName: 'Release Action'
    pluralName: 'release-actions'
    singularName: 'release-action'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    contentType: Attribute.String & Attribute.Required
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    entry: Attribute.Relation<'plugin::content-releases.release-action', 'morphToOne'>
    isEntryValid: Attribute.Boolean
    locale: Attribute.String
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale'
  info: {
    collectionName: 'locales'
    description: ''
    displayName: 'Locale'
    pluralName: 'locales'
    singularName: 'locale'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    code: Attribute.String & Attribute.Unique
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50
          min: 1
        },
        number
      >
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files'
  info: {
    description: ''
    displayName: 'File'
    pluralName: 'files'
    singularName: 'file'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    alternativeText: Attribute.String
    caption: Attribute.String
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private
    ext: Attribute.String
    folder: Attribute.Relation<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> &
      Attribute.Private
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    formats: Attribute.JSON
    hash: Attribute.String & Attribute.Required
    height: Attribute.Integer
    mime: Attribute.String & Attribute.Required
    name: Attribute.String & Attribute.Required
    previewUrl: Attribute.String
    provider: Attribute.String & Attribute.Required
    provider_metadata: Attribute.JSON
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>
    size: Attribute.Decimal & Attribute.Required
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private
    url: Attribute.String & Attribute.Required
    width: Attribute.Integer
  }
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders'
  info: {
    displayName: 'Folder'
    pluralName: 'folders'
    singularName: 'folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private
    files: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>
    children: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    parent: Attribute.Relation<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
  collectionName: 'up_permissions'
  info: {
    description: ''
    displayName: 'Permission'
    name: 'permission'
    pluralName: 'permissions'
    singularName: 'permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String & Attribute.Required
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles'
  info: {
    description: ''
    displayName: 'Role'
    name: 'role'
    pluralName: 'roles'
    singularName: 'role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private
    description: Attribute.String
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >
    type: Attribute.String & Attribute.Unique
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >
  }
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users'
  info: {
    description: ''
    displayName: 'User'
    name: 'User'
    pluralName: 'users'
    singularName: 'user'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
  }
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>
    confirmationToken: Attribute.String & Attribute.Private
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>
    createdAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    picture: Attribute.Media
    provider: Attribute.String
    resetPasswordToken: Attribute.String & Attribute.Private
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    updatedAt: Attribute.DateTime
    updatedBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'admin::permission': AdminPermission
      'admin::role': AdminRole
      'admin::transfer-token': AdminTransferToken
      'admin::transfer-token-permission': AdminTransferTokenPermission
      'admin::user': AdminUser
      'api::article-category.article-category': ApiArticleCategoryArticleCategory
      'api::article.article': ApiArticleArticle
      'api::branch.branch': ApiBranchBranch
      'api::contact.contact': ApiContactContact
      'api::content-owner.content-owner': ApiContentOwnerContentOwner
      'api::document-category.document-category': ApiDocumentCategoryDocumentCategory
      'api::document.document': ApiDocumentDocument
      'api::faq-category.faq-category': ApiFaqCategoryFaqCategory
      'api::faq.faq': ApiFaqFaq
      'api::footer.footer': ApiFooterFooter
      'api::form.form': ApiFormForm
      'api::homepage.homepage': ApiHomepageHomepage
      'api::menu.menu': ApiMenuMenu
      'api::navigation.navigation': ApiNavigationNavigation
      'api::opening-time.opening-time': ApiOpeningTimeOpeningTime
      'api::page.page': ApiPagePage
      'api::service-category.service-category': ApiServiceCategoryServiceCategory
      'api::service.service': ApiServiceService
      'api::tag.tag': ApiTagTag
      'api::waste-collection-day.waste-collection-day': ApiWasteCollectionDayWasteCollectionDay
      'api::workshop.workshop': ApiWorkshopWorkshop
      'plugin::content-releases.release': PluginContentReleasesRelease
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction
      'plugin::i18n.locale': PluginI18NLocale
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
    }
  }
}
