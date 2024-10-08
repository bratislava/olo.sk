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
  upload: {
    config: {
      // Docs: https://github.com/strapi/strapi/tree/main/packages/providers/upload-aws-s3
      provider: 'aws-s3',
      providerOptions: {
        // This is how we set up "subdomain" style of urls, e.g. "bucket-name.s3.bratislava.sk/..."
        baseUrl: env('MINIO_PUBLIC_ENDPOINT'),
        // Works like a folder, https://forum.strapi.io/t/how-to-specify-the-folder-for-strapi-provider-upload-aws-s3-plugin/30805/2
        rootPath: 'upload',
        s3Options: {
          credentials: {
            accessKeyId: env('MINIO_ACCESS_KEY'),
            secretAccessKey: env('MINIO_SECRET_KEY'),
          },
          endpoint: env('MINIO_PRIVATE_ENDPOINT'),
          region: '',
          params: {
            Bucket: env('MINIO_BUCKET'),
          },
        },
      },
    },
  },
})
