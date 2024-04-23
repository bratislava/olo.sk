// https://github.com/LabZoneSK/predlozky/blob/main/src/index.js
// https://jazykovaporadna.sme.sk/q/3818/
const prepositions = ['k', 's', 'v', 'z', 'o', 'u', 'a', 'i']
// only used symbols are listed
const symbols = ['€', '%']

export const normalizeSkText = (text: string) => {
  let normalized = text

  prepositions.forEach((preposition) => {
    // eslint-disable-next-line security/detect-non-literal-regexp
    const re = new RegExp(` ([${preposition}]) `, 'gmi')
    normalized = normalized.replace(re, ` $1${String.fromCodePoint(160)}`)
  })

  symbols.forEach((symbol) => {
    // eslint-disable-next-line security/detect-non-literal-regexp
    const re = new RegExp(` ([${symbol}])`, 'gmi')
    normalized = normalized.replace(re, `${String.fromCodePoint(160)}$1`)
  })

  return normalized
}
