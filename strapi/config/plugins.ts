import graphqlConfig from './plugins.graphql.config'
import meilisearchConfig from './plugins.meilisearch.config'

export default {
  graphql: {
    config: graphqlConfig,
  },
  meilisearch: {
    config: meilisearchConfig,
  },
  wysiwyg: {
    enabled: true,
    resolve: './src/plugins/wysiwyg',
  },
  'waste-collection-days-import': {
    enabled: true,
    resolve: './src/plugins/waste-collection-days-import',
  },
}
