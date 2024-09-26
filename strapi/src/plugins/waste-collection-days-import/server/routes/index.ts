export default {
  admin: {
    type: 'admin',
    routes: [
      {
        method: 'PUT',
        path: '/update-waste-collection-days',
        handler: 'importXlsxController.updateWasteCollectionDays',
      },
    ],
  },
}
