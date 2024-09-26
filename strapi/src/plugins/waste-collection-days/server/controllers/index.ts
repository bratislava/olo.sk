import { Strapi } from '@strapi/strapi'
import { parseWasteCollectionDaysXlsx } from '../helpers/parse-waste-collection-days-xlsx'
import { v4 as uuid } from 'uuid'

export const COLLECTION_DAY_API_NAME = 'api::collection-day.collection-day'

export default {
  importXlsxController: ({ strapi }: { strapi: Strapi }) => ({
    async updateWasteCollectionDays(ctx) {
      ctx.request.socket.setTimeout(300000) // 5 minutes

      const file = ctx.request.files?.file
      if (!file) {
        ctx.status = 400
        ctx.body = {
          message: 'Chýba súbor.',
        }
        return
      }

      const meilisearch = strapi.plugin('meilisearch').service('meilisearch')

      try {
        const importId = uuid()
        const parsedWasteCollectionDays = parseWasteCollectionDaysXlsx(file.path, importId)

        // All the debtors are replaced when a new XLSX is uploaded.
        const deleteWasteCollectionDays = async () => {
          await strapi.db.query(COLLECTION_DAY_API_NAME).deleteMany({})
          // `deleteMany` doesn't trigger Meilisearch hooks, so the old debtors stay in its database,
          // also having Meilisearch on while adding debtors triggers the update content hook after
          // every query, therefore the best solution is to turn the Meilisearch off while adding new debtors
          // and turn it back on afterward.
          // See `strapi/patches/strapi-plugin-meilisearch+0.7.1.patch`.
          await meilisearch.emptyOrDeleteIndex({
            contentType: COLLECTION_DAY_API_NAME,
          })
        }

        await deleteWasteCollectionDays()

        try {
          for (const day of parsedWasteCollectionDays) {
            // Query Engine API doesn't support relations in bulk options, so Entity Service API is used.
            // https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine/bulk-operations.html
            await strapi.entityService.create(COLLECTION_DAY_API_NAME, {
              data: day,
            })
          }
          await meilisearch.updateContentTypeInMeiliSearch({
            contentType: COLLECTION_DAY_API_NAME,
          })
        } catch (createWasteCollectionDaysError) {
          // In case of failure to add some debtor we want to delete all the previously created entries, so we call the
          // delete function but rethrow the error to be caught by the parent try/catch block.
          await deleteWasteCollectionDays()

          throw createWasteCollectionDaysError
        }

        ctx.body = {
          message: `Nahraných ${parsedWasteCollectionDays.length} odvozových dní.`,
          importId,
        }
      } catch (e) {
        ctx.status = 400
        ctx.body = {
          message: e.toString(),
        }
      }
    },
  }),
}
