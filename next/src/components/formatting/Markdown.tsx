/* eslint-disable jsx-a11y/heading-has-content */
import Image from 'next/image'
import { PropsWithChildren, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'

import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { useHorizontalScrollFade } from '@/src/utils/useHorizontalScrollFade'

import styles from './Markdown.module.scss'

export type MarkdownProps = {
  content: string | null | undefined
  className?: string
}

// based on Marianum: https://github.com/bratislava/marianum.sk/blob/master/next/components/atoms/RichText.tsx
const RichTextTable = ({
  children,
  colored,
  ...props
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
PropsWithChildren<Record<any, any>>) => {
  const tableWrapperRef = useRef<HTMLDivElement>(null)
  const { scrollFadeClassNames } = useHorizontalScrollFade({ ref: tableWrapperRef })

  return (
    <div className="relative">
      <div className={cn('overflow-x-auto', scrollFadeClassNames)} ref={tableWrapperRef}>
        <table {...props} className="border-separate border-spacing-0">
          {children}
        </table>
      </div>
    </div>
  )
}

/**
 * See documentation: https://github.com/remarkjs/react-markdown#appendix-b-components
 *
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=5036-17786&m=dev
 *
 * @param className
 * @param content
 * @param variant
 * @constructor
 *
 */

// TODO Apply correct styling when figma design is ready

const Markdown = ({ content, className }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkUnwrapImages, remarkGfm]}
      className={cn(styles.markdown, className)}
      components={{
        // Standard components: a, blockquote, br, code, em, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, pre, strong, and ul

        // We don't want to use h1 in markdown, so it returns standard <p> tag
        h1: 'p',
        h2: ({ node, children, ...props }) => (
          <Typography variant="h2" {...props}>
            {children}
          </Typography>
        ),
        h3: ({ node, children, ...props }) => (
          <Typography variant="h3" {...props}>
            {children}
          </Typography>
        ),
        h4: ({ node, children, ...props }) => (
          <Typography variant="h4" {...props}>
            {children}
          </Typography>
        ),
        h5: ({ node, children, ...props }) => (
          <Typography variant="h5" {...props}>
            {children}
          </Typography>
        ),
        h6: ({ node, children, ...props }) => (
          <Typography variant="h6" {...props}>
            {children}
          </Typography>
        ),
        p: ({ node, children, ...props }) => (
          <Typography
            variant="p-default"
            className_onlyWhenNecessary="whitespace-pre-wrap"
            {...props}
          >
            {children}
          </Typography>
        ),
        strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
        a: ({ node, href, title, children, ...props }) => {
          const isExternal = href?.startsWith('http')

          return (
            <Link
              variant="underlined"
              href={href ?? '#'}
              target={isExternal ? '_blank' : '_self'}
              {...props}
            >
              {!!children && children}
              {/* add nbsp and arrow to indicate external link */}
              {/* \u{0000FE0E} is Unicode variation selector that prevents symbols to be rendered as emojis on iOS
               https://stackoverflow.com/questions/8335724/unicode-characters-being-drawn-differently-in-ios5 */}
              {isExternal && `${String.fromCodePoint(160)}↗\u{0000FE0E}`}
            </Link>
          )
        },
        img: ({ width, height, alt, src, sizes }) => {
          // Based on City Gallery:
          // https://github.com/bratislava/gmb.sk/blob/master/next/components/atoms/CityGalleryMarkdown.tsx
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [altText, caption] = alt?.includes('||') ? alt?.split('||') || ['', ''] : [alt, alt]

          if (!src) return null

          // TODO this still produces a hydration error, because the remark-unwrap-images only works when image is the only child of the paragraph
          return (
            <figure className="flex flex-col items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img src={src} alt={altText} width={width} height={height} sizes={sizes} /> */}
              <div
                style={{ aspectRatio: width && height ? +width / +height : 1 }}
                className="relative w-full overflow-hidden rounded-2xl"
              >
                <Image src={src} alt={altText ?? ''} fill sizes={sizes} />
              </div>
              {
                // TODO implement caption in wysiwig editor, then enable here
                //   alt && (
                //     <figcaption
                //       aria-hidden={caption === alt}
                //       className="text-center text-size-p-small text-size-p-small"
                //     >
                //       {caption}
                //     </figcaption>
                //   )
              }
            </figure>
          )
        },
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-action-background-default pl-8" {...props} />
        ),
        ol: ({ children, ...props }) => (
          <ol className="list-decimal pl-8 marker:text-content-secondary" {...props}>
            {children}
          </ol>
        ),
        ul: ({ children, ...props }) => (
          <ul className="list-disc pl-8 marker:text-content-secondary" {...props}>
            {children}
          </ul>
        ),
        // Remark-gfm components: del, input, table, tbody, td, th, thead, and tr
        // FIXME tables need revisit - align, spacing, etc.
        table: ({ children, node, ...props }) => (
          <RichTextTable {...props}>{children}</RichTextTable>
        ),
        thead: ({ children, ...props }) => (
          <thead
            {...props}
            // ensures rounded-ness for top corners of the table
            className="[&>*>*:first-child]:rounded-tl-lg [&>*>*:last-child]:rounded-tr-lg"
          >
            {children}
          </thead>
        ),
        tbody: ({ children, ...props }) => (
          <tbody className="rounded-b-lg" {...props}>
            {children}
          </tbody>
        ),
        tr: ({ children }) => (
          <tr
            className={cn(
              'h-14',
              // ensures rounded-ness for bottom corners of the table
              '[&:not(:first-child):last-child>*:first-child]:rounded-bl-lg [&:not(:first-child):last-child>*:last-child]:rounded-br-lg',
              // ensures correct non-overlapping cell borders
              '[&:not(:first-child):last-child>*]:border-b [&>*:last-child]:border-r [&>*]:border-l [&>*]:border-t [&>*]:border-border-default',
            )}
          >
            {children}
          </tr>
        ),
        td: ({ children }) => <td className="px-6">{children}</td>,
        // th: ...
        th: ({ children }) => (
          <th className="bg-background-secondary px-6 text-left font-bold">{children}</th>
        ),
        hr: () => <hr className="my-8 border-t border-border-default" />,
      }}
    >
      {content ?? ''}
    </ReactMarkdown>
  )
}

export default Markdown
