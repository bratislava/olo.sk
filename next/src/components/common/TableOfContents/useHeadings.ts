import { useEffect, useState } from 'react'

type HeadingLevels = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = {
  id: string
  text: string
  level: number
}

const useHeadings = (rootId: string) => {
  const [headings, setHeadings] = useState<HeadingProps[]>([])

  useEffect(() => {
    const queryList = `#${rootId} h2, #${rootId} h3, #${rootId} h4, #${rootId} h5, #${rootId} h6`
    const headingsNodeList = document.querySelectorAll(queryList)
    // eslint-disable-next-line unicorn/prefer-spread
    const headingsElements = Array.from(headingsNodeList).map((element) => ({
      id: element.id,
      text: element.textContent ?? '""',
      level: Number(String(element.tagName).slice(1).toLowerCase() as HeadingLevels),
    })) // mapping from a list of nodes to array

    setHeadings(headingsElements)
  }, [rootId])

  return headings
}

export default useHeadings
