import { handleOnClick } from '@/src/components/common/TableOfContents/utils'
import Typography from '@/src/components/common/Typography/Typography'

type HeadingProps = {
  level: number
  text: string
  id: string
}

type Props = {
  headings: HeadingProps[]
  headerOffset: number
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=3480-20808&node-type=symbol&t=Sy9hMuI0D75f0mQ0-0
 *
 */

const Content = ({ headings, headerOffset }: Props) => {
  return (
    <div key="table-of-contents" className="flex flex-col lg:px-6 lg:py-2">
      {headings &&
        headings.map((heading) => {
          return heading.level === 2 ? (
            <div
              className="cursor-pointer py-3 hover:font-black lg:py-4"
              key={heading.id}
              onClick={() => handleOnClick({ id: `#${heading.id}`, headerOffset })}
              aria-hidden="true"
            >
              <Typography variant="p-default">{heading.text}</Typography>
            </div>
          ) : (
            <div key={heading.id} className="flex flex-col px-4 first:pt-4 last:pb-4">
              <div
                className={`${heading.level === 3 ? 'pl-4' : 'pl-8'} flex cursor-pointer flex-col border-l border-border-default pb-2 hover:font-black lg:pb-3`}
                onClick={() => handleOnClick({ id: `#${heading.id}`, headerOffset })}
                aria-hidden="true"
                key={heading.id}
              >
                <Typography variant="p-default">{heading.text}</Typography>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Content
