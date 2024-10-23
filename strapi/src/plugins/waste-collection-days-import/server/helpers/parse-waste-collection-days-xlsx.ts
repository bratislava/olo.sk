import { readFile, utils } from 'xlsx'
import * as assert from 'assert'

export const parseWasteCollectionDaysXlsx = (filePath: string, importId: string) => {
  const workBook = readFile(filePath)
  // Only the first sheet is used.
  const sheet = workBook.Sheets[workBook.SheetNames[0]]
  const data = utils.sheet_to_json(sheet, {
    header: 1,
    raw: false,
  }) as unknown[][]

  // Verifying the header is the best way to check whether the file uploaded is in a format we need.
  const header = data.slice(0, 1)
  const expectedHeader = [
    [
      'Typ odvozu',
      'Adresa',
      'Evidenčné číslo',
      'Párny týždeň',
      'Nepárny týždeň',
      'Dátumy odvozov',
      'Poznámka',
    ],
  ]
  assert.deepStrictEqual(
    header,
    expectedHeader,
    `Hlavička zošitu sa nezhoduje.\nOčakávaná hlavička: ${JSON.stringify(
      expectedHeader,
    )}\nPrijatá hlavička: ${JSON.stringify(header)}`,
  )

  const dataWithoutHeader = data.slice(1)
  return dataWithoutHeader
    .filter((row) => row.length !== 0 /* Filter empty rows */)
    .map((row, index) => {
      const [type, address, registrationNumber, evenWeek, oddWeek, collectionDates, note] =
        row.map(String)

      return {
        type,
        address,
        registrationNumber,
        evenWeek,
        oddWeek,
        collectionDates,
        note,
        importId,
      }
    })
}
