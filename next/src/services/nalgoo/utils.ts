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
