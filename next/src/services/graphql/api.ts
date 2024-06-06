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
  Upload: { input: any; output: any }
  WorkshopSectionsDynamicZoneInput: { input: any; output: any }
}

export type Article = {
  __typename?: 'Article'
  addedAt: Scalars['DateTime']['output']
  blocks?: Maybe<Scalars['JSON']['output']>
  category?: Maybe<CategoryEntityResponse>
  coverMedia?: Maybe<UploadFileEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<ArticleRelationResponseCollection>
  perex?: Maybe<Scalars['String']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ArticleLocalizationsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
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
  blocks?: InputMaybe<JsonFilterInput>
  category?: InputMaybe<CategoryFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ArticleFiltersInput>
  not?: InputMaybe<ArticleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  perex?: InputMaybe<StringFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ArticleInput = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>
  blocks?: InputMaybe<Scalars['JSON']['input']>
  category?: InputMaybe<Scalars['ID']['input']>
  coverMedia?: InputMaybe<Scalars['ID']['input']>
  perex?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
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

export type Category = {
  __typename?: 'Category'
  articles?: Maybe<ArticleRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<CategoryRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type CategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CategoryEntity = {
  __typename?: 'CategoryEntity'
  attributes?: Maybe<Category>
  id?: Maybe<Scalars['ID']['output']>
}

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse'
  data?: Maybe<CategoryEntity>
}

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection'
  data: Array<CategoryEntity>
  meta: ResponseCollectionMeta
}

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  articles?: InputMaybe<ArticleFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<CategoryFiltersInput>
  not?: InputMaybe<CategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection'
  data: Array<CategoryEntity>
}

export type ComponentHeaderSectionsBasic = {
  __typename?: 'ComponentHeaderSectionsBasic'
  id: Scalars['ID']['output']
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
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
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentHeaderSectionsGallery = {
  __typename?: 'ComponentHeaderSectionsGallery'
  id: Scalars['ID']['output']
  medias: UploadFileRelationResponseCollection
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentHeaderSectionsGalleryMediasArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentHeaderSectionsIcon = {
  __typename?: 'ComponentHeaderSectionsIcon'
  icon: UploadFileEntityResponse
  id: Scalars['ID']['output']
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentHeaderSectionsImage = {
  __typename?: 'ComponentHeaderSectionsImage'
  id: Scalars['ID']['output']
  media: UploadFileEntityResponse
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ComponentHeaderSectionsSideImage = {
  __typename?: 'ComponentHeaderSectionsSideImage'
  id: Scalars['ID']['output']
  media: UploadFileEntityResponse
  text?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
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

export type ComponentItemsLink = {
  __typename?: 'ComponentItemsLink'
  article?: Maybe<ArticleEntityResponse>
  branch?: Maybe<BranchEntityResponse>
  document?: Maybe<DocumentEntityResponse>
  id: Scalars['ID']['output']
  label?: Maybe<Scalars['String']['output']>
  page?: Maybe<PageEntityResponse>
  url?: Maybe<Scalars['String']['output']>
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
  url?: InputMaybe<StringFilterInput>
}

export type ComponentItemsLinkInput = {
  article?: InputMaybe<Scalars['ID']['input']>
  branch?: InputMaybe<Scalars['ID']['input']>
  document?: InputMaybe<Scalars['ID']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['ID']['input']>
  url?: InputMaybe<Scalars['String']['input']>
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
  id: Scalars['ID']['output']
  text: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type ComponentItemsOrderedCardsItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentItemsOrderedCardsItemFiltersInput>>>
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

export type ComponentSectionsOrderedCards = {
  __typename?: 'ComponentSectionsOrderedCards'
  cards: Array<Maybe<ComponentItemsOrderedCardsItem>>
  id: Scalars['ID']['output']
  title: Scalars['String']['output']
}

export type ComponentSectionsOrderedCardsCardsArgs = {
  filters?: InputMaybe<ComponentItemsOrderedCardsItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSectionsRichtext = {
  __typename?: 'ComponentSectionsRichtext'
  content?: Maybe<Scalars['JSON']['output']>
  id: Scalars['ID']['output']
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
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
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
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<DocumentFiltersInput>
  or?: InputMaybe<Array<InputMaybe<DocumentFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type DocumentInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export enum Enum_Componentsectionscolumns_Backgroundcolor {
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

export type Error = {
  __typename?: 'Error'
  code: Scalars['String']['output']
  message?: Maybe<Scalars['String']['output']>
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

export type GenericMorph =
  | Article
  | Branch
  | Category
  | ComponentHeaderSectionsBasic
  | ComponentHeaderSectionsBranchMap
  | ComponentHeaderSectionsFeaturedNews
  | ComponentHeaderSectionsGallery
  | ComponentHeaderSectionsIcon
  | ComponentHeaderSectionsImage
  | ComponentHeaderSectionsSideImage
  | ComponentItemsColumnsItem
  | ComponentItemsLink
  | ComponentItemsOpeningHoursItem
  | ComponentItemsOrderedCardsItem
  | ComponentItemsSlide
  | ComponentSectionsBranches
  | ComponentSectionsColumns
  | ComponentSectionsImageAndText
  | ComponentSectionsImageAndTextOverlapped
  | ComponentSectionsOrderedCards
  | ComponentSectionsRichtext
  | ComponentSectionsWorkshops
  | Contact
  | Document
  | Homepage
  | I18NLocale
  | OpeningTime
  | Page
  | Tag
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Workshop

export type Homepage = {
  __typename?: 'Homepage'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  featuredArticles?: Maybe<ArticleRelationResponseCollection>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<HomepageRelationResponseCollection>
  slides?: Maybe<Array<Maybe<ComponentItemsSlide>>>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type HomepageFeaturedArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type HomepageSlidesArgs = {
  filters?: InputMaybe<ComponentItemsSlideFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
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
  featuredArticles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  slides?: InputMaybe<Array<InputMaybe<ComponentItemsSlideInput>>>
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

export type Mutation = {
  __typename?: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createArticle?: Maybe<ArticleEntityResponse>
  createArticleLocalization?: Maybe<ArticleEntityResponse>
  createBranch?: Maybe<BranchEntityResponse>
  createBranchLocalization?: Maybe<BranchEntityResponse>
  createCategory?: Maybe<CategoryEntityResponse>
  createCategoryLocalization?: Maybe<CategoryEntityResponse>
  createContact?: Maybe<ContactEntityResponse>
  createDocument?: Maybe<DocumentEntityResponse>
  createHomepageLocalization?: Maybe<HomepageEntityResponse>
  createOpeningTime?: Maybe<OpeningTimeEntityResponse>
  createPage?: Maybe<PageEntityResponse>
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
  deleteBranch?: Maybe<BranchEntityResponse>
  deleteCategory?: Maybe<CategoryEntityResponse>
  deleteContact?: Maybe<ContactEntityResponse>
  deleteDocument?: Maybe<DocumentEntityResponse>
  deleteHomepage?: Maybe<HomepageEntityResponse>
  deleteOpeningTime?: Maybe<OpeningTimeEntityResponse>
  deletePage?: Maybe<PageEntityResponse>
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
  updateBranch?: Maybe<BranchEntityResponse>
  updateCategory?: Maybe<CategoryEntityResponse>
  updateContact?: Maybe<ContactEntityResponse>
  updateDocument?: Maybe<DocumentEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateHomepage?: Maybe<HomepageEntityResponse>
  updateOpeningTime?: Maybe<OpeningTimeEntityResponse>
  updatePage?: Maybe<PageEntityResponse>
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

export type MutationCreateCategoryArgs = {
  data: CategoryInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateContactArgs = {
  data: ContactInput
}

export type MutationCreateDocumentArgs = {
  data: DocumentInput
}

export type MutationCreateHomepageLocalizationArgs = {
  data?: InputMaybe<HomepageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationCreateOpeningTimeArgs = {
  data: OpeningTimeInput
}

export type MutationCreatePageArgs = {
  data: PageInput
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

export type MutationDeleteBranchArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteContactArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteDocumentArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationDeleteOpeningTimeArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePageArgs = {
  id: Scalars['ID']['input']
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

export type MutationUpdateBranchArgs = {
  data: BranchInput
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateCategoryArgs = {
  data: CategoryInput
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

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateHomepageArgs = {
  data: HomepageInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
}

export type MutationUpdateOpeningTimeArgs = {
  data: OpeningTimeInput
  id: Scalars['ID']['input']
}

export type MutationUpdatePageArgs = {
  data: PageInput
  id: Scalars['ID']['input']
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
  | ComponentHeaderSectionsBasic
  | ComponentHeaderSectionsFeaturedNews
  | ComponentHeaderSectionsGallery
  | ComponentHeaderSectionsIcon
  | ComponentHeaderSectionsImage
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
  | ComponentSectionsBranches
  | ComponentSectionsColumns
  | ComponentSectionsImageAndText
  | ComponentSectionsImageAndTextOverlapped
  | ComponentSectionsOrderedCards
  | ComponentSectionsRichtext
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
  articles?: Maybe<ArticleEntityResponseCollection>
  branch?: Maybe<BranchEntityResponse>
  branches?: Maybe<BranchEntityResponseCollection>
  categories?: Maybe<CategoryEntityResponseCollection>
  category?: Maybe<CategoryEntityResponse>
  contact?: Maybe<ContactEntityResponse>
  contacts?: Maybe<ContactEntityResponseCollection>
  document?: Maybe<DocumentEntityResponse>
  documents?: Maybe<DocumentEntityResponseCollection>
  homepage?: Maybe<HomepageEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  openingTime?: Maybe<OpeningTimeEntityResponse>
  openingTimes?: Maybe<OpeningTimeEntityResponseCollection>
  page?: Maybe<PageEntityResponse>
  pages?: Maybe<PageEntityResponseCollection>
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

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>
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

export type QueryDocumentsArgs = {
  filters?: InputMaybe<DocumentFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
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
}

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>
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
  createdAt?: Maybe<Scalars['DateTime']['output']>
  locale?: Maybe<Scalars['String']['output']>
  localizations?: Maybe<TagRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
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

export type WorkshopSectionsDynamicZone = ComponentSectionsRichtext | Error

export type LinkFragment = {
  __typename?: 'ComponentItemsLink'
  label?: string | null
  url?: string | null
  page?: {
    __typename?: 'PageEntityResponse'
    data?: {
      __typename?: 'PageEntity'
      attributes?: { __typename?: 'Page'; title: string; slug: string } | null
    } | null
  } | null
  article?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename?: 'ArticleEntity'
      attributes?: { __typename?: 'Article'; title: string; slug: string } | null
    } | null
  } | null
  branch?: {
    __typename?: 'BranchEntityResponse'
    data?: {
      __typename?: 'BranchEntity'
      attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
    } | null
  } | null
  document?: {
    __typename?: 'DocumentEntityResponse'
    data?: {
      __typename?: 'DocumentEntity'
      attributes?: { __typename?: 'Document'; title: string; slug: string } | null
    } | null
  } | null
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

export type ImageHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsImage'
  title: string
  text?: string | null
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
  title: string
  text?: string | null
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
  title: string
  text?: string | null
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

export type BasicHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsBasic'
  title: string
  text?: string | null
}

export type FeaturedNewsHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsFeaturedNews'
  title: string
  text?: string | null
  articlesTitle: string
  firstArticle?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename?: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        title: string
        perex?: string | null
        addedAt: any
        slug: string
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
        category?: {
          __typename?: 'CategoryEntityResponse'
          data?: {
            __typename?: 'CategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'Category'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    } | null
  } | null
  secondArticle?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename?: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        title: string
        perex?: string | null
        addedAt: any
        slug: string
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
        category?: {
          __typename?: 'CategoryEntityResponse'
          data?: {
            __typename?: 'CategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'Category'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type IconHeaderSectionFragment = {
  __typename?: 'ComponentHeaderSectionsIcon'
  title: string
  text?: string | null
  icon: {
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

type HeaderSections_ComponentHeaderSectionsBasic_Fragment = {
  __typename: 'ComponentHeaderSectionsBasic'
  title: string
  text?: string | null
}

type HeaderSections_ComponentHeaderSectionsFeaturedNews_Fragment = {
  __typename: 'ComponentHeaderSectionsFeaturedNews'
  title: string
  text?: string | null
  articlesTitle: string
  firstArticle?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename?: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        title: string
        perex?: string | null
        addedAt: any
        slug: string
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
        category?: {
          __typename?: 'CategoryEntityResponse'
          data?: {
            __typename?: 'CategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'Category'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    } | null
  } | null
  secondArticle?: {
    __typename?: 'ArticleEntityResponse'
    data?: {
      __typename?: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        title: string
        perex?: string | null
        addedAt: any
        slug: string
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
        category?: {
          __typename?: 'CategoryEntityResponse'
          data?: {
            __typename?: 'CategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'Category'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

type HeaderSections_ComponentHeaderSectionsGallery_Fragment = {
  __typename: 'ComponentHeaderSectionsGallery'
  title: string
  text?: string | null
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
  title: string
  text?: string | null
  icon: {
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

type HeaderSections_ComponentHeaderSectionsImage_Fragment = {
  __typename: 'ComponentHeaderSectionsImage'
  title: string
  text?: string | null
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

type HeaderSections_ComponentHeaderSectionsSideImage_Fragment = {
  __typename: 'ComponentHeaderSectionsSideImage'
  title: string
  text?: string | null
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
  | HeaderSections_ComponentHeaderSectionsBasic_Fragment
  | HeaderSections_ComponentHeaderSectionsFeaturedNews_Fragment
  | HeaderSections_ComponentHeaderSectionsGallery_Fragment
  | HeaderSections_ComponentHeaderSectionsIcon_Fragment
  | HeaderSections_ComponentHeaderSectionsImage_Fragment
  | HeaderSections_ComponentHeaderSectionsSideImage_Fragment
  | HeaderSections_Error_Fragment

export type RichtextSectionFragment = {
  __typename?: 'ComponentSectionsRichtext'
  content?: any | null
}

export type OrderedCardsSectionFragment = {
  __typename?: 'ComponentSectionsOrderedCards'
  title: string
  cards: Array<{
    __typename?: 'ComponentItemsOrderedCardsItem'
    title: string
    text: string
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
        __typename?: 'PageEntity'
        attributes?: { __typename?: 'Page'; title: string; slug: string } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename?: 'ArticleEntity'
        attributes?: { __typename?: 'Article'; title: string; slug: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename?: 'BranchEntity'
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename?: 'DocumentEntity'
        attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
        __typename?: 'PageEntity'
        attributes?: { __typename?: 'Page'; title: string; slug: string } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename?: 'ArticleEntity'
        attributes?: { __typename?: 'Article'; title: string; slug: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename?: 'BranchEntity'
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename?: 'DocumentEntity'
        attributes?: { __typename?: 'Document'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type ColumnsSectionFragment = {
  __typename?: 'ComponentSectionsColumns'
  title: string
  text?: string | null
  backgroundColor: Enum_Componentsectionscolumns_Backgroundcolor
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
        __typename?: 'PageEntity'
        attributes?: { __typename?: 'Page'; title: string; slug: string } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename?: 'ArticleEntity'
        attributes?: { __typename?: 'Article'; title: string; slug: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename?: 'BranchEntity'
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename?: 'DocumentEntity'
        attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
      __typename?: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        title: string
        address?: string | null
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
      __typename?: 'WorkshopEntity'
      id?: string | null
      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
    }>
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
      __typename?: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        title: string
        address?: string | null
        slug: string
      } | null
    }>
  } | null
}

type PageSections_ComponentSectionsColumns_Fragment = {
  __typename: 'ComponentSectionsColumns'
  title: string
  text?: string | null
  backgroundColor: Enum_Componentsectionscolumns_Backgroundcolor
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
        __typename?: 'PageEntity'
        attributes?: { __typename?: 'Page'; title: string; slug: string } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename?: 'ArticleEntity'
        attributes?: { __typename?: 'Article'; title: string; slug: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename?: 'BranchEntity'
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename?: 'DocumentEntity'
        attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
        __typename?: 'PageEntity'
        attributes?: { __typename?: 'Page'; title: string; slug: string } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename?: 'ArticleEntity'
        attributes?: { __typename?: 'Article'; title: string; slug: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename?: 'BranchEntity'
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename?: 'DocumentEntity'
        attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
        __typename?: 'PageEntity'
        attributes?: { __typename?: 'Page'; title: string; slug: string } | null
      } | null
    } | null
    article?: {
      __typename?: 'ArticleEntityResponse'
      data?: {
        __typename?: 'ArticleEntity'
        attributes?: { __typename?: 'Article'; title: string; slug: string } | null
      } | null
    } | null
    branch?: {
      __typename?: 'BranchEntityResponse'
      data?: {
        __typename?: 'BranchEntity'
        attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
      } | null
    } | null
    document?: {
      __typename?: 'DocumentEntityResponse'
      data?: {
        __typename?: 'DocumentEntity'
        attributes?: { __typename?: 'Document'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

type PageSections_ComponentSectionsOrderedCards_Fragment = {
  __typename: 'ComponentSectionsOrderedCards'
  title: string
  cards: Array<{
    __typename?: 'ComponentItemsOrderedCardsItem'
    title: string
    text: string
  } | null>
}

type PageSections_ComponentSectionsRichtext_Fragment = {
  __typename: 'ComponentSectionsRichtext'
  content?: any | null
}

type PageSections_ComponentSectionsWorkshops_Fragment = {
  __typename: 'ComponentSectionsWorkshops'
  title: string
  text?: string | null
  showAll: boolean
  workshops?: {
    __typename?: 'WorkshopRelationResponseCollection'
    data: Array<{
      __typename?: 'WorkshopEntity'
      id?: string | null
      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
    }>
  } | null
}

type PageSections_Error_Fragment = { __typename: 'Error' }

export type PageSectionsFragment =
  | PageSections_ComponentSectionsBranches_Fragment
  | PageSections_ComponentSectionsColumns_Fragment
  | PageSections_ComponentSectionsImageAndText_Fragment
  | PageSections_ComponentSectionsImageAndTextOverlapped_Fragment
  | PageSections_ComponentSectionsOrderedCards_Fragment
  | PageSections_ComponentSectionsRichtext_Fragment
  | PageSections_ComponentSectionsWorkshops_Fragment
  | PageSections_Error_Fragment

export type ArticleSlugEntityFragment = {
  __typename?: 'ArticleEntity'
  id?: string | null
  attributes?: { __typename?: 'Article'; slug: string } | null
}

export type ArticleCardEntityFragment = {
  __typename?: 'ArticleEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Article'
    title: string
    perex?: string | null
    addedAt: any
    slug: string
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
    category?: {
      __typename?: 'CategoryEntityResponse'
      data?: {
        __typename?: 'CategoryEntity'
        id?: string | null
        attributes?: { __typename?: 'Category'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type ArticleEntityFragment = {
  __typename?: 'ArticleEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Article'
    blocks?: any | null
    title: string
    perex?: string | null
    addedAt: any
    slug: string
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
    category?: {
      __typename?: 'CategoryEntityResponse'
      data?: {
        __typename?: 'CategoryEntity'
        id?: string | null
        attributes?: { __typename?: 'Category'; title: string; slug: string } | null
      } | null
    } | null
  } | null
}

export type ArticlesQueryVariables = Exact<{ [key: string]: never }>

export type ArticlesQuery = {
  __typename?: 'Query'
  articles?: {
    __typename?: 'ArticleEntityResponseCollection'
    data: Array<{
      __typename?: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        blocks?: any | null
        title: string
        perex?: string | null
        addedAt: any
        slug: string
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
        category?: {
          __typename?: 'CategoryEntityResponse'
          data?: {
            __typename?: 'CategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'Category'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type ArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type ArticleBySlugQuery = {
  __typename?: 'Query'
  articles?: {
    __typename?: 'ArticleEntityResponseCollection'
    data: Array<{
      __typename?: 'ArticleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Article'
        blocks?: any | null
        title: string
        perex?: string | null
        addedAt: any
        slug: string
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
        category?: {
          __typename?: 'CategoryEntityResponse'
          data?: {
            __typename?: 'CategoryEntity'
            id?: string | null
            attributes?: { __typename?: 'Category'; title: string; slug: string } | null
          } | null
        } | null
      } | null
    }>
  } | null
}

export type BranchEntityFragment = {
  __typename?: 'BranchEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Branch'
    title: string
    address?: string | null
    slug: string
  } | null
}

export type BranchesQueryVariables = Exact<{ [key: string]: never }>

export type BranchesQuery = {
  __typename?: 'Query'
  branches?: {
    __typename?: 'BranchEntityResponseCollection'
    data: Array<{
      __typename?: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        title: string
        address?: string | null
        slug: string
      } | null
    }>
  } | null
}

export type BranchBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type BranchBySlugQuery = {
  __typename?: 'Query'
  branches?: {
    __typename?: 'BranchEntityResponseCollection'
    data: Array<{
      __typename?: 'BranchEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Branch'
        title: string
        address?: string | null
        slug: string
      } | null
    }>
  } | null
}

export type CategoryEntityFragment = {
  __typename?: 'CategoryEntity'
  id?: string | null
  attributes?: { __typename?: 'Category'; title: string; slug: string } | null
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>

export type CategoriesQuery = {
  __typename?: 'Query'
  categories?: {
    __typename?: 'CategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'CategoryEntity'
      id?: string | null
      attributes?: { __typename?: 'Category'; title: string; slug: string } | null
    }>
  } | null
}

export type CategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type CategoryBySlugQuery = {
  __typename?: 'Query'
  categories?: {
    __typename?: 'CategoryEntityResponseCollection'
    data: Array<{
      __typename?: 'CategoryEntity'
      id?: string | null
      attributes?: { __typename?: 'Category'; title: string; slug: string } | null
    }>
  } | null
}

export type DocumentEntityFragment = {
  __typename?: 'DocumentEntity'
  id?: string | null
  attributes?: { __typename?: 'Document'; title: string; slug: string } | null
}

export type DocumentsQueryVariables = Exact<{ [key: string]: never }>

export type DocumentsQuery = {
  __typename?: 'Query'
  documents?: {
    __typename?: 'DocumentEntityResponseCollection'
    data: Array<{
      __typename?: 'DocumentEntity'
      id?: string | null
      attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
      __typename?: 'DocumentEntity'
      id?: string | null
      attributes?: { __typename?: 'Document'; title: string; slug: string } | null
    }>
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

export type HomepageEntityFragment = {
  __typename?: 'HomepageEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Homepage'
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
      } | null
    } | null
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

export type PageEntityFragment = {
  __typename?: 'PageEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Page'
    title: string
    slug: string
    perex?: string | null
    header?: Array<
      | { __typename: 'ComponentHeaderSectionsBasic'; title: string; text?: string | null }
      | {
          __typename: 'ComponentHeaderSectionsFeaturedNews'
          title: string
          text?: string | null
          articlesTitle: string
          firstArticle?: {
            __typename?: 'ArticleEntityResponse'
            data?: {
              __typename?: 'ArticleEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Article'
                title: string
                perex?: string | null
                addedAt: any
                slug: string
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
                category?: {
                  __typename?: 'CategoryEntityResponse'
                  data?: {
                    __typename?: 'CategoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Category'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          secondArticle?: {
            __typename?: 'ArticleEntityResponse'
            data?: {
              __typename?: 'ArticleEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Article'
                title: string
                perex?: string | null
                addedAt: any
                slug: string
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
                category?: {
                  __typename?: 'CategoryEntityResponse'
                  data?: {
                    __typename?: 'CategoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Category'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentHeaderSectionsGallery'
          title: string
          text?: string | null
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
      | {
          __typename: 'ComponentHeaderSectionsIcon'
          title: string
          text?: string | null
          icon: {
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
          __typename: 'ComponentHeaderSectionsImage'
          title: string
          text?: string | null
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
          __typename: 'ComponentHeaderSectionsSideImage'
          title: string
          text?: string | null
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
          __typename: 'ComponentSectionsBranches'
          title: string
          text?: string | null
          showAll: boolean
          branches?: {
            __typename?: 'BranchRelationResponseCollection'
            data: Array<{
              __typename?: 'BranchEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Branch'
                title: string
                address?: string | null
                slug: string
              } | null
            }>
          } | null
        }
      | {
          __typename: 'ComponentSectionsColumns'
          title: string
          text?: string | null
          backgroundColor: Enum_Componentsectionscolumns_Backgroundcolor
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
                __typename?: 'PageEntity'
                attributes?: { __typename?: 'Page'; title: string; slug: string } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename?: 'ArticleEntity'
                attributes?: { __typename?: 'Article'; title: string; slug: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename?: 'BranchEntity'
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename?: 'DocumentEntity'
                attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
                __typename?: 'PageEntity'
                attributes?: { __typename?: 'Page'; title: string; slug: string } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename?: 'ArticleEntity'
                attributes?: { __typename?: 'Article'; title: string; slug: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename?: 'BranchEntity'
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename?: 'DocumentEntity'
                attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
                __typename?: 'PageEntity'
                attributes?: { __typename?: 'Page'; title: string; slug: string } | null
              } | null
            } | null
            article?: {
              __typename?: 'ArticleEntityResponse'
              data?: {
                __typename?: 'ArticleEntity'
                attributes?: { __typename?: 'Article'; title: string; slug: string } | null
              } | null
            } | null
            branch?: {
              __typename?: 'BranchEntityResponse'
              data?: {
                __typename?: 'BranchEntity'
                attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
              } | null
            } | null
            document?: {
              __typename?: 'DocumentEntityResponse'
              data?: {
                __typename?: 'DocumentEntity'
                attributes?: { __typename?: 'Document'; title: string; slug: string } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentSectionsOrderedCards'
          title: string
          cards: Array<{
            __typename?: 'ComponentItemsOrderedCardsItem'
            title: string
            text: string
          } | null>
        }
      | { __typename: 'ComponentSectionsRichtext'; content?: any | null }
      | {
          __typename: 'ComponentSectionsWorkshops'
          title: string
          text?: string | null
          showAll: boolean
          workshops?: {
            __typename?: 'WorkshopRelationResponseCollection'
            data: Array<{
              __typename?: 'WorkshopEntity'
              id?: string | null
              attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
            }>
          } | null
        }
      | { __typename: 'Error' }
      | null
    > | null
  } | null
}

export type PagesQueryVariables = Exact<{ [key: string]: never }>

export type PagesQuery = {
  __typename?: 'Query'
  pages?: {
    __typename?: 'PageEntityResponseCollection'
    data: Array<{
      __typename?: 'PageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Page'
        title: string
        slug: string
        perex?: string | null
        header?: Array<
          | { __typename: 'ComponentHeaderSectionsBasic'; title: string; text?: string | null }
          | {
              __typename: 'ComponentHeaderSectionsFeaturedNews'
              title: string
              text?: string | null
              articlesTitle: string
              firstArticle?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename?: 'ArticleEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Article'
                    title: string
                    perex?: string | null
                    addedAt: any
                    slug: string
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
                    category?: {
                      __typename?: 'CategoryEntityResponse'
                      data?: {
                        __typename?: 'CategoryEntity'
                        id?: string | null
                        attributes?: { __typename?: 'Category'; title: string; slug: string } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              secondArticle?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename?: 'ArticleEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Article'
                    title: string
                    perex?: string | null
                    addedAt: any
                    slug: string
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
                    category?: {
                      __typename?: 'CategoryEntityResponse'
                      data?: {
                        __typename?: 'CategoryEntity'
                        id?: string | null
                        attributes?: { __typename?: 'Category'; title: string; slug: string } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentHeaderSectionsGallery'
              title: string
              text?: string | null
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
          | {
              __typename: 'ComponentHeaderSectionsIcon'
              title: string
              text?: string | null
              icon: {
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
              __typename: 'ComponentHeaderSectionsImage'
              title: string
              text?: string | null
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
              __typename: 'ComponentHeaderSectionsSideImage'
              title: string
              text?: string | null
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
              __typename: 'ComponentSectionsBranches'
              title: string
              text?: string | null
              showAll: boolean
              branches?: {
                __typename?: 'BranchRelationResponseCollection'
                data: Array<{
                  __typename?: 'BranchEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Branch'
                    title: string
                    address?: string | null
                    slug: string
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsColumns'
              title: string
              text?: string | null
              backgroundColor: Enum_Componentsectionscolumns_Backgroundcolor
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
                    __typename?: 'PageEntity'
                    attributes?: { __typename?: 'Page'; title: string; slug: string } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename?: 'ArticleEntity'
                    attributes?: { __typename?: 'Article'; title: string; slug: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename?: 'BranchEntity'
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename?: 'DocumentEntity'
                    attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
                    __typename?: 'PageEntity'
                    attributes?: { __typename?: 'Page'; title: string; slug: string } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename?: 'ArticleEntity'
                    attributes?: { __typename?: 'Article'; title: string; slug: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename?: 'BranchEntity'
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename?: 'DocumentEntity'
                    attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
                    __typename?: 'PageEntity'
                    attributes?: { __typename?: 'Page'; title: string; slug: string } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename?: 'ArticleEntity'
                    attributes?: { __typename?: 'Article'; title: string; slug: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename?: 'BranchEntity'
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename?: 'DocumentEntity'
                    attributes?: { __typename?: 'Document'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentSectionsOrderedCards'
              title: string
              cards: Array<{
                __typename?: 'ComponentItemsOrderedCardsItem'
                title: string
                text: string
              } | null>
            }
          | { __typename: 'ComponentSectionsRichtext'; content?: any | null }
          | {
              __typename: 'ComponentSectionsWorkshops'
              title: string
              text?: string | null
              showAll: boolean
              workshops?: {
                __typename?: 'WorkshopRelationResponseCollection'
                data: Array<{
                  __typename?: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                }>
              } | null
            }
          | { __typename: 'Error' }
          | null
        > | null
      } | null
    }>
  } | null
}

export type PageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type PageBySlugQuery = {
  __typename?: 'Query'
  pages?: {
    __typename?: 'PageEntityResponseCollection'
    data: Array<{
      __typename?: 'PageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Page'
        title: string
        slug: string
        perex?: string | null
        header?: Array<
          | { __typename: 'ComponentHeaderSectionsBasic'; title: string; text?: string | null }
          | {
              __typename: 'ComponentHeaderSectionsFeaturedNews'
              title: string
              text?: string | null
              articlesTitle: string
              firstArticle?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename?: 'ArticleEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Article'
                    title: string
                    perex?: string | null
                    addedAt: any
                    slug: string
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
                    category?: {
                      __typename?: 'CategoryEntityResponse'
                      data?: {
                        __typename?: 'CategoryEntity'
                        id?: string | null
                        attributes?: { __typename?: 'Category'; title: string; slug: string } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              secondArticle?: {
                __typename?: 'ArticleEntityResponse'
                data?: {
                  __typename?: 'ArticleEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Article'
                    title: string
                    perex?: string | null
                    addedAt: any
                    slug: string
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
                    category?: {
                      __typename?: 'CategoryEntityResponse'
                      data?: {
                        __typename?: 'CategoryEntity'
                        id?: string | null
                        attributes?: { __typename?: 'Category'; title: string; slug: string } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentHeaderSectionsGallery'
              title: string
              text?: string | null
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
          | {
              __typename: 'ComponentHeaderSectionsIcon'
              title: string
              text?: string | null
              icon: {
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
              __typename: 'ComponentHeaderSectionsImage'
              title: string
              text?: string | null
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
              __typename: 'ComponentHeaderSectionsSideImage'
              title: string
              text?: string | null
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
              __typename: 'ComponentSectionsBranches'
              title: string
              text?: string | null
              showAll: boolean
              branches?: {
                __typename?: 'BranchRelationResponseCollection'
                data: Array<{
                  __typename?: 'BranchEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Branch'
                    title: string
                    address?: string | null
                    slug: string
                  } | null
                }>
              } | null
            }
          | {
              __typename: 'ComponentSectionsColumns'
              title: string
              text?: string | null
              backgroundColor: Enum_Componentsectionscolumns_Backgroundcolor
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
                    __typename?: 'PageEntity'
                    attributes?: { __typename?: 'Page'; title: string; slug: string } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename?: 'ArticleEntity'
                    attributes?: { __typename?: 'Article'; title: string; slug: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename?: 'BranchEntity'
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename?: 'DocumentEntity'
                    attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
                    __typename?: 'PageEntity'
                    attributes?: { __typename?: 'Page'; title: string; slug: string } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename?: 'ArticleEntity'
                    attributes?: { __typename?: 'Article'; title: string; slug: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename?: 'BranchEntity'
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename?: 'DocumentEntity'
                    attributes?: { __typename?: 'Document'; title: string; slug: string } | null
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
                    __typename?: 'PageEntity'
                    attributes?: { __typename?: 'Page'; title: string; slug: string } | null
                  } | null
                } | null
                article?: {
                  __typename?: 'ArticleEntityResponse'
                  data?: {
                    __typename?: 'ArticleEntity'
                    attributes?: { __typename?: 'Article'; title: string; slug: string } | null
                  } | null
                } | null
                branch?: {
                  __typename?: 'BranchEntityResponse'
                  data?: {
                    __typename?: 'BranchEntity'
                    attributes?: { __typename?: 'Branch'; title: string; slug: string } | null
                  } | null
                } | null
                document?: {
                  __typename?: 'DocumentEntityResponse'
                  data?: {
                    __typename?: 'DocumentEntity'
                    attributes?: { __typename?: 'Document'; title: string; slug: string } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentSectionsOrderedCards'
              title: string
              cards: Array<{
                __typename?: 'ComponentItemsOrderedCardsItem'
                title: string
                text: string
              } | null>
            }
          | { __typename: 'ComponentSectionsRichtext'; content?: any | null }
          | {
              __typename: 'ComponentSectionsWorkshops'
              title: string
              text?: string | null
              showAll: boolean
              workshops?: {
                __typename?: 'WorkshopRelationResponseCollection'
                data: Array<{
                  __typename?: 'WorkshopEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
                }>
              } | null
            }
          | { __typename: 'Error' }
          | null
        > | null
      } | null
    }>
  } | null
}

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

export type WorkshopEntityFragment = {
  __typename?: 'WorkshopEntity'
  id?: string | null
  attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
}

export type WorkshopsQueryVariables = Exact<{ [key: string]: never }>

export type WorkshopsQuery = {
  __typename?: 'Query'
  workshops?: {
    __typename?: 'WorkshopEntityResponseCollection'
    data: Array<{
      __typename?: 'WorkshopEntity'
      id?: string | null
      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
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
      __typename?: 'WorkshopEntity'
      id?: string | null
      attributes?: { __typename?: 'Workshop'; title: string; slug: string } | null
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
export const BranchMapHeaderSectionFragmentDoc = gql`
  fragment BranchMapHeaderSection on ComponentHeaderSectionsBranchMap {
    branches(pagination: { limit: -1 }) {
      data {
        id
      }
    }
  }
`
export const ArticleSlugEntityFragmentDoc = gql`
  fragment ArticleSlugEntity on ArticleEntity {
    id
    attributes {
      slug
    }
  }
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
export const CategoryEntityFragmentDoc = gql`
  fragment CategoryEntity on CategoryEntity {
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
      title
      perex
      coverMedia {
        data {
          ...UploadImageEntity
        }
      }
      addedAt
      category {
        data {
          ...CategoryEntity
        }
      }
    }
  }
  ${ArticleSlugEntityFragmentDoc}
  ${UploadImageEntityFragmentDoc}
  ${CategoryEntityFragmentDoc}
`
export const ArticleEntityFragmentDoc = gql`
  fragment ArticleEntity on ArticleEntity {
    ...ArticleCardEntity
    attributes {
      blocks
    }
  }
  ${ArticleCardEntityFragmentDoc}
`
export const DocumentEntityFragmentDoc = gql`
  fragment DocumentEntity on DocumentEntity {
    id
    attributes {
      title
      slug
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
export const HomepageEntityFragmentDoc = gql`
  fragment HomepageEntity on HomepageEntity {
    id
    attributes {
      slides {
        ...SlideItem
      }
    }
  }
  ${SlideItemFragmentDoc}
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
    title
    text
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
    title
    text
    media {
      data {
        ...UploadImageEntity
      }
    }
  }
  ${UploadImageEntityFragmentDoc}
`
export const BasicHeaderSectionFragmentDoc = gql`
  fragment BasicHeaderSection on ComponentHeaderSectionsBasic {
    title
    text
  }
`
export const FeaturedNewsHeaderSectionFragmentDoc = gql`
  fragment FeaturedNewsHeaderSection on ComponentHeaderSectionsFeaturedNews {
    title
    text
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
    title
    text
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
    title
    text
    icon {
      data {
        ...UploadImageEntity
      }
    }
  }
  ${UploadImageEntityFragmentDoc}
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
    ... on ComponentHeaderSectionsBasic {
      ...BasicHeaderSection
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
  }
  ${ImageHeaderSectionFragmentDoc}
  ${SideImageHeaderSectionFragmentDoc}
  ${BasicHeaderSectionFragmentDoc}
  ${FeaturedNewsHeaderSectionFragmentDoc}
  ${GalleryHeaderSectionFragmentDoc}
  ${IconHeaderSectionFragmentDoc}
`
export const RichtextSectionFragmentDoc = gql`
  fragment RichtextSection on ComponentSectionsRichtext {
    content
  }
`
export const OrderedCardsSectionFragmentDoc = gql`
  fragment OrderedCardsSection on ComponentSectionsOrderedCards {
    title
    cards {
      title
      text
    }
  }
`
export const LinkFragmentDoc = gql`
  fragment Link on ComponentItemsLink {
    label
    url
    page {
      data {
        attributes {
          title
          slug
        }
      }
    }
    article {
      data {
        attributes {
          title
          slug
        }
      }
    }
    branch {
      data {
        attributes {
          title
          slug
        }
      }
    }
    document {
      data {
        attributes {
          title
          slug
        }
      }
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
    backgroundColor
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
export const BranchEntityFragmentDoc = gql`
  fragment BranchEntity on BranchEntity {
    id
    attributes {
      title
      address
      slug
    }
  }
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
export const WorkshopEntityFragmentDoc = gql`
  fragment WorkshopEntity on WorkshopEntity {
    id
    attributes {
      title
      slug
    }
  }
`
export const WorkshopsSectionFragmentDoc = gql`
  fragment WorkshopsSection on ComponentSectionsWorkshops {
    title
    text
    showAll
    workshops {
      data {
        ...WorkshopEntity
      }
    }
  }
  ${WorkshopEntityFragmentDoc}
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
  }
  ${RichtextSectionFragmentDoc}
  ${OrderedCardsSectionFragmentDoc}
  ${ImageAndTextSectionFragmentDoc}
  ${ColumnsSectionFragmentDoc}
  ${ImageAndTextOverlappedSectionFragmentDoc}
  ${BranchesSectionFragmentDoc}
  ${WorkshopsSectionFragmentDoc}
`
export const PageEntityFragmentDoc = gql`
  fragment PageEntity on PageEntity {
    id
    attributes {
      title
      slug
      perex
      header {
        ...HeaderSections
      }
      sections {
        ...PageSections
      }
    }
  }
  ${HeaderSectionsFragmentDoc}
  ${PageSectionsFragmentDoc}
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
  query ArticleBySlug($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        ...ArticleEntity
      }
    }
  }
  ${ArticleEntityFragmentDoc}
`
export const BranchesDocument = gql`
  query Branches {
    branches {
      data {
        ...BranchEntity
      }
    }
  }
  ${BranchEntityFragmentDoc}
`
export const BranchBySlugDocument = gql`
  query BranchBySlug($slug: String!) {
    branches(filters: { slug: { eq: $slug } }) {
      data {
        ...BranchEntity
      }
    }
  }
  ${BranchEntityFragmentDoc}
`
export const CategoriesDocument = gql`
  query Categories {
    categories {
      data {
        ...CategoryEntity
      }
    }
  }
  ${CategoryEntityFragmentDoc}
`
export const CategoryBySlugDocument = gql`
  query CategoryBySlug($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
      data {
        ...CategoryEntity
      }
    }
  }
  ${CategoryEntityFragmentDoc}
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
  query Pages {
    pages {
      data {
        ...PageEntity
      }
    }
  }
  ${PageEntityFragmentDoc}
`
export const PageBySlugDocument = gql`
  query PageBySlug($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        ...PageEntity
      }
    }
  }
  ${PageEntityFragmentDoc}
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
    Branches(
      variables?: BranchesQueryVariables,
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
    Categories(
      variables?: CategoriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CategoriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CategoriesQuery>(CategoriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Categories',
        'query',
        variables,
      )
    },
    CategoryBySlug(
      variables: CategoryBySlugQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CategoryBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CategoryBySlugQuery>(CategoryBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'CategoryBySlug',
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
      variables?: PagesQueryVariables,
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
