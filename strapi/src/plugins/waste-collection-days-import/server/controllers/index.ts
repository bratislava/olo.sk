import { Strapi } from '@strapi/strapi'
import { parseWasteCollectionDaysXlsx } from '../helpers/parse-waste-collection-days-xlsx'
import { v4 as uuid } from 'uuid'

export default {
  importXlsxController: ({ strapi }: { strapi: Strapi }) => {
    const meilisearch = strapi.plugin('meilisearch').service('meilisearch')

    // TODO: Discuss the behaviour of the import.
    // All the entries are replaced when a new XLSX is uploaded.
    const deleteWasteCollectionDays = async (type?: string) => {
      await strapi.db.query('api::waste-collection-day.waste-collection-day').deleteMany({
        where: {
          type: type,
        },
      })
      // `deleteMany` doesn't trigger Meilisearch hooks, so the old debtors stay in its database,
      // also having Meilisearch on while adding debtors triggers the update content hook after
      // every query, therefore the best solution is to turn the Meilisearch off while adding new debtors
      // and turn it back on afterward.
      // See `strapi/patches/strapi-plugin-meilisearch+0.7.1.patch`.
      await meilisearch.emptyOrDeleteIndex({
        contentType: 'api::waste-collection-day.waste-collection-day',
      })
    }

    return {
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

        try {
          const importId = uuid()
          const parsedWasteCollectionDays = parseWasteCollectionDaysXlsx(file.path, importId)

          try {
            for (const day of parsedWasteCollectionDays) {
              // Query Engine API doesn't support relations in bulk options, so Entity Service API is used.
              // https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine/bulk-operations.html
              await strapi.entityService.create('api::waste-collection-day.waste-collection-day', {
                data: day,
              })
            }
            await meilisearch.updateContentTypeInMeiliSearch({
              contentType: 'api::waste-collection-day.waste-collection-day',
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
      async deleteWasteCollectionDays(ctx) {
        const { type } = ctx.request.params

        try {
          await deleteWasteCollectionDays(type)

          ctx.body = {
            message: 'Všetky odvozové dni boli odstránené.',
          }
        } catch (e) {
          ctx.status = 400
          ctx.body = {
            message: e.toString(),
          }
        }
      },
      async updateMeilisearchWasteCollectionDays(ctx) {
        try {
          await meilisearch.updateContentTypeInMeiliSearch({
            contentType: 'api::waste-collection-day.waste-collection-day',
          })

          ctx.body = {
            message:
              'Aktualizácia odvozových dní prebehla úspešne. Zmeny by sa mali prejaviť na webe okamžite.',
          }
        } catch (e) {
          ctx.status = 400
          ctx.body = {
            message: e.toString(),
          }
        }
      },
    }
  },
}
