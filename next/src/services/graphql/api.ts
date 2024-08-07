import { GraphQLClient, RequestOptions } from 'graphql-request'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders']
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  I18NLocaleCode: { input: any; output: any }
  JSON: { input: any; output: any }
  PageHeaderDynamicZoneInput: { input: any; output: any }
  PageSectionsDynamicZoneInput: { input: any; output: any }
  ServiceSectionsDynamicZoneInput: { input: any; output: any }
  Upload: { input: any; output: any }
  WorkshopSectionsDynamicZoneInput: { input: any; output: any }
}

export type Article = {
  __typename?: 'Article'
  addedAt: Scalars['DateTime']['output']
  articleCategory?: Maybe<ArticleCategoryEntityResponse>
  content?: Maybe<Scalars['String']['output']>
  coverMedia?: Maybe<UploadFileEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<ArticleRelationResponseCollection>
  perex?: Maybe<Scalars['String']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  tags?: Maybe<TagRelationResponseCollection>
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ArticleLocalizationsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ArticleTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ArticleCategory = {
  __typename?: 'ArticleCategory'
  articles?: Maybe<ArticleRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<ArticleCategoryRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ArticleCategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ArticleCategoryLocalizationsArgs = {
  filters?: InputMaybe<ArticleCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ArticleCategoryEntity = {
  __typename?: 'ArticleCategoryEntity'
  attributes?: Maybe<ArticleCategory>
  id?: Maybe<Scalars['ID']['output']>
}

export type ArticleCategoryEntityResponse = {
  __typename?: 'ArticleCategoryEntityResponse'
  data?: Maybe<ArticleCategoryEntity>
}

export type ArticleCategoryEntityResponseCollection = {
  __typename?: 'ArticleCategoryEntityResponseCollection'
  data: Array<ArticleCategoryEntity>
  meta: ResponseCollectionMeta
}

export type ArticleCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleCategoryFiltersInput>>>
  articles?: InputMaybe<ArticleFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ArticleCategoryFiltersInput>
  not?: InputMaybe<ArticleCategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ArticleCategoryFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ArticleCategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ArticleCategoryRelationResponseCollection = {
  __typename?: 'ArticleCategoryRelationResponseCollection'
  data: Array<ArticleCategoryEntity>
}

export type ArticleEntity = {
  __typename?: 'ArticleEntity'
  attributes?: Maybe<Article>
  id?: Maybe<Scalars['ID']['output']>
}

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse'
  data?: Maybe<ArticleEntity>
}

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection'
  data: Array<ArticleEntity>
  meta: ResponseCollectionMeta
}

export type ArticleFiltersInput = {
  addedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  articleCategory?: InputMaybe<ArticleCategoryFiltersInput>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ArticleFiltersInput>
  not?: InputMaybe<ArticleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  perex?: InputMaybe<StringFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<TagFiltersInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ArticleInput = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>
  articleCategory?: InputMaybe<Scalars['ID']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  coverMedia?: InputMaybe<Scalars['ID']['input']>
  perex?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection'
  data: Array<ArticleEntity>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  contains?: InputMaybe<Scalars['Boolean']['input']>
  containsi?: InputMaybe<Scalars['Boolean']['input']>
  endsWith?: InputMaybe<Scalars['Boolean']['input']>
  eq?: InputMaybe<Scalars['Boolean']['input']>
  eqi?: InputMaybe<Scalars['Boolean']['input']>
  gt?: InputMaybe<Scalars['Boolean']['input']>
  gte?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  lt?: InputMaybe<Scalars['Boolean']['input']>
  lte?: InputMaybe<Scalars['Boolean']['input']>
  ne?: InputMaybe<Scalars['Boolean']['input']>
  nei?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']['input']>
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  startsWith?: InputMaybe<Scalars['Boolean']['input']>
}

export type Branch = {
  __typename?: 'Branch'
  address?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<BranchRelationResponseCollection>
  openingTimes?: Maybe<OpeningTimeRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type BranchLocalizationsArgs = {
  filters?: InputMaybe<BranchFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BranchOpeningTimesArgs = {
  filters?: InputMaybe<OpeningTimeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BranchEntity = {
  __typename?: 'BranchEntity'
  attributes?: Maybe<Branch>
  id?: Maybe<Scalars['ID']['output']>
}

export type BranchEntityResponse = {
  __typename?: 'BranchEntityResponse'
  data?: Maybe<BranchEntity>
}

export type BranchEntityResponseCollection = {
  __typename?: 'BranchEntityResponseCollection'
  data: Array<BranchEntity>
  meta: ResponseCollectionMeta
}

export type BranchFiltersInput = {
  address?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<BranchFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<BranchFiltersInput>
  not?: InputMaybe<BranchFiltersInput>
  openingTimes?: InputMaybe<OpeningTimeFiltersInput>
  or?: InputMaybe<Array<InputMaybe<BranchFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type BranchInput = {
  address?: InputMaybe<Scalars['String']['input']>
  openingTimes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type BranchRelationResponseCollection = {
  __typename?: 'BranchRelationResponseCollection'
  data: Array<BranchEntity>
}

export type ComponentHeaderSectionsBranchMap = {
  __typename?: 'ComponentHeaderSectionsBranchMap'
  branches?: Maybe<BranchRelationResponseCollection>
  id: Scalars['ID']['output']
}

export type ComponentHeaderSectionsBranchMapBranchesArgs = {
  filters?: InputMaybe<BranchFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentHeaderSectionsFeaturedNews = {
  __typename?: 'ComponentHeaderSectionsFeaturedNews'
  articlesTitle: Scalars['String']['output']
  firstArticle?: Maybe<ArticleEntityResponse>
  id: Scalars['ID']['output']
  secondArticle?: Maybe<ArticleEntityResponse>
}

export type ComponentHeaderSectionsGallery = {
  __typename?: 'ComponentHeaderSectionsGallery'
  id: Scalars['ID']['output']
  medias: UploadFileRelationResponseCollection
}

export type ComponentHeaderSectionsGalleryMediasArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentHeaderSectionsIcon = {
  __typename?: 'ComponentHeaderSectionsIcon'
  iconName: Scalars['String']['output']
  id: Scalars['ID']['output']
}

export type ComponentHeaderSectionsImage = {
  __typename?: 'ComponentHeaderSectionsImage'
  id: Scalars['ID']['output']
  media: UploadFileEntityResponse
}

export type ComponentHeaderSectionsPickupDay = {
  __typename?: 'ComponentHeaderSectionsPickupDay'
  anchors?: Maybe<Array<Maybe<ComponentItemsAnchor>>>
  carouselTitle: Scalars['String']['output']
  id: Scalars['ID']['output']
  showMoreLink?: Maybe<ComponentItemsLink>
}

export type ComponentHeaderSectionsPickupDayAnchorsArgs = {
  filters?: InputMaybe<ComponentItemsAnchorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentHeaderSectionsSideImage = {
  __typename?: 'ComponentHeaderSectionsSideImage'
  id: Scalars['ID']['output']
  media: UploadFileEntityResponse
}

export type ComponentItemsAnchor = {
  __typename?: 'ComponentItemsAnchor'
  id: Scalars['ID']['output']
  label: Scalars['String']['output']
  targetId: Scalars['String']['output']
}

export type ComponentItemsAnchorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsAnchorFiltersInput>>>
  label?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentItemsAnchorFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsAnchorFiltersInput>>>
  targetId?: InputMaybe<StringFilterInput>
}

export type ComponentItemsCardsListItem = {
  __typename?: 'ComponentItemsCardsListItem'
  id: Scalars['ID']['output']
  link: ComponentItemsLink
  title: Scalars['String']['output']
}

export type ComponentItemsCardsListItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsCardsListItemFiltersInput>>>
  link?: InputMaybe<ComponentItemsLinkFiltersInput>
  not?: InputMaybe<ComponentItemsCardsListItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsCardsListItemFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentItemsColumnsItem = {
  __typename?: 'ComponentItemsColumnsItem'
  id: Scalars['ID']['output']
  image?: Maybe<UploadFileEntityResponse>
  text?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentItemsColumnsItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsColumnsItemFiltersInput>>>
  not?: InputMaybe<ComponentItemsColumnsItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsColumnsItemFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentItemsColumnsListItem = {
  __typename?: 'ComponentItemsColumnsListItem'
  content: Scalars['String']['output']
  icon?: Maybe<UploadFileEntityResponse>
  id: Scalars['ID']['output']
}

export type ComponentItemsColumnsListItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsColumnsListItemFiltersInput>>>
  content?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentItemsColumnsListItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsColumnsListItemFiltersInput>>>
}

export type ComponentItemsFileItem = {
  __typename?: 'ComponentItemsFileItem'
  id: Scalars['ID']['output']
  media: UploadFileEntityResponse
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentItemsFileItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsFileItemFiltersInput>>>
  not?: InputMaybe<ComponentItemsFileItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsFileItemFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentItemsFileItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  media?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentItemsFooterColumn = {
  __typename?: 'ComponentItemsFooterColumn'
  id: Scalars['ID']['output']
  links?: Maybe<Array<Maybe<ComponentItemsLink>>>
  title: Scalars['String']['output']
}

export type ComponentItemsFooterColumnLinksArgs = {
  filters?: InputMaybe<ComponentItemsLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentItemsFooterColumnFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsFooterColumnFiltersInput>>>
  links?: InputMaybe<ComponentItemsLinkFiltersInput>
  not?: InputMaybe<ComponentItemsFooterColumnFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsFooterColumnFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentItemsFooterColumnInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  links?: InputMaybe<Array<InputMaybe<ComponentItemsLinkInput>>>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentItemsHeroMainTile = {
  __typename?: 'ComponentItemsHeroMainTile'
  id: Scalars['ID']['output']
  link?: Maybe<ComponentItemsLink>
  text?: Maybe<Scalars['String']['output']>
}

export type ComponentItemsHeroMainTileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsHeroMainTileFiltersInput>>>
  link?: InputMaybe<ComponentItemsLinkFiltersInput>
  not?: InputMaybe<ComponentItemsHeroMainTileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsHeroMainTileFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
}

export type ComponentItemsHeroMainTileInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  link?: InputMaybe<ComponentItemsLinkInput>
  text?: InputMaybe<Scalars['String']['input']>
}

export type ComponentItemsHeroSmallTile = {
  __typename?: 'ComponentItemsHeroSmallTile'
  icon?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  link?: Maybe<ComponentItemsLink>
}

export type ComponentItemsHeroSmallTileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsHeroSmallTileFiltersInput>>>
  icon?: InputMaybe<StringFilterInput>
  link?: InputMaybe<ComponentItemsLinkFiltersInput>
  not?: InputMaybe<ComponentItemsHeroSmallTileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsHeroSmallTileFiltersInput>>>
}

export type ComponentItemsHeroSmallTileInput = {
  icon?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  link?: InputMaybe<ComponentItemsLinkInput>
}

export type ComponentItemsHomepageServiceTile = {
  __typename?: 'ComponentItemsHomepageServiceTile'
  id: Scalars['ID']['output']
  link?: Maybe<ComponentItemsLink>
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentItemsHomepageServiceTileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsHomepageServiceTileFiltersInput>>>
  link?: InputMaybe<ComponentItemsLinkFiltersInput>
  not?: InputMaybe<ComponentItemsHomepageServiceTileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsHomepageServiceTileFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentItemsHomepageServiceTileInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  link?: InputMaybe<ComponentItemsLinkInput>
  text?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentItemsLink = {
  __typename?: 'ComponentItemsLink'
  article?: Maybe<ArticleEntityResponse>
  branch?: Maybe<BranchEntityResponse>
  document?: Maybe<DocumentEntityResponse>
  id: Scalars['ID']['output']
  label?: Maybe<Scalars['String']['output']>
  page?: Maybe<PageEntityResponse>
  service?: Maybe<ServiceEntityResponse>
  url?: Maybe<Scalars['String']['output']>
  workshop?: Maybe<WorkshopEntityResponse>
}

export type ComponentItemsLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsLinkFiltersInput>>>
  article?: InputMaybe<ArticleFiltersInput>
  branch?: InputMaybe<BranchFiltersInput>
  document?: InputMaybe<DocumentFiltersInput>
  label?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentItemsLinkFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsLinkFiltersInput>>>
  page?: InputMaybe<PageFiltersInput>
  service?: InputMaybe<ServiceFiltersInput>
  url?: InputMaybe<StringFilterInput>
  workshop?: InputMaybe<WorkshopFiltersInput>
}

export type ComponentItemsLinkInput = {
  article?: InputMaybe<Scalars['ID']['input']>
  branch?: InputMaybe<Scalars['ID']['input']>
  document?: InputMaybe<Scalars['ID']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['ID']['input']>
  service?: InputMaybe<Scalars['ID']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  workshop?: InputMaybe<Scalars['ID']['input']>
}

export type ComponentItemsOpeningHoursItem = {
  __typename?: 'ComponentItemsOpeningHoursItem'
  id: Scalars['ID']['output']
  label: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type ComponentItemsOpeningHoursItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsOpeningHoursItemFiltersInput>>>
  label?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentItemsOpeningHoursItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsOpeningHoursItemFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

export type ComponentItemsOpeningHoursItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

export type ComponentItemsOrderedCardsItem = {
  __typename?: 'ComponentItemsOrderedCardsItem'
  iconName?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  text: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type ComponentItemsOrderedCardsItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsOrderedCardsItemFiltersInput>>>
  iconName?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentItemsOrderedCardsItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsOrderedCardsItemFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentItemsSlide = {
  __typename?: 'ComponentItemsSlide'
  backgroundColor?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  link?: Maybe<ComponentItemsLink>
  media: UploadFileEntityResponse
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentItemsSlideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsSlideFiltersInput>>>
  backgroundColor?: InputMaybe<StringFilterInput>
  link?: InputMaybe<ComponentItemsLinkFiltersInput>
  not?: InputMaybe<ComponentItemsSlideFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentItemsSlideFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentItemsSlideInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  link?: InputMaybe<ComponentItemsLinkInput>
  media?: InputMaybe<Scalars['ID']['input']>
  text?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentMenuMenuItem = {
  __typename?: 'ComponentMenuMenuItem'
  id: Scalars['ID']['output']
  label: Scalars['String']['output']
  sections?: Maybe<Array<Maybe<ComponentMenuMenuSection>>>
  seeAllLink?: Maybe<ComponentItemsLink>
}

export type ComponentMenuMenuItemSectionsArgs = {
  filters?: InputMaybe<ComponentMenuMenuSectionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentMenuMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuMenuItemFiltersInput>>>
  label?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentMenuMenuItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentMenuMenuItemFiltersInput>>>
  sections?: InputMaybe<ComponentMenuMenuSectionFiltersInput>
  seeAllLink?: InputMaybe<ComponentItemsLinkFiltersInput>
}

export type ComponentMenuMenuItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  sections?: InputMaybe<Array<InputMaybe<ComponentMenuMenuSectionInput>>>
  seeAllLink?: InputMaybe<ComponentItemsLinkInput>
}

export type ComponentMenuMenuLink = {
  __typename?: 'ComponentMenuMenuLink'
  branch?: Maybe<BranchEntityResponse>
  id: Scalars['ID']['output']
  label?: Maybe<Scalars['String']['output']>
  page?: Maybe<PageEntityResponse>
  url?: Maybe<Scalars['String']['output']>
  workshop?: Maybe<WorkshopEntityResponse>
}

export type ComponentMenuMenuLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkFiltersInput>>>
  branch?: InputMaybe<BranchFiltersInput>
  label?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentMenuMenuLinkFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkFiltersInput>>>
  page?: InputMaybe<PageFiltersInput>
  url?: InputMaybe<StringFilterInput>
  workshop?: InputMaybe<WorkshopFiltersInput>
}

export type ComponentMenuMenuLinkInput = {
  branch?: InputMaybe<Scalars['ID']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['ID']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  workshop?: InputMaybe<Scalars['ID']['input']>
}

export type ComponentMenuMenuSection = {
  __typename?: 'ComponentMenuMenuSection'
  colSpan: Scalars['Int']['output']
  hasDivider: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  label: Scalars['String']['output']
  links?: Maybe<Array<Maybe<ComponentMenuMenuLink>>>
  multicolumnBehaviour?: Maybe<Enum_Componentmenumenusection_Multicolumnbehaviour>
  specialSectionType?: Maybe<Enum_Componentmenumenusection_Specialsectiontype>
}

export type ComponentMenuMenuSectionLinksArgs = {
  filters?: InputMaybe<ComponentMenuMenuLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentMenuMenuSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuMenuSectionFiltersInput>>>
  colSpan?: InputMaybe<IntFilterInput>
  hasDivider?: InputMaybe<BooleanFilterInput>
  label?: InputMaybe<StringFilterInput>
  links?: InputMaybe<ComponentMenuMenuLinkFiltersInput>
  multicolumnBehaviour?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentMenuMenuSectionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentMenuMenuSectionFiltersInput>>>
  specialSectionType?: InputMaybe<StringFilterInput>
}

export type ComponentMenuMenuSectionInput = {
  colSpan?: InputMaybe<Scalars['Int']['input']>
  hasDivider?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  links?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkInput>>>
  multicolumnBehaviour?: InputMaybe<Enum_Componentmenumenusection_Multicolumnbehaviour>
  specialSectionType?: InputMaybe<Enum_Componentmenumenusection_Specialsectiontype>
}

export type ComponentSectionsArticlesHomepageSection = {
  __typename?: 'ComponentSectionsArticlesHomepageSection'
  articles?: Maybe<ArticleRelationResponseCollection>
  id: Scalars['ID']['output']
  showMoreLink?: Maybe<ComponentItemsLink>
  text?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentSectionsArticlesHomepageSectionArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsArticlesHomepageSectionInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  showMoreLink?: InputMaybe<ComponentItemsLinkInput>
  text?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentSectionsBanner = {
  __typename?: 'ComponentSectionsBanner'
  id: Scalars['ID']['output']
  image: UploadFileEntityResponse
  primaryButtonLink: ComponentItemsLink
  secondaryButtonLink?: Maybe<ComponentItemsLink>
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  variant: Enum_Componentsectionsbanner_Variant
}

export type ComponentSectionsBannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsBannerFiltersInput>>>
  not?: InputMaybe<ComponentSectionsBannerFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsBannerFiltersInput>>>
  primaryButtonLink?: InputMaybe<ComponentItemsLinkFiltersInput>
  secondaryButtonLink?: InputMaybe<ComponentItemsLinkFiltersInput>
  text?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  variant?: InputMaybe<StringFilterInput>
}

export type ComponentSectionsBannerInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<Scalars['ID']['input']>
  primaryButtonLink?: InputMaybe<ComponentItemsLinkInput>
  secondaryButtonLink?: InputMaybe<ComponentItemsLinkInput>
  text?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  variant?: InputMaybe<Enum_Componentsectionsbanner_Variant>
}

export type ComponentSectionsBranches = {
  __typename?: 'ComponentSectionsBranches'
  branches?: Maybe<BranchRelationResponseCollection>
  id: Scalars['ID']['output']
  showAll: Scalars['Boolean']['output']
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentSectionsBranchesBranchesArgs = {
  filters?: InputMaybe<BranchFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsCardsList = {
  __typename?: 'ComponentSectionsCardsList'
  cards?: Maybe<Array<Maybe<ComponentItemsCardsListItem>>>
  id: Scalars['ID']['output']
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentSectionsCardsListCardsArgs = {
  filters?: InputMaybe<ComponentItemsCardsListItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsColumns = {
  __typename?: 'ComponentSectionsColumns'
  backgroundColor: Enum_Componentsectionscolumns_Backgroundcolor
  id: Scalars['ID']['output']
  items: Array<Maybe<ComponentItemsColumnsItem>>
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentSectionsColumnsItemsArgs = {
  filters?: InputMaybe<ComponentItemsColumnsItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsColumnsList = {
  __typename?: 'ComponentSectionsColumnsList'
  backgroundColor?: Maybe<Enum_Componentsectionscolumnslist_Backgroundcolor>
  id: Scalars['ID']['output']
  leftColumn?: Maybe<Array<Maybe<ComponentItemsColumnsListItem>>>
  rightColumn?: Maybe<Array<Maybe<ComponentItemsColumnsListItem>>>
  title: Scalars['String']['output']
}

export type ComponentSectionsColumnsListLeftColumnArgs = {
  filters?: InputMaybe<ComponentItemsColumnsListItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsColumnsListRightColumnArgs = {
  filters?: InputMaybe<ComponentItemsColumnsListItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsDivider = {
  __typename?: 'ComponentSectionsDivider'
  backgroundColor: Enum_Componentsectionsdivider_Backgroundcolor
  id: Scalars['ID']['output']
}

export type ComponentSectionsFaq = {
  __typename?: 'ComponentSectionsFaq'
  backgroundColor: Enum_Componentsectionsfaq_Backgroundcolor
  faqs?: Maybe<FaqRelationResponseCollection>
  id: Scalars['ID']['output']
  showMoreLink?: Maybe<ComponentItemsLink>
  title: Scalars['String']['output']
}

export type ComponentSectionsFaqFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsFiles = {
  __typename?: 'ComponentSectionsFiles'
  files: Array<Maybe<ComponentItemsFileItem>>
  id: Scalars['ID']['output']
  title: Scalars['String']['output']
}

export type ComponentSectionsFilesFilesArgs = {
  filters?: InputMaybe<ComponentItemsFileItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsHeroHomepageSection = {
  __typename?: 'ComponentSectionsHeroHomepageSection'
  id: Scalars['ID']['output']
  mainTiles?: Maybe<Array<Maybe<ComponentItemsHeroMainTile>>>
  slides?: Maybe<Array<Maybe<ComponentItemsSlide>>>
  smallTiles?: Maybe<Array<Maybe<ComponentItemsHeroSmallTile>>>
}

export type ComponentSectionsHeroHomepageSectionMainTilesArgs = {
  filters?: InputMaybe<ComponentItemsHeroMainTileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsHeroHomepageSectionSlidesArgs = {
  filters?: InputMaybe<ComponentItemsSlideFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsHeroHomepageSectionSmallTilesArgs = {
  filters?: InputMaybe<ComponentItemsHeroSmallTileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsHeroHomepageSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  mainTiles?: InputMaybe<Array<InputMaybe<ComponentItemsHeroMainTileInput>>>
  slides?: InputMaybe<Array<InputMaybe<ComponentItemsSlideInput>>>
  smallTiles?: InputMaybe<Array<InputMaybe<ComponentItemsHeroSmallTileInput>>>
}

export type ComponentSectionsImageAndText = {
  __typename?: 'ComponentSectionsImageAndText'
  backgroundColor: Enum_Componentsectionsimageandtext_Backgroundcolor
  id: Scalars['ID']['output']
  image: UploadFileEntityResponse
  imagePosition: Enum_Componentsectionsimageandtext_Imageposition
  primaryButton?: Maybe<ComponentItemsLink>
  secondaryButton?: Maybe<ComponentItemsLink>
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentSectionsImageAndTextOverlapped = {
  __typename?: 'ComponentSectionsImageAndTextOverlapped'
  backgroundColor: Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor
  id: Scalars['ID']['output']
  image: UploadFileEntityResponse
  imagePosition: Enum_Componentsectionsimageandtextoverlapped_Imageposition
  link?: Maybe<ComponentItemsLink>
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentSectionsKoloHomepageSection = {
  __typename?: 'ComponentSectionsKoloHomepageSection'
  branches?: Maybe<BranchRelationResponseCollection>
  branchesTitle?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  mainCards?: Maybe<Array<Maybe<ComponentItemsLink>>>
  showMoreLink?: Maybe<ComponentItemsLink>
  text?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentSectionsKoloHomepageSectionBranchesArgs = {
  filters?: InputMaybe<BranchFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsKoloHomepageSectionMainCardsArgs = {
  filters?: InputMaybe<ComponentItemsLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsKoloHomepageSectionInput = {
  branches?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  branchesTitle?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  mainCards?: InputMaybe<Array<InputMaybe<ComponentItemsLinkInput>>>
  showMoreLink?: InputMaybe<ComponentItemsLinkInput>
  text?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentSectionsOrderedCards = {
  __typename?: 'ComponentSectionsOrderedCards'
  cards: Array<Maybe<ComponentItemsOrderedCardsItem>>
  id: Scalars['ID']['output']
  title: Scalars['String']['output']
  variant: Enum_Componentsectionsorderedcards_Variant
}

export type ComponentSectionsOrderedCardsCardsArgs = {
  filters?: InputMaybe<ComponentItemsOrderedCardsItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsRichtext = {
  __typename?: 'ComponentSectionsRichtext'
  backgroundColor: Enum_Componentsectionsrichtext_Backgroundcolor
  content?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
}

export type ComponentSectionsServicesHomepageSection = {
  __typename?: 'ComponentSectionsServicesHomepageSection'
  id: Scalars['ID']['output']
  showMoreLink?: Maybe<ComponentItemsLink>
  text?: Maybe<Scalars['String']['output']>
  tiles?: Maybe<Array<Maybe<ComponentItemsHomepageServiceTile>>>
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentSectionsServicesHomepageSectionTilesArgs = {
  filters?: InputMaybe<ComponentItemsHomepageServiceTileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsServicesHomepageSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  showMoreLink?: InputMaybe<ComponentItemsLinkInput>
  text?: InputMaybe<Scalars['String']['input']>
  tiles?: InputMaybe<Array<InputMaybe<ComponentItemsHomepageServiceTileInput>>>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentSectionsTable = {
  __typename?: 'ComponentSectionsTable'
  anchorId?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentSectionsWorkshops = {
  __typename?: 'ComponentSectionsWorkshops'
  id: Scalars['ID']['output']
  showAll: Scalars['Boolean']['output']
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  workshops?: Maybe<WorkshopRelationResponseCollection>
}

export type ComponentSectionsWorkshopsWorkshopsArgs = {
  filters?: InputMaybe<WorkshopFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Contact = {
  __typename?: 'Contact'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  label: Scalars['String']['output']
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ContactEntity = {
  __typename?: 'ContactEntity'
  attributes?: Maybe<Contact>
  id?: Maybe<Scalars['ID']['output']>
}

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse'
  data?: Maybe<ContactEntity>
}

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection'
  data: Array<ContactEntity>
  meta: ResponseCollectionMeta
}

export type ContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  label?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ContactFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ContactInput = {
  label?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  contains?: InputMaybe<Scalars['DateTime']['input']>
  containsi?: InputMaybe<Scalars['DateTime']['input']>
  endsWith?: InputMaybe<Scalars['DateTime']['input']>
  eq?: InputMaybe<Scalars['DateTime']['input']>
  eqi?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  ne?: InputMaybe<Scalars['DateTime']['input']>
  nei?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']['input']>
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startsWith?: InputMaybe<Scalars['DateTime']['input']>
}

export type Document = {
  __typename?: 'Document'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  documentCategory?: Maybe<DocumentCategoryEntityResponse>
  files: Array<Maybe<ComponentItemsFileItem>>
  identificationNumber?: Maybe<Scalars['String']['output']>
  priceWithoutTax?: Maybe<Scalars['String']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  supplier?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type DocumentFilesArgs = {
  filters?: InputMaybe<ComponentItemsFileItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type DocumentCategory = {
  __typename?: 'DocumentCategory'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  dokuments?: Maybe<DocumentRelationResponseCollection>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<DocumentCategoryRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type DocumentCategoryDokumentsArgs = {
  filters?: InputMaybe<DocumentFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type DocumentCategoryLocalizationsArgs = {
  filters?: InputMaybe<DocumentCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type DocumentCategoryEntity = {
  __typename?: 'DocumentCategoryEntity'
  attributes?: Maybe<DocumentCategory>
  id?: Maybe<Scalars['ID']['output']>
}

export type DocumentCategoryEntityResponse = {
  __typename?: 'DocumentCategoryEntityResponse'
  data?: Maybe<DocumentCategoryEntity>
}

export type DocumentCategoryEntityResponseCollection = {
  __typename?: 'DocumentCategoryEntityResponseCollection'
  data: Array<DocumentCategoryEntity>
  meta: ResponseCollectionMeta
}

export type DocumentCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DocumentCategoryFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  dokuments?: InputMaybe<DocumentFiltersInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<DocumentCategoryFiltersInput>
  not?: InputMaybe<DocumentCategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<DocumentCategoryFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type DocumentCategoryInput = {
  dokuments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type DocumentCategoryRelationResponseCollection = {
  __typename?: 'DocumentCategoryRelationResponseCollection'
  data: Array<DocumentCategoryEntity>
}

export type DocumentEntity = {
  __typename?: 'DocumentEntity'
  attributes?: Maybe<Document>
  id?: Maybe<Scalars['ID']['output']>
}

export type DocumentEntityResponse = {
  __typename?: 'DocumentEntityResponse'
  data?: Maybe<DocumentEntity>
}

export type DocumentEntityResponseCollection = {
  __typename?: 'DocumentEntityResponseCollection'
  data: Array<DocumentEntity>
  meta: ResponseCollectionMeta
}

export type DocumentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DocumentFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  documentCategory?: InputMaybe<DocumentCategoryFiltersInput>
  files?: InputMaybe<ComponentItemsFileItemFiltersInput>
  id?: InputMaybe<IdFilterInput>
  identificationNumber?: InputMaybe<StringFilterInput>
  not?: InputMaybe<DocumentFiltersInput>
  or?: InputMaybe<Array<InputMaybe<DocumentFiltersInput>>>
  priceWithoutTax?: InputMaybe<StringFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  supplier?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type DocumentInput = {
  description?: InputMaybe<Scalars['String']['input']>
  documentCategory?: InputMaybe<Scalars['ID']['input']>
  files?: InputMaybe<Array<InputMaybe<ComponentItemsFileItemInput>>>
  identificationNumber?: InputMaybe<Scalars['String']['input']>
  priceWithoutTax?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  supplier?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type DocumentRelationResponseCollection = {
  __typename?: 'DocumentRelationResponseCollection'
  data: Array<DocumentEntity>
}

export enum Enum_Componentmenumenusection_Multicolumnbehaviour {
  Fullwidth = 'fullwidth',
  SplitEqually = 'split_equally',
}

export enum Enum_Componentmenumenusection_Specialsectiontype {
  LatestArticles = 'latest_articles',
}

export enum Enum_Componentsectionsbanner_Variant {
  BackgroundBlack = 'background_black',
  BackgroundGrey = 'background_grey',
}

export enum Enum_Componentsectionscolumnslist_Backgroundcolor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum Enum_Componentsectionscolumns_Backgroundcolor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum Enum_Componentsectionsdivider_Backgroundcolor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum Enum_Componentsectionsfaq_Backgroundcolor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum Enum_Componentsectionsimageandtextoverlapped_Imageposition {
  Left = 'left',
  LeftShifted = 'left_shifted',
  Right = 'right',
  RightShifted = 'right_shifted',
}

export enum Enum_Componentsectionsimageandtext_Backgroundcolor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum Enum_Componentsectionsimageandtext_Imageposition {
  Left = 'left',
  Right = 'right',
}

export enum Enum_Componentsectionsorderedcards_Variant {
  Icons = 'icons',
  Numbers = 'numbers',
}

export enum Enum_Componentsectionsrichtext_Backgroundcolor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum Enum_Servicecategory_Categorycolor {
  Blue = 'blue',
  Green = 'green',
  None = 'none',
  Red = 'red',
}

export type Error = {
  __typename?: 'Error'
  code: Scalars['String']['output']
  message?: Maybe<Scalars['String']['output']>
}

export type Faq = {
  __typename?: 'Faq'
  content: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  faqCategory?: Maybe<FaqCategoryEntityResponse>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<FaqRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type FaqLocalizationsArgs = {
  filters?: InputMaybe<FaqFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FaqCategory = {
  __typename?: 'FaqCategory'
  banner?: Maybe<ComponentSectionsBanner>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  faqs?: Maybe<FaqRelationResponseCollection>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<FaqCategoryRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type FaqCategoryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FaqCategoryLocalizationsArgs = {
  filters?: InputMaybe<FaqCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FaqCategoryEntity = {
  __typename?: 'FaqCategoryEntity'
  attributes?: Maybe<FaqCategory>
  id?: Maybe<Scalars['ID']['output']>
}

export type FaqCategoryEntityResponse = {
  __typename?: 'FaqCategoryEntityResponse'
  data?: Maybe<FaqCategoryEntity>
}

export type FaqCategoryEntityResponseCollection = {
  __typename?: 'FaqCategoryEntityResponseCollection'
  data: Array<FaqCategoryEntity>
  meta: ResponseCollectionMeta
}

export type FaqCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FaqCategoryFiltersInput>>>
  banner?: InputMaybe<ComponentSectionsBannerFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  faqs?: InputMaybe<FaqFiltersInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<FaqCategoryFiltersInput>
  not?: InputMaybe<FaqCategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<FaqCategoryFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type FaqCategoryInput = {
  banner?: InputMaybe<ComponentSectionsBannerInput>
  faqs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type FaqCategoryRelationResponseCollection = {
  __typename?: 'FaqCategoryRelationResponseCollection'
  data: Array<FaqCategoryEntity>
}

export type FaqEntity = {
  __typename?: 'FaqEntity'
  attributes?: Maybe<Faq>
  id?: Maybe<Scalars['ID']['output']>
}

export type FaqEntityResponse = {
  __typename?: 'FaqEntityResponse'
  data?: Maybe<FaqEntity>
}

export type FaqEntityResponseCollection = {
  __typename?: 'FaqEntityResponseCollection'
  data: Array<FaqEntity>
  meta: ResponseCollectionMeta
}

export type FaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  faqCategory?: InputMaybe<FaqCategoryFiltersInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<FaqFiltersInput>
  not?: InputMaybe<FaqFiltersInput>
  or?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type FaqInput = {
  content?: InputMaybe<Scalars['String']['input']>
  faqCategory?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type FaqRelationResponseCollection = {
  __typename?: 'FaqRelationResponseCollection'
  data: Array<FaqEntity>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  contains?: InputMaybe<Scalars['Float']['input']>
  containsi?: InputMaybe<Scalars['Float']['input']>
  endsWith?: InputMaybe<Scalars['Float']['input']>
  eq?: InputMaybe<Scalars['Float']['input']>
  eqi?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  ne?: InputMaybe<Scalars['Float']['input']>
  nei?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']['input']>
  notContainsi?: InputMaybe<Scalars['Float']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  startsWith?: InputMaybe<Scalars['Float']['input']>
}

export type Footer = {
  __typename?: 'Footer'
  bottomLinks?: Maybe<Array<Maybe<ComponentItemsLink>>>
  columns?: Maybe<Array<Maybe<ComponentItemsFooterColumn>>>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  facebookUrl?: Maybe<Scalars['String']['output']>
  instagramUrl?: Maybe<Scalars['String']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<FooterRelationResponseCollection>
  text?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type FooterBottomLinksArgs = {
  filters?: InputMaybe<ComponentItemsLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FooterColumnsArgs = {
  filters?: InputMaybe<ComponentItemsFooterColumnFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FooterEntity = {
  __typename?: 'FooterEntity'
  attributes?: Maybe<Footer>
  id?: Maybe<Scalars['ID']['output']>
}

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse'
  data?: Maybe<FooterEntity>
}

export type FooterInput = {
  bottomLinks?: InputMaybe<Array<InputMaybe<ComponentItemsLinkInput>>>
  columns?: InputMaybe<Array<InputMaybe<ComponentItemsFooterColumnInput>>>
  facebookUrl?: InputMaybe<Scalars['String']['input']>
  instagramUrl?: InputMaybe<Scalars['String']['input']>
  text?: InputMaybe<Scalars['String']['input']>
}

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection'
  data: Array<FooterEntity>
}

export type GenericMorph =
  | Article
  | ArticleCategory
  | Branch
  | ComponentHeaderSectionsBranchMap
  | ComponentHeaderSectionsFeaturedNews
  | ComponentHeaderSectionsGallery
  | ComponentHeaderSectionsIcon
  | ComponentHeaderSectionsImage
  | ComponentHeaderSectionsPickupDay
  | ComponentHeaderSectionsSideImage
  | ComponentItemsAnchor
  | ComponentItemsCardsListItem
  | ComponentItemsColumnsItem
  | ComponentItemsColumnsListItem
  | ComponentItemsFileItem
  | ComponentItemsFooterColumn
  | ComponentItemsHeroMainTile
  | ComponentItemsHeroSmallTile
  | ComponentItemsHomepageServiceTile
  | ComponentItemsLink
  | ComponentItemsOpeningHoursItem
  | ComponentItemsOrderedCardsItem
  | ComponentItemsSlide
  | ComponentMenuMenuItem
  | ComponentMenuMenuLink
  | ComponentMenuMenuSection
  | ComponentSectionsArticlesHomepageSection
  | ComponentSectionsBanner
  | ComponentSectionsBranches
  | ComponentSectionsCardsList
  | ComponentSectionsColumns
  | ComponentSectionsColumnsList
  | ComponentSectionsDivider
  | ComponentSectionsFaq
  | ComponentSectionsFiles
  | ComponentSectionsHeroHomepageSection
  | ComponentSectionsImageAndText
  | ComponentSectionsImageAndTextOverlapped
  | ComponentSectionsKoloHomepageSection
  | ComponentSectionsOrderedCards
  | ComponentSectionsRichtext
  | ComponentSectionsServicesHomepageSection
  | ComponentSectionsTable
  | ComponentSectionsWorkshops
  | Contact
  | Document
  | DocumentCategory
  | Faq
  | FaqCategory
  | Footer
  | Homepage
  | I18NLocale
  | Menu
  | Navigation
  | OpeningTime
  | Page
  | Service
  | ServiceCategory
  | Tag
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Workshop

export type Homepage = {
  __typename?: 'Homepage'
  articlesSection?: Maybe<ComponentSectionsArticlesHomepageSection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  heroSection?: Maybe<ComponentSectionsHeroHomepageSection>
  koloSection?: Maybe<ComponentSectionsKoloHomepageSection>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<HomepageRelationResponseCollection>
  servicesSection?: Maybe<ComponentSectionsServicesHomepageSection>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type HomepageEntity = {
  __typename?: 'HomepageEntity'
  attributes?: Maybe<Homepage>
  id?: Maybe<Scalars['ID']['output']>
}

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse'
  data?: Maybe<HomepageEntity>
}

export type HomepageInput = {
  articlesSection?: InputMaybe<ComponentSectionsArticlesHomepageSectionInput>
  heroSection?: InputMaybe<ComponentSectionsHeroHomepageSectionInput>
  koloSection?: InputMaybe<ComponentSectionsKoloHomepageSectionInput>
  servicesSection?: InputMaybe<ComponentSectionsServicesHomepageSectionInput>
}

export type HomepageRelationResponseCollection = {
  __typename?: 'HomepageRelationResponseCollection'
  data: Array<HomepageEntity>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  name?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']['output']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  contains?: InputMaybe<Scalars['ID']['input']>
  containsi?: InputMaybe<Scalars['ID']['input']>
  endsWith?: InputMaybe<Scalars['ID']['input']>
  eq?: InputMaybe<Scalars['ID']['input']>
  eqi?: InputMaybe<Scalars['ID']['input']>
  gt?: InputMaybe<Scalars['ID']['input']>
  gte?: InputMaybe<Scalars['ID']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  lt?: InputMaybe<Scalars['ID']['input']>
  lte?: InputMaybe<Scalars['ID']['input']>
  ne?: InputMaybe<Scalars['ID']['input']>
  nei?: InputMaybe<Scalars['ID']['input']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']['input']>
  notContainsi?: InputMaybe<Scalars['ID']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  startsWith?: InputMaybe<Scalars['ID']['input']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  contains?: InputMaybe<Scalars['Int']['input']>
  containsi?: InputMaybe<Scalars['Int']['input']>
  endsWith?: InputMaybe<Scalars['Int']['input']>
  eq?: InputMaybe<Scalars['Int']['input']>
  eqi?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  nei?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']['input']>
  notContainsi?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  startsWith?: InputMaybe<Scalars['Int']['input']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  contains?: InputMaybe<Scalars['JSON']['input']>
  containsi?: InputMaybe<Scalars['JSON']['input']>
  endsWith?: InputMaybe<Scalars['JSON']['input']>
  eq?: InputMaybe<Scalars['JSON']['input']>
  eqi?: InputMaybe<Scalars['JSON']['input']>
  gt?: InputMaybe<Scalars['JSON']['input']>
  gte?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  lt?: InputMaybe<Scalars['JSON']['input']>
  lte?: InputMaybe<Scalars['JSON']['input']>
  ne?: InputMaybe<Scalars['JSON']['input']>
  nei?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']['input']>
  notContainsi?: InputMaybe<Scalars['JSON']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  startsWith?: InputMaybe<Scalars['JSON']['input']>
}

export type Menu = {
  __typename?: 'Menu'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<MenuRelationResponseCollection>
  menuItems?: Maybe<Array<Maybe<ComponentMenuMenuItem>>>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type MenuMenuItemsArgs = {
  filters?: InputMaybe<ComponentMenuMenuItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MenuEntity = {
  __typename?: 'MenuEntity'
  attributes?: Maybe<Menu>
  id?: Maybe<Scalars['ID']['output']>
}

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse'
  data?: Maybe<MenuEntity>
}

export type MenuInput = {
  menuItems?: InputMaybe<Array<InputMaybe<ComponentMenuMenuItemInput>>>
}

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection'
  data: Array<MenuEntity>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createArticle?: Maybe<ArticleEntityResponse>
  createArticleCategory?: Maybe<ArticleCategoryEntityResponse>
  createArticleCategoryLocalization?: Maybe<ArticleCategoryEntityResponse>
  createArticleLocalization?: Maybe<ArticleEntityResponse>
  createBranch?: Maybe<BranchEntityResponse>
  createBranchLocalization?: Maybe<BranchEntityResponse>
  createContact?: Maybe<ContactEntityResponse>
  createDocument?: Maybe<DocumentEntityResponse>
  createDocumentCategory?: Maybe<DocumentCategoryEntityResponse>
  createDocumentCategoryLocalization?: Maybe<DocumentCategoryEntityResponse>
  createFaq?: Maybe<FaqEntityResponse>
  createFaqCategory?: Maybe<FaqCategoryEntityResponse>
  createFaqCategoryLocalization?: Maybe<FaqCategoryEntityResponse>
  createFaqLocalization?: Maybe<FaqEntityResponse>
  createFooterLocalization?: Maybe<FooterEntityResponse>
  createHomepageLocalization?: Maybe<HomepageEntityResponse>
  createMenuLocalization?: Maybe<MenuEntityResponse>
  createNavigationLocalization?: Maybe<NavigationEntityResponse>
  createOpeningTime?: Maybe<OpeningTimeEntityResponse>
  createPage?: Maybe<PageEntityResponse>
  createPageLocalization?: Maybe<PageEntityResponse>
  createService?: Maybe<ServiceEntityResponse>
  createServiceCategory?: Maybe<ServiceCategoryEntityResponse>
  createServiceCategoryLocalization?: Maybe<ServiceCategoryEntityResponse>
  createServiceLocalization?: Maybe<ServiceEntityResponse>
  createTag?: Maybe<TagEntityResponse>
  createTagLocalization?: Maybe<TagEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  createWorkshop?: Maybe<WorkshopEntityResponse>
  deleteArticle?: Maybe<ArticleEntityResponse>
  deleteArticleCategory?: Maybe<ArticleCategoryEntityResponse>
  deleteBranch?: Maybe<BranchEntityResponse>
  deleteContact?: Maybe<ContactEntityResponse>
  deleteDocument?: Maybe<DocumentEntityResponse>
  deleteDocumentCategory?: Maybe<DocumentCategoryEntityResponse>
  deleteFaq?: Maybe<FaqEntityResponse>
  deleteFaqCategory?: Maybe<FaqCategoryEntityResponse>
  deleteFooter?: Maybe<FooterEntityResponse>
  deleteHomepage?: Maybe<HomepageEntityResponse>
  deleteMenu?: Maybe<MenuEntityResponse>
  deleteNavigation?: Maybe<NavigationEntityResponse>
  deleteOpeningTime?: Maybe<OpeningTimeEntityResponse>
  deletePage?: Maybe<PageEntityResponse>
  deleteService?: Maybe<ServiceEntityResponse>
  deleteServiceCategory?: Maybe<ServiceCategoryEntityResponse>
  deleteTag?: Maybe<TagEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteWorkshop?: Maybe<WorkshopEntityResponse>
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateArticle?: Maybe<ArticleEntityResponse>
  updateArticleCategory?: Maybe<ArticleCategoryEntityResponse>
  updateBranch?: Maybe<BranchEntityResponse>
  updateContact?: Maybe<ContactEntityResponse>
  updateDocument?: Maybe<DocumentEntityResponse>
  updateDocumentCategory?: Maybe<DocumentCategoryEntityResponse>
  updateFaq?: Maybe<FaqEntityResponse>
  updateFaqCategory?: Maybe<FaqCategoryEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateFooter?: Maybe<FooterEntityResponse>
  updateHomepage?: Maybe<HomepageEntityResponse>
  updateMenu?: Maybe<MenuEntityResponse>
  updateNavigation?: Maybe<NavigationEntityResponse>
  updateOpeningTime?: Maybe<OpeningTimeEntityResponse>
  updatePage?: Maybe<PageEntityResponse>
  updateService?: Maybe<ServiceEntityResponse>
  updateServiceCategory?: Maybe<ServiceCategoryEntityResponse>
  updateTag?: Maybe<TagEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  updateWorkshop?: Maybe<WorkshopEntityResponse>
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationCreateArticleArgs = {
  data: ArticleInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateArticleCategoryArgs = {
  data: ArticleCategoryInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateArticleCategoryLocalizationArgs = {
  data?: InputMaybe<ArticleCategoryInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateArticleLocalizationArgs = {
  data?: InputMaybe<ArticleInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateBranchArgs = {
  data: BranchInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateBranchLocalizationArgs = {
  data?: InputMaybe<BranchInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateContactArgs = {
  data: ContactInput
}

export type MutationCreateDocumentArgs = {
  data: DocumentInput
}

export type MutationCreateDocumentCategoryArgs = {
  data: DocumentCategoryInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateDocumentCategoryLocalizationArgs = {
  data?: InputMaybe<DocumentCategoryInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateFaqArgs = {
  data: FaqInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateFaqCategoryArgs = {
  data: FaqCategoryInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateFaqCategoryLocalizationArgs = {
  data?: InputMaybe<FaqCategoryInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateFaqLocalizationArgs = {
  data?: InputMaybe<FaqInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateFooterLocalizationArgs = {
  data?: InputMaybe<FooterInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateHomepageLocalizationArgs = {
  data?: InputMaybe<HomepageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateNavigationLocalizationArgs = {
  data?: InputMaybe<NavigationInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateOpeningTimeArgs = {
  data: OpeningTimeInput
}

export type MutationCreatePageArgs = {
  data: PageInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateServiceArgs = {
  data: ServiceInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateServiceCategoryArgs = {
  data: ServiceCategoryInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateServiceCategoryLocalizationArgs = {
  data?: InputMaybe<ServiceCategoryInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateServiceLocalizationArgs = {
  data?: InputMaybe<ServiceInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateTagArgs = {
  data: TagInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateTagLocalizationArgs = {
  data?: InputMaybe<TagInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationCreateWorkshopArgs = {
  data: WorkshopInput
}

export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteArticleCategoryArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteBranchArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteContactArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteDocumentArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteDocumentCategoryArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteFaqArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteFaqCategoryArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteNavigationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteOpeningTimeArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePageArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteServiceCategoryArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteWorkshopArgs = {
  id: Scalars['ID']['input']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  files: Array<InputMaybe<Scalars['Upload']['input']>>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationUpdateArticleArgs = {
  data: ArticleInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateArticleCategoryArgs = {
  data: ArticleCategoryInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateBranchArgs = {
  data: BranchInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateContactArgs = {
  data: ContactInput
  id: Scalars['ID']['input']
}

export type MutationUpdateDocumentArgs = {
  data: DocumentInput
  id: Scalars['ID']['input']
}

export type MutationUpdateDocumentCategoryArgs = {
  data: DocumentCategoryInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateFaqArgs = {
  data: FaqInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateFaqCategoryArgs = {
  data: FaqCategoryInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateFooterArgs = {
  data: FooterInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateHomepageArgs = {
  data: HomepageInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateMenuArgs = {
  data: MenuInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateNavigationArgs = {
  data: NavigationInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateOpeningTimeArgs = {
  data: OpeningTimeInput
  id: Scalars['ID']['input']
}

export type MutationUpdatePageArgs = {
  data: PageInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateServiceArgs = {
  data: ServiceInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateServiceCategoryArgs = {
  data: ServiceCategoryInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateTagArgs = {
  data: TagInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']['input']
}

export type MutationUpdateWorkshopArgs = {
  data: WorkshopInput
  id: Scalars['ID']['input']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  file: Scalars['Upload']['input']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type Navigation = {
  __typename?: 'Navigation'
  articlesParentPage?: Maybe<PageEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  documentsParentPage?: Maybe<PageEntityResponse>
  faqCategoriesParentPage?: Maybe<PageEntityResponse>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<NavigationRelationResponseCollection>
  servicesParentPage?: Maybe<PageEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  workshopsParentPage?: Maybe<PageEntityResponse>
}

export type NavigationEntity = {
  __typename?: 'NavigationEntity'
  attributes?: Maybe<Navigation>
  id?: Maybe<Scalars['ID']['output']>
}

export type NavigationEntityResponse = {
  __typename?: 'NavigationEntityResponse'
  data?: Maybe<NavigationEntity>
}

export type NavigationInput = {
  articlesParentPage?: InputMaybe<Scalars['ID']['input']>
  documentsParentPage?: InputMaybe<Scalars['ID']['input']>
  faqCategoriesParentPage?: InputMaybe<Scalars['ID']['input']>
  servicesParentPage?: InputMaybe<Scalars['ID']['input']>
  workshopsParentPage?: InputMaybe<Scalars['ID']['input']>
}

export type NavigationRelationResponseCollection = {
  __typename?: 'NavigationRelationResponseCollection'
  data: Array<NavigationEntity>
}

export type OpeningTime = {
  __typename?: 'OpeningTime'
  branches?: Maybe<BranchRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  internalName: Scalars['String']['output']
  openingHours?: Maybe<Array<Maybe<ComponentItemsOpeningHoursItem>>>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type OpeningTimeBranchesArgs = {
  filters?: InputMaybe<BranchFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type OpeningTimeOpeningHoursArgs = {
  filters?: InputMaybe<ComponentItemsOpeningHoursItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type OpeningTimeEntity = {
  __typename?: 'OpeningTimeEntity'
  attributes?: Maybe<OpeningTime>
  id?: Maybe<Scalars['ID']['output']>
}

export type OpeningTimeEntityResponse = {
  __typename?: 'OpeningTimeEntityResponse'
  data?: Maybe<OpeningTimeEntity>
}

export type OpeningTimeEntityResponseCollection = {
  __typename?: 'OpeningTimeEntityResponseCollection'
  data: Array<OpeningTimeEntity>
  meta: ResponseCollectionMeta
}

export type OpeningTimeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OpeningTimeFiltersInput>>>
  branches?: InputMaybe<BranchFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  internalName?: InputMaybe<StringFilterInput>
  not?: InputMaybe<OpeningTimeFiltersInput>
  openingHours?: InputMaybe<ComponentItemsOpeningHoursItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<OpeningTimeFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type OpeningTimeInput = {
  branches?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  internalName?: InputMaybe<Scalars['String']['input']>
  openingHours?: InputMaybe<Array<InputMaybe<ComponentItemsOpeningHoursItemInput>>>
}

export type OpeningTimeRelationResponseCollection = {
  __typename?: 'OpeningTimeRelationResponseCollection'
  data: Array<OpeningTimeEntity>
}

export type Page = {
  __typename?: 'Page'
  childPages?: Maybe<PageRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  header?: Maybe<Array<Maybe<PageHeaderDynamicZone>>>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<PageRelationResponseCollection>
  parentPage?: Maybe<PageEntityResponse>
  perex?: Maybe<Scalars['String']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type PageChildPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PageEntity = {
  __typename?: 'PageEntity'
  attributes?: Maybe<Page>
  id?: Maybe<Scalars['ID']['output']>
}

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse'
  data?: Maybe<PageEntity>
}

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection'
  data: Array<PageEntity>
  meta: ResponseCollectionMeta
}

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>
  childPages?: InputMaybe<PageFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<PageFiltersInput>
  not?: InputMaybe<PageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>
  parentPage?: InputMaybe<PageFiltersInput>
  perex?: InputMaybe<StringFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PageHeaderDynamicZone =
  | ComponentHeaderSectionsFeaturedNews
  | ComponentHeaderSectionsGallery
  | ComponentHeaderSectionsIcon
  | ComponentHeaderSectionsImage
  | ComponentHeaderSectionsPickupDay
  | ComponentHeaderSectionsSideImage
  | Error

export type PageInput = {
  childPages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  header?: InputMaybe<Array<Scalars['PageHeaderDynamicZoneInput']['input']>>
  parentPage?: InputMaybe<Scalars['ID']['input']>
  perex?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  sections?: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']['input']>>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection'
  data: Array<PageEntity>
}

export type PageSectionsDynamicZone =
  | ComponentSectionsBanner
  | ComponentSectionsBranches
  | ComponentSectionsCardsList
  | ComponentSectionsColumns
  | ComponentSectionsColumnsList
  | ComponentSectionsDivider
  | ComponentSectionsFaq
  | ComponentSectionsFiles
  | ComponentSectionsImageAndText
  | ComponentSectionsImageAndTextOverlapped
  | ComponentSectionsOrderedCards
  | ComponentSectionsRichtext
  | ComponentSectionsTable
  | ComponentSectionsWorkshops
  | Error

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']['output']
  pageCount: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  start?: InputMaybe<Scalars['Int']['input']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  article?: Maybe<ArticleEntityResponse>
  articleCategories?: Maybe<ArticleCategoryEntityResponseCollection>
  articleCategory?: Maybe<ArticleCategoryEntityResponse>
  articles?: Maybe<ArticleEntityResponseCollection>
  branch?: Maybe<BranchEntityResponse>
  branches?: Maybe<BranchEntityResponseCollection>
  contact?: Maybe<ContactEntityResponse>
  contacts?: Maybe<ContactEntityResponseCollection>
  document?: Maybe<DocumentEntityResponse>
  documentCategories?: Maybe<DocumentCategoryEntityResponseCollection>
  documentCategory?: Maybe<DocumentCategoryEntityResponse>
  documents?: Maybe<DocumentEntityResponseCollection>
  faq?: Maybe<FaqEntityResponse>
  faqCategories?: Maybe<FaqCategoryEntityResponseCollection>
  faqCategory?: Maybe<FaqCategoryEntityResponse>
  faqs?: Maybe<FaqEntityResponseCollection>
  footer?: Maybe<FooterEntityResponse>
  homepage?: Maybe<HomepageEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  menu?: Maybe<MenuEntityResponse>
  navigation?: Maybe<NavigationEntityResponse>
  openingTime?: Maybe<OpeningTimeEntityResponse>
  openingTimes?: Maybe<OpeningTimeEntityResponseCollection>
  page?: Maybe<PageEntityResponse>
  pages?: Maybe<PageEntityResponseCollection>
  service?: Maybe<ServiceEntityResponse>
  serviceCategories?: Maybe<ServiceCategoryEntityResponseCollection>
  serviceCategory?: Maybe<ServiceCategoryEntityResponse>
  services?: Maybe<ServiceEntityResponseCollection>
  tag?: Maybe<TagEntityResponse>
  tags?: Maybe<TagEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
  workshop?: Maybe<WorkshopEntityResponse>
  workshops?: Maybe<WorkshopEntityResponseCollection>
}

export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryArticleCategoriesArgs = {
  filters?: InputMaybe<ArticleCategoryFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryArticleCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryBranchArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryBranchesArgs = {
  filters?: InputMaybe<BranchFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryDocumentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryDocumentCategoriesArgs = {
  filters?: InputMaybe<DocumentCategoryFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryDocumentCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryDocumentsArgs = {
  filters?: InputMaybe<DocumentFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryFaqArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryFaqCategoriesArgs = {
  filters?: InputMaybe<FaqCategoryFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryFaqCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryNavigationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryOpeningTimeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryOpeningTimesArgs = {
  filters?: InputMaybe<OpeningTimeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryServiceCategoriesArgs = {
  filters?: InputMaybe<ServiceCategoryFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryServiceCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryWorkshopArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryWorkshopsArgs = {
  filters?: InputMaybe<WorkshopFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type Service = {
  __typename?: 'Service'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  image?: Maybe<UploadFileEntityResponse>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<ServiceRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  sections?: Maybe<Array<Maybe<ServiceSectionsDynamicZone>>>
  serviceCategories?: Maybe<ServiceCategoryRelationResponseCollection>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ServiceLocalizationsArgs = {
  filters?: InputMaybe<ServiceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ServiceServiceCategoriesArgs = {
  filters?: InputMaybe<ServiceCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ServiceCategory = {
  __typename?: 'ServiceCategory'
  categoryColor: Enum_Servicecategory_Categorycolor
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<ServiceCategoryRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  services?: Maybe<ServiceRelationResponseCollection>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ServiceCategoryLocalizationsArgs = {
  filters?: InputMaybe<ServiceCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ServiceCategoryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ServiceCategoryEntity = {
  __typename?: 'ServiceCategoryEntity'
  attributes?: Maybe<ServiceCategory>
  id?: Maybe<Scalars['ID']['output']>
}

export type ServiceCategoryEntityResponse = {
  __typename?: 'ServiceCategoryEntityResponse'
  data?: Maybe<ServiceCategoryEntity>
}

export type ServiceCategoryEntityResponseCollection = {
  __typename?: 'ServiceCategoryEntityResponseCollection'
  data: Array<ServiceCategoryEntity>
  meta: ResponseCollectionMeta
}

export type ServiceCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceCategoryFiltersInput>>>
  categoryColor?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ServiceCategoryFiltersInput>
  not?: InputMaybe<ServiceCategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ServiceCategoryFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  services?: InputMaybe<ServiceFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ServiceCategoryInput = {
  categoryColor?: InputMaybe<Enum_Servicecategory_Categorycolor>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  services?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ServiceCategoryRelationResponseCollection = {
  __typename?: 'ServiceCategoryRelationResponseCollection'
  data: Array<ServiceCategoryEntity>
}

export type ServiceEntity = {
  __typename?: 'ServiceEntity'
  attributes?: Maybe<Service>
  id?: Maybe<Scalars['ID']['output']>
}

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse'
  data?: Maybe<ServiceEntity>
}

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection'
  data: Array<ServiceEntity>
  meta: ResponseCollectionMeta
}

export type ServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ServiceFiltersInput>
  not?: InputMaybe<ServiceFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  serviceCategories?: InputMaybe<ServiceCategoryFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ServiceInput = {
  image?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  sections?: InputMaybe<Array<Scalars['ServiceSectionsDynamicZoneInput']['input']>>
  serviceCategories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ServiceRelationResponseCollection = {
  __typename?: 'ServiceRelationResponseCollection'
  data: Array<ServiceEntity>
}

export type ServiceSectionsDynamicZone =
  | ComponentSectionsCardsList
  | ComponentSectionsFaq
  | ComponentSectionsFiles
  | ComponentSectionsRichtext
  | Error

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  containsi?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  eq?: InputMaybe<Scalars['String']['input']>
  eqi?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  nei?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']['input']>
  notContainsi?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type Tag = {
  __typename?: 'Tag'
  articles?: Maybe<ArticleRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<TagRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type TagArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type TagLocalizationsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type TagEntity = {
  __typename?: 'TagEntity'
  attributes?: Maybe<Tag>
  id?: Maybe<Scalars['ID']['output']>
}

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse'
  data?: Maybe<TagEntity>
}

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection'
  data: Array<TagEntity>
  meta: ResponseCollectionMeta
}

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>
  articles?: InputMaybe<ArticleFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<TagFiltersInput>
  not?: InputMaybe<TagFiltersInput>
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type TagInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection'
  data: Array<TagEntity>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']['output']>
  caption?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  ext?: Maybe<Scalars['String']['output']>
  formats?: Maybe<Scalars['JSON']['output']>
  hash: Scalars['String']['output']
  height?: Maybe<Scalars['Int']['output']>
  mime: Scalars['String']['output']
  name: Scalars['String']['output']
  previewUrl?: Maybe<Scalars['String']['output']>
  provider: Scalars['String']['output']
  provider_metadata?: Maybe<Scalars['JSON']['output']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  url: Scalars['String']['output']
  width?: Maybe<Scalars['Int']['output']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  ext?: InputMaybe<Scalars['String']['input']>
  folder?: InputMaybe<Scalars['ID']['input']>
  folderPath?: InputMaybe<Scalars['String']['input']>
  formats?: InputMaybe<Scalars['JSON']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  mime?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  previewUrl?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  __typename?: 'UploadFolder'
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']['output']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']['output']
  pathId: Scalars['Int']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity'
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse'
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection'
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Scalars['ID']['input']>
  path?: InputMaybe<Scalars['String']['input']>
  pathId?: InputMaybe<Scalars['Int']['input']>
}

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection'
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input']
  password: Scalars['String']['input']
  provider?: Scalars['String']['input']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']['output']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']['output']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  type?: Maybe<Scalars['String']['output']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  type?: InputMaybe<Scalars['String']['input']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email: Scalars['String']['output']
  picture?: Maybe<UploadFileEntityResponse>
  provider?: Maybe<Scalars['String']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username: Scalars['String']['output']
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>
  confirmationToken?: InputMaybe<Scalars['String']['input']>
  confirmed?: InputMaybe<Scalars['Boolean']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['ID']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

export type Workshop = {
  __typename?: 'Workshop'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  sections?: Maybe<Array<Maybe<WorkshopSectionsDynamicZone>>>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type WorkshopEntity = {
  __typename?: 'WorkshopEntity'
  attributes?: Maybe<Workshop>
  id?: Maybe<Scalars['ID']['output']>
}

export type WorkshopEntityResponse = {
  __typename?: 'WorkshopEntityResponse'
  data?: Maybe<WorkshopEntity>
}

export type WorkshopEntityResponseCollection = {
  __typename?: 'WorkshopEntityResponseCollection'
  data: Array<WorkshopEntity>
  meta: ResponseCollectionMeta
}

export type WorkshopFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WorkshopFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<WorkshopFiltersInput>
  or?: InputMaybe<Array<InputMaybe<WorkshopFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type WorkshopInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  sections?: InputMaybe<Array<Scalars['WorkshopSectionsDynamicZoneInput']['input']>>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type WorkshopRelationResponseCollection = {
  __typename?: 'WorkshopRelationResponseCollection'
  data: Array<WorkshopEntity>
}

export type WorkshopSectionsDynamicZone =
  | ComponentSectionsFaq
  | ComponentSectionsFiles
  | ComponentSectionsRichtext
  | Error

export type TagEntityFragment = {
  __typename?: 'TagEntity'
  id?: string | null
  attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
}

export type TagsQueryVariables = Exact<{ [key: string]: never }>

export type TagsQuery = {
  __typename?: 'Query'
  tags?: {
    __typename?: 'TagEntityResponseCollection'
    data: Array<{
      __typename?: 'TagEntity'
      id?: string | null
      attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
    }>
  } | null
}

export type TagBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type TagBySlugQuery = {
  __typename?: 'Query'
  tags?: {
    __typename?: 'TagEntityResponseCollection'
    data: Array<{
      __typename?: 'TagEntity'
      id?: string | null
      attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
    }>
  } | null
}

export type ArticleCategoryEntityFragment = {
  __typename?: 'ArticleCategoryEntity'
  id?: string | null
  attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
}

export type ArticleCategoriesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type ArticleCategoriesQuery = {
  __typename?: 'Query'
  articleCategories?: {
    __typename?: 'ArticleCategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'ArticleCategoryEntity'
      id?: string | null
      attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
    }>
  } | null
}

export type ArticleCategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
  locale: Scalars['I18NLocaleCode']['input']
}>

export type ArticleCategoryBySlugQuery = {
  __typename?: 'Query'
  articleCategories?: {
    __typename?: 'ArticleCategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'ArticleCategoryEntity'
      id?: string | null
      attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
    }>
  } | null
}

export type DocumentCategoryEntityFragment = {
  __typename?: 'DocumentCategoryEntity'
  id?: string | null
  attributes?: { __typename?: 'DocumentCategory'; title: string; slug: string } | null
}

export type DocumentCategoriesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type DocumentCategoriesQuery = {
  __typename?: 'Query'
  documentCategories?: {
    __typename?: 'DocumentCategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'DocumentCategoryEntity'
      id?: string | null
      attributes?: { __typename?: 'DocumentCategory'; title: string; slug: string } | null
    }>
  } | null
}

export type DocumentCategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
  locale: Scalars['I18NLocaleCode']['input']
}>

export type DocumentCategoryBySlugQuery = {
  __typename?: 'Query'
  documentCategories?: {
    __typename?: 'DocumentCategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'DocumentCategoryEntity'
      id?: string | null
      attributes?: { __typename?: 'DocumentCategory'; title: string; slug: string } | null
    }>
  } | null
}

export type FaqCategorySlugEntityFragment = {
  __typename: 'FaqCategoryEntity'
  id?: string | null
  attributes?: { __typename?: 'FaqCategory'; slug: string; title: string } | null
}

export type FaqCategoryEntityFragment = {
  __typename: 'FaqCategoryEntity'
  id?: string | null
  attributes?: {
    __typename?: 'FaqCategory'
    slug: string
    title: string
    faqs?: {
      __typename?: 'FaqRelationResponseCollection'
      data: Array<{
        __typename?: 'FaqEntity'
        id?: string | null
        attributes?: { __typename?: 'Faq'; title: string; content: string } | null
      }>
    } | null
    banner?: {
      __typename?: 'ComponentSectionsBanner'
      title: string
      text?: string | null
      variant: Enum_Componentsectionsbanner_Variant
      image: {
        __typename?: 'UploadFileEntityResponse'
        data?: {
          __typename?: 'UploadFileEntity'
          id?: string | null
          attributes?: {
            __typename?: 'UploadFile'
            url: string
            width?: number | null
            height?: number | null
            caption?: string | null
            alternativeText?: string | null
            name: string
          } | null
        } | null
      }
      primaryButtonLink: {
        __typename?: 'ComponentItemsLink'
        label?: string | null
        url?: string | null
        page?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        article?: {
          __typename?: 'ArticleEntityResponse'
          data?: {
            __typename: 'ArticleEntity'
            id?: string | null
            attributes?: { __typename?: 'Article'; slug: string; title: string } | null
          } | null
        } | null
        branch?: {
          __typename?: 'BranchEntityResponse'
          data?: {
            __typename: 'BranchEntity'
            id?: string | null
            attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
          } | null
        } | null
        document?: {
          __typename?: 'DocumentEntityResponse'
          data?: {
            __typename: 'DocumentEntity'
            id?: string | null
            attributes?: { __typename?: 'Document'; slug: string; title: string } | null
          } | null
        } | null
        service?: {
          __typename?: 'ServiceEntityResponse'
          data?: {
            __typename: 'ServiceEntity'
            id?: string | null
            attributes?: { __typename?: 'Service'; title: string; slug: string } | null
          } | null
        } | null
        workshop?: {
          __typename?: 'WorkshopEntityResponse'
          data?: {
            __typename: 'WorkshopEntity'
            id?: string | null
            attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
          } | null
        } | null
      }
      secondaryButtonLink?: {
        __typename?: 'ComponentItemsLink'
        label?: string | null
        url?: string | null
        page?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        article?: {
          __typename?: 'ArticleEntityResponse'
          data?: {
            __typename: 'ArticleEntity'
            id?: string | null
            attributes?: { __typename?: 'Article'; slug: string; title: string } | null
          } | null
        } | null
        branch?: {
          __typename?: 'BranchEntityResponse'
          data?: {
            __typename: 'BranchEntity'
            id?: string | null
            attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
          } | null
        } | null
        document?: {
          __typename?: 'DocumentEntityResponse'
          data?: {
            __typename: 'DocumentEntity'
            id?: string | null
            attributes?: { __typename?: 'Document'; slug: string; title: string } | null
          } | null
        } | null
        service?: {
          __typename?: 'ServiceEntityResponse'
          data?: {
            __typename: 'ServiceEntity'
            id?: string | null
            attributes?: { __typename?: 'Service'; title: string; slug: string } | null
          } | null
        } | null
        workshop?: {
          __typename?: 'WorkshopEntityResponse'
          data?: {
            __typename: 'WorkshopEntity'
            id?: string | null
            attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type FaqCategoriesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type FaqCategoriesQuery = {
  __typename?: 'Query'
  faqCategories?: {
    __typename?: 'FaqCategoryEntityResponseCollection'
    data: Array<{
      __typename: 'FaqCategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'FaqCategory'
        slug: string
        title: string
        faqs?: {
          __typename?: 'FaqRelationResponseCollection'
          data: Array<{
            __typename?: 'FaqEntity'
            id?: string | null
            attributes?: { __typename?: 'Faq'; title: string; content: string } | null
          }>
        } | null
        banner?: {
          __typename?: 'ComponentSectionsBanner'
          title: string
          text?: string | null
          variant: Enum_Componentsectionsbanner_Variant
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                width?: number | null
                height?: number | null
                caption?: string | null
                alternativeText?: string | null
                name: string
              } | null
            } | null
          }
          primaryButtonLink: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          }
          secondaryButtonLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type FaqCategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
  locale: Scalars['I18NLocaleCode']['input']
}>

export type FaqCategoryBySlugQuery = {
  __typename?: 'Query'
  faqCategories?: {
    __typename?: 'FaqCategoryEntityResponseCollection'
    data: Array<{
      __typename: 'FaqCategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'FaqCategory'
        slug: string
        title: string
        faqs?: {
          __typename?: 'FaqRelationResponseCollection'
          data: Array<{
            __typename?: 'FaqEntity'
            id?: string | null
            attributes?: { __typename?: 'Faq'; title: string; content: string } | null
          }>
        } | null
        banner?: {
          __typename?: 'ComponentSectionsBanner'
          title: string
          text?: string | null
          variant: Enum_Componentsectionsbanner_Variant
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                width?: number | null
                height?: number | null
                caption?: string | null
                alternativeText?: string | null
                name: string
              } | null
            } | null
          }
          primaryButtonLink: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          }
          secondaryButtonLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type ServiceCategoryEntityFragment = {
  __typename?: 'ServiceCategoryEntity'
  id?: string | null
  attributes?: {
    __typename?: 'ServiceCategory'
    title: string
    slug: string
    categoryColor: Enum_Servicecategory_Categorycolor
  } | null
}

export type ServiceCategoriesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type ServiceCategoriesQuery = {
  __typename?: 'Query'
  serviceCategories?: {
    __typename?: 'ServiceCategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'ServiceCategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'ServiceCategory'
        title: string
        slug: string
        categoryColor: Enum_Servicecategory_Categorycolor
      } | null
    }>
  } | null
}

export type ServiceCategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
  locale: Scalars['I18NLocaleCode']['input']
}>

export type ServiceCategoryBySlugQuery = {
  __typename?: 'Query'
  serviceCategories?: {
    __typename?: 'ServiceCategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'ServiceCategoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'ServiceCategory'
        title: string
        slug: string
        categoryColor: Enum_Servicecategory_Categorycolor
      } | null
    }>
  } | null
}

export type LinkFragment = {
  __typename?: 'ComponentItemsLink'
  label?: string | null
  url?: string | null
  page?: {
    __typename?: 'PageEntityResponse'
    data?: {
      __typename: 'PageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Page'
        title: string
        slug: string
        parentPage?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename?: 'PageEntity'
            attributes?: {
              __typename?: 'Page'
              slug: string
              title: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
  article?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename: 'ArticleEntity'
      id?: string | null
      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
    } | null
  } | null
  branch?: {
    __typename?: 'BranchEntityResponse'
    data?: {
      __typename: 'BranchEntity'
      id?: string | null
      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
    } | null
  } | null
  document?: {
    __typename?: 'DocumentEntityResponse'
    data?: {
      __typename: 'DocumentEntity'
      id?: string | null
      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
    } | null
  } | null
  service?: {
    __typename?: 'ServiceEntityResponse'
    data?: {
      __typename: 'ServiceEntity'
      id?: string | null
      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
    } | null
  } | null
  workshop?: {
    __typename?: 'WorkshopEntityResponse'
    data?: {
      __typename: 'WorkshopEntity'
      id?: string | null
      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
    } | null
  } | null
}

export type AnchorFragment = {
  __typename?: 'ComponentItemsAnchor'
  label: string
  targetId: string
}

export type UploadImageSrcEntityFragment = {
  __typename?: 'UploadFileEntity'
  id?: string | null
  attributes?: { __typename?: 'UploadFile'; url: string } | null
}

export type UploadImageEntityFragment = {
  __typename?: 'UploadFileEntity'
  id?: string | null
  attributes?: {
    __typename?: 'UploadFile'
    url: string
    width?: number | null
    height?: number | null
    caption?: string | null
    alternativeText?: string | null
    name: string
  } | null
}

export type UploadFileEntityFragment = {
  __typename?: 'UploadFileEntity'
  id?: string | null
  attributes?: {
    __typename?: 'UploadFile'
    url: string
    name: string
    ext?: string | null
    size: number
    createdAt?: any | null
    updatedAt?: any | null
  } | null
}

export type FileItemFragment = {
  __typename?: 'ComponentItemsFileItem'
  title?: string | null
  media: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        name: string
        ext?: string | null
        size: number
        createdAt?: any | null
        updatedAt?: any | null
      } | null
    } | null
  }
}

export type NavigationEntityFragment = {
  __typename?: 'NavigationEntity'
  attributes?: {
    __typename?: 'Navigation'
    articlesParentPage?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    documentsParentPage?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    faqCategoriesParentPage?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    servicesParentPage?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    workshopsParentPage?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type GeneralQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type GeneralQuery = {
  __typename?: 'Query'
  navigation?: {
    __typename?: 'NavigationEntityResponse'
    data?: {
      __typename?: 'NavigationEntity'
      attributes?: {
        __typename?: 'Navigation'
        articlesParentPage?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        documentsParentPage?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        faqCategoriesParentPage?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        servicesParentPage?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        workshopsParentPage?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
  footer?: {
    __typename?: 'FooterEntityResponse'
    data?: {
      __typename?: 'FooterEntity'
      attributes?: {
        __typename?: 'Footer'
        text?: string | null
        facebookUrl?: string | null
        instagramUrl?: string | null
        columns?: Array<{
          __typename?: 'ComponentItemsFooterColumn'
          title: string
          links?: Array<{
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null> | null
        } | null> | null
        bottomLinks?: Array<{
          __typename?: 'ComponentItemsLink'
          label?: string | null
          url?: string | null
          page?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename: 'PageEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Page'
                title: string
                slug: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          article?: {
            __typename?: 'ArticleEntityResponse'
            data?: {
              __typename: 'ArticleEntity'
              id?: string | null
              attributes?: { __typename?: 'Article'; slug: string; title: string } | null
            } | null
          } | null
          branch?: {
            __typename?: 'BranchEntityResponse'
            data?: {
              __typename: 'BranchEntity'
              id?: string | null
              attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
            } | null
          } | null
          document?: {
            __typename?: 'DocumentEntityResponse'
            data?: {
              __typename: 'DocumentEntity'
              id?: string | null
              attributes?: { __typename?: 'Document'; slug: string; title: string } | null
            } | null
          } | null
          service?: {
            __typename?: 'ServiceEntityResponse'
            data?: {
              __typename: 'ServiceEntity'
              id?: string | null
              attributes?: { __typename?: 'Service'; title: string; slug: string } | null
            } | null
          } | null
          workshop?: {
            __typename?: 'WorkshopEntityResponse'
            data?: {
              __typename: 'WorkshopEntity'
              id?: string | null
              attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
            } | null
          } | null
        } | null> | null
      } | null
    } | null
  } | null
  menu?: {
    __typename?: 'MenuEntityResponse'
    data?: {
      __typename?: 'MenuEntity'
      attributes?: {
        __typename?: 'Menu'
        menuItems?: Array<{
          __typename?: 'ComponentMenuMenuItem'
          id: string
          label: string
          sections?: Array<{
            __typename?: 'ComponentMenuMenuSection'
            id: string
            label: string
            colSpan: number
            multicolumnBehaviour?: Enum_Componentmenumenusection_Multicolumnbehaviour | null
            hasDivider: boolean
            specialSectionType?: Enum_Componentmenumenusection_Specialsectiontype | null
            links?: Array<{
              __typename?: 'ComponentMenuMenuLink'
              id: string
              label?: string | null
              url?: string | null
              page?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename: 'PageEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Page'
                    title: string
                    slug: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              branch?: {
                __typename?: 'BranchEntityResponse'
                data?: {
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Branch'
                    address?: string | null
                    title: string
                    slug: string
                  } | null
                } | null
              } | null
              workshop?: {
                __typename?: 'WorkshopEntityResponse'
                data?: {
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                } | null
              } | null
            } | null> | null
          } | null> | null
          seeAllLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        } | null> | null
      } | null
    } | null
  } | null
}

export type ImageHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsImage'
  media: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
}

export type SideImageHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsSideImage'
  media: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
}

export type GalleryHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsGallery'
  medias: {
    __typename?: 'UploadFileRelationResponseCollection'
    data: Array<{
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    }>
  }
}

export type BranchMapHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsBranchMap'
  branches?: {
    __typename?: 'BranchRelationResponseCollection'
    data: Array<{ __typename?: 'BranchEntity'; id?: string | null }>
  } | null
}

export type FeaturedNewsHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsFeaturedNews'
  articlesTitle: string
  firstArticle?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        perex?: string | null
        addedAt: any
        slug: string
        title: string
        coverMedia?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        articleCategory?: {
          __typename?: 'ArticleCategoryEntityResponse'
          data?: {
            __typename?: 'ArticleCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
          } | null
        } | null
        tags?: {
          __typename?: 'TagRelationResponseCollection'
          data: Array<{
            __typename?: 'TagEntity'
            id?: string | null
            attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
          }>
        } | null
      } | null
    } | null
  } | null
  secondArticle?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        perex?: string | null
        addedAt: any
        slug: string
        title: string
        coverMedia?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        articleCategory?: {
          __typename?: 'ArticleCategoryEntityResponse'
          data?: {
            __typename?: 'ArticleCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
          } | null
        } | null
        tags?: {
          __typename?: 'TagRelationResponseCollection'
          data: Array<{
            __typename?: 'TagEntity'
            id?: string | null
            attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type IconHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsIcon'
  iconName: string
}

export type PickupDayHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsPickupDay'
  carouselTitle: string
  anchors?: Array<{
    __typename?: 'ComponentItemsAnchor'
    label: string
    targetId: string
  } | null> | null
  showMoreLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

type HeaderSections_ComponentHeaderSectionsFeaturedNews_Fragment = {
  __typename: 'ComponentHeaderSectionsFeaturedNews'
  articlesTitle: string
  firstArticle?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        perex?: string | null
        addedAt: any
        slug: string
        title: string
        coverMedia?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        articleCategory?: {
          __typename?: 'ArticleCategoryEntityResponse'
          data?: {
            __typename?: 'ArticleCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
          } | null
        } | null
        tags?: {
          __typename?: 'TagRelationResponseCollection'
          data: Array<{
            __typename?: 'TagEntity'
            id?: string | null
            attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
          }>
        } | null
      } | null
    } | null
  } | null
  secondArticle?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        perex?: string | null
        addedAt: any
        slug: string
        title: string
        coverMedia?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        articleCategory?: {
          __typename?: 'ArticleCategoryEntityResponse'
          data?: {
            __typename?: 'ArticleCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
          } | null
        } | null
        tags?: {
          __typename?: 'TagRelationResponseCollection'
          data: Array<{
            __typename?: 'TagEntity'
            id?: string | null
            attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

type HeaderSections_ComponentHeaderSectionsGallery_Fragment = {
  __typename: 'ComponentHeaderSectionsGallery'
  medias: {
    __typename?: 'UploadFileRelationResponseCollection'
    data: Array<{
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    }>
  }
}

type HeaderSections_ComponentHeaderSectionsIcon_Fragment = {
  __typename: 'ComponentHeaderSectionsIcon'
  iconName: string
}

type HeaderSections_ComponentHeaderSectionsImage_Fragment = {
  __typename: 'ComponentHeaderSectionsImage'
  media: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
}

type HeaderSections_ComponentHeaderSectionsPickupDay_Fragment = {
  __typename: 'ComponentHeaderSectionsPickupDay'
  carouselTitle: string
  anchors?: Array<{
    __typename?: 'ComponentItemsAnchor'
    label: string
    targetId: string
  } | null> | null
  showMoreLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

type HeaderSections_ComponentHeaderSectionsSideImage_Fragment = {
  __typename: 'ComponentHeaderSectionsSideImage'
  media: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
}

type HeaderSections_Error_Fragment = { __typename: 'Error' }

export type HeaderSectionsFragment =
  | HeaderSections_ComponentHeaderSectionsFeaturedNews_Fragment
  | HeaderSections_ComponentHeaderSectionsGallery_Fragment
  | HeaderSections_ComponentHeaderSectionsIcon_Fragment
  | HeaderSections_ComponentHeaderSectionsImage_Fragment
  | HeaderSections_ComponentHeaderSectionsPickupDay_Fragment
  | HeaderSections_ComponentHeaderSectionsSideImage_Fragment
  | HeaderSections_Error_Fragment

export type RichtextSectionFragment = {
  __typename?: 'ComponentSectionsRichtext'
  content?: string | null
  backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
}

export type OrderedCardsSectionFragment = {
  __typename?: 'ComponentSectionsOrderedCards'
  title: string
  variantOrderedCards: Enum_Componentsectionsorderedcards_Variant
  cards: Array<{
    __typename?: 'ComponentItemsOrderedCardsItem'
    title: string
    text: string
    iconName?: string | null
  } | null>
}

export type ImageAndTextSectionFragment = {
  __typename?: 'ComponentSectionsImageAndText'
  title: string
  text?: string | null
  imagePositionImageAndText: Enum_Componentsectionsimageandtext_Imageposition
  backgroundColorImageAndText: Enum_Componentsectionsimageandtext_Backgroundcolor
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
  primaryButton?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
  secondaryButton?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type ColumnsSectionFragment = {
  __typename?: 'ComponentSectionsColumns'
  title: string
  text?: string | null
  backgroundColorColumns: Enum_Componentsectionscolumns_Backgroundcolor
  items: Array<{
    __typename?: 'ComponentItemsColumnsItem'
    text?: string | null
    itemTitle?: string | null
    image?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    } | null
  } | null>
}

export type ImageAndTextOverlappedSectionFragment = {
  __typename?: 'ComponentSectionsImageAndTextOverlapped'
  title: string
  text?: string | null
  imagePositionImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Imageposition
  backgroundColorImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
  link?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type BranchesSectionFragment = {
  __typename?: 'ComponentSectionsBranches'
  title: string
  text?: string | null
  showAll: boolean
  branches?: {
    __typename?: 'BranchRelationResponseCollection'
    data: Array<{
      __typename: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        address?: string | null
        title: string
        slug: string
      } | null
    }>
  } | null
}

export type WorkshopsSectionFragment = {
  __typename?: 'ComponentSectionsWorkshops'
  title: string
  text?: string | null
  showAll: boolean
  workshops?: {
    __typename?: 'WorkshopRelationResponseCollection'
    data: Array<{
      __typename: 'WorkshopEntity'
      id?: string | null
      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
    }>
  } | null
}

export type ColumnsListSectionFragment = {
  __typename?: 'ComponentSectionsColumnsList'
  title: string
  backgroundColorColumnList?: Enum_Componentsectionscolumnslist_Backgroundcolor | null
  leftColumn?: Array<{
    __typename?: 'ComponentItemsColumnsListItem'
    content: string
    icon?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    } | null
  } | null> | null
  rightColumn?: Array<{
    __typename?: 'ComponentItemsColumnsListItem'
    content: string
    icon?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    } | null
  } | null> | null
}

export type TableSectionFragment = {
  __typename?: 'ComponentSectionsTable'
  title: string
  text?: string | null
  anchorId?: string | null
}

export type FaqSectionFragment = {
  __typename?: 'ComponentSectionsFaq'
  title: string
  backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
  showMoreLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
  faqs?: {
    __typename?: 'FaqRelationResponseCollection'
    data: Array<{
      __typename?: 'FaqEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Faq'
        title: string
        content: string
        faqCategory?: {
          __typename?: 'FaqCategoryEntityResponse'
          data?: {
            __typename: 'FaqCategoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'FaqCategory'
              slug: string
              title: string
              faqs?: {
                __typename?: 'FaqRelationResponseCollection'
                data: Array<{
                  __typename?: 'FaqEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Faq'; title: string; content: string } | null
                }>
              } | null
              banner?: {
                __typename?: 'ComponentSectionsBanner'
                title: string
                text?: string | null
                variant: Enum_Componentsectionsbanner_Variant
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                }
                primaryButtonLink: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                }
                secondaryButtonLink?: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type FilesSectionFragment = {
  __typename?: 'ComponentSectionsFiles'
  title: string
  files: Array<{
    __typename?: 'ComponentItemsFileItem'
    title?: string | null
    media: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          name: string
          ext?: string | null
          size: number
          createdAt?: any | null
          updatedAt?: any | null
        } | null
      } | null
    }
  } | null>
}

export type BannerSectionFragment = {
  __typename?: 'ComponentSectionsBanner'
  title: string
  text?: string | null
  variant: Enum_Componentsectionsbanner_Variant
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
  primaryButtonLink: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  }
  secondaryButtonLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type DividerSectionFragment = {
  __typename?: 'ComponentSectionsDivider'
  backgroundColorDivider: Enum_Componentsectionsdivider_Backgroundcolor
}

export type CardsListSectionFragment = {
  __typename?: 'ComponentSectionsCardsList'
  title: string
  text?: string | null
  cardsCardsList?: Array<{
    __typename?: 'ComponentItemsCardsListItem'
    title: string
    link: {
      __typename?: 'ComponentItemsLink'
      label?: string | null
      url?: string | null
      page?: {
        __typename?: 'PageEntityResponse'
        data?: {
          __typename: 'PageEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Page'
            title: string
            slug: string
            parentPage?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename?: 'PageEntity'
                attributes?: {
                  __typename?: 'Page'
                  slug: string
                  title: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
      article?: {
        __typename?: 'ArticleEntityResponse'
        data?: {
          __typename: 'ArticleEntity'
          id?: string | null
          attributes?: { __typename?: 'Article'; slug: string; title: string } | null
        } | null
      } | null
      branch?: {
        __typename?: 'BranchEntityResponse'
        data?: {
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
        } | null
      } | null
      document?: {
        __typename?: 'DocumentEntityResponse'
        data?: {
          __typename: 'DocumentEntity'
          id?: string | null
          attributes?: { __typename?: 'Document'; slug: string; title: string } | null
        } | null
      } | null
      service?: {
        __typename?: 'ServiceEntityResponse'
        data?: {
          __typename: 'ServiceEntity'
          id?: string | null
          attributes?: { __typename?: 'Service'; title: string; slug: string } | null
        } | null
      } | null
      workshop?: {
        __typename?: 'WorkshopEntityResponse'
        data?: {
          __typename: 'WorkshopEntity'
          id?: string | null
          attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
        } | null
      } | null
    }
  } | null> | null
}

type PageSections_ComponentSectionsBanner_Fragment = {
  __typename: 'ComponentSectionsBanner'
  title: string
  text?: string | null
  variant: Enum_Componentsectionsbanner_Variant
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
  primaryButtonLink: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  }
  secondaryButtonLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

type PageSections_ComponentSectionsBranches_Fragment = {
  __typename: 'ComponentSectionsBranches'
  title: string
  text?: string | null
  showAll: boolean
  branches?: {
    __typename?: 'BranchRelationResponseCollection'
    data: Array<{
      __typename: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        address?: string | null
        title: string
        slug: string
      } | null
    }>
  } | null
}

type PageSections_ComponentSectionsCardsList_Fragment = {
  __typename: 'ComponentSectionsCardsList'
  title: string
  text?: string | null
  cardsCardsList?: Array<{
    __typename?: 'ComponentItemsCardsListItem'
    title: string
    link: {
      __typename?: 'ComponentItemsLink'
      label?: string | null
      url?: string | null
      page?: {
        __typename?: 'PageEntityResponse'
        data?: {
          __typename: 'PageEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Page'
            title: string
            slug: string
            parentPage?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename?: 'PageEntity'
                attributes?: {
                  __typename?: 'Page'
                  slug: string
                  title: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
      article?: {
        __typename?: 'ArticleEntityResponse'
        data?: {
          __typename: 'ArticleEntity'
          id?: string | null
          attributes?: { __typename?: 'Article'; slug: string; title: string } | null
        } | null
      } | null
      branch?: {
        __typename?: 'BranchEntityResponse'
        data?: {
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
        } | null
      } | null
      document?: {
        __typename?: 'DocumentEntityResponse'
        data?: {
          __typename: 'DocumentEntity'
          id?: string | null
          attributes?: { __typename?: 'Document'; slug: string; title: string } | null
        } | null
      } | null
      service?: {
        __typename?: 'ServiceEntityResponse'
        data?: {
          __typename: 'ServiceEntity'
          id?: string | null
          attributes?: { __typename?: 'Service'; title: string; slug: string } | null
        } | null
      } | null
      workshop?: {
        __typename?: 'WorkshopEntityResponse'
        data?: {
          __typename: 'WorkshopEntity'
          id?: string | null
          attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
        } | null
      } | null
    }
  } | null> | null
}

type PageSections_ComponentSectionsColumns_Fragment = {
  __typename: 'ComponentSectionsColumns'
  title: string
  text?: string | null
  backgroundColorColumns: Enum_Componentsectionscolumns_Backgroundcolor
  items: Array<{
    __typename?: 'ComponentItemsColumnsItem'
    text?: string | null
    itemTitle?: string | null
    image?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    } | null
  } | null>
}

type PageSections_ComponentSectionsColumnsList_Fragment = {
  __typename: 'ComponentSectionsColumnsList'
  title: string
  backgroundColorColumnList?: Enum_Componentsectionscolumnslist_Backgroundcolor | null
  leftColumn?: Array<{
    __typename?: 'ComponentItemsColumnsListItem'
    content: string
    icon?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    } | null
  } | null> | null
  rightColumn?: Array<{
    __typename?: 'ComponentItemsColumnsListItem'
    content: string
    icon?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    } | null
  } | null> | null
}

type PageSections_ComponentSectionsDivider_Fragment = {
  __typename: 'ComponentSectionsDivider'
  backgroundColorDivider: Enum_Componentsectionsdivider_Backgroundcolor
}

type PageSections_ComponentSectionsFaq_Fragment = {
  __typename: 'ComponentSectionsFaq'
  title: string
  backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
  showMoreLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
  faqs?: {
    __typename?: 'FaqRelationResponseCollection'
    data: Array<{
      __typename?: 'FaqEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Faq'
        title: string
        content: string
        faqCategory?: {
          __typename?: 'FaqCategoryEntityResponse'
          data?: {
            __typename: 'FaqCategoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'FaqCategory'
              slug: string
              title: string
              faqs?: {
                __typename?: 'FaqRelationResponseCollection'
                data: Array<{
                  __typename?: 'FaqEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Faq'; title: string; content: string } | null
                }>
              } | null
              banner?: {
                __typename?: 'ComponentSectionsBanner'
                title: string
                text?: string | null
                variant: Enum_Componentsectionsbanner_Variant
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                }
                primaryButtonLink: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                }
                secondaryButtonLink?: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

type PageSections_ComponentSectionsFiles_Fragment = {
  __typename: 'ComponentSectionsFiles'
  title: string
  files: Array<{
    __typename?: 'ComponentItemsFileItem'
    title?: string | null
    media: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          name: string
          ext?: string | null
          size: number
          createdAt?: any | null
          updatedAt?: any | null
        } | null
      } | null
    }
  } | null>
}

type PageSections_ComponentSectionsImageAndText_Fragment = {
  __typename: 'ComponentSectionsImageAndText'
  title: string
  text?: string | null
  imagePositionImageAndText: Enum_Componentsectionsimageandtext_Imageposition
  backgroundColorImageAndText: Enum_Componentsectionsimageandtext_Backgroundcolor
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
  primaryButton?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
  secondaryButton?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

type PageSections_ComponentSectionsImageAndTextOverlapped_Fragment = {
  __typename: 'ComponentSectionsImageAndTextOverlapped'
  title: string
  text?: string | null
  imagePositionImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Imageposition
  backgroundColorImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
  link?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

type PageSections_ComponentSectionsOrderedCards_Fragment = {
  __typename: 'ComponentSectionsOrderedCards'
  title: string
  variantOrderedCards: Enum_Componentsectionsorderedcards_Variant
  cards: Array<{
    __typename?: 'ComponentItemsOrderedCardsItem'
    title: string
    text: string
    iconName?: string | null
  } | null>
}

type PageSections_ComponentSectionsRichtext_Fragment = {
  __typename: 'ComponentSectionsRichtext'
  content?: string | null
  backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
}

type PageSections_ComponentSectionsTable_Fragment = {
  __typename: 'ComponentSectionsTable'
  title: string
  text?: string | null
  anchorId?: string | null
}

type PageSections_ComponentSectionsWorkshops_Fragment = {
  __typename: 'ComponentSectionsWorkshops'
  title: string
  text?: string | null
  showAll: boolean
  workshops?: {
    __typename?: 'WorkshopRelationResponseCollection'
    data: Array<{
      __typename: 'WorkshopEntity'
      id?: string | null
      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
    }>
  } | null
}

type PageSections_Error_Fragment = { __typename: 'Error' }

export type PageSectionsFragment =
  | PageSections_ComponentSectionsBanner_Fragment
  | PageSections_ComponentSectionsBranches_Fragment
  | PageSections_ComponentSectionsCardsList_Fragment
  | PageSections_ComponentSectionsColumns_Fragment
  | PageSections_ComponentSectionsColumnsList_Fragment
  | PageSections_ComponentSectionsDivider_Fragment
  | PageSections_ComponentSectionsFaq_Fragment
  | PageSections_ComponentSectionsFiles_Fragment
  | PageSections_ComponentSectionsImageAndText_Fragment
  | PageSections_ComponentSectionsImageAndTextOverlapped_Fragment
  | PageSections_ComponentSectionsOrderedCards_Fragment
  | PageSections_ComponentSectionsRichtext_Fragment
  | PageSections_ComponentSectionsTable_Fragment
  | PageSections_ComponentSectionsWorkshops_Fragment
  | PageSections_Error_Fragment

export type ArticleSlugEntityFragment = {
  __typename: 'ArticleEntity'
  id?: string | null
  attributes?: { __typename?: 'Article'; slug: string; title: string } | null
}

export type ArticleCardEntityFragment = {
  __typename: 'ArticleEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Article'
    perex?: string | null
    addedAt: any
    slug: string
    title: string
    coverMedia?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    } | null
    articleCategory?: {
      __typename?: 'ArticleCategoryEntityResponse'
      data?: {
        __typename?: 'ArticleCategoryEntity'
        id?: string | null
        attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
      } | null
    } | null
    tags?: {
      __typename?: 'TagRelationResponseCollection'
      data: Array<{
        __typename?: 'TagEntity'
        id?: string | null
        attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
      }>
    } | null
  } | null
}

export type ArticleEntityFragment = {
  __typename: 'ArticleEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Article'
    content?: string | null
    perex?: string | null
    addedAt: any
    slug: string
    title: string
    coverMedia?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    } | null
    articleCategory?: {
      __typename?: 'ArticleCategoryEntityResponse'
      data?: {
        __typename?: 'ArticleCategoryEntity'
        id?: string | null
        attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
      } | null
    } | null
    tags?: {
      __typename?: 'TagRelationResponseCollection'
      data: Array<{
        __typename?: 'TagEntity'
        id?: string | null
        attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
      }>
    } | null
  } | null
}

export type ArticlesQueryVariables = Exact<{ [key: string]: never }>

export type ArticlesQuery = {
  __typename?: 'Query'
  articles?: {
    __typename?: 'ArticleEntityResponseCollection'
    data: Array<{
      __typename: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        content?: string | null
        perex?: string | null
        addedAt: any
        slug: string
        title: string
        coverMedia?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        articleCategory?: {
          __typename?: 'ArticleCategoryEntityResponse'
          data?: {
            __typename?: 'ArticleCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
          } | null
        } | null
        tags?: {
          __typename?: 'TagRelationResponseCollection'
          data: Array<{
            __typename?: 'TagEntity'
            id?: string | null
            attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type ArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
  locale: Scalars['I18NLocaleCode']['input']
}>

export type ArticleBySlugQuery = {
  __typename?: 'Query'
  articles?: {
    __typename?: 'ArticleEntityResponseCollection'
    data: Array<{
      __typename: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        content?: string | null
        perex?: string | null
        addedAt: any
        slug: string
        title: string
        coverMedia?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        articleCategory?: {
          __typename?: 'ArticleCategoryEntityResponse'
          data?: {
            __typename?: 'ArticleCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
          } | null
        } | null
        tags?: {
          __typename?: 'TagRelationResponseCollection'
          data: Array<{
            __typename?: 'TagEntity'
            id?: string | null
            attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type LatestArticlesQueryVariables = Exact<{
  limit: Scalars['Int']['input']
  locale: Scalars['I18NLocaleCode']['input']
}>

export type LatestArticlesQuery = {
  __typename?: 'Query'
  articles?: {
    __typename?: 'ArticleEntityResponseCollection'
    data: Array<{
      __typename: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        content?: string | null
        perex?: string | null
        addedAt: any
        slug: string
        title: string
        coverMedia?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        articleCategory?: {
          __typename?: 'ArticleCategoryEntityResponse'
          data?: {
            __typename?: 'ArticleCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
          } | null
        } | null
        tags?: {
          __typename?: 'TagRelationResponseCollection'
          data: Array<{
            __typename?: 'TagEntity'
            id?: string | null
            attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type BranchSlugEntityFragment = {
  __typename: 'BranchEntity'
  id?: string | null
  attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
}

export type BranchEntityFragment = {
  __typename: 'BranchEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Branch'
    address?: string | null
    title: string
    slug: string
  } | null
}

export type BranchesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type BranchesQuery = {
  __typename?: 'Query'
  branches?: {
    __typename?: 'BranchEntityResponseCollection'
    data: Array<{
      __typename: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        address?: string | null
        title: string
        slug: string
      } | null
    }>
  } | null
}

export type BranchBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
  locale: Scalars['I18NLocaleCode']['input']
}>

export type BranchBySlugQuery = {
  __typename?: 'Query'
  branches?: {
    __typename?: 'BranchEntityResponseCollection'
    data: Array<{
      __typename: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        address?: string | null
        title: string
        slug: string
      } | null
    }>
  } | null
}

export type DocumentSlugEntityFragment = {
  __typename: 'DocumentEntity'
  id?: string | null
  attributes?: { __typename?: 'Document'; slug: string; title: string } | null
}

export type DocumentEntityFragment = {
  __typename: 'DocumentEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Document'
    title: string
    slug: string
    publishedAt?: any | null
    identificationNumber?: string | null
    supplier?: string | null
    priceWithoutTax?: string | null
    description?: string | null
    documentCategory?: {
      __typename?: 'DocumentCategoryEntityResponse'
      data?: {
        __typename?: 'DocumentCategoryEntity'
        id?: string | null
        attributes?: { __typename?: 'DocumentCategory'; title: string; slug: string } | null
      } | null
    } | null
    files: Array<{
      __typename?: 'ComponentItemsFileItem'
      title?: string | null
      media: {
        __typename?: 'UploadFileEntityResponse'
        data?: {
          __typename?: 'UploadFileEntity'
          id?: string | null
          attributes?: {
            __typename?: 'UploadFile'
            url: string
            name: string
            ext?: string | null
            size: number
            createdAt?: any | null
            updatedAt?: any | null
          } | null
        } | null
      }
    } | null>
  } | null
}

export type DocumentsQueryVariables = Exact<{ [key: string]: never }>

export type DocumentsQuery = {
  __typename?: 'Query'
  documents?: {
    __typename?: 'DocumentEntityResponseCollection'
    data: Array<{
      __typename: 'DocumentEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Document'
        title: string
        slug: string
        publishedAt?: any | null
        identificationNumber?: string | null
        supplier?: string | null
        priceWithoutTax?: string | null
        description?: string | null
        documentCategory?: {
          __typename?: 'DocumentCategoryEntityResponse'
          data?: {
            __typename?: 'DocumentCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'DocumentCategory'; title: string; slug: string } | null
          } | null
        } | null
        files: Array<{
          __typename?: 'ComponentItemsFileItem'
          title?: string | null
          media: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                name: string
                ext?: string | null
                size: number
                createdAt?: any | null
                updatedAt?: any | null
              } | null
            } | null
          }
        } | null>
      } | null
    }>
  } | null
}

export type DocumentBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type DocumentBySlugQuery = {
  __typename?: 'Query'
  documents?: {
    __typename?: 'DocumentEntityResponseCollection'
    data: Array<{
      __typename: 'DocumentEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Document'
        title: string
        slug: string
        publishedAt?: any | null
        identificationNumber?: string | null
        supplier?: string | null
        priceWithoutTax?: string | null
        description?: string | null
        documentCategory?: {
          __typename?: 'DocumentCategoryEntityResponse'
          data?: {
            __typename?: 'DocumentCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'DocumentCategory'; title: string; slug: string } | null
          } | null
        } | null
        files: Array<{
          __typename?: 'ComponentItemsFileItem'
          title?: string | null
          media: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                name: string
                ext?: string | null
                size: number
                createdAt?: any | null
                updatedAt?: any | null
              } | null
            } | null
          }
        } | null>
      } | null
    }>
  } | null
}

export type FaqEntityFragment = {
  __typename?: 'FaqEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Faq'
    title: string
    content: string
    faqCategory?: {
      __typename?: 'FaqCategoryEntityResponse'
      data?: {
        __typename: 'FaqCategoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'FaqCategory'
          slug: string
          title: string
          faqs?: {
            __typename?: 'FaqRelationResponseCollection'
            data: Array<{
              __typename?: 'FaqEntity'
              id?: string | null
              attributes?: { __typename?: 'Faq'; title: string; content: string } | null
            }>
          } | null
          banner?: {
            __typename?: 'ComponentSectionsBanner'
            title: string
            text?: string | null
            variant: Enum_Componentsectionsbanner_Variant
            image: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  url: string
                  width?: number | null
                  height?: number | null
                  caption?: string | null
                  alternativeText?: string | null
                  name: string
                } | null
              } | null
            }
            primaryButtonLink: {
              __typename?: 'ComponentItemsLink'
              label?: string | null
              url?: string | null
              page?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename: 'PageEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Page'
                    title: string
                    slug: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              article?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                } | null
              } | null
              branch?: {
                __typename?: 'BranchEntityResponse'
                data?: {
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                } | null
              } | null
              document?: {
                __typename?: 'DocumentEntityResponse'
                data?: {
                  __typename: 'DocumentEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                } | null
              } | null
              service?: {
                __typename?: 'ServiceEntityResponse'
                data?: {
                  __typename: 'ServiceEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                } | null
              } | null
              workshop?: {
                __typename?: 'WorkshopEntityResponse'
                data?: {
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                } | null
              } | null
            }
            secondaryButtonLink?: {
              __typename?: 'ComponentItemsLink'
              label?: string | null
              url?: string | null
              page?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename: 'PageEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Page'
                    title: string
                    slug: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              article?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                } | null
              } | null
              branch?: {
                __typename?: 'BranchEntityResponse'
                data?: {
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                } | null
              } | null
              document?: {
                __typename?: 'DocumentEntityResponse'
                data?: {
                  __typename: 'DocumentEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                } | null
              } | null
              service?: {
                __typename?: 'ServiceEntityResponse'
                data?: {
                  __typename: 'ServiceEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                } | null
              } | null
              workshop?: {
                __typename?: 'WorkshopEntityResponse'
                data?: {
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type FaqsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type FaqsQuery = {
  __typename?: 'Query'
  faqs?: {
    __typename?: 'FaqEntityResponseCollection'
    data: Array<{
      __typename?: 'FaqEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Faq'
        title: string
        content: string
        faqCategory?: {
          __typename?: 'FaqCategoryEntityResponse'
          data?: {
            __typename: 'FaqCategoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'FaqCategory'
              slug: string
              title: string
              faqs?: {
                __typename?: 'FaqRelationResponseCollection'
                data: Array<{
                  __typename?: 'FaqEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Faq'; title: string; content: string } | null
                }>
              } | null
              banner?: {
                __typename?: 'ComponentSectionsBanner'
                title: string
                text?: string | null
                variant: Enum_Componentsectionsbanner_Variant
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                }
                primaryButtonLink: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                }
                secondaryButtonLink?: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type FooterColumnItemFragment = {
  __typename?: 'ComponentItemsFooterColumn'
  title: string
  links?: Array<{
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null> | null
}

export type FooterFragment = {
  __typename?: 'Footer'
  text?: string | null
  facebookUrl?: string | null
  instagramUrl?: string | null
  columns?: Array<{
    __typename?: 'ComponentItemsFooterColumn'
    title: string
    links?: Array<{
      __typename?: 'ComponentItemsLink'
      label?: string | null
      url?: string | null
      page?: {
        __typename?: 'PageEntityResponse'
        data?: {
          __typename: 'PageEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Page'
            title: string
            slug: string
            parentPage?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename?: 'PageEntity'
                attributes?: {
                  __typename?: 'Page'
                  slug: string
                  title: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
      article?: {
        __typename?: 'ArticleEntityResponse'
        data?: {
          __typename: 'ArticleEntity'
          id?: string | null
          attributes?: { __typename?: 'Article'; slug: string; title: string } | null
        } | null
      } | null
      branch?: {
        __typename?: 'BranchEntityResponse'
        data?: {
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
        } | null
      } | null
      document?: {
        __typename?: 'DocumentEntityResponse'
        data?: {
          __typename: 'DocumentEntity'
          id?: string | null
          attributes?: { __typename?: 'Document'; slug: string; title: string } | null
        } | null
      } | null
      service?: {
        __typename?: 'ServiceEntityResponse'
        data?: {
          __typename: 'ServiceEntity'
          id?: string | null
          attributes?: { __typename?: 'Service'; title: string; slug: string } | null
        } | null
      } | null
      workshop?: {
        __typename?: 'WorkshopEntityResponse'
        data?: {
          __typename: 'WorkshopEntity'
          id?: string | null
          attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
        } | null
      } | null
    } | null> | null
  } | null> | null
  bottomLinks?: Array<{
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null> | null
}

export type FooterEntityFragment = {
  __typename?: 'FooterEntity'
  attributes?: {
    __typename?: 'Footer'
    text?: string | null
    facebookUrl?: string | null
    instagramUrl?: string | null
    columns?: Array<{
      __typename?: 'ComponentItemsFooterColumn'
      title: string
      links?: Array<{
        __typename?: 'ComponentItemsLink'
        label?: string | null
        url?: string | null
        page?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        article?: {
          __typename?: 'ArticleEntityResponse'
          data?: {
            __typename: 'ArticleEntity'
            id?: string | null
            attributes?: { __typename?: 'Article'; slug: string; title: string } | null
          } | null
        } | null
        branch?: {
          __typename?: 'BranchEntityResponse'
          data?: {
            __typename: 'BranchEntity'
            id?: string | null
            attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
          } | null
        } | null
        document?: {
          __typename?: 'DocumentEntityResponse'
          data?: {
            __typename: 'DocumentEntity'
            id?: string | null
            attributes?: { __typename?: 'Document'; slug: string; title: string } | null
          } | null
        } | null
        service?: {
          __typename?: 'ServiceEntityResponse'
          data?: {
            __typename: 'ServiceEntity'
            id?: string | null
            attributes?: { __typename?: 'Service'; title: string; slug: string } | null
          } | null
        } | null
        workshop?: {
          __typename?: 'WorkshopEntityResponse'
          data?: {
            __typename: 'WorkshopEntity'
            id?: string | null
            attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
          } | null
        } | null
      } | null> | null
    } | null> | null
    bottomLinks?: Array<{
      __typename?: 'ComponentItemsLink'
      label?: string | null
      url?: string | null
      page?: {
        __typename?: 'PageEntityResponse'
        data?: {
          __typename: 'PageEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Page'
            title: string
            slug: string
            parentPage?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename?: 'PageEntity'
                attributes?: {
                  __typename?: 'Page'
                  slug: string
                  title: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
      article?: {
        __typename?: 'ArticleEntityResponse'
        data?: {
          __typename: 'ArticleEntity'
          id?: string | null
          attributes?: { __typename?: 'Article'; slug: string; title: string } | null
        } | null
      } | null
      branch?: {
        __typename?: 'BranchEntityResponse'
        data?: {
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
        } | null
      } | null
      document?: {
        __typename?: 'DocumentEntityResponse'
        data?: {
          __typename: 'DocumentEntity'
          id?: string | null
          attributes?: { __typename?: 'Document'; slug: string; title: string } | null
        } | null
      } | null
      service?: {
        __typename?: 'ServiceEntityResponse'
        data?: {
          __typename: 'ServiceEntity'
          id?: string | null
          attributes?: { __typename?: 'Service'; title: string; slug: string } | null
        } | null
      } | null
      workshop?: {
        __typename?: 'WorkshopEntityResponse'
        data?: {
          __typename: 'WorkshopEntity'
          id?: string | null
          attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
        } | null
      } | null
    } | null> | null
  } | null
}

export type SlideItemFragment = {
  __typename?: 'ComponentItemsSlide'
  title: string
  text?: string | null
  backgroundColor?: string | null
  media: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        url: string
        width?: number | null
        height?: number | null
        caption?: string | null
        alternativeText?: string | null
        name: string
      } | null
    } | null
  }
}

export type HeroMainTileFragment = {
  __typename?: 'ComponentItemsHeroMainTile'
  text?: string | null
  link?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type HeroSmallTileFragment = {
  __typename?: 'ComponentItemsHeroSmallTile'
  icon?: string | null
  link?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type HomepageServiceTileFragment = {
  __typename?: 'ComponentItemsHomepageServiceTile'
  title: string
  text?: string | null
  link?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type HeroHomepageSectionFragment = {
  __typename?: 'ComponentSectionsHeroHomepageSection'
  slides?: Array<{
    __typename?: 'ComponentItemsSlide'
    title: string
    text?: string | null
    backgroundColor?: string | null
    media: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    }
  } | null> | null
  mainTiles?: Array<{
    __typename?: 'ComponentItemsHeroMainTile'
    text?: string | null
    link?: {
      __typename?: 'ComponentItemsLink'
      label?: string | null
      url?: string | null
      page?: {
        __typename?: 'PageEntityResponse'
        data?: {
          __typename: 'PageEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Page'
            title: string
            slug: string
            parentPage?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename?: 'PageEntity'
                attributes?: {
                  __typename?: 'Page'
                  slug: string
                  title: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
      article?: {
        __typename?: 'ArticleEntityResponse'
        data?: {
          __typename: 'ArticleEntity'
          id?: string | null
          attributes?: { __typename?: 'Article'; slug: string; title: string } | null
        } | null
      } | null
      branch?: {
        __typename?: 'BranchEntityResponse'
        data?: {
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
        } | null
      } | null
      document?: {
        __typename?: 'DocumentEntityResponse'
        data?: {
          __typename: 'DocumentEntity'
          id?: string | null
          attributes?: { __typename?: 'Document'; slug: string; title: string } | null
        } | null
      } | null
      service?: {
        __typename?: 'ServiceEntityResponse'
        data?: {
          __typename: 'ServiceEntity'
          id?: string | null
          attributes?: { __typename?: 'Service'; title: string; slug: string } | null
        } | null
      } | null
      workshop?: {
        __typename?: 'WorkshopEntityResponse'
        data?: {
          __typename: 'WorkshopEntity'
          id?: string | null
          attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
        } | null
      } | null
    } | null
  } | null> | null
  smallTiles?: Array<{
    __typename?: 'ComponentItemsHeroSmallTile'
    icon?: string | null
    link?: {
      __typename?: 'ComponentItemsLink'
      label?: string | null
      url?: string | null
      page?: {
        __typename?: 'PageEntityResponse'
        data?: {
          __typename: 'PageEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Page'
            title: string
            slug: string
            parentPage?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename?: 'PageEntity'
                attributes?: {
                  __typename?: 'Page'
                  slug: string
                  title: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
      article?: {
        __typename?: 'ArticleEntityResponse'
        data?: {
          __typename: 'ArticleEntity'
          id?: string | null
          attributes?: { __typename?: 'Article'; slug: string; title: string } | null
        } | null
      } | null
      branch?: {
        __typename?: 'BranchEntityResponse'
        data?: {
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
        } | null
      } | null
      document?: {
        __typename?: 'DocumentEntityResponse'
        data?: {
          __typename: 'DocumentEntity'
          id?: string | null
          attributes?: { __typename?: 'Document'; slug: string; title: string } | null
        } | null
      } | null
      service?: {
        __typename?: 'ServiceEntityResponse'
        data?: {
          __typename: 'ServiceEntity'
          id?: string | null
          attributes?: { __typename?: 'Service'; title: string; slug: string } | null
        } | null
      } | null
      workshop?: {
        __typename?: 'WorkshopEntityResponse'
        data?: {
          __typename: 'WorkshopEntity'
          id?: string | null
          attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
        } | null
      } | null
    } | null
  } | null> | null
}

export type ArticlesHomepageSectionFragment = {
  __typename?: 'ComponentSectionsArticlesHomepageSection'
  title?: string | null
  text?: string | null
  articles?: {
    __typename?: 'ArticleRelationResponseCollection'
    data: Array<{
      __typename: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        content?: string | null
        perex?: string | null
        addedAt: any
        slug: string
        title: string
        coverMedia?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        articleCategory?: {
          __typename?: 'ArticleCategoryEntityResponse'
          data?: {
            __typename?: 'ArticleCategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
          } | null
        } | null
        tags?: {
          __typename?: 'TagRelationResponseCollection'
          data: Array<{
            __typename?: 'TagEntity'
            id?: string | null
            attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
          }>
        } | null
      } | null
    }>
  } | null
  showMoreLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type KoloHomepageSectionFragment = {
  __typename?: 'ComponentSectionsKoloHomepageSection'
  title?: string | null
  text?: string | null
  branchesTitle?: string | null
  mainCards?: Array<{
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null> | null
  branches?: {
    __typename?: 'BranchRelationResponseCollection'
    data: Array<{
      __typename: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        address?: string | null
        title: string
        slug: string
      } | null
    }>
  } | null
  showMoreLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type ServicesHomepageSectionFragment = {
  __typename?: 'ComponentSectionsServicesHomepageSection'
  title?: string | null
  text?: string | null
  tiles?: Array<{
    __typename?: 'ComponentItemsHomepageServiceTile'
    title: string
    text?: string | null
    link?: {
      __typename?: 'ComponentItemsLink'
      label?: string | null
      url?: string | null
      page?: {
        __typename?: 'PageEntityResponse'
        data?: {
          __typename: 'PageEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Page'
            title: string
            slug: string
            parentPage?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename?: 'PageEntity'
                attributes?: {
                  __typename?: 'Page'
                  slug: string
                  title: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
      article?: {
        __typename?: 'ArticleEntityResponse'
        data?: {
          __typename: 'ArticleEntity'
          id?: string | null
          attributes?: { __typename?: 'Article'; slug: string; title: string } | null
        } | null
      } | null
      branch?: {
        __typename?: 'BranchEntityResponse'
        data?: {
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
        } | null
      } | null
      document?: {
        __typename?: 'DocumentEntityResponse'
        data?: {
          __typename: 'DocumentEntity'
          id?: string | null
          attributes?: { __typename?: 'Document'; slug: string; title: string } | null
        } | null
      } | null
      service?: {
        __typename?: 'ServiceEntityResponse'
        data?: {
          __typename: 'ServiceEntity'
          id?: string | null
          attributes?: { __typename?: 'Service'; title: string; slug: string } | null
        } | null
      } | null
      workshop?: {
        __typename?: 'WorkshopEntityResponse'
        data?: {
          __typename: 'WorkshopEntity'
          id?: string | null
          attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
        } | null
      } | null
    } | null
  } | null> | null
  showMoreLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type HomepageEntityFragment = {
  __typename?: 'HomepageEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Homepage'
    heroSection?: {
      __typename?: 'ComponentSectionsHeroHomepageSection'
      slides?: Array<{
        __typename?: 'ComponentItemsSlide'
        title: string
        text?: string | null
        backgroundColor?: string | null
        media: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        }
      } | null> | null
      mainTiles?: Array<{
        __typename?: 'ComponentItemsHeroMainTile'
        text?: string | null
        link?: {
          __typename?: 'ComponentItemsLink'
          label?: string | null
          url?: string | null
          page?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename: 'PageEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Page'
                title: string
                slug: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          article?: {
            __typename?: 'ArticleEntityResponse'
            data?: {
              __typename: 'ArticleEntity'
              id?: string | null
              attributes?: { __typename?: 'Article'; slug: string; title: string } | null
            } | null
          } | null
          branch?: {
            __typename?: 'BranchEntityResponse'
            data?: {
              __typename: 'BranchEntity'
              id?: string | null
              attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
            } | null
          } | null
          document?: {
            __typename?: 'DocumentEntityResponse'
            data?: {
              __typename: 'DocumentEntity'
              id?: string | null
              attributes?: { __typename?: 'Document'; slug: string; title: string } | null
            } | null
          } | null
          service?: {
            __typename?: 'ServiceEntityResponse'
            data?: {
              __typename: 'ServiceEntity'
              id?: string | null
              attributes?: { __typename?: 'Service'; title: string; slug: string } | null
            } | null
          } | null
          workshop?: {
            __typename?: 'WorkshopEntityResponse'
            data?: {
              __typename: 'WorkshopEntity'
              id?: string | null
              attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
            } | null
          } | null
        } | null
      } | null> | null
      smallTiles?: Array<{
        __typename?: 'ComponentItemsHeroSmallTile'
        icon?: string | null
        link?: {
          __typename?: 'ComponentItemsLink'
          label?: string | null
          url?: string | null
          page?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename: 'PageEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Page'
                title: string
                slug: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          article?: {
            __typename?: 'ArticleEntityResponse'
            data?: {
              __typename: 'ArticleEntity'
              id?: string | null
              attributes?: { __typename?: 'Article'; slug: string; title: string } | null
            } | null
          } | null
          branch?: {
            __typename?: 'BranchEntityResponse'
            data?: {
              __typename: 'BranchEntity'
              id?: string | null
              attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
            } | null
          } | null
          document?: {
            __typename?: 'DocumentEntityResponse'
            data?: {
              __typename: 'DocumentEntity'
              id?: string | null
              attributes?: { __typename?: 'Document'; slug: string; title: string } | null
            } | null
          } | null
          service?: {
            __typename?: 'ServiceEntityResponse'
            data?: {
              __typename: 'ServiceEntity'
              id?: string | null
              attributes?: { __typename?: 'Service'; title: string; slug: string } | null
            } | null
          } | null
          workshop?: {
            __typename?: 'WorkshopEntityResponse'
            data?: {
              __typename: 'WorkshopEntity'
              id?: string | null
              attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
            } | null
          } | null
        } | null
      } | null> | null
    } | null
    articlesSection?: {
      __typename?: 'ComponentSectionsArticlesHomepageSection'
      title?: string | null
      text?: string | null
      articles?: {
        __typename?: 'ArticleRelationResponseCollection'
        data: Array<{
          __typename: 'ArticleEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Article'
            content?: string | null
            perex?: string | null
            addedAt: any
            slug: string
            title: string
            coverMedia?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  url: string
                  width?: number | null
                  height?: number | null
                  caption?: string | null
                  alternativeText?: string | null
                  name: string
                } | null
              } | null
            } | null
            articleCategory?: {
              __typename?: 'ArticleCategoryEntityResponse'
              data?: {
                __typename?: 'ArticleCategoryEntity'
                id?: string | null
                attributes?: { __typename?: 'ArticleCategory'; title: string; slug: string } | null
              } | null
            } | null
            tags?: {
              __typename?: 'TagRelationResponseCollection'
              data: Array<{
                __typename?: 'TagEntity'
                id?: string | null
                attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
              }>
            } | null
          } | null
        }>
      } | null
      showMoreLink?: {
        __typename?: 'ComponentItemsLink'
        label?: string | null
        url?: string | null
        page?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        article?: {
          __typename?: 'ArticleEntityResponse'
          data?: {
            __typename: 'ArticleEntity'
            id?: string | null
            attributes?: { __typename?: 'Article'; slug: string; title: string } | null
          } | null
        } | null
        branch?: {
          __typename?: 'BranchEntityResponse'
          data?: {
            __typename: 'BranchEntity'
            id?: string | null
            attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
          } | null
        } | null
        document?: {
          __typename?: 'DocumentEntityResponse'
          data?: {
            __typename: 'DocumentEntity'
            id?: string | null
            attributes?: { __typename?: 'Document'; slug: string; title: string } | null
          } | null
        } | null
        service?: {
          __typename?: 'ServiceEntityResponse'
          data?: {
            __typename: 'ServiceEntity'
            id?: string | null
            attributes?: { __typename?: 'Service'; title: string; slug: string } | null
          } | null
        } | null
        workshop?: {
          __typename?: 'WorkshopEntityResponse'
          data?: {
            __typename: 'WorkshopEntity'
            id?: string | null
            attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    } | null
    koloSection?: {
      __typename?: 'ComponentSectionsKoloHomepageSection'
      title?: string | null
      text?: string | null
      branchesTitle?: string | null
      mainCards?: Array<{
        __typename?: 'ComponentItemsLink'
        label?: string | null
        url?: string | null
        page?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        article?: {
          __typename?: 'ArticleEntityResponse'
          data?: {
            __typename: 'ArticleEntity'
            id?: string | null
            attributes?: { __typename?: 'Article'; slug: string; title: string } | null
          } | null
        } | null
        branch?: {
          __typename?: 'BranchEntityResponse'
          data?: {
            __typename: 'BranchEntity'
            id?: string | null
            attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
          } | null
        } | null
        document?: {
          __typename?: 'DocumentEntityResponse'
          data?: {
            __typename: 'DocumentEntity'
            id?: string | null
            attributes?: { __typename?: 'Document'; slug: string; title: string } | null
          } | null
        } | null
        service?: {
          __typename?: 'ServiceEntityResponse'
          data?: {
            __typename: 'ServiceEntity'
            id?: string | null
            attributes?: { __typename?: 'Service'; title: string; slug: string } | null
          } | null
        } | null
        workshop?: {
          __typename?: 'WorkshopEntityResponse'
          data?: {
            __typename: 'WorkshopEntity'
            id?: string | null
            attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
          } | null
        } | null
      } | null> | null
      branches?: {
        __typename?: 'BranchRelationResponseCollection'
        data: Array<{
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Branch'
            address?: string | null
            title: string
            slug: string
          } | null
        }>
      } | null
      showMoreLink?: {
        __typename?: 'ComponentItemsLink'
        label?: string | null
        url?: string | null
        page?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        article?: {
          __typename?: 'ArticleEntityResponse'
          data?: {
            __typename: 'ArticleEntity'
            id?: string | null
            attributes?: { __typename?: 'Article'; slug: string; title: string } | null
          } | null
        } | null
        branch?: {
          __typename?: 'BranchEntityResponse'
          data?: {
            __typename: 'BranchEntity'
            id?: string | null
            attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
          } | null
        } | null
        document?: {
          __typename?: 'DocumentEntityResponse'
          data?: {
            __typename: 'DocumentEntity'
            id?: string | null
            attributes?: { __typename?: 'Document'; slug: string; title: string } | null
          } | null
        } | null
        service?: {
          __typename?: 'ServiceEntityResponse'
          data?: {
            __typename: 'ServiceEntity'
            id?: string | null
            attributes?: { __typename?: 'Service'; title: string; slug: string } | null
          } | null
        } | null
        workshop?: {
          __typename?: 'WorkshopEntityResponse'
          data?: {
            __typename: 'WorkshopEntity'
            id?: string | null
            attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    } | null
    servicesSection?: {
      __typename?: 'ComponentSectionsServicesHomepageSection'
      title?: string | null
      text?: string | null
      tiles?: Array<{
        __typename?: 'ComponentItemsHomepageServiceTile'
        title: string
        text?: string | null
        link?: {
          __typename?: 'ComponentItemsLink'
          label?: string | null
          url?: string | null
          page?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename: 'PageEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Page'
                title: string
                slug: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          article?: {
            __typename?: 'ArticleEntityResponse'
            data?: {
              __typename: 'ArticleEntity'
              id?: string | null
              attributes?: { __typename?: 'Article'; slug: string; title: string } | null
            } | null
          } | null
          branch?: {
            __typename?: 'BranchEntityResponse'
            data?: {
              __typename: 'BranchEntity'
              id?: string | null
              attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
            } | null
          } | null
          document?: {
            __typename?: 'DocumentEntityResponse'
            data?: {
              __typename: 'DocumentEntity'
              id?: string | null
              attributes?: { __typename?: 'Document'; slug: string; title: string } | null
            } | null
          } | null
          service?: {
            __typename?: 'ServiceEntityResponse'
            data?: {
              __typename: 'ServiceEntity'
              id?: string | null
              attributes?: { __typename?: 'Service'; title: string; slug: string } | null
            } | null
          } | null
          workshop?: {
            __typename?: 'WorkshopEntityResponse'
            data?: {
              __typename: 'WorkshopEntity'
              id?: string | null
              attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
            } | null
          } | null
        } | null
      } | null> | null
      showMoreLink?: {
        __typename?: 'ComponentItemsLink'
        label?: string | null
        url?: string | null
        page?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        article?: {
          __typename?: 'ArticleEntityResponse'
          data?: {
            __typename: 'ArticleEntity'
            id?: string | null
            attributes?: { __typename?: 'Article'; slug: string; title: string } | null
          } | null
        } | null
        branch?: {
          __typename?: 'BranchEntityResponse'
          data?: {
            __typename: 'BranchEntity'
            id?: string | null
            attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
          } | null
        } | null
        document?: {
          __typename?: 'DocumentEntityResponse'
          data?: {
            __typename: 'DocumentEntity'
            id?: string | null
            attributes?: { __typename?: 'Document'; slug: string; title: string } | null
          } | null
        } | null
        service?: {
          __typename?: 'ServiceEntityResponse'
          data?: {
            __typename: 'ServiceEntity'
            id?: string | null
            attributes?: { __typename?: 'Service'; title: string; slug: string } | null
          } | null
        } | null
        workshop?: {
          __typename?: 'WorkshopEntityResponse'
          data?: {
            __typename: 'WorkshopEntity'
            id?: string | null
            attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type HomepageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type HomepageQuery = {
  __typename?: 'Query'
  homepage?: {
    __typename?: 'HomepageEntityResponse'
    data?: {
      __typename?: 'HomepageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Homepage'
        heroSection?: {
          __typename?: 'ComponentSectionsHeroHomepageSection'
          slides?: Array<{
            __typename?: 'ComponentItemsSlide'
            title: string
            text?: string | null
            backgroundColor?: string | null
            media: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  url: string
                  width?: number | null
                  height?: number | null
                  caption?: string | null
                  alternativeText?: string | null
                  name: string
                } | null
              } | null
            }
          } | null> | null
          mainTiles?: Array<{
            __typename?: 'ComponentItemsHeroMainTile'
            text?: string | null
            link?: {
              __typename?: 'ComponentItemsLink'
              label?: string | null
              url?: string | null
              page?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename: 'PageEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Page'
                    title: string
                    slug: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              article?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                } | null
              } | null
              branch?: {
                __typename?: 'BranchEntityResponse'
                data?: {
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                } | null
              } | null
              document?: {
                __typename?: 'DocumentEntityResponse'
                data?: {
                  __typename: 'DocumentEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                } | null
              } | null
              service?: {
                __typename?: 'ServiceEntityResponse'
                data?: {
                  __typename: 'ServiceEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                } | null
              } | null
              workshop?: {
                __typename?: 'WorkshopEntityResponse'
                data?: {
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                } | null
              } | null
            } | null
          } | null> | null
          smallTiles?: Array<{
            __typename?: 'ComponentItemsHeroSmallTile'
            icon?: string | null
            link?: {
              __typename?: 'ComponentItemsLink'
              label?: string | null
              url?: string | null
              page?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename: 'PageEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Page'
                    title: string
                    slug: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              article?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                } | null
              } | null
              branch?: {
                __typename?: 'BranchEntityResponse'
                data?: {
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                } | null
              } | null
              document?: {
                __typename?: 'DocumentEntityResponse'
                data?: {
                  __typename: 'DocumentEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                } | null
              } | null
              service?: {
                __typename?: 'ServiceEntityResponse'
                data?: {
                  __typename: 'ServiceEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                } | null
              } | null
              workshop?: {
                __typename?: 'WorkshopEntityResponse'
                data?: {
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                } | null
              } | null
            } | null
          } | null> | null
        } | null
        articlesSection?: {
          __typename?: 'ComponentSectionsArticlesHomepageSection'
          title?: string | null
          text?: string | null
          articles?: {
            __typename?: 'ArticleRelationResponseCollection'
            data: Array<{
              __typename: 'ArticleEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Article'
                content?: string | null
                perex?: string | null
                addedAt: any
                slug: string
                title: string
                coverMedia?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                } | null
                articleCategory?: {
                  __typename?: 'ArticleCategoryEntityResponse'
                  data?: {
                    __typename?: 'ArticleCategoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'ArticleCategory'
                      title: string
                      slug: string
                    } | null
                  } | null
                } | null
                tags?: {
                  __typename?: 'TagRelationResponseCollection'
                  data: Array<{
                    __typename?: 'TagEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
                  }>
                } | null
              } | null
            }>
          } | null
          showMoreLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        } | null
        koloSection?: {
          __typename?: 'ComponentSectionsKoloHomepageSection'
          title?: string | null
          text?: string | null
          branchesTitle?: string | null
          mainCards?: Array<{
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null> | null
          branches?: {
            __typename?: 'BranchRelationResponseCollection'
            data: Array<{
              __typename: 'BranchEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Branch'
                address?: string | null
                title: string
                slug: string
              } | null
            }>
          } | null
          showMoreLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        } | null
        servicesSection?: {
          __typename?: 'ComponentSectionsServicesHomepageSection'
          title?: string | null
          text?: string | null
          tiles?: Array<{
            __typename?: 'ComponentItemsHomepageServiceTile'
            title: string
            text?: string | null
            link?: {
              __typename?: 'ComponentItemsLink'
              label?: string | null
              url?: string | null
              page?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename: 'PageEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Page'
                    title: string
                    slug: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              article?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                } | null
              } | null
              branch?: {
                __typename?: 'BranchEntityResponse'
                data?: {
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                } | null
              } | null
              document?: {
                __typename?: 'DocumentEntityResponse'
                data?: {
                  __typename: 'DocumentEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                } | null
              } | null
              service?: {
                __typename?: 'ServiceEntityResponse'
                data?: {
                  __typename: 'ServiceEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                } | null
              } | null
              workshop?: {
                __typename?: 'WorkshopEntityResponse'
                data?: {
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                } | null
              } | null
            } | null
          } | null> | null
          showMoreLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type MenuLinkFragment = {
  __typename?: 'ComponentMenuMenuLink'
  id: string
  label?: string | null
  url?: string | null
  page?: {
    __typename?: 'PageEntityResponse'
    data?: {
      __typename: 'PageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Page'
        title: string
        slug: string
        parentPage?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename?: 'PageEntity'
            attributes?: {
              __typename?: 'Page'
              slug: string
              title: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
  branch?: {
    __typename?: 'BranchEntityResponse'
    data?: {
      __typename: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        address?: string | null
        title: string
        slug: string
      } | null
    } | null
  } | null
  workshop?: {
    __typename?: 'WorkshopEntityResponse'
    data?: {
      __typename: 'WorkshopEntity'
      id?: string | null
      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
    } | null
  } | null
}

export type MenuSectionFragment = {
  __typename?: 'ComponentMenuMenuSection'
  id: string
  label: string
  colSpan: number
  multicolumnBehaviour?: Enum_Componentmenumenusection_Multicolumnbehaviour | null
  hasDivider: boolean
  specialSectionType?: Enum_Componentmenumenusection_Specialsectiontype | null
  links?: Array<{
    __typename?: 'ComponentMenuMenuLink'
    id: string
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Branch'
          address?: string | null
          title: string
          slug: string
        } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null> | null
}

export type MenuItemFragment = {
  __typename?: 'ComponentMenuMenuItem'
  id: string
  label: string
  sections?: Array<{
    __typename?: 'ComponentMenuMenuSection'
    id: string
    label: string
    colSpan: number
    multicolumnBehaviour?: Enum_Componentmenumenusection_Multicolumnbehaviour | null
    hasDivider: boolean
    specialSectionType?: Enum_Componentmenumenusection_Specialsectiontype | null
    links?: Array<{
      __typename?: 'ComponentMenuMenuLink'
      id: string
      label?: string | null
      url?: string | null
      page?: {
        __typename?: 'PageEntityResponse'
        data?: {
          __typename: 'PageEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Page'
            title: string
            slug: string
            parentPage?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename?: 'PageEntity'
                attributes?: {
                  __typename?: 'Page'
                  slug: string
                  title: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
      branch?: {
        __typename?: 'BranchEntityResponse'
        data?: {
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Branch'
            address?: string | null
            title: string
            slug: string
          } | null
        } | null
      } | null
      workshop?: {
        __typename?: 'WorkshopEntityResponse'
        data?: {
          __typename: 'WorkshopEntity'
          id?: string | null
          attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
        } | null
      } | null
    } | null> | null
  } | null> | null
  seeAllLink?: {
    __typename?: 'ComponentItemsLink'
    label?: string | null
    url?: string | null
    page?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename: 'PageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Page'
          title: string
          slug: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename: 'ArticleEntity'
        id?: string | null
        attributes?: { __typename?: 'Article'; slug: string; title: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename: 'BranchEntity'
        id?: string | null
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename: 'DocumentEntity'
        id?: string | null
        attributes?: { __typename?: 'Document'; slug: string; title: string } | null
      } | null
    } | null
    service?: {
      __typename?: 'ServiceEntityResponse'
      data?: {
        __typename: 'ServiceEntity'
        id?: string | null
        attributes?: { __typename?: 'Service'; title: string; slug: string } | null
      } | null
    } | null
    workshop?: {
      __typename?: 'WorkshopEntityResponse'
      data?: {
        __typename: 'WorkshopEntity'
        id?: string | null
        attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type MenuFragment = {
  __typename?: 'Menu'
  menuItems?: Array<{
    __typename?: 'ComponentMenuMenuItem'
    id: string
    label: string
    sections?: Array<{
      __typename?: 'ComponentMenuMenuSection'
      id: string
      label: string
      colSpan: number
      multicolumnBehaviour?: Enum_Componentmenumenusection_Multicolumnbehaviour | null
      hasDivider: boolean
      specialSectionType?: Enum_Componentmenumenusection_Specialsectiontype | null
      links?: Array<{
        __typename?: 'ComponentMenuMenuLink'
        id: string
        label?: string | null
        url?: string | null
        page?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        branch?: {
          __typename?: 'BranchEntityResponse'
          data?: {
            __typename: 'BranchEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Branch'
              address?: string | null
              title: string
              slug: string
            } | null
          } | null
        } | null
        workshop?: {
          __typename?: 'WorkshopEntityResponse'
          data?: {
            __typename: 'WorkshopEntity'
            id?: string | null
            attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
          } | null
        } | null
      } | null> | null
    } | null> | null
    seeAllLink?: {
      __typename?: 'ComponentItemsLink'
      label?: string | null
      url?: string | null
      page?: {
        __typename?: 'PageEntityResponse'
        data?: {
          __typename: 'PageEntity'
          id?: string | null
          attributes?: {
            __typename?: 'Page'
            title: string
            slug: string
            parentPage?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename?: 'PageEntity'
                attributes?: {
                  __typename?: 'Page'
                  slug: string
                  title: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
      article?: {
        __typename?: 'ArticleEntityResponse'
        data?: {
          __typename: 'ArticleEntity'
          id?: string | null
          attributes?: { __typename?: 'Article'; slug: string; title: string } | null
        } | null
      } | null
      branch?: {
        __typename?: 'BranchEntityResponse'
        data?: {
          __typename: 'BranchEntity'
          id?: string | null
          attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
        } | null
      } | null
      document?: {
        __typename?: 'DocumentEntityResponse'
        data?: {
          __typename: 'DocumentEntity'
          id?: string | null
          attributes?: { __typename?: 'Document'; slug: string; title: string } | null
        } | null
      } | null
      service?: {
        __typename?: 'ServiceEntityResponse'
        data?: {
          __typename: 'ServiceEntity'
          id?: string | null
          attributes?: { __typename?: 'Service'; title: string; slug: string } | null
        } | null
      } | null
      workshop?: {
        __typename?: 'WorkshopEntityResponse'
        data?: {
          __typename: 'WorkshopEntity'
          id?: string | null
          attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
        } | null
      } | null
    } | null
  } | null> | null
}

export type MenuEntityFragment = {
  __typename?: 'MenuEntity'
  attributes?: {
    __typename?: 'Menu'
    menuItems?: Array<{
      __typename?: 'ComponentMenuMenuItem'
      id: string
      label: string
      sections?: Array<{
        __typename?: 'ComponentMenuMenuSection'
        id: string
        label: string
        colSpan: number
        multicolumnBehaviour?: Enum_Componentmenumenusection_Multicolumnbehaviour | null
        hasDivider: boolean
        specialSectionType?: Enum_Componentmenumenusection_Specialsectiontype | null
        links?: Array<{
          __typename?: 'ComponentMenuMenuLink'
          id: string
          label?: string | null
          url?: string | null
          page?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename: 'PageEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Page'
                title: string
                slug: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          branch?: {
            __typename?: 'BranchEntityResponse'
            data?: {
              __typename: 'BranchEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Branch'
                address?: string | null
                title: string
                slug: string
              } | null
            } | null
          } | null
          workshop?: {
            __typename?: 'WorkshopEntityResponse'
            data?: {
              __typename: 'WorkshopEntity'
              id?: string | null
              attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
            } | null
          } | null
        } | null> | null
      } | null> | null
      seeAllLink?: {
        __typename?: 'ComponentItemsLink'
        label?: string | null
        url?: string | null
        page?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename: 'PageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Page'
              title: string
              slug: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        article?: {
          __typename?: 'ArticleEntityResponse'
          data?: {
            __typename: 'ArticleEntity'
            id?: string | null
            attributes?: { __typename?: 'Article'; slug: string; title: string } | null
          } | null
        } | null
        branch?: {
          __typename?: 'BranchEntityResponse'
          data?: {
            __typename: 'BranchEntity'
            id?: string | null
            attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
          } | null
        } | null
        document?: {
          __typename?: 'DocumentEntityResponse'
          data?: {
            __typename: 'DocumentEntity'
            id?: string | null
            attributes?: { __typename?: 'Document'; slug: string; title: string } | null
          } | null
        } | null
        service?: {
          __typename?: 'ServiceEntityResponse'
          data?: {
            __typename: 'ServiceEntity'
            id?: string | null
            attributes?: { __typename?: 'Service'; title: string; slug: string } | null
          } | null
        } | null
        workshop?: {
          __typename?: 'WorkshopEntityResponse'
          data?: {
            __typename: 'WorkshopEntity'
            id?: string | null
            attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    } | null> | null
  } | null
}

export type OpeningHoursItemFragment = {
  __typename?: 'ComponentItemsOpeningHoursItem'
  label: string
  value: string
}

export type OpeningTimeEntityFragment = {
  __typename?: 'OpeningTimeEntity'
  id?: string | null
  attributes?: {
    __typename?: 'OpeningTime'
    internalName: string
    openingHours?: Array<{
      __typename?: 'ComponentItemsOpeningHoursItem'
      label: string
      value: string
    } | null> | null
  } | null
}

export type ParentPageFragment = { __typename?: 'Page'; slug: string; title: string }

export type PageParentPagesFragment = {
  __typename?: 'PageEntity'
  attributes?: {
    __typename?: 'Page'
    slug: string
    title: string
    parentPage?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename?: 'PageEntity'
        attributes?: {
          __typename?: 'Page'
          slug: string
          title: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: { __typename?: 'Page'; slug: string; title: string } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type PageSlugEntityFragment = {
  __typename: 'PageEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Page'
    title: string
    slug: string
    parentPage?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename?: 'PageEntity'
        attributes?: {
          __typename?: 'Page'
          slug: string
          title: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: { __typename?: 'Page'; slug: string; title: string } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type PageEntityFragment = {
  __typename: 'PageEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Page'
    perex?: string | null
    title: string
    slug: string
    header?: Array<
      | {
          __typename: 'ComponentHeaderSectionsFeaturedNews'
          articlesTitle: string
          firstArticle?: {
            __typename?: 'ArticleEntityResponse'
            data?: {
              __typename: 'ArticleEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Article'
                perex?: string | null
                addedAt: any
                slug: string
                title: string
                coverMedia?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                } | null
                articleCategory?: {
                  __typename?: 'ArticleCategoryEntityResponse'
                  data?: {
                    __typename?: 'ArticleCategoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'ArticleCategory'
                      title: string
                      slug: string
                    } | null
                  } | null
                } | null
                tags?: {
                  __typename?: 'TagRelationResponseCollection'
                  data: Array<{
                    __typename?: 'TagEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
                  }>
                } | null
              } | null
            } | null
          } | null
          secondArticle?: {
            __typename?: 'ArticleEntityResponse'
            data?: {
              __typename: 'ArticleEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Article'
                perex?: string | null
                addedAt: any
                slug: string
                title: string
                coverMedia?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                } | null
                articleCategory?: {
                  __typename?: 'ArticleCategoryEntityResponse'
                  data?: {
                    __typename?: 'ArticleCategoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'ArticleCategory'
                      title: string
                      slug: string
                    } | null
                  } | null
                } | null
                tags?: {
                  __typename?: 'TagRelationResponseCollection'
                  data: Array<{
                    __typename?: 'TagEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
                  }>
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentHeaderSectionsGallery'
          medias: {
            __typename?: 'UploadFileRelationResponseCollection'
            data: Array<{
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                width?: number | null
                height?: number | null
                caption?: string | null
                alternativeText?: string | null
                name: string
              } | null
            }>
          }
        }
      | { __typename: 'ComponentHeaderSectionsIcon'; iconName: string }
      | {
          __typename: 'ComponentHeaderSectionsImage'
          media: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                width?: number | null
                height?: number | null
                caption?: string | null
                alternativeText?: string | null
                name: string
              } | null
            } | null
          }
        }
      | {
          __typename: 'ComponentHeaderSectionsPickupDay'
          carouselTitle: string
          anchors?: Array<{
            __typename?: 'ComponentItemsAnchor'
            label: string
            targetId: string
          } | null> | null
          showMoreLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentHeaderSectionsSideImage'
          media: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                width?: number | null
                height?: number | null
                caption?: string | null
                alternativeText?: string | null
                name: string
              } | null
            } | null
          }
        }
      | { __typename: 'Error' }
      | null
    > | null
    sections?: Array<
      | {
          __typename: 'ComponentSectionsBanner'
          title: string
          text?: string | null
          variant: Enum_Componentsectionsbanner_Variant
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                width?: number | null
                height?: number | null
                caption?: string | null
                alternativeText?: string | null
                name: string
              } | null
            } | null
          }
          primaryButtonLink: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          }
          secondaryButtonLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentSectionsBranches'
          title: string
          text?: string | null
          showAll: boolean
          branches?: {
            __typename?: 'BranchRelationResponseCollection'
            data: Array<{
              __typename: 'BranchEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Branch'
                address?: string | null
                title: string
                slug: string
              } | null
            }>
          } | null
        }
      | {
          __typename: 'ComponentSectionsCardsList'
          title: string
          text?: string | null
          cardsCardsList?: Array<{
            __typename?: 'ComponentItemsCardsListItem'
            title: string
            link: {
              __typename?: 'ComponentItemsLink'
              label?: string | null
              url?: string | null
              page?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename: 'PageEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Page'
                    title: string
                    slug: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              article?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                } | null
              } | null
              branch?: {
                __typename?: 'BranchEntityResponse'
                data?: {
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                } | null
              } | null
              document?: {
                __typename?: 'DocumentEntityResponse'
                data?: {
                  __typename: 'DocumentEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                } | null
              } | null
              service?: {
                __typename?: 'ServiceEntityResponse'
                data?: {
                  __typename: 'ServiceEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                } | null
              } | null
              workshop?: {
                __typename?: 'WorkshopEntityResponse'
                data?: {
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                } | null
              } | null
            }
          } | null> | null
        }
      | {
          __typename: 'ComponentSectionsColumns'
          title: string
          text?: string | null
          backgroundColorColumns: Enum_Componentsectionscolumns_Backgroundcolor
          items: Array<{
            __typename?: 'ComponentItemsColumnsItem'
            text?: string | null
            itemTitle?: string | null
            image?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  url: string
                  width?: number | null
                  height?: number | null
                  caption?: string | null
                  alternativeText?: string | null
                  name: string
                } | null
              } | null
            } | null
          } | null>
        }
      | {
          __typename: 'ComponentSectionsColumnsList'
          title: string
          backgroundColorColumnList?: Enum_Componentsectionscolumnslist_Backgroundcolor | null
          leftColumn?: Array<{
            __typename?: 'ComponentItemsColumnsListItem'
            content: string
            icon?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  url: string
                  width?: number | null
                  height?: number | null
                  caption?: string | null
                  alternativeText?: string | null
                  name: string
                } | null
              } | null
            } | null
          } | null> | null
          rightColumn?: Array<{
            __typename?: 'ComponentItemsColumnsListItem'
            content: string
            icon?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  url: string
                  width?: number | null
                  height?: number | null
                  caption?: string | null
                  alternativeText?: string | null
                  name: string
                } | null
              } | null
            } | null
          } | null> | null
        }
      | {
          __typename: 'ComponentSectionsDivider'
          backgroundColorDivider: Enum_Componentsectionsdivider_Backgroundcolor
        }
      | {
          __typename: 'ComponentSectionsFaq'
          title: string
          backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
          showMoreLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
          faqs?: {
            __typename?: 'FaqRelationResponseCollection'
            data: Array<{
              __typename?: 'FaqEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Faq'
                title: string
                content: string
                faqCategory?: {
                  __typename?: 'FaqCategoryEntityResponse'
                  data?: {
                    __typename: 'FaqCategoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'FaqCategory'
                      slug: string
                      title: string
                      faqs?: {
                        __typename?: 'FaqRelationResponseCollection'
                        data: Array<{
                          __typename?: 'FaqEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Faq'; title: string; content: string } | null
                        }>
                      } | null
                      banner?: {
                        __typename?: 'ComponentSectionsBanner'
                        title: string
                        text?: string | null
                        variant: Enum_Componentsectionsbanner_Variant
                        image: {
                          __typename?: 'UploadFileEntityResponse'
                          data?: {
                            __typename?: 'UploadFileEntity'
                            id?: string | null
                            attributes?: {
                              __typename?: 'UploadFile'
                              url: string
                              width?: number | null
                              height?: number | null
                              caption?: string | null
                              alternativeText?: string | null
                              name: string
                            } | null
                          } | null
                        }
                        primaryButtonLink: {
                          __typename?: 'ComponentItemsLink'
                          label?: string | null
                          url?: string | null
                          page?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename: 'PageEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Page'
                                title: string
                                slug: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                            parentPage?: {
                                              __typename?: 'PageEntityResponse'
                                              data?: {
                                                __typename?: 'PageEntity'
                                                attributes?: {
                                                  __typename?: 'Page'
                                                  slug: string
                                                  title: string
                                                  parentPage?: {
                                                    __typename?: 'PageEntityResponse'
                                                    data?: {
                                                      __typename?: 'PageEntity'
                                                      attributes?: {
                                                        __typename?: 'Page'
                                                        slug: string
                                                        title: string
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                          article?: {
                            __typename?: 'ArticleEntityResponse'
                            data?: {
                              __typename: 'ArticleEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Article'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          branch?: {
                            __typename?: 'BranchEntityResponse'
                            data?: {
                              __typename: 'BranchEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Branch'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          document?: {
                            __typename?: 'DocumentEntityResponse'
                            data?: {
                              __typename: 'DocumentEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Document'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          service?: {
                            __typename?: 'ServiceEntityResponse'
                            data?: {
                              __typename: 'ServiceEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Service'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          workshop?: {
                            __typename?: 'WorkshopEntityResponse'
                            data?: {
                              __typename: 'WorkshopEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Workshop'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                        }
                        secondaryButtonLink?: {
                          __typename?: 'ComponentItemsLink'
                          label?: string | null
                          url?: string | null
                          page?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename: 'PageEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Page'
                                title: string
                                slug: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                            parentPage?: {
                                              __typename?: 'PageEntityResponse'
                                              data?: {
                                                __typename?: 'PageEntity'
                                                attributes?: {
                                                  __typename?: 'Page'
                                                  slug: string
                                                  title: string
                                                  parentPage?: {
                                                    __typename?: 'PageEntityResponse'
                                                    data?: {
                                                      __typename?: 'PageEntity'
                                                      attributes?: {
                                                        __typename?: 'Page'
                                                        slug: string
                                                        title: string
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                          article?: {
                            __typename?: 'ArticleEntityResponse'
                            data?: {
                              __typename: 'ArticleEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Article'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          branch?: {
                            __typename?: 'BranchEntityResponse'
                            data?: {
                              __typename: 'BranchEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Branch'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          document?: {
                            __typename?: 'DocumentEntityResponse'
                            data?: {
                              __typename: 'DocumentEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Document'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          service?: {
                            __typename?: 'ServiceEntityResponse'
                            data?: {
                              __typename: 'ServiceEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Service'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          workshop?: {
                            __typename?: 'WorkshopEntityResponse'
                            data?: {
                              __typename: 'WorkshopEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Workshop'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }>
          } | null
        }
      | {
          __typename: 'ComponentSectionsFiles'
          title: string
          files: Array<{
            __typename?: 'ComponentItemsFileItem'
            title?: string | null
            media: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  url: string
                  name: string
                  ext?: string | null
                  size: number
                  createdAt?: any | null
                  updatedAt?: any | null
                } | null
              } | null
            }
          } | null>
        }
      | {
          __typename: 'ComponentSectionsImageAndText'
          title: string
          text?: string | null
          imagePositionImageAndText: Enum_Componentsectionsimageandtext_Imageposition
          backgroundColorImageAndText: Enum_Componentsectionsimageandtext_Backgroundcolor
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                width?: number | null
                height?: number | null
                caption?: string | null
                alternativeText?: string | null
                name: string
              } | null
            } | null
          }
          primaryButton?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
          secondaryButton?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentSectionsImageAndTextOverlapped'
          title: string
          text?: string | null
          imagePositionImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Imageposition
          backgroundColorImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                url: string
                width?: number | null
                height?: number | null
                caption?: string | null
                alternativeText?: string | null
                name: string
              } | null
            } | null
          }
          link?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentSectionsOrderedCards'
          title: string
          variantOrderedCards: Enum_Componentsectionsorderedcards_Variant
          cards: Array<{
            __typename?: 'ComponentItemsOrderedCardsItem'
            title: string
            text: string
            iconName?: string | null
          } | null>
        }
      | {
          __typename: 'ComponentSectionsRichtext'
          content?: string | null
          backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
        }
      | {
          __typename: 'ComponentSectionsTable'
          title: string
          text?: string | null
          anchorId?: string | null
        }
      | {
          __typename: 'ComponentSectionsWorkshops'
          title: string
          text?: string | null
          showAll: boolean
          workshops?: {
            __typename?: 'WorkshopRelationResponseCollection'
            data: Array<{
              __typename: 'WorkshopEntity'
              id?: string | null
              attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
            }>
          } | null
        }
      | { __typename: 'Error' }
      | null
    > | null
    parentPage?: {
      __typename?: 'PageEntityResponse'
      data?: {
        __typename?: 'PageEntity'
        attributes?: {
          __typename?: 'Page'
          slug: string
          title: string
          parentPage?: {
            __typename?: 'PageEntityResponse'
            data?: {
              __typename?: 'PageEntity'
              attributes?: {
                __typename?: 'Page'
                slug: string
                title: string
                parentPage?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename?: 'PageEntity'
                    attributes?: {
                      __typename?: 'Page'
                      slug: string
                      title: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: { __typename?: 'Page'; slug: string; title: string } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type PagesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type PagesQuery = {
  __typename?: 'Query'
  pages?: {
    __typename?: 'PageEntityResponseCollection'
    data: Array<{
      __typename: 'PageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Page'
        perex?: string | null
        title: string
        slug: string
        header?: Array<
          | {
              __typename: 'ComponentHeaderSectionsFeaturedNews'
              articlesTitle: string
              firstArticle?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Article'
                    perex?: string | null
                    addedAt: any
                    slug: string
                    title: string
                    coverMedia?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          url: string
                          width?: number | null
                          height?: number | null
                          caption?: string | null
                          alternativeText?: string | null
                          name: string
                        } | null
                      } | null
                    } | null
                    articleCategory?: {
                      __typename?: 'ArticleCategoryEntityResponse'
                      data?: {
                        __typename?: 'ArticleCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'ArticleCategory'
                          title: string
                          slug: string
                        } | null
                      } | null
                    } | null
                    tags?: {
                      __typename?: 'TagRelationResponseCollection'
                      data: Array<{
                        __typename?: 'TagEntity'
                        id?: string | null
                        attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
                      }>
                    } | null
                  } | null
                } | null
              } | null
              secondArticle?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Article'
                    perex?: string | null
                    addedAt: any
                    slug: string
                    title: string
                    coverMedia?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          url: string
                          width?: number | null
                          height?: number | null
                          caption?: string | null
                          alternativeText?: string | null
                          name: string
                        } | null
                      } | null
                    } | null
                    articleCategory?: {
                      __typename?: 'ArticleCategoryEntityResponse'
                      data?: {
                        __typename?: 'ArticleCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'ArticleCategory'
                          title: string
                          slug: string
                        } | null
                      } | null
                    } | null
                    tags?: {
                      __typename?: 'TagRelationResponseCollection'
                      data: Array<{
                        __typename?: 'TagEntity'
                        id?: string | null
                        attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
                      }>
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentHeaderSectionsGallery'
              medias: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                }>
              }
            }
          | { __typename: 'ComponentHeaderSectionsIcon'; iconName: string }
          | {
              __typename: 'ComponentHeaderSectionsImage'
              media: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
            }
          | {
              __typename: 'ComponentHeaderSectionsPickupDay'
              carouselTitle: string
              anchors?: Array<{
                __typename?: 'ComponentItemsAnchor'
                label: string
                targetId: string
              } | null> | null
              showMoreLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentHeaderSectionsSideImage'
              media: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
            }
          | { __typename: 'Error' }
          | null
        > | null
        sections?: Array<
          | {
              __typename: 'ComponentSectionsBanner'
              title: string
              text?: string | null
              variant: Enum_Componentsectionsbanner_Variant
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
              primaryButtonLink: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              }
              secondaryButtonLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentSectionsBranches'
              title: string
              text?: string | null
              showAll: boolean
              branches?: {
                __typename?: 'BranchRelationResponseCollection'
                data: Array<{
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Branch'
                    address?: string | null
                    title: string
                    slug: string
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsCardsList'
              title: string
              text?: string | null
              cardsCardsList?: Array<{
                __typename?: 'ComponentItemsCardsListItem'
                title: string
                link: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                }
              } | null> | null
            }
          | {
              __typename: 'ComponentSectionsColumns'
              title: string
              text?: string | null
              backgroundColorColumns: Enum_Componentsectionscolumns_Backgroundcolor
              items: Array<{
                __typename?: 'ComponentItemsColumnsItem'
                text?: string | null
                itemTitle?: string | null
                image?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                } | null
              } | null>
            }
          | {
              __typename: 'ComponentSectionsColumnsList'
              title: string
              backgroundColorColumnList?: Enum_Componentsectionscolumnslist_Backgroundcolor | null
              leftColumn?: Array<{
                __typename?: 'ComponentItemsColumnsListItem'
                content: string
                icon?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                } | null
              } | null> | null
              rightColumn?: Array<{
                __typename?: 'ComponentItemsColumnsListItem'
                content: string
                icon?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentSectionsDivider'
              backgroundColorDivider: Enum_Componentsectionsdivider_Backgroundcolor
            }
          | {
              __typename: 'ComponentSectionsFaq'
              title: string
              backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
              showMoreLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
              faqs?: {
                __typename?: 'FaqRelationResponseCollection'
                data: Array<{
                  __typename?: 'FaqEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Faq'
                    title: string
                    content: string
                    faqCategory?: {
                      __typename?: 'FaqCategoryEntityResponse'
                      data?: {
                        __typename: 'FaqCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'FaqCategory'
                          slug: string
                          title: string
                          faqs?: {
                            __typename?: 'FaqRelationResponseCollection'
                            data: Array<{
                              __typename?: 'FaqEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Faq'
                                title: string
                                content: string
                              } | null
                            }>
                          } | null
                          banner?: {
                            __typename?: 'ComponentSectionsBanner'
                            title: string
                            text?: string | null
                            variant: Enum_Componentsectionsbanner_Variant
                            image: {
                              __typename?: 'UploadFileEntityResponse'
                              data?: {
                                __typename?: 'UploadFileEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'UploadFile'
                                  url: string
                                  width?: number | null
                                  height?: number | null
                                  caption?: string | null
                                  alternativeText?: string | null
                                  name: string
                                } | null
                              } | null
                            }
                            primaryButtonLink: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            }
                            secondaryButtonLink?: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsFiles'
              title: string
              files: Array<{
                __typename?: 'ComponentItemsFileItem'
                title?: string | null
                media: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      name: string
                      ext?: string | null
                      size: number
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                }
              } | null>
            }
          | {
              __typename: 'ComponentSectionsImageAndText'
              title: string
              text?: string | null
              imagePositionImageAndText: Enum_Componentsectionsimageandtext_Imageposition
              backgroundColorImageAndText: Enum_Componentsectionsimageandtext_Backgroundcolor
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
              primaryButton?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
              secondaryButton?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentSectionsImageAndTextOverlapped'
              title: string
              text?: string | null
              imagePositionImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Imageposition
              backgroundColorImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
              link?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentSectionsOrderedCards'
              title: string
              variantOrderedCards: Enum_Componentsectionsorderedcards_Variant
              cards: Array<{
                __typename?: 'ComponentItemsOrderedCardsItem'
                title: string
                text: string
                iconName?: string | null
              } | null>
            }
          | {
              __typename: 'ComponentSectionsRichtext'
              content?: string | null
              backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
            }
          | {
              __typename: 'ComponentSectionsTable'
              title: string
              text?: string | null
              anchorId?: string | null
            }
          | {
              __typename: 'ComponentSectionsWorkshops'
              title: string
              text?: string | null
              showAll: boolean
              workshops?: {
                __typename?: 'WorkshopRelationResponseCollection'
                data: Array<{
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                }>
              } | null
            }
          | { __typename: 'Error' }
          | null
        > | null
        parentPage?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename?: 'PageEntity'
            attributes?: {
              __typename?: 'Page'
              slug: string
              title: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type PageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
  locale: Scalars['I18NLocaleCode']['input']
}>

export type PageBySlugQuery = {
  __typename?: 'Query'
  pages?: {
    __typename?: 'PageEntityResponseCollection'
    data: Array<{
      __typename: 'PageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Page'
        perex?: string | null
        title: string
        slug: string
        header?: Array<
          | {
              __typename: 'ComponentHeaderSectionsFeaturedNews'
              articlesTitle: string
              firstArticle?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Article'
                    perex?: string | null
                    addedAt: any
                    slug: string
                    title: string
                    coverMedia?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          url: string
                          width?: number | null
                          height?: number | null
                          caption?: string | null
                          alternativeText?: string | null
                          name: string
                        } | null
                      } | null
                    } | null
                    articleCategory?: {
                      __typename?: 'ArticleCategoryEntityResponse'
                      data?: {
                        __typename?: 'ArticleCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'ArticleCategory'
                          title: string
                          slug: string
                        } | null
                      } | null
                    } | null
                    tags?: {
                      __typename?: 'TagRelationResponseCollection'
                      data: Array<{
                        __typename?: 'TagEntity'
                        id?: string | null
                        attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
                      }>
                    } | null
                  } | null
                } | null
              } | null
              secondArticle?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Article'
                    perex?: string | null
                    addedAt: any
                    slug: string
                    title: string
                    coverMedia?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          url: string
                          width?: number | null
                          height?: number | null
                          caption?: string | null
                          alternativeText?: string | null
                          name: string
                        } | null
                      } | null
                    } | null
                    articleCategory?: {
                      __typename?: 'ArticleCategoryEntityResponse'
                      data?: {
                        __typename?: 'ArticleCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'ArticleCategory'
                          title: string
                          slug: string
                        } | null
                      } | null
                    } | null
                    tags?: {
                      __typename?: 'TagRelationResponseCollection'
                      data: Array<{
                        __typename?: 'TagEntity'
                        id?: string | null
                        attributes?: { __typename?: 'Tag'; title: string; slug: string } | null
                      }>
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentHeaderSectionsGallery'
              medias: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                }>
              }
            }
          | { __typename: 'ComponentHeaderSectionsIcon'; iconName: string }
          | {
              __typename: 'ComponentHeaderSectionsImage'
              media: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
            }
          | {
              __typename: 'ComponentHeaderSectionsPickupDay'
              carouselTitle: string
              anchors?: Array<{
                __typename?: 'ComponentItemsAnchor'
                label: string
                targetId: string
              } | null> | null
              showMoreLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentHeaderSectionsSideImage'
              media: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
            }
          | { __typename: 'Error' }
          | null
        > | null
        sections?: Array<
          | {
              __typename: 'ComponentSectionsBanner'
              title: string
              text?: string | null
              variant: Enum_Componentsectionsbanner_Variant
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
              primaryButtonLink: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              }
              secondaryButtonLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentSectionsBranches'
              title: string
              text?: string | null
              showAll: boolean
              branches?: {
                __typename?: 'BranchRelationResponseCollection'
                data: Array<{
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Branch'
                    address?: string | null
                    title: string
                    slug: string
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsCardsList'
              title: string
              text?: string | null
              cardsCardsList?: Array<{
                __typename?: 'ComponentItemsCardsListItem'
                title: string
                link: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                }
              } | null> | null
            }
          | {
              __typename: 'ComponentSectionsColumns'
              title: string
              text?: string | null
              backgroundColorColumns: Enum_Componentsectionscolumns_Backgroundcolor
              items: Array<{
                __typename?: 'ComponentItemsColumnsItem'
                text?: string | null
                itemTitle?: string | null
                image?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                } | null
              } | null>
            }
          | {
              __typename: 'ComponentSectionsColumnsList'
              title: string
              backgroundColorColumnList?: Enum_Componentsectionscolumnslist_Backgroundcolor | null
              leftColumn?: Array<{
                __typename?: 'ComponentItemsColumnsListItem'
                content: string
                icon?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                } | null
              } | null> | null
              rightColumn?: Array<{
                __typename?: 'ComponentItemsColumnsListItem'
                content: string
                icon?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      width?: number | null
                      height?: number | null
                      caption?: string | null
                      alternativeText?: string | null
                      name: string
                    } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentSectionsDivider'
              backgroundColorDivider: Enum_Componentsectionsdivider_Backgroundcolor
            }
          | {
              __typename: 'ComponentSectionsFaq'
              title: string
              backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
              showMoreLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
              faqs?: {
                __typename?: 'FaqRelationResponseCollection'
                data: Array<{
                  __typename?: 'FaqEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Faq'
                    title: string
                    content: string
                    faqCategory?: {
                      __typename?: 'FaqCategoryEntityResponse'
                      data?: {
                        __typename: 'FaqCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'FaqCategory'
                          slug: string
                          title: string
                          faqs?: {
                            __typename?: 'FaqRelationResponseCollection'
                            data: Array<{
                              __typename?: 'FaqEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Faq'
                                title: string
                                content: string
                              } | null
                            }>
                          } | null
                          banner?: {
                            __typename?: 'ComponentSectionsBanner'
                            title: string
                            text?: string | null
                            variant: Enum_Componentsectionsbanner_Variant
                            image: {
                              __typename?: 'UploadFileEntityResponse'
                              data?: {
                                __typename?: 'UploadFileEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'UploadFile'
                                  url: string
                                  width?: number | null
                                  height?: number | null
                                  caption?: string | null
                                  alternativeText?: string | null
                                  name: string
                                } | null
                              } | null
                            }
                            primaryButtonLink: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            }
                            secondaryButtonLink?: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsFiles'
              title: string
              files: Array<{
                __typename?: 'ComponentItemsFileItem'
                title?: string | null
                media: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      name: string
                      ext?: string | null
                      size: number
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                }
              } | null>
            }
          | {
              __typename: 'ComponentSectionsImageAndText'
              title: string
              text?: string | null
              imagePositionImageAndText: Enum_Componentsectionsimageandtext_Imageposition
              backgroundColorImageAndText: Enum_Componentsectionsimageandtext_Backgroundcolor
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
              primaryButton?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
              secondaryButton?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentSectionsImageAndTextOverlapped'
              title: string
              text?: string | null
              imagePositionImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Imageposition
              backgroundColorImageAndTextOverlapped: Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    url: string
                    width?: number | null
                    height?: number | null
                    caption?: string | null
                    alternativeText?: string | null
                    name: string
                  } | null
                } | null
              }
              link?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentSectionsOrderedCards'
              title: string
              variantOrderedCards: Enum_Componentsectionsorderedcards_Variant
              cards: Array<{
                __typename?: 'ComponentItemsOrderedCardsItem'
                title: string
                text: string
                iconName?: string | null
              } | null>
            }
          | {
              __typename: 'ComponentSectionsRichtext'
              content?: string | null
              backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
            }
          | {
              __typename: 'ComponentSectionsTable'
              title: string
              text?: string | null
              anchorId?: string | null
            }
          | {
              __typename: 'ComponentSectionsWorkshops'
              title: string
              text?: string | null
              showAll: boolean
              workshops?: {
                __typename?: 'WorkshopRelationResponseCollection'
                data: Array<{
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                }>
              } | null
            }
          | { __typename: 'Error' }
          | null
        > | null
        parentPage?: {
          __typename?: 'PageEntityResponse'
          data?: {
            __typename?: 'PageEntity'
            attributes?: {
              __typename?: 'Page'
              slug: string
              title: string
              parentPage?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename?: 'PageEntity'
                  attributes?: {
                    __typename?: 'Page'
                    slug: string
                    title: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type ServiceSlugEntityFragment = {
  __typename: 'ServiceEntity'
  id?: string | null
  attributes?: { __typename?: 'Service'; title: string; slug: string } | null
}

export type ServiceEntityFragment = {
  __typename: 'ServiceEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Service'
    title: string
    slug: string
    serviceCategories?: {
      __typename?: 'ServiceCategoryRelationResponseCollection'
      data: Array<{
        __typename?: 'ServiceCategoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'ServiceCategory'
          title: string
          slug: string
          categoryColor: Enum_Servicecategory_Categorycolor
        } | null
      }>
    } | null
    image?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          url: string
          width?: number | null
          height?: number | null
          caption?: string | null
          alternativeText?: string | null
          name: string
        } | null
      } | null
    } | null
    sections?: Array<
      | {
          __typename: 'ComponentSectionsCardsList'
          title: string
          text?: string | null
          cardsCardsList?: Array<{
            __typename?: 'ComponentItemsCardsListItem'
            title: string
            link: {
              __typename?: 'ComponentItemsLink'
              label?: string | null
              url?: string | null
              page?: {
                __typename?: 'PageEntityResponse'
                data?: {
                  __typename: 'PageEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Page'
                    title: string
                    slug: string
                    parentPage?: {
                      __typename?: 'PageEntityResponse'
                      data?: {
                        __typename?: 'PageEntity'
                        attributes?: {
                          __typename?: 'Page'
                          slug: string
                          title: string
                          parentPage?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename?: 'PageEntity'
                              attributes?: {
                                __typename?: 'Page'
                                slug: string
                                title: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              article?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename: 'ArticleEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                } | null
              } | null
              branch?: {
                __typename?: 'BranchEntityResponse'
                data?: {
                  __typename: 'BranchEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                } | null
              } | null
              document?: {
                __typename?: 'DocumentEntityResponse'
                data?: {
                  __typename: 'DocumentEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                } | null
              } | null
              service?: {
                __typename?: 'ServiceEntityResponse'
                data?: {
                  __typename: 'ServiceEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                } | null
              } | null
              workshop?: {
                __typename?: 'WorkshopEntityResponse'
                data?: {
                  __typename: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                } | null
              } | null
            }
          } | null> | null
        }
      | {
          __typename: 'ComponentSectionsFaq'
          title: string
          backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
          showMoreLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
          faqs?: {
            __typename?: 'FaqRelationResponseCollection'
            data: Array<{
              __typename?: 'FaqEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Faq'
                title: string
                content: string
                faqCategory?: {
                  __typename?: 'FaqCategoryEntityResponse'
                  data?: {
                    __typename: 'FaqCategoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'FaqCategory'
                      slug: string
                      title: string
                      faqs?: {
                        __typename?: 'FaqRelationResponseCollection'
                        data: Array<{
                          __typename?: 'FaqEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Faq'; title: string; content: string } | null
                        }>
                      } | null
                      banner?: {
                        __typename?: 'ComponentSectionsBanner'
                        title: string
                        text?: string | null
                        variant: Enum_Componentsectionsbanner_Variant
                        image: {
                          __typename?: 'UploadFileEntityResponse'
                          data?: {
                            __typename?: 'UploadFileEntity'
                            id?: string | null
                            attributes?: {
                              __typename?: 'UploadFile'
                              url: string
                              width?: number | null
                              height?: number | null
                              caption?: string | null
                              alternativeText?: string | null
                              name: string
                            } | null
                          } | null
                        }
                        primaryButtonLink: {
                          __typename?: 'ComponentItemsLink'
                          label?: string | null
                          url?: string | null
                          page?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename: 'PageEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Page'
                                title: string
                                slug: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                            parentPage?: {
                                              __typename?: 'PageEntityResponse'
                                              data?: {
                                                __typename?: 'PageEntity'
                                                attributes?: {
                                                  __typename?: 'Page'
                                                  slug: string
                                                  title: string
                                                  parentPage?: {
                                                    __typename?: 'PageEntityResponse'
                                                    data?: {
                                                      __typename?: 'PageEntity'
                                                      attributes?: {
                                                        __typename?: 'Page'
                                                        slug: string
                                                        title: string
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                          article?: {
                            __typename?: 'ArticleEntityResponse'
                            data?: {
                              __typename: 'ArticleEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Article'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          branch?: {
                            __typename?: 'BranchEntityResponse'
                            data?: {
                              __typename: 'BranchEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Branch'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          document?: {
                            __typename?: 'DocumentEntityResponse'
                            data?: {
                              __typename: 'DocumentEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Document'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          service?: {
                            __typename?: 'ServiceEntityResponse'
                            data?: {
                              __typename: 'ServiceEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Service'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          workshop?: {
                            __typename?: 'WorkshopEntityResponse'
                            data?: {
                              __typename: 'WorkshopEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Workshop'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                        }
                        secondaryButtonLink?: {
                          __typename?: 'ComponentItemsLink'
                          label?: string | null
                          url?: string | null
                          page?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename: 'PageEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Page'
                                title: string
                                slug: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                            parentPage?: {
                                              __typename?: 'PageEntityResponse'
                                              data?: {
                                                __typename?: 'PageEntity'
                                                attributes?: {
                                                  __typename?: 'Page'
                                                  slug: string
                                                  title: string
                                                  parentPage?: {
                                                    __typename?: 'PageEntityResponse'
                                                    data?: {
                                                      __typename?: 'PageEntity'
                                                      attributes?: {
                                                        __typename?: 'Page'
                                                        slug: string
                                                        title: string
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                          article?: {
                            __typename?: 'ArticleEntityResponse'
                            data?: {
                              __typename: 'ArticleEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Article'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          branch?: {
                            __typename?: 'BranchEntityResponse'
                            data?: {
                              __typename: 'BranchEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Branch'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          document?: {
                            __typename?: 'DocumentEntityResponse'
                            data?: {
                              __typename: 'DocumentEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Document'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          service?: {
                            __typename?: 'ServiceEntityResponse'
                            data?: {
                              __typename: 'ServiceEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Service'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          workshop?: {
                            __typename?: 'WorkshopEntityResponse'
                            data?: {
                              __typename: 'WorkshopEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Workshop'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }>
          } | null
        }
      | {
          __typename: 'ComponentSectionsFiles'
          title: string
          files: Array<{
            __typename?: 'ComponentItemsFileItem'
            title?: string | null
            media: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  url: string
                  name: string
                  ext?: string | null
                  size: number
                  createdAt?: any | null
                  updatedAt?: any | null
                } | null
              } | null
            }
          } | null>
        }
      | {
          __typename: 'ComponentSectionsRichtext'
          content?: string | null
          backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
        }
      | { __typename: 'Error' }
      | null
    > | null
  } | null
}

export type ServicesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input']
}>

export type ServicesQuery = {
  __typename?: 'Query'
  services?: {
    __typename?: 'ServiceEntityResponseCollection'
    data: Array<{
      __typename: 'ServiceEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Service'
        title: string
        slug: string
        serviceCategories?: {
          __typename?: 'ServiceCategoryRelationResponseCollection'
          data: Array<{
            __typename?: 'ServiceCategoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'ServiceCategory'
              title: string
              slug: string
              categoryColor: Enum_Servicecategory_Categorycolor
            } | null
          }>
        } | null
        image?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        sections?: Array<
          | {
              __typename: 'ComponentSectionsCardsList'
              title: string
              text?: string | null
              cardsCardsList?: Array<{
                __typename?: 'ComponentItemsCardsListItem'
                title: string
                link: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                }
              } | null> | null
            }
          | {
              __typename: 'ComponentSectionsFaq'
              title: string
              backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
              showMoreLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
              faqs?: {
                __typename?: 'FaqRelationResponseCollection'
                data: Array<{
                  __typename?: 'FaqEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Faq'
                    title: string
                    content: string
                    faqCategory?: {
                      __typename?: 'FaqCategoryEntityResponse'
                      data?: {
                        __typename: 'FaqCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'FaqCategory'
                          slug: string
                          title: string
                          faqs?: {
                            __typename?: 'FaqRelationResponseCollection'
                            data: Array<{
                              __typename?: 'FaqEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Faq'
                                title: string
                                content: string
                              } | null
                            }>
                          } | null
                          banner?: {
                            __typename?: 'ComponentSectionsBanner'
                            title: string
                            text?: string | null
                            variant: Enum_Componentsectionsbanner_Variant
                            image: {
                              __typename?: 'UploadFileEntityResponse'
                              data?: {
                                __typename?: 'UploadFileEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'UploadFile'
                                  url: string
                                  width?: number | null
                                  height?: number | null
                                  caption?: string | null
                                  alternativeText?: string | null
                                  name: string
                                } | null
                              } | null
                            }
                            primaryButtonLink: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            }
                            secondaryButtonLink?: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsFiles'
              title: string
              files: Array<{
                __typename?: 'ComponentItemsFileItem'
                title?: string | null
                media: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      name: string
                      ext?: string | null
                      size: number
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                }
              } | null>
            }
          | {
              __typename: 'ComponentSectionsRichtext'
              content?: string | null
              backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
            }
          | { __typename: 'Error' }
          | null
        > | null
      } | null
    }>
  } | null
}

export type ServiceBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
  locale: Scalars['I18NLocaleCode']['input']
}>

export type ServiceBySlugQuery = {
  __typename?: 'Query'
  services?: {
    __typename?: 'ServiceEntityResponseCollection'
    data: Array<{
      __typename: 'ServiceEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Service'
        title: string
        slug: string
        serviceCategories?: {
          __typename?: 'ServiceCategoryRelationResponseCollection'
          data: Array<{
            __typename?: 'ServiceCategoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'ServiceCategory'
              title: string
              slug: string
              categoryColor: Enum_Servicecategory_Categorycolor
            } | null
          }>
        } | null
        image?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              width?: number | null
              height?: number | null
              caption?: string | null
              alternativeText?: string | null
              name: string
            } | null
          } | null
        } | null
        sections?: Array<
          | {
              __typename: 'ComponentSectionsCardsList'
              title: string
              text?: string | null
              cardsCardsList?: Array<{
                __typename?: 'ComponentItemsCardsListItem'
                title: string
                link: {
                  __typename?: 'ComponentItemsLink'
                  label?: string | null
                  url?: string | null
                  page?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename: 'PageEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'Page'
                        title: string
                        slug: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                  article?: {
                    __typename?: 'ArticleEntityResponse'
                    data?: {
                      __typename: 'ArticleEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                    } | null
                  } | null
                  branch?: {
                    __typename?: 'BranchEntityResponse'
                    data?: {
                      __typename: 'BranchEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                    } | null
                  } | null
                  document?: {
                    __typename?: 'DocumentEntityResponse'
                    data?: {
                      __typename: 'DocumentEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                    } | null
                  } | null
                  service?: {
                    __typename?: 'ServiceEntityResponse'
                    data?: {
                      __typename: 'ServiceEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                    } | null
                  } | null
                  workshop?: {
                    __typename?: 'WorkshopEntityResponse'
                    data?: {
                      __typename: 'WorkshopEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                    } | null
                  } | null
                }
              } | null> | null
            }
          | {
              __typename: 'ComponentSectionsFaq'
              title: string
              backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
              showMoreLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
              faqs?: {
                __typename?: 'FaqRelationResponseCollection'
                data: Array<{
                  __typename?: 'FaqEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Faq'
                    title: string
                    content: string
                    faqCategory?: {
                      __typename?: 'FaqCategoryEntityResponse'
                      data?: {
                        __typename: 'FaqCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'FaqCategory'
                          slug: string
                          title: string
                          faqs?: {
                            __typename?: 'FaqRelationResponseCollection'
                            data: Array<{
                              __typename?: 'FaqEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Faq'
                                title: string
                                content: string
                              } | null
                            }>
                          } | null
                          banner?: {
                            __typename?: 'ComponentSectionsBanner'
                            title: string
                            text?: string | null
                            variant: Enum_Componentsectionsbanner_Variant
                            image: {
                              __typename?: 'UploadFileEntityResponse'
                              data?: {
                                __typename?: 'UploadFileEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'UploadFile'
                                  url: string
                                  width?: number | null
                                  height?: number | null
                                  caption?: string | null
                                  alternativeText?: string | null
                                  name: string
                                } | null
                              } | null
                            }
                            primaryButtonLink: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            }
                            secondaryButtonLink?: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsFiles'
              title: string
              files: Array<{
                __typename?: 'ComponentItemsFileItem'
                title?: string | null
                media: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      name: string
                      ext?: string | null
                      size: number
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                }
              } | null>
            }
          | {
              __typename: 'ComponentSectionsRichtext'
              content?: string | null
              backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
            }
          | { __typename: 'Error' }
          | null
        > | null
      } | null
    }>
  } | null
}

export type WorkshopSlugEntityFragment = {
  __typename: 'WorkshopEntity'
  id?: string | null
  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
}

export type WorkshopEntityFragment = {
  __typename: 'WorkshopEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Workshop'
    title: string
    slug: string
    sections?: Array<
      | {
          __typename: 'ComponentSectionsFaq'
          title: string
          backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
          showMoreLink?: {
            __typename?: 'ComponentItemsLink'
            label?: string | null
            url?: string | null
            page?: {
              __typename?: 'PageEntityResponse'
              data?: {
                __typename: 'PageEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'Page'
                  title: string
                  slug: string
                  parentPage?: {
                    __typename?: 'PageEntityResponse'
                    data?: {
                      __typename?: 'PageEntity'
                      attributes?: {
                        __typename?: 'Page'
                        slug: string
                        title: string
                        parentPage?: {
                          __typename?: 'PageEntityResponse'
                          data?: {
                            __typename?: 'PageEntity'
                            attributes?: {
                              __typename?: 'Page'
                              slug: string
                              title: string
                              parentPage?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename?: 'PageEntity'
                                  attributes?: {
                                    __typename?: 'Page'
                                    slug: string
                                    title: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename: 'ArticleEntity'
                id?: string | null
                attributes?: { __typename?: 'Article'; slug: string; title: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename: 'BranchEntity'
                id?: string | null
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename: 'DocumentEntity'
                id?: string | null
                attributes?: { __typename?: 'Document'; slug: string; title: string } | null
              } | null
            } | null
            service?: {
              __typename?: 'ServiceEntityResponse'
              data?: {
                __typename: 'ServiceEntity'
                id?: string | null
                attributes?: { __typename?: 'Service'; title: string; slug: string } | null
              } | null
            } | null
            workshop?: {
              __typename?: 'WorkshopEntityResponse'
              data?: {
                __typename: 'WorkshopEntity'
                id?: string | null
                attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
              } | null
            } | null
          } | null
          faqs?: {
            __typename?: 'FaqRelationResponseCollection'
            data: Array<{
              __typename?: 'FaqEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Faq'
                title: string
                content: string
                faqCategory?: {
                  __typename?: 'FaqCategoryEntityResponse'
                  data?: {
                    __typename: 'FaqCategoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'FaqCategory'
                      slug: string
                      title: string
                      faqs?: {
                        __typename?: 'FaqRelationResponseCollection'
                        data: Array<{
                          __typename?: 'FaqEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Faq'; title: string; content: string } | null
                        }>
                      } | null
                      banner?: {
                        __typename?: 'ComponentSectionsBanner'
                        title: string
                        text?: string | null
                        variant: Enum_Componentsectionsbanner_Variant
                        image: {
                          __typename?: 'UploadFileEntityResponse'
                          data?: {
                            __typename?: 'UploadFileEntity'
                            id?: string | null
                            attributes?: {
                              __typename?: 'UploadFile'
                              url: string
                              width?: number | null
                              height?: number | null
                              caption?: string | null
                              alternativeText?: string | null
                              name: string
                            } | null
                          } | null
                        }
                        primaryButtonLink: {
                          __typename?: 'ComponentItemsLink'
                          label?: string | null
                          url?: string | null
                          page?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename: 'PageEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Page'
                                title: string
                                slug: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                            parentPage?: {
                                              __typename?: 'PageEntityResponse'
                                              data?: {
                                                __typename?: 'PageEntity'
                                                attributes?: {
                                                  __typename?: 'Page'
                                                  slug: string
                                                  title: string
                                                  parentPage?: {
                                                    __typename?: 'PageEntityResponse'
                                                    data?: {
                                                      __typename?: 'PageEntity'
                                                      attributes?: {
                                                        __typename?: 'Page'
                                                        slug: string
                                                        title: string
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                          article?: {
                            __typename?: 'ArticleEntityResponse'
                            data?: {
                              __typename: 'ArticleEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Article'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          branch?: {
                            __typename?: 'BranchEntityResponse'
                            data?: {
                              __typename: 'BranchEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Branch'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          document?: {
                            __typename?: 'DocumentEntityResponse'
                            data?: {
                              __typename: 'DocumentEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Document'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          service?: {
                            __typename?: 'ServiceEntityResponse'
                            data?: {
                              __typename: 'ServiceEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Service'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          workshop?: {
                            __typename?: 'WorkshopEntityResponse'
                            data?: {
                              __typename: 'WorkshopEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Workshop'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                        }
                        secondaryButtonLink?: {
                          __typename?: 'ComponentItemsLink'
                          label?: string | null
                          url?: string | null
                          page?: {
                            __typename?: 'PageEntityResponse'
                            data?: {
                              __typename: 'PageEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Page'
                                title: string
                                slug: string
                                parentPage?: {
                                  __typename?: 'PageEntityResponse'
                                  data?: {
                                    __typename?: 'PageEntity'
                                    attributes?: {
                                      __typename?: 'Page'
                                      slug: string
                                      title: string
                                      parentPage?: {
                                        __typename?: 'PageEntityResponse'
                                        data?: {
                                          __typename?: 'PageEntity'
                                          attributes?: {
                                            __typename?: 'Page'
                                            slug: string
                                            title: string
                                            parentPage?: {
                                              __typename?: 'PageEntityResponse'
                                              data?: {
                                                __typename?: 'PageEntity'
                                                attributes?: {
                                                  __typename?: 'Page'
                                                  slug: string
                                                  title: string
                                                  parentPage?: {
                                                    __typename?: 'PageEntityResponse'
                                                    data?: {
                                                      __typename?: 'PageEntity'
                                                      attributes?: {
                                                        __typename?: 'Page'
                                                        slug: string
                                                        title: string
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                          article?: {
                            __typename?: 'ArticleEntityResponse'
                            data?: {
                              __typename: 'ArticleEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Article'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          branch?: {
                            __typename?: 'BranchEntityResponse'
                            data?: {
                              __typename: 'BranchEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Branch'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          document?: {
                            __typename?: 'DocumentEntityResponse'
                            data?: {
                              __typename: 'DocumentEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Document'
                                slug: string
                                title: string
                              } | null
                            } | null
                          } | null
                          service?: {
                            __typename?: 'ServiceEntityResponse'
                            data?: {
                              __typename: 'ServiceEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Service'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                          workshop?: {
                            __typename?: 'WorkshopEntityResponse'
                            data?: {
                              __typename: 'WorkshopEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Workshop'
                                title: string
                                slug: string
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }>
          } | null
        }
      | {
          __typename: 'ComponentSectionsFiles'
          title: string
          files: Array<{
            __typename?: 'ComponentItemsFileItem'
            title?: string | null
            media: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  url: string
                  name: string
                  ext?: string | null
                  size: number
                  createdAt?: any | null
                  updatedAt?: any | null
                } | null
              } | null
            }
          } | null>
        }
      | {
          __typename: 'ComponentSectionsRichtext'
          content?: string | null
          backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
        }
      | { __typename: 'Error' }
      | null
    > | null
  } | null
}

export type WorkshopsQueryVariables = Exact<{ [key: string]: never }>

export type WorkshopsQuery = {
  __typename?: 'Query'
  workshops?: {
    __typename?: 'WorkshopEntityResponseCollection'
    data: Array<{
      __typename: 'WorkshopEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Workshop'
        title: string
        slug: string
        sections?: Array<
          | {
              __typename: 'ComponentSectionsFaq'
              title: string
              backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
              showMoreLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
              faqs?: {
                __typename?: 'FaqRelationResponseCollection'
                data: Array<{
                  __typename?: 'FaqEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Faq'
                    title: string
                    content: string
                    faqCategory?: {
                      __typename?: 'FaqCategoryEntityResponse'
                      data?: {
                        __typename: 'FaqCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'FaqCategory'
                          slug: string
                          title: string
                          faqs?: {
                            __typename?: 'FaqRelationResponseCollection'
                            data: Array<{
                              __typename?: 'FaqEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Faq'
                                title: string
                                content: string
                              } | null
                            }>
                          } | null
                          banner?: {
                            __typename?: 'ComponentSectionsBanner'
                            title: string
                            text?: string | null
                            variant: Enum_Componentsectionsbanner_Variant
                            image: {
                              __typename?: 'UploadFileEntityResponse'
                              data?: {
                                __typename?: 'UploadFileEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'UploadFile'
                                  url: string
                                  width?: number | null
                                  height?: number | null
                                  caption?: string | null
                                  alternativeText?: string | null
                                  name: string
                                } | null
                              } | null
                            }
                            primaryButtonLink: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            }
                            secondaryButtonLink?: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsFiles'
              title: string
              files: Array<{
                __typename?: 'ComponentItemsFileItem'
                title?: string | null
                media: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      name: string
                      ext?: string | null
                      size: number
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                }
              } | null>
            }
          | {
              __typename: 'ComponentSectionsRichtext'
              content?: string | null
              backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
            }
          | { __typename: 'Error' }
          | null
        > | null
      } | null
    }>
  } | null
}

export type WorkshopBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type WorkshopBySlugQuery = {
  __typename?: 'Query'
  workshops?: {
    __typename?: 'WorkshopEntityResponseCollection'
    data: Array<{
      __typename: 'WorkshopEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Workshop'
        title: string
        slug: string
        sections?: Array<
          | {
              __typename: 'ComponentSectionsFaq'
              title: string
              backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor
              showMoreLink?: {
                __typename?: 'ComponentItemsLink'
                label?: string | null
                url?: string | null
                page?: {
                  __typename?: 'PageEntityResponse'
                  data?: {
                    __typename: 'PageEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Page'
                      title: string
                      slug: string
                      parentPage?: {
                        __typename?: 'PageEntityResponse'
                        data?: {
                          __typename?: 'PageEntity'
                          attributes?: {
                            __typename?: 'Page'
                            slug: string
                            title: string
                            parentPage?: {
                              __typename?: 'PageEntityResponse'
                              data?: {
                                __typename?: 'PageEntity'
                                attributes?: {
                                  __typename?: 'Page'
                                  slug: string
                                  title: string
                                  parentPage?: {
                                    __typename?: 'PageEntityResponse'
                                    data?: {
                                      __typename?: 'PageEntity'
                                      attributes?: {
                                        __typename?: 'Page'
                                        slug: string
                                        title: string
                                        parentPage?: {
                                          __typename?: 'PageEntityResponse'
                                          data?: {
                                            __typename?: 'PageEntity'
                                            attributes?: {
                                              __typename?: 'Page'
                                              slug: string
                                              title: string
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename: 'ArticleEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Article'; slug: string; title: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename: 'BranchEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename: 'DocumentEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Document'; slug: string; title: string } | null
                  } | null
                } | null
                service?: {
                  __typename?: 'ServiceEntityResponse'
                  data?: {
                    __typename: 'ServiceEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Service'; title: string; slug: string } | null
                  } | null
                } | null
                workshop?: {
                  __typename?: 'WorkshopEntityResponse'
                  data?: {
                    __typename: 'WorkshopEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
              faqs?: {
                __typename?: 'FaqRelationResponseCollection'
                data: Array<{
                  __typename?: 'FaqEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Faq'
                    title: string
                    content: string
                    faqCategory?: {
                      __typename?: 'FaqCategoryEntityResponse'
                      data?: {
                        __typename: 'FaqCategoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'FaqCategory'
                          slug: string
                          title: string
                          faqs?: {
                            __typename?: 'FaqRelationResponseCollection'
                            data: Array<{
                              __typename?: 'FaqEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Faq'
                                title: string
                                content: string
                              } | null
                            }>
                          } | null
                          banner?: {
                            __typename?: 'ComponentSectionsBanner'
                            title: string
                            text?: string | null
                            variant: Enum_Componentsectionsbanner_Variant
                            image: {
                              __typename?: 'UploadFileEntityResponse'
                              data?: {
                                __typename?: 'UploadFileEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'UploadFile'
                                  url: string
                                  width?: number | null
                                  height?: number | null
                                  caption?: string | null
                                  alternativeText?: string | null
                                  name: string
                                } | null
                              } | null
                            }
                            primaryButtonLink: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            }
                            secondaryButtonLink?: {
                              __typename?: 'ComponentItemsLink'
                              label?: string | null
                              url?: string | null
                              page?: {
                                __typename?: 'PageEntityResponse'
                                data?: {
                                  __typename: 'PageEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Page'
                                    title: string
                                    slug: string
                                    parentPage?: {
                                      __typename?: 'PageEntityResponse'
                                      data?: {
                                        __typename?: 'PageEntity'
                                        attributes?: {
                                          __typename?: 'Page'
                                          slug: string
                                          title: string
                                          parentPage?: {
                                            __typename?: 'PageEntityResponse'
                                            data?: {
                                              __typename?: 'PageEntity'
                                              attributes?: {
                                                __typename?: 'Page'
                                                slug: string
                                                title: string
                                                parentPage?: {
                                                  __typename?: 'PageEntityResponse'
                                                  data?: {
                                                    __typename?: 'PageEntity'
                                                    attributes?: {
                                                      __typename?: 'Page'
                                                      slug: string
                                                      title: string
                                                      parentPage?: {
                                                        __typename?: 'PageEntityResponse'
                                                        data?: {
                                                          __typename?: 'PageEntity'
                                                          attributes?: {
                                                            __typename?: 'Page'
                                                            slug: string
                                                            title: string
                                                          } | null
                                                        } | null
                                                      } | null
                                                    } | null
                                                  } | null
                                                } | null
                                              } | null
                                            } | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                              article?: {
                                __typename?: 'ArticleEntityResponse'
                                data?: {
                                  __typename: 'ArticleEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Article'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              branch?: {
                                __typename?: 'BranchEntityResponse'
                                data?: {
                                  __typename: 'BranchEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Branch'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              document?: {
                                __typename?: 'DocumentEntityResponse'
                                data?: {
                                  __typename: 'DocumentEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Document'
                                    slug: string
                                    title: string
                                  } | null
                                } | null
                              } | null
                              service?: {
                                __typename?: 'ServiceEntityResponse'
                                data?: {
                                  __typename: 'ServiceEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Service'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                              workshop?: {
                                __typename?: 'WorkshopEntityResponse'
                                data?: {
                                  __typename: 'WorkshopEntity'
                                  id?: string | null
                                  attributes?: {
                                    __typename?: 'Workshop'
                                    title: string
                                    slug: string
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsFiles'
              title: string
              files: Array<{
                __typename?: 'ComponentItemsFileItem'
                title?: string | null
                media: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                      name: string
                      ext?: string | null
                      size: number
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                }
              } | null>
            }
          | {
              __typename: 'ComponentSectionsRichtext'
              content?: string | null
              backgroundColorRichtext: Enum_Componentsectionsrichtext_Backgroundcolor
            }
          | { __typename: 'Error' }
          | null
        > | null
      } | null
    }>
  } | null
}

export const UploadImageSrcEntityFragmentDoc = gql`
  fragment UploadImageSrcEntity on UploadFileEntity {
    id
    attributes {
      url
    }
  }
`
export const ParentPageFragmentDoc = gql`
  fragment ParentPage on Page {
    slug
    title
  }
`
export const PageParentPagesFragmentDoc = gql`
  fragment PageParentPages on PageEntity {
    attributes {
      ...ParentPage
      parentPage {
        data {
          attributes {
            ...ParentPage
            parentPage {
              data {
                attributes {
                  ...ParentPage
                  parentPage {
                    data {
                      attributes {
                        ...ParentPage
                        parentPage {
                          data {
                            attributes {
                              ...ParentPage
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${ParentPageFragmentDoc}
`
export const PageSlugEntityFragmentDoc = gql`
  fragment PageSlugEntity on PageEntity {
    ...PageParentPages
    __typename
    id
    attributes {
      title
      slug
    }
  }
  ${PageParentPagesFragmentDoc}
`
export const NavigationEntityFragmentDoc = gql`
  fragment NavigationEntity on NavigationEntity {
    attributes {
      articlesParentPage {
        data {
          ...PageSlugEntity
        }
      }
      documentsParentPage {
        data {
          ...PageSlugEntity
        }
      }
      faqCategoriesParentPage {
        data {
          ...PageSlugEntity
        }
      }
      servicesParentPage {
        data {
          ...PageSlugEntity
        }
      }
      workshopsParentPage {
        data {
          ...PageSlugEntity
        }
      }
    }
  }
  ${PageSlugEntityFragmentDoc}
`
export const BranchMapHeaderSectionFragmentDoc = gql`
  fragment BranchMapHeaderSection on ComponentHeaderSectionsBranchMap {
    branches(pagination: { limit: -1 }) {
      data {
        id
      }
    }
  }
`
export const DocumentSlugEntityFragmentDoc = gql`
  fragment DocumentSlugEntity on DocumentEntity {
    __typename
    id
    attributes {
      slug
      title
    }
  }
`
export const DocumentCategoryEntityFragmentDoc = gql`
  fragment DocumentCategoryEntity on DocumentCategoryEntity {
    id
    attributes {
      title
      slug
    }
  }
`
export const UploadFileEntityFragmentDoc = gql`
  fragment UploadFileEntity on UploadFileEntity {
    id
    attributes {
      url
      name
      ext
      size
      createdAt
      updatedAt
    }
  }
`
export const FileItemFragmentDoc = gql`
  fragment FileItem on ComponentItemsFileItem {
    title
    media {
      data {
        ...UploadFileEntity
      }
    }
  }
  ${UploadFileEntityFragmentDoc}
`
export const DocumentEntityFragmentDoc = gql`
  fragment DocumentEntity on DocumentEntity {
    ...DocumentSlugEntity
    attributes {
      title
      slug
      publishedAt
      identificationNumber
      supplier
      priceWithoutTax
      documentCategory {
        data {
          ...DocumentCategoryEntity
        }
      }
      files {
        ...FileItem
      }
      description
    }
  }
  ${DocumentSlugEntityFragmentDoc}
  ${DocumentCategoryEntityFragmentDoc}
  ${FileItemFragmentDoc}
`
export const ArticleSlugEntityFragmentDoc = gql`
  fragment ArticleSlugEntity on ArticleEntity {
    __typename
    id
    attributes {
      slug
      title
    }
  }
`
export const BranchSlugEntityFragmentDoc = gql`
  fragment BranchSlugEntity on BranchEntity {
    __typename
    id
    attributes {
      title
      slug
    }
  }
`
export const ServiceSlugEntityFragmentDoc = gql`
  fragment ServiceSlugEntity on ServiceEntity {
    __typename
    id
    attributes {
      title
      slug
    }
  }
`
export const WorkshopSlugEntityFragmentDoc = gql`
  fragment WorkshopSlugEntity on WorkshopEntity {
    __typename
    id
    attributes {
      title
      slug
    }
  }
`
export const LinkFragmentDoc = gql`
  fragment Link on ComponentItemsLink {
    label
    url
    page {
      data {
        ...PageSlugEntity
      }
    }
    article {
      data {
        ...ArticleSlugEntity
      }
    }
    branch {
      data {
        ...BranchSlugEntity
      }
    }
    document {
      data {
        ...DocumentSlugEntity
      }
    }
    service {
      data {
        ...ServiceSlugEntity
      }
    }
    workshop {
      data {
        ...WorkshopSlugEntity
      }
    }
  }
  ${PageSlugEntityFragmentDoc}
  ${ArticleSlugEntityFragmentDoc}
  ${BranchSlugEntityFragmentDoc}
  ${DocumentSlugEntityFragmentDoc}
  ${ServiceSlugEntityFragmentDoc}
  ${WorkshopSlugEntityFragmentDoc}
`
export const FooterColumnItemFragmentDoc = gql`
  fragment FooterColumnItem on ComponentItemsFooterColumn {
    title
    links {
      ...Link
    }
  }
  ${LinkFragmentDoc}
`
export const FooterFragmentDoc = gql`
  fragment Footer on Footer {
    text
    facebookUrl
    instagramUrl
    columns {
      ...FooterColumnItem
    }
    bottomLinks {
      ...Link
    }
  }
  ${FooterColumnItemFragmentDoc}
  ${LinkFragmentDoc}
`
export const FooterEntityFragmentDoc = gql`
  fragment FooterEntity on FooterEntity {
    attributes {
      ...Footer
    }
  }
  ${FooterFragmentDoc}
`
export const UploadImageEntityFragmentDoc = gql`
  fragment UploadImageEntity on UploadFileEntity {
    id
    attributes {
      url
      width
      height
      caption
      alternativeText
      name
    }
  }
`
export const SlideItemFragmentDoc = gql`
  fragment SlideItem on ComponentItemsSlide {
    title
    text
    media {
      data {
        ...UploadImageEntity
      }
    }
    backgroundColor
  }
  ${UploadImageEntityFragmentDoc}
`
export const HeroMainTileFragmentDoc = gql`
  fragment HeroMainTile on ComponentItemsHeroMainTile {
    text
    link {
      ...Link
    }
  }
  ${LinkFragmentDoc}
`
export const HeroSmallTileFragmentDoc = gql`
  fragment HeroSmallTile on ComponentItemsHeroSmallTile {
    icon
    link {
      ...Link
    }
  }
  ${LinkFragmentDoc}
`
export const HeroHomepageSectionFragmentDoc = gql`
  fragment HeroHomepageSection on ComponentSectionsHeroHomepageSection {
    slides {
      ...SlideItem
    }
    mainTiles {
      ...HeroMainTile
    }
    smallTiles {
      ...HeroSmallTile
    }
  }
  ${SlideItemFragmentDoc}
  ${HeroMainTileFragmentDoc}
  ${HeroSmallTileFragmentDoc}
`
export const ArticleCategoryEntityFragmentDoc = gql`
  fragment ArticleCategoryEntity on ArticleCategoryEntity {
    id
    attributes {
      title
      slug
    }
  }
`
export const TagEntityFragmentDoc = gql`
  fragment TagEntity on TagEntity {
    id
    attributes {
      title
      slug
    }
  }
`
export const ArticleCardEntityFragmentDoc = gql`
  fragment ArticleCardEntity on ArticleEntity {
    ...ArticleSlugEntity
    attributes {
      perex
      coverMedia {
        data {
          ...UploadImageEntity
        }
      }
      addedAt
      articleCategory {
        data {
          ...ArticleCategoryEntity
        }
      }
      tags {
        data {
          ...TagEntity
        }
      }
    }
  }
  ${ArticleSlugEntityFragmentDoc}
  ${UploadImageEntityFragmentDoc}
  ${ArticleCategoryEntityFragmentDoc}
  ${TagEntityFragmentDoc}
`
export const ArticleEntityFragmentDoc = gql`
  fragment ArticleEntity on ArticleEntity {
    ...ArticleCardEntity
    attributes {
      content
    }
  }
  ${ArticleCardEntityFragmentDoc}
`
export const ArticlesHomepageSectionFragmentDoc = gql`
  fragment ArticlesHomepageSection on ComponentSectionsArticlesHomepageSection {
    title
    text
    articles {
      data {
        ...ArticleEntity
      }
    }
    showMoreLink {
      ...Link
    }
  }
  ${ArticleEntityFragmentDoc}
  ${LinkFragmentDoc}
`
export const BranchEntityFragmentDoc = gql`
  fragment BranchEntity on BranchEntity {
    ...BranchSlugEntity
    attributes {
      address
    }
  }
  ${BranchSlugEntityFragmentDoc}
`
export const KoloHomepageSectionFragmentDoc = gql`
  fragment KoloHomepageSection on ComponentSectionsKoloHomepageSection {
    title
    text
    mainCards {
      ...Link
    }
    branchesTitle
    branches {
      data {
        ...BranchEntity
      }
    }
    showMoreLink {
      ...Link
    }
  }
  ${LinkFragmentDoc}
  ${BranchEntityFragmentDoc}
`
export const HomepageServiceTileFragmentDoc = gql`
  fragment HomepageServiceTile on ComponentItemsHomepageServiceTile {
    title
    text
    link {
      ...Link
    }
  }
  ${LinkFragmentDoc}
`
export const ServicesHomepageSectionFragmentDoc = gql`
  fragment ServicesHomepageSection on ComponentSectionsServicesHomepageSection {
    title
    text
    tiles {
      ...HomepageServiceTile
    }
    showMoreLink {
      ...Link
    }
  }
  ${HomepageServiceTileFragmentDoc}
  ${LinkFragmentDoc}
`
export const HomepageEntityFragmentDoc = gql`
  fragment HomepageEntity on HomepageEntity {
    id
    attributes {
      heroSection {
        ...HeroHomepageSection
      }
      articlesSection {
        ...ArticlesHomepageSection
      }
      koloSection {
        ...KoloHomepageSection
      }
      servicesSection {
        ...ServicesHomepageSection
      }
    }
  }
  ${HeroHomepageSectionFragmentDoc}
  ${ArticlesHomepageSectionFragmentDoc}
  ${KoloHomepageSectionFragmentDoc}
  ${ServicesHomepageSectionFragmentDoc}
`
export const MenuLinkFragmentDoc = gql`
  fragment MenuLink on ComponentMenuMenuLink {
    id
    label
    url
    page {
      data {
        ...PageSlugEntity
      }
    }
    branch {
      data {
        ...BranchEntity
      }
    }
    workshop {
      data {
        ...WorkshopSlugEntity
      }
    }
  }
  ${PageSlugEntityFragmentDoc}
  ${BranchEntityFragmentDoc}
  ${WorkshopSlugEntityFragmentDoc}
`
export const MenuSectionFragmentDoc = gql`
  fragment MenuSection on ComponentMenuMenuSection {
    id
    label
    colSpan
    multicolumnBehaviour
    links {
      ...MenuLink
    }
    hasDivider
    specialSectionType
  }
  ${MenuLinkFragmentDoc}
`
export const MenuItemFragmentDoc = gql`
  fragment MenuItem on ComponentMenuMenuItem {
    id
    label
    sections {
      ...MenuSection
    }
    seeAllLink {
      ...Link
    }
  }
  ${MenuSectionFragmentDoc}
  ${LinkFragmentDoc}
`
export const MenuFragmentDoc = gql`
  fragment Menu on Menu {
    menuItems {
      ...MenuItem
    }
  }
  ${MenuItemFragmentDoc}
`
export const MenuEntityFragmentDoc = gql`
  fragment MenuEntity on MenuEntity {
    attributes {
      ...Menu
    }
  }
  ${MenuFragmentDoc}
`
export const OpeningHoursItemFragmentDoc = gql`
  fragment OpeningHoursItem on ComponentItemsOpeningHoursItem {
    label
    value
  }
`
export const OpeningTimeEntityFragmentDoc = gql`
  fragment OpeningTimeEntity on OpeningTimeEntity {
    id
    attributes {
      internalName
      openingHours {
        ...OpeningHoursItem
      }
    }
  }
  ${OpeningHoursItemFragmentDoc}
`
export const ImageHeaderSectionFragmentDoc = gql`
  fragment ImageHeaderSection on ComponentHeaderSectionsImage {
    media {
      data {
        ...UploadImageEntity
      }
    }
  }
  ${UploadImageEntityFragmentDoc}
`
export const SideImageHeaderSectionFragmentDoc = gql`
  fragment SideImageHeaderSection on ComponentHeaderSectionsSideImage {
    media {
      data {
        ...UploadImageEntity
      }
    }
  }
  ${UploadImageEntityFragmentDoc}
`
export const FeaturedNewsHeaderSectionFragmentDoc = gql`
  fragment FeaturedNewsHeaderSection on ComponentHeaderSectionsFeaturedNews {
    articlesTitle
    firstArticle {
      data {
        ...ArticleCardEntity
      }
    }
    secondArticle {
      data {
        ...ArticleCardEntity
      }
    }
  }
  ${ArticleCardEntityFragmentDoc}
`
export const GalleryHeaderSectionFragmentDoc = gql`
  fragment GalleryHeaderSection on ComponentHeaderSectionsGallery {
    medias(pagination: { limit: -1 }) {
      data {
        ...UploadImageEntity
      }
    }
  }
  ${UploadImageEntityFragmentDoc}
`
export const IconHeaderSectionFragmentDoc = gql`
  fragment IconHeaderSection on ComponentHeaderSectionsIcon {
    iconName
  }
`
export const AnchorFragmentDoc = gql`
  fragment Anchor on ComponentItemsAnchor {
    label
    targetId
  }
`
export const PickupDayHeaderSectionFragmentDoc = gql`
  fragment PickupDayHeaderSection on ComponentHeaderSectionsPickupDay {
    carouselTitle
    anchors {
      ...Anchor
    }
    showMoreLink {
      ...Link
    }
  }
  ${AnchorFragmentDoc}
  ${LinkFragmentDoc}
`
export const HeaderSectionsFragmentDoc = gql`
  fragment HeaderSections on PageHeaderDynamicZone {
    __typename
    ... on ComponentHeaderSectionsImage {
      ...ImageHeaderSection
    }
    ... on ComponentHeaderSectionsSideImage {
      ...SideImageHeaderSection
    }
    ... on ComponentHeaderSectionsFeaturedNews {
      ...FeaturedNewsHeaderSection
    }
    ... on ComponentHeaderSectionsGallery {
      ...GalleryHeaderSection
    }
    ... on ComponentHeaderSectionsIcon {
      ...IconHeaderSection
    }
    ... on ComponentHeaderSectionsPickupDay {
      ...PickupDayHeaderSection
    }
  }
  ${ImageHeaderSectionFragmentDoc}
  ${SideImageHeaderSectionFragmentDoc}
  ${FeaturedNewsHeaderSectionFragmentDoc}
  ${GalleryHeaderSectionFragmentDoc}
  ${IconHeaderSectionFragmentDoc}
  ${PickupDayHeaderSectionFragmentDoc}
`
export const RichtextSectionFragmentDoc = gql`
  fragment RichtextSection on ComponentSectionsRichtext {
    content
    backgroundColorRichtext: backgroundColor
  }
`
export const OrderedCardsSectionFragmentDoc = gql`
  fragment OrderedCardsSection on ComponentSectionsOrderedCards {
    title
    variantOrderedCards: variant
    cards {
      title
      text
      iconName
    }
  }
`
export const ImageAndTextSectionFragmentDoc = gql`
  fragment ImageAndTextSection on ComponentSectionsImageAndText {
    title
    text
    imagePositionImageAndText: imagePosition
    backgroundColorImageAndText: backgroundColor
    image {
      data {
        ...UploadImageEntity
      }
    }
    primaryButton {
      ...Link
    }
    secondaryButton {
      ...Link
    }
  }
  ${UploadImageEntityFragmentDoc}
  ${LinkFragmentDoc}
`
export const ColumnsSectionFragmentDoc = gql`
  fragment ColumnsSection on ComponentSectionsColumns {
    title
    text
    backgroundColorColumns: backgroundColor
    items {
      itemTitle: title
      text
      image {
        data {
          ...UploadImageEntity
        }
      }
    }
  }
  ${UploadImageEntityFragmentDoc}
`
export const ImageAndTextOverlappedSectionFragmentDoc = gql`
  fragment ImageAndTextOverlappedSection on ComponentSectionsImageAndTextOverlapped {
    title
    text
    imagePositionImageAndTextOverlapped: imagePosition
    backgroundColorImageAndTextOverlapped: backgroundColor
    image {
      data {
        ...UploadImageEntity
      }
    }
    link {
      ...Link
    }
  }
  ${UploadImageEntityFragmentDoc}
  ${LinkFragmentDoc}
`
export const BranchesSectionFragmentDoc = gql`
  fragment BranchesSection on ComponentSectionsBranches {
    title
    text
    showAll
    branches {
      data {
        ...BranchEntity
      }
    }
  }
  ${BranchEntityFragmentDoc}
`
export const WorkshopsSectionFragmentDoc = gql`
  fragment WorkshopsSection on ComponentSectionsWorkshops {
    title
    text
    showAll
    workshops {
      data {
        ...WorkshopSlugEntity
      }
    }
  }
  ${WorkshopSlugEntityFragmentDoc}
`
export const ColumnsListSectionFragmentDoc = gql`
  fragment ColumnsListSection on ComponentSectionsColumnsList {
    title
    backgroundColorColumnList: backgroundColor
    leftColumn {
      icon {
        data {
          ...UploadImageEntity
        }
      }
      content
    }
    rightColumn {
      icon {
        data {
          ...UploadImageEntity
        }
      }
      content
    }
  }
  ${UploadImageEntityFragmentDoc}
`
export const TableSectionFragmentDoc = gql`
  fragment TableSection on ComponentSectionsTable {
    title
    text
    anchorId
  }
`
export const FaqCategorySlugEntityFragmentDoc = gql`
  fragment FaqCategorySlugEntity on FaqCategoryEntity {
    __typename
    id
    attributes {
      slug
      title
    }
  }
`
export const BannerSectionFragmentDoc = gql`
  fragment BannerSection on ComponentSectionsBanner {
    title
    text
    variant
    image {
      data {
        ...UploadImageEntity
      }
    }
    primaryButtonLink {
      ...Link
    }
    secondaryButtonLink {
      ...Link
    }
  }
  ${UploadImageEntityFragmentDoc}
  ${LinkFragmentDoc}
`
export const FaqCategoryEntityFragmentDoc = gql`
  fragment FaqCategoryEntity on FaqCategoryEntity {
    ...FaqCategorySlugEntity
    attributes {
      faqs {
        data {
          id
          attributes {
            title
            content
          }
        }
      }
      banner {
        ...BannerSection
      }
    }
  }
  ${FaqCategorySlugEntityFragmentDoc}
  ${BannerSectionFragmentDoc}
`
export const FaqEntityFragmentDoc = gql`
  fragment FaqEntity on FaqEntity {
    id
    attributes {
      title
      content
      faqCategory {
        data {
          ...FaqCategoryEntity
        }
      }
    }
  }
  ${FaqCategoryEntityFragmentDoc}
`
export const FaqSectionFragmentDoc = gql`
  fragment FaqSection on ComponentSectionsFaq {
    title
    backgroundColorFaq: backgroundColor
    showMoreLink {
      ...Link
    }
    faqs {
      data {
        ...FaqEntity
      }
    }
  }
  ${LinkFragmentDoc}
  ${FaqEntityFragmentDoc}
`
export const FilesSectionFragmentDoc = gql`
  fragment FilesSection on ComponentSectionsFiles {
    title
    files {
      ...FileItem
    }
  }
  ${FileItemFragmentDoc}
`
export const DividerSectionFragmentDoc = gql`
  fragment DividerSection on ComponentSectionsDivider {
    backgroundColorDivider: backgroundColor
  }
`
export const CardsListSectionFragmentDoc = gql`
  fragment CardsListSection on ComponentSectionsCardsList {
    title
    text
    cardsCardsList: cards {
      title
      link {
        ...Link
      }
    }
  }
  ${LinkFragmentDoc}
`
export const PageSectionsFragmentDoc = gql`
  fragment PageSections on PageSectionsDynamicZone {
    __typename
    ... on ComponentSectionsRichtext {
      ...RichtextSection
    }
    ... on ComponentSectionsOrderedCards {
      ...OrderedCardsSection
    }
    ... on ComponentSectionsImageAndText {
      ...ImageAndTextSection
    }
    ... on ComponentSectionsColumns {
      ...ColumnsSection
    }
    ... on ComponentSectionsImageAndTextOverlapped {
      ...ImageAndTextOverlappedSection
    }
    ... on ComponentSectionsBranches {
      ...BranchesSection
    }
    ... on ComponentSectionsWorkshops {
      ...WorkshopsSection
    }
    ... on ComponentSectionsColumnsList {
      ...ColumnsListSection
    }
    ... on ComponentSectionsTable {
      ...TableSection
    }
    ... on ComponentSectionsFaq {
      ...FaqSection
    }
    ... on ComponentSectionsFiles {
      ...FilesSection
    }
    ... on ComponentSectionsBanner {
      ...BannerSection
    }
    ... on ComponentSectionsDivider {
      ...DividerSection
    }
    ... on ComponentSectionsCardsList {
      ...CardsListSection
    }
  }
  ${RichtextSectionFragmentDoc}
  ${OrderedCardsSectionFragmentDoc}
  ${ImageAndTextSectionFragmentDoc}
  ${ColumnsSectionFragmentDoc}
  ${ImageAndTextOverlappedSectionFragmentDoc}
  ${BranchesSectionFragmentDoc}
  ${WorkshopsSectionFragmentDoc}
  ${ColumnsListSectionFragmentDoc}
  ${TableSectionFragmentDoc}
  ${FaqSectionFragmentDoc}
  ${FilesSectionFragmentDoc}
  ${BannerSectionFragmentDoc}
  ${DividerSectionFragmentDoc}
  ${CardsListSectionFragmentDoc}
`
export const PageEntityFragmentDoc = gql`
  fragment PageEntity on PageEntity {
    ...PageSlugEntity
    attributes {
      perex
      header {
        ...HeaderSections
      }
      sections {
        ...PageSections
      }
    }
  }
  ${PageSlugEntityFragmentDoc}
  ${HeaderSectionsFragmentDoc}
  ${PageSectionsFragmentDoc}
`
export const ServiceCategoryEntityFragmentDoc = gql`
  fragment ServiceCategoryEntity on ServiceCategoryEntity {
    id
    attributes {
      title
      slug
      categoryColor
    }
  }
`
export const ServiceEntityFragmentDoc = gql`
  fragment ServiceEntity on ServiceEntity {
    ...ServiceSlugEntity
    attributes {
      serviceCategories {
        data {
          ...ServiceCategoryEntity
        }
      }
      image {
        data {
          ...UploadImageEntity
        }
      }
      sections {
        ...PageSections
      }
    }
  }
  ${ServiceSlugEntityFragmentDoc}
  ${ServiceCategoryEntityFragmentDoc}
  ${UploadImageEntityFragmentDoc}
  ${PageSectionsFragmentDoc}
`
export const WorkshopEntityFragmentDoc = gql`
  fragment WorkshopEntity on WorkshopEntity {
    ...WorkshopSlugEntity
    attributes {
      sections {
        ...PageSections
      }
    }
  }
  ${WorkshopSlugEntityFragmentDoc}
  ${PageSectionsFragmentDoc}
`
export const TagsDocument = gql`
  query Tags {
    tags {
      data {
        ...TagEntity
      }
    }
  }
  ${TagEntityFragmentDoc}
`
export const TagBySlugDocument = gql`
  query TagBySlug($slug: String!) {
    tags(filters: { slug: { eq: $slug } }) {
      data {
        ...TagEntity
      }
    }
  }
  ${TagEntityFragmentDoc}
`
export const ArticleCategoriesDocument = gql`
  query ArticleCategories($locale: I18NLocaleCode!) {
    articleCategories(locale: $locale) {
      data {
        ...ArticleCategoryEntity
      }
    }
  }
  ${ArticleCategoryEntityFragmentDoc}
`
export const ArticleCategoryBySlugDocument = gql`
  query ArticleCategoryBySlug($slug: String!, $locale: I18NLocaleCode!) {
    articleCategories(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        ...ArticleCategoryEntity
      }
    }
  }
  ${ArticleCategoryEntityFragmentDoc}
`
export const DocumentCategoriesDocument = gql`
  query DocumentCategories($locale: I18NLocaleCode!) {
    documentCategories(locale: $locale) {
      data {
        ...DocumentCategoryEntity
      }
    }
  }
  ${DocumentCategoryEntityFragmentDoc}
`
export const DocumentCategoryBySlugDocument = gql`
  query DocumentCategoryBySlug($slug: String!, $locale: I18NLocaleCode!) {
    documentCategories(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        ...DocumentCategoryEntity
      }
    }
  }
  ${DocumentCategoryEntityFragmentDoc}
`
export const FaqCategoriesDocument = gql`
  query FaqCategories($locale: I18NLocaleCode!) {
    faqCategories(locale: $locale) {
      data {
        ...FaqCategoryEntity
      }
    }
  }
  ${FaqCategoryEntityFragmentDoc}
`
export const FaqCategoryBySlugDocument = gql`
  query FaqCategoryBySlug($slug: String!, $locale: I18NLocaleCode!) {
    faqCategories(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        ...FaqCategoryEntity
      }
    }
  }
  ${FaqCategoryEntityFragmentDoc}
`
export const ServiceCategoriesDocument = gql`
  query ServiceCategories($locale: I18NLocaleCode!) {
    serviceCategories(locale: $locale) {
      data {
        ...ServiceCategoryEntity
      }
    }
  }
  ${ServiceCategoryEntityFragmentDoc}
`
export const ServiceCategoryBySlugDocument = gql`
  query ServiceCategoryBySlug($slug: String!, $locale: I18NLocaleCode!) {
    serviceCategories(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        ...ServiceCategoryEntity
      }
    }
  }
  ${ServiceCategoryEntityFragmentDoc}
`
export const GeneralDocument = gql`
  query General($locale: I18NLocaleCode!) {
    navigation(locale: $locale) {
      data {
        ...NavigationEntity
      }
    }
    footer(locale: $locale) {
      data {
        ...FooterEntity
      }
    }
    menu(locale: $locale) {
      data {
        ...MenuEntity
      }
    }
  }
  ${NavigationEntityFragmentDoc}
  ${FooterEntityFragmentDoc}
  ${MenuEntityFragmentDoc}
`
export const ArticlesDocument = gql`
  query Articles {
    articles {
      data {
        ...ArticleEntity
      }
    }
  }
  ${ArticleEntityFragmentDoc}
`
export const ArticleBySlugDocument = gql`
  query ArticleBySlug($slug: String!, $locale: I18NLocaleCode!) {
    articles(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        ...ArticleEntity
      }
    }
  }
  ${ArticleEntityFragmentDoc}
`
export const LatestArticlesDocument = gql`
  query LatestArticles($limit: Int!, $locale: I18NLocaleCode!) {
    articles(sort: "addedAt:desc", pagination: { limit: $limit }, locale: $locale) {
      data {
        ...ArticleEntity
      }
    }
  }
  ${ArticleEntityFragmentDoc}
`
export const BranchesDocument = gql`
  query Branches($locale: I18NLocaleCode!) {
    branches(locale: $locale) {
      data {
        ...BranchEntity
      }
    }
  }
  ${BranchEntityFragmentDoc}
`
export const BranchBySlugDocument = gql`
  query BranchBySlug($slug: String!, $locale: I18NLocaleCode!) {
    branches(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        ...BranchEntity
      }
    }
  }
  ${BranchEntityFragmentDoc}
`
export const DocumentsDocument = gql`
  query Documents {
    documents {
      data {
        ...DocumentEntity
      }
    }
  }
  ${DocumentEntityFragmentDoc}
`
export const DocumentBySlugDocument = gql`
  query DocumentBySlug($slug: String!) {
    documents(filters: { slug: { eq: $slug } }) {
      data {
        ...DocumentEntity
      }
    }
  }
  ${DocumentEntityFragmentDoc}
`
export const FaqsDocument = gql`
  query Faqs($locale: I18NLocaleCode!) {
    faqs(locale: $locale) {
      data {
        ...FaqEntity
      }
    }
  }
  ${FaqEntityFragmentDoc}
`
export const HomepageDocument = gql`
  query Homepage($locale: I18NLocaleCode!) {
    homepage(locale: $locale) {
      data {
        ...HomepageEntity
      }
    }
  }
  ${HomepageEntityFragmentDoc}
`
export const PagesDocument = gql`
  query Pages($locale: I18NLocaleCode!) {
    pages(locale: $locale) {
      data {
        ...PageEntity
      }
    }
  }
  ${PageEntityFragmentDoc}
`
export const PageBySlugDocument = gql`
  query PageBySlug($slug: String!, $locale: I18NLocaleCode!) {
    pages(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        ...PageEntity
      }
    }
  }
  ${PageEntityFragmentDoc}
`
export const ServicesDocument = gql`
  query Services($locale: I18NLocaleCode!) {
    services(locale: $locale) {
      data {
        ...ServiceEntity
      }
    }
  }
  ${ServiceEntityFragmentDoc}
`
export const ServiceBySlugDocument = gql`
  query ServiceBySlug($slug: String!, $locale: I18NLocaleCode!) {
    services(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        ...ServiceEntity
      }
    }
  }
  ${ServiceEntityFragmentDoc}
`
export const WorkshopsDocument = gql`
  query Workshops {
    workshops {
      data {
        ...WorkshopEntity
      }
    }
  }
  ${WorkshopEntityFragmentDoc}
`
export const WorkshopBySlugDocument = gql`
  query WorkshopBySlug($slug: String!) {
    workshops(filters: { slug: { eq: $slug } }) {
      data {
        ...WorkshopEntity
      }
    }
  }
  ${WorkshopEntityFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) =>
  action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Tags(
      variables?: TagsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<TagsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TagsQuery>(TagsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Tags',
        'query',
        variables,
      )
    },
    TagBySlug(
      variables: TagBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<TagBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TagBySlugQuery>(TagBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'TagBySlug',
        'query',
        variables,
      )
    },
    ArticleCategories(
      variables: ArticleCategoriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ArticleCategoriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ArticleCategoriesQuery>(ArticleCategoriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ArticleCategories',
        'query',
        variables,
      )
    },
    ArticleCategoryBySlug(
      variables: ArticleCategoryBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ArticleCategoryBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ArticleCategoryBySlugQuery>(ArticleCategoryBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ArticleCategoryBySlug',
        'query',
        variables,
      )
    },
    DocumentCategories(
      variables: DocumentCategoriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DocumentCategoriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DocumentCategoriesQuery>(DocumentCategoriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'DocumentCategories',
        'query',
        variables,
      )
    },
    DocumentCategoryBySlug(
      variables: DocumentCategoryBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DocumentCategoryBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DocumentCategoryBySlugQuery>(DocumentCategoryBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'DocumentCategoryBySlug',
        'query',
        variables,
      )
    },
    FaqCategories(
      variables: FaqCategoriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<FaqCategoriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FaqCategoriesQuery>(FaqCategoriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'FaqCategories',
        'query',
        variables,
      )
    },
    FaqCategoryBySlug(
      variables: FaqCategoryBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<FaqCategoryBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FaqCategoryBySlugQuery>(FaqCategoryBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'FaqCategoryBySlug',
        'query',
        variables,
      )
    },
    ServiceCategories(
      variables: ServiceCategoriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ServiceCategoriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ServiceCategoriesQuery>(ServiceCategoriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ServiceCategories',
        'query',
        variables,
      )
    },
    ServiceCategoryBySlug(
      variables: ServiceCategoryBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ServiceCategoryBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ServiceCategoryBySlugQuery>(ServiceCategoryBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ServiceCategoryBySlug',
        'query',
        variables,
      )
    },
    General(
      variables: GeneralQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GeneralQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GeneralQuery>(GeneralDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'General',
        'query',
        variables,
      )
    },
    Articles(
      variables?: ArticlesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ArticlesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ArticlesQuery>(ArticlesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Articles',
        'query',
        variables,
      )
    },
    ArticleBySlug(
      variables: ArticleBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ArticleBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ArticleBySlugQuery>(ArticleBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ArticleBySlug',
        'query',
        variables,
      )
    },
    LatestArticles(
      variables: LatestArticlesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<LatestArticlesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LatestArticlesQuery>(LatestArticlesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'LatestArticles',
        'query',
        variables,
      )
    },
    Branches(
      variables: BranchesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<BranchesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<BranchesQuery>(BranchesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Branches',
        'query',
        variables,
      )
    },
    BranchBySlug(
      variables: BranchBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<BranchBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<BranchBySlugQuery>(BranchBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'BranchBySlug',
        'query',
        variables,
      )
    },
    Documents(
      variables?: DocumentsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DocumentsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DocumentsQuery>(DocumentsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Documents',
        'query',
        variables,
      )
    },
    DocumentBySlug(
      variables: DocumentBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DocumentBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DocumentBySlugQuery>(DocumentBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'DocumentBySlug',
        'query',
        variables,
      )
    },
    Faqs(
      variables: FaqsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<FaqsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FaqsQuery>(FaqsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Faqs',
        'query',
        variables,
      )
    },
    Homepage(
      variables: HomepageQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<HomepageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<HomepageQuery>(HomepageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Homepage',
        'query',
        variables,
      )
    },
    Pages(
      variables: PagesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<PagesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PagesQuery>(PagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Pages',
        'query',
        variables,
      )
    },
    PageBySlug(
      variables: PageBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<PageBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PageBySlugQuery>(PageBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'PageBySlug',
        'query',
        variables,
      )
    },
    Services(
      variables: ServicesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ServicesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ServicesQuery>(ServicesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Services',
        'query',
        variables,
      )
    },
    ServiceBySlug(
      variables: ServiceBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ServiceBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ServiceBySlugQuery>(ServiceBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'ServiceBySlug',
        'query',
        variables,
      )
    },
    Workshops(
      variables?: WorkshopsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<WorkshopsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<WorkshopsQuery>(WorkshopsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Workshops',
        'query',
        variables,
      )
    },
    WorkshopBySlug(
      variables: WorkshopBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<WorkshopBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<WorkshopBySlugQuery>(WorkshopBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'WorkshopBySlug',
        'query',
        variables,
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
