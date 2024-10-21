/* eslint-disable jsx-a11y/heading-has-content */
import Image from 'next/image'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import supersub from 'remark-supersub'
import remarkUnwrapImages from 'remark-unwrap-images'

import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import { useTransformOloMarkdownLinks } from '@/src/components/formatting/useTransformOloMarkdownLinks'
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
    // TODO set table width to be exact to that of SectionContainer without hardcoding it
    <div className="lg:flex lg:justify-center">
      {/* 80rem = 1280px (max-width of SectionContainer), 4rem = 64px (its horizontal padding) */}
      <div className="lg:max-w-[min(100vw-4rem,80rem-4rem)]">
        <div className="relative">
          <div className={cn('overflow-x-auto', scrollFadeClassNames)} ref={tableWrapperRef}>
            <table {...props} className="border-separate border-spacing-0">
              {children}
            </table>
          </div>
        </div>
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
  const { transformOloMarkdownLinks } = useTransformOloMarkdownLinks()

  const [contentState, setContentState] = useState<string>(content ?? '')

  // TODO should be run before rendering
  useEffect(() => {
    const transformAsync = async () => {
      const transformedContent = await transformOloMarkdownLinks(content)
      setContentState(transformedContent ?? '')
    }

    transformAsync()
  }, [content, transformOloMarkdownLinks])

  return (
    <ReactMarkdown
      remarkPlugins={[
        remarkUnwrapImages,
        [
          remarkGfm,
          // https://stackoverflow.com/a/78076200
          { singleTilde: false },
        ],
        supersub,
      ]}
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
        img: ({ alt, src }) => {
          // Based on City Gallery:
          // https://github.com/bratislava/gmb.sk/blob/master/next/components/atoms/CityGalleryMarkdown.tsx
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [altText, caption] = alt?.includes('||') ? alt?.split('||') || ['', ''] : [alt, alt]

          if (!src) return null

          // TODO this still produces a hydration error, because the remark-unwrap-images only works when image is the only child of the paragraph
          return (
            <figure className="flex flex-col items-center gap-4">
              <Image
                src={src}
                width="0"
                height="0"
                sizes="100vw"
                alt={altText ?? ''}
                className="h-auto w-full overflow-hidden rounded-2xl"
              />
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
        ol: ({ children, node, ...props }) => (
          <ol className="list-decimal pl-8 marker:text-content-secondary" {...props}>
            {children}
          </ol>
        ),
        ul: ({ children, node, ...props }) => (
          <ul className="list-disc pl-8 marker:text-content-secondary" {...props}>
            {children}
          </ul>
        ),
        li: ({ children, node, ...props }) => <li {...props}>{children}</li>,
        // Remark-gfm components: del, input, table, tbody, td, th, thead, and tr
        // TODO tables need revisit - align, spacing, etc.
        table: ({ children, node, ...props }) => (
          <RichTextTable {...props}>{children}</RichTextTable>
        ),
        thead: ({ children, node, ...props }) => (
          <thead
            {...props}
            // ensures rounded-ness for top corners of the table
            className="[&>*>*:first-child]:rounded-tl-lg [&>*>*:last-child]:rounded-tr-lg"
          >
            {children}
          </thead>
        ),
        tbody: ({ children, node, ...props }) => (
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
        // TODO align
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        td: ({ children, align }) => <td className="px-5 py-1">{children}</td>,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        th: ({ children, align }) => (
          <th className="bg-background-secondary px-5 py-1 text-left font-bold">{children}</th>
        ),
        hr: () => <hr className="my-8 border-t border-border-default" />,
      }}
    >
      {contentState}
    </ReactMarkdown>
  )
}

export default Markdown
