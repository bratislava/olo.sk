import graphqlConfig from './plugins.graphql.config'
import meilisearchConfig from './plugins.meilisearch.config'

export default ({ env }) => ({
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
  'config-sync': {
    enabled: true,
    // Docs: https://github.com/pluginpal/strapi-plugin-config-sync?tab=readme-ov-file#-settings
    config: {
      excludedConfig: [
        // Defaults
        'core-store.plugin_users-permissions_grant',
        'core-store.plugin_upload_metrics',
        'core-store.strapi_content_types_schema',
        'core-store.ee_information',
        // Api key is private and MUST be excluded
        'core-store.plugin_meilisearch_meilisearch_api_key',
        // Host is set differently on localhost and deployed environments so we don't want to sync it
        'core-store.plugin_meilisearch_meilisearch_host',
      ],
    },
  },
})
