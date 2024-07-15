/* eslint-disable jsx-a11y/heading-has-content */
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'

import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

import styles from './Markdown.module.scss'

export type MarkdownProps = {
  content: string | null | undefined
  className?: string
}

/**
 * See documentation: https://github.com/remarkjs/react-markdown#appendix-b-components
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
          <Typography variant="h6" className="text-h5" {...props}>
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
          const [altText, caption] = alt?.includes('||') ? alt?.split('||') || ['', ''] : [alt, alt]

          // TODO this still produces a hydration error, because the remark-unwrap-images only works when image is the only child of the paragraph
          return (
            <figure className="flex max-w-full flex-col items-center gap-2 py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={altText} width={width} height={height} sizes={sizes} />
              {alt && (
                <figcaption
                  aria-hidden={caption === alt}
                  className="text-center text-size-p-small text-border-hover"
                >
                  {caption}
                </figcaption>
              )}
            </figure>
          )
        },
        blockquote: ({ node, ...props }) => (
          <blockquote className="my-4 border-l-4 border-border-default py-2 pl-8" {...props} />
        ),
        ol: ({ children, ...props }) => (
          <ol className="marker:text-primary list-decimal pl-8" {...props}>
            {children}
          </ol>
        ),
        ul: ({ children, ...props }) => (
          <ul className="marker:text-primary list-disc pl-8" {...props}>
            {children}
          </ul>
        ),
        // Remark-gfm components: del, input, table, tbody, td, th, thead, and tr
        // FIXME tables need revisit - align, spacing, etc.
        table: ({ children }) => (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">{children}</table>
          </div>
        ),
        tr: ({ children }) => (
          <tr className="mb-4 table w-full md:mb-0 md:table-row">{children}</tr>
        ),
        tbody: ({ children }) => <tbody>{children}</tbody>,
        thead: () => <thead />,
        td: ({ children }) => (
          <td className="text-large-respo table-row md:table-cell">
            <div className="mb-1 flex items-center pr-4 text-left md:mb-0 md:py-1">{children}</div>
          </td>
        ),
        // th: ...
        hr: () => <hr className="my-8 border-t border-border-default" />,
      }}
    >
      {content ?? ''}
    </ReactMarkdown>
  )
}

export default Markdown
