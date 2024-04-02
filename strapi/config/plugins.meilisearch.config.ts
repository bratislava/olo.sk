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
    'page.title',
    // add more searchable attributes here
  ],
  filterableAttributes: [],
  sortableAttributes: [],
  pagination: {
    // https://docs.meilisearch.com/learn/advanced/known_limitations.html#maximum-number-of-results-per-search
    maxTotalHits: 100000,
  },
}

const meilisearchConfig = {
  host: process.env.MEILISEARCH_HOST,
  apiKey: process.env.MEILISEARCH_ADMIN_API_KEY,
  // page: {
  //   indexName: 'search_index',
  //   entriesQuery: {
  //     locale: 'all',
  //   },
  //   settings: searchIndexSettings,
  //   transformEntry: ({ entry }) => wrapSearchIndexEntry('page', entry),
  // },
}

export default meilisearchConfig
