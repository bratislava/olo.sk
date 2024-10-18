import parse from 'html-react-parser'

export type IconTextPair = {
  icon: JSX.Element | null
  text: string
  key?: number
}

/**
 * Parse incoming text and return array of length 2 where first part is expected to
 * be salary and second part is expected to be additional information about salary
 * Incoming text is expected to include /r/n/r/n delimiter between salary and additional information
 * @param incomingText: string | undefined
 */

export const getSalary = (incomingText: string | undefined) => {
  if (!incomingText) return ['', '']
  const parsedSalary = parse(incomingText)
    .toString()
    .split(/\r?\n\r?\n/)

  return parsedSalary.length >= 2
    ? parsedSalary
    : parsedSalary.length === 1
      ? [parsedSalary[0], '']
      : ['', '']
}

/**
 * Parse incoming array of HTML Elements in order to be displayed as <img> and <p> tag pairs in
 * benefits section
 * @param benefits: React.JSX.Element[]
 * @returns IconTextPair[]
 */

const parseBenefitsElements = (benefits: React.JSX.Element[]): IconTextPair[] => {
  const parsedElements: IconTextPair[] = []
  let iconTextPair: IconTextPair = { icon: null, text: '' }

  benefits.forEach((benefit, benefitKey) => {
    const childTag = benefit?.props?.children
    switch (typeof childTag) {
      case 'string':
        iconTextPair.text = childTag
        iconTextPair.key = benefitKey
        parsedElements.push({ ...iconTextPair })
        iconTextPair = { icon: null, text: '' }
        break

      case 'object':
        if (Array.isArray(childTag)) {
          const imgElement = childTag.find((element) => element.type === 'img')
          if (imgElement) {
            iconTextPair.icon = imgElement
          }
        }
        break

      default:
        break
    }
  })

  return parsedElements
}

/**
 * Parse incoming Elements (various options, this data are already parsed from external Nalgoo API)
 *  in order to be displayed as <img> and <p> tag pairs in benefits section
 * @param benefits: React.JSX.Element[]
 * @returns IconTextPair[]
 */
export const parseBenefits = (
  benefits: React.JSX.Element[] | React.JSX.Element | string,
): IconTextPair[] => {
  if (!benefits) return []

  if (typeof benefits === 'string') return [{ icon: null, text: benefits }]

  return Array.isArray(benefits)
    ? parseBenefitsElements(benefits)
    : [{ icon: null, text: benefits.toString() }]
}
