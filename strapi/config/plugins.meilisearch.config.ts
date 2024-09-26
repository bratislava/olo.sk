// TODO investigate if this is needed in newer Meilisearch versions
/**
 * The indexes that are used in search are stored in one shared index. This wraps them to have a unified way for search
 * and easily unwrappable structure to be used separately.
 */
const wrapSearchIndexEntry = (type, data) => {
  // Remove when https://github.com/meilisearch/strapi-plugin-meilisearch/pull/554 merged
  const newData = { ...data }
  delete newData.createdBy
  delete newData.updatedBy

  return {
    type,
    id: data.id, // must be present to work correctly
    locale: data.locale,
    // [type] is used instead of "data", to avoid  naming clashes of filterable / sortable / searchable attributes
    [type]: newData,
  }
}

// TODO investigate if this is still true
// Because a bug in Meilisearch shared index, only the last added entity's settings are used and the old ones are overwritten
// instead of merging. Therefore, for all entities we must provide shared settings.
const searchIndexSettings = {
  searchableAttributes: [
    // TODO add more searchable attributes here
    'article.title',
    'branch.title',
    'document.title',
    'faq.title',
    'page.title',
    'service.title',
    'workshop.title',
    'waste-collection-day.address',
    'waste-collection-day.registrationNumber',
  ],
  filterableAttributes: [
    // All
    'type',
    'locale', // TODO decide if needed
    // Article
    'article.tags',
    'article.articleCategory',
    // Document
    'document.documentCategory',
    // Faq
    'faq.faqCategory',
    // Service
    'service.serviceCategory',
    // WasteCollectionDay
    'waste-collection-day.type',
  ],
  sortableAttributes: [
    // Article
    'article.publishedAtTimestamp',
    // Document
    'document.publishedAtTimestamp',
    // Faq
    'faq.publishedAtTimestamp',
    // Service
    'service.publishedAtTimestamp',
    // Workshop
    'workshop.publishedAtTimestamp',
    // WasteCollectionDay
    'waste-collection-day.address',
  ],
  pagination: {
    // https://docs.meilisearch.com/learn/advanced/known_limitations.html#maximum-number-of-results-per-search
    maxTotalHits: 100000,
  },
}

const meilisearchConfig = {
  host: process.env.MEILISEARCH_HOST,
  apiKey: process.env.MEILISEARCH_ADMIN_API_KEY,
  page: {
    indexName: 'search_index',
    entriesQuery: {
      locale: 'all',
    },
    settings: searchIndexSettings,
    transformEntry: ({ entry }) => wrapSearchIndexEntry('page', entry),
  },
  article: {
    indexName: 'search_index',
    entriesQuery: {
      locale: 'all',
      populate: ['articleCategory', 'coverMedia'],
    },
    settings: searchIndexSettings,
    transformEntry: ({ entry }) =>
      wrapSearchIndexEntry('article', {
        ...entry,
        // Meilisearch doesn't support filtering dates as ISO strings, therefore we convert it to UNIX timestamp to
        // use (number) filters.
        publishedAtTimestamp: entry.publishedAt ? new Date(entry.publishedAt).getTime() : undefined,
      }),
  },
  document: {
    indexName: 'search_index',
    entriesQuery: {
      locale: 'all',
      populate: ['documentCategory'],
    },
    settings: searchIndexSettings,
    transformEntry: ({ entry }) =>
      wrapSearchIndexEntry('document', {
        ...entry,
        // Meilisearch doesn't support filtering dates as ISO strings, therefore we convert it to UNIX timestamp to
        // use (number) filters.
        publishedAtTimestamp: entry.publishedAt ? new Date(entry.publishedAt).getTime() : undefined,
      }),
  },
  faq: {
    indexName: 'search_index',
    entriesQuery: {
      locale: 'all',
      populate: ['faqCategory'],
    },
    settings: searchIndexSettings,
    transformEntry: ({ entry }) =>
      wrapSearchIndexEntry('faq', {
        ...entry,
        // Meilisearch doesn't support filtering dates as ISO strings, therefore we convert it to UNIX timestamp to
        // use (number) filters.
        publishedAtTimestamp: entry.publishedAt ? new Date(entry.publishedAt).getTime() : undefined,
      }),
  },
  service: {
    indexName: 'search_index',
    entriesQuery: {
      locale: 'all',
      populate: ['serviceCategory'],
    },
    settings: searchIndexSettings,
    transformEntry: ({ entry }) =>
      wrapSearchIndexEntry('service', {
        ...entry,
        // Meilisearch doesn't support filtering dates as ISO strings, therefore we convert it to UNIX timestamp to
        // use (number) filters.
        publishedAtTimestamp: entry.publishedAt ? new Date(entry.publishedAt).getTime() : undefined,
      }),
  },
  workshop: {
    indexName: 'search_index',
    entriesQuery: {
      locale: 'all',
    },
    settings: searchIndexSettings,
    transformEntry: ({ entry }) =>
      wrapSearchIndexEntry('workshop', {
        ...entry,
        // Meilisearch doesn't support filtering dates as ISO strings, therefore we convert it to UNIX timestamp to
        // use (number) filters.
        publishedAtTimestamp: entry.publishedAt ? new Date(entry.publishedAt).getTime() : undefined,
      }),
  },
  'waste-collection-day': {
    settings: searchIndexSettings,
    transformEntry: ({ entry }) => wrapSearchIndexEntry('waste-collection-day', entry),
  },
}

export default meilisearchConfig
