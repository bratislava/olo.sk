export default {
  admin: {
    type: 'admin',
    routes: [
      {
        method: 'PUT',
        path: '/update-waste-collection-days',
        handler: 'importXlsxController.updateWasteCollectionDays',
      },
      {
        method: 'POST',
        path: '/delete-waste-collection-days/:type',
        handler: 'importXlsxController.deleteWasteCollectionDays',
      },
      {
        method: 'POST',
        path: '/update-meilisearch-waste-collection-days',
        handler: 'importXlsxController.updateMeilisearchWasteCollectionDays',
      },
    ],
  },
}
