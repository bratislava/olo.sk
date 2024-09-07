import { Article, ArticleCategory, Page, UploadFile } from '../graphql/api'

/**
 * A type that describes an entity wrapped in shared search index.
 * E.g.:
 * {
 *     type: "article",
 *     article: {...}
 * }
 */
export type SearchIndexWrapped<T extends string, K extends object> = {
  [key in T]: K
} & {
  type: T
}

// Meilisearch doesn't nest entities in `data.attributes`, therefore in order to use Strapi types we need to `Omit` those
// attributes that are nested and replace them with their direct representations.

export type MixedResults =
  | SearchIndexWrapped<'page', PageMeili>
  | SearchIndexWrapped<'article', ArticleMeili>

// used to distinguish between content types after fetching
export type MeiliEntity = ({ type: 'page' } & PageMeili) | ({ type: 'article' } & ArticleMeili)

export type PageMeili = Omit<Page, '__typename' | 'childPages'> & {
  id?: string
  parentPage?: { title: string; slug: string; parentPage?: PageMeili }
}

export type ArticleMeili = Omit<Article, '__typename' | 'coverMedia' | 'articleCategory'> & {
  id?: string
  coverMedia?: UploadFile
  articleCategory?: Pick<ArticleCategory, 'title' | 'slug'>
}

// export type BlogPostMeili = Omit<BlogPost, '__typename' | 'author' | 'tag' | 'coverImage'> & {
//   coverImage?: UploadFile
//   tag?: Omit<Tag, '__typename' | 'pageCategory' | 'blogPosts'> & {
//     pageCategory?: Omit<PageCategory, '__typename' | 'pages'>
//   }
// }

// export type InbaArticleMeili = Omit<InbaArticle, '__typename' | 'tags' | 'coverImage'> & {
//   coverImage?: UploadFile
//   inbaTag?: Pick<InbaTag, 'title'>
// }

// Beware of typo in amedmentDocument
// export type VznMeili = Omit<
//   Vzn,
//   '__typename' | 'mainDocument' | 'consolidatedText' | 'cancellationDocument' | 'amedmentDocument'
// > & {
//   id: string
//   mainDocument?: UploadFile
//   consolidatedText?: UploadFile
//   amedmentDocument?: Pick<
//     ComponentBlocksDocListExtensions,
//     'id' | 'title' | 'document' | 'validFrom'
//   >[]
//   cancellationDocument?: Pick<
//     ComponentBlocksDocListExtensions,
//     'id' | 'title' | 'document' | 'validFrom'
//   >[]
// }

// export type RegulationMeili = Omit<
//   Regulation,
//   '__typename' | 'amending' | 'cancellation' | 'effectiveFrom'
// > & {
//   amending?: RegulationMeili[]
//   cancellation?: RegulationMeili
//   effectiveFrom?: string
// }
