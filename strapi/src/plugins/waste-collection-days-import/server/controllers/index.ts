import { Strapi } from '@strapi/strapi'
import { parseWasteCollectionDaysXlsx } from '../helpers/parse-waste-collection-days-xlsx'
import { v4 as uuid } from 'uuid'

export default {
  importXlsxController: ({ strapi }: { strapi: Strapi }) => {
    const meilisearch = strapi.plugin('meilisearch').service('meilisearch')

    const updateMeilisearchIndex = async () => {
      await meilisearch.updateContentTypeInMeiliSearch({
        contentType: 'api::waste-collection-day.waste-collection-day',
      })
    }

    const deleteWasteCollectionDaysFn = async (type?: string) => {
      await strapi.db.query('api::waste-collection-day.waste-collection-day').deleteMany({
        where: {
          type: type,
        },
      })
      // TODO this approach may not be needed anymore, as we us createMany instead of creating entries one by one
      // `deleteMany` doesn't trigger Meilisearch hooks, so the old entries stay in its database,
      // also having Meilisearch on while adding entries triggers the update content hook after
      // every query, therefore the best solution is to turn the Meilisearch off while adding new entries
      // and turn it back on afterward.
      // See `strapi/patches/strapi-plugin-meilisearch+0.9.2.patch`.
      await updateMeilisearchIndex()
    }

    return {
      async updateWasteCollectionDays(ctx) {
        const start = Date.now()

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
            // Using Query Engine API because it supports bulk insert
            // Docs: https://docs-v4.strapi.io/dev-docs/api/query-engine/bulk-operations
            //
            // We had to split the data into chunks because of some error with around 9400 items per query
            // TODO investigate the error and remove the chunking
            const chunkSize = 5000
            for (let i = 0; i < parsedWasteCollectionDays.length; i += chunkSize) {
              const chunk = parsedWasteCollectionDays.slice(i, i + chunkSize)

              await strapi.db.query('api::waste-collection-day.waste-collection-day').createMany({
                data: chunk,
              })
            }

            await updateMeilisearchIndex()
          } catch (createError) {
            throw createError
          }

          ctx.body = {
            message: `Nahraných ${parsedWasteCollectionDays.length} odvozových dní.`,
            importId,
            executionTime: Date.now() - start,
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
          await deleteWasteCollectionDaysFn(type)

          ctx.body = {
            message: `Odvozové dni "${type}" boli odstránené.`,
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
          await updateMeilisearchIndex()

          ctx.body = {
            message: 'Aktualizácia odvozových dní prebehla úspešne.',
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
