import { useIsClient } from 'usehooks-ts'

type HeadingLevels = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const useHeadings = (rootId: string, domAttribute: string) => {
  const getQueryList = (headingLevels: HeadingLevels[]) => {
    return headingLevels
      .map((level) => `#${rootId} div[data-toc=${domAttribute}] ${level}`)
      .join(', ')
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
