import { useIsClient } from 'usehooks-ts'

export type HeadingLevels = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

// used in section wrapper that needs to be used for heading in table of content
export const ATTRIBUTE_TABLE_OF_CONTENT = 'toc'

// used in all section headers for heading in table of content
export const ATTRIBUTE_TABLE_OF_CONTENT_HEADING = 'toc-heading'

const useHeadings = (rootId: string) => {
  const getQueryList = (headingLevels: HeadingLevels[]) => {
    // list of all headings in the parent with data-toc attribute
    const queryList = headingLevels
      .map((level) => `#${rootId} div[data-attribute=${ATTRIBUTE_TABLE_OF_CONTENT}] ${level}`)
      .join(', ')

    // list of all headings that have directly data-toc attribute with -heading
    const queryListHeadings = headingLevels
      .map(
        (level) => `#${rootId} div[data-attribute=${ATTRIBUTE_TABLE_OF_CONTENT_HEADING}] ${level}`,
      )
      .join(', ')

    return `${queryList}, ${queryListHeadings}`
  }

  const queryList = getQueryList(['h2', 'h3', 'h4', 'h5', 'h6'])
  const isClient = useIsClient()

  const getHeadings = () => {
    const headingsNodeList = document.querySelectorAll(queryList)

    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(headingsNodeList).map((element) => ({
      id: element.id,
      text: element.textContent ?? '""',
      level: Number(String(element.tagName).slice(1).toLowerCase() as HeadingLevels),
    })) // mapping from a list of nodes to array
  }

  return isClient ? getHeadings() : null
}

export default useHeadings
