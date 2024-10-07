import parse from 'html-react-parser'

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
 * Translate incoming code for string defining employment type
 * @param code: number | undefined
 */

const translateEmployeeCode = (code: number | undefined) => {
  switch (code) {
    case 1:
      return 'Plný úväzok'

    // TODO: use translations
    // TODO: find another cases
    case 2:
      return 'Čiastočný úväzok'

    default:
      return ''
  }
}

/**
 * Translate incomingEmployment to a string including all employment codes
 * @param incomingEmployment: number[] | undefined
 */

export const getEmploymentForms = (incomingEmployment: number[] | undefined) => {
  if (!incomingEmployment) return ''

  return incomingEmployment.map((code) => translateEmployeeCode(code)).join(', ')
}

/**
 * Translate incoming code for string defining education type
 * @param code: number | undefined
 */

const translateEducationCode = (code: number | undefined) => {
  switch (code) {
    case 1:
      return 'Základné vzdelanie'

    case 3:
      return 'Stredoškolské bez maturity'

    case 4:
      return 'Stredoškolské s maturitou'

    case 5:
      return 'Nadstavbové/vyššie odborné vzdelanie'

    case 6:
      return 'Študent vysokej školy'

    case 7:
      return 'Vysokoškolské I. stupňa'

    case 8:
      return 'Vysokoškolské II. stupňa'

    // TODO: use translations
    // TODO: find another cases
    case 9:
      return 'Vysokoškolské III. stupňa'

    default:
      return ''
  }
}

/**
 * Translate incomingEmployment to a string including all aducation codes
 * @param incomingEducation: number[] | undefined
 */

export const getEducationTypes = (incomingEducation: number[] | undefined) => {
  if (!incomingEducation) return ''

  return incomingEducation.map((code) => translateEducationCode(code)).join(', ')
}
