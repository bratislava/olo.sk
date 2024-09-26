# Strapi plugin `waste-collection-days-import`

This plugin allows us to upload XLSX files (Excel) and create WasteCollectionDays entries.

It's based on similar custom plugin in Marianum project, see [ceremonies-debtors-list](https://github.com/bratislava/marianum.sk/tree/72dc36cfb05d544680ef891d633af9cf59f5b9e5/strapi/src/plugins/ceremonies-debtor-list).

It war created using Strapi CLI generator, see [Strapi plugin documentation](https://docs-v4.strapi.io/dev-docs/plugins/development/create-a-plugin).

Main files where the magic happens:
```
./server/routes
./server/controllers
./server/helpers
./admin/src/pages/HomePage
./admin/src/components/ImportSection
```

See also:
```
/strapi/config/plugins.ts
/strapi/package.json         --> build and postinstall scripts
/strapi/patches/strapi-plugin-meilisearch+0.9.2.patch
```
