'use client'

import { type BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer'

import Typography from '@/_components/common/Typography/Typography'

type Props = {
  readonly content: BlocksContent
}

const BlockRendererClient = ({ content }: Props) => {
  if (!content) {
    return null
  }

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => {
          return <Typography variant="p-default">{children}</Typography>
        },

        heading: ({ level, children }) => {
          switch (level) {
            case 1:
              // We do not support h1 on purpose because h1 is already present in page header
              return <Typography variant="p-default">{children}</Typography>

            case 2:
              return <Typography variant="h2">{children}</Typography>

            case 3:
              return <Typography variant="h3">{children}</Typography>

            case 4:
              return <Typography variant="h4">{children}</Typography>

            case 5:
              return <Typography variant="h5">{children}</Typography>

            case 6:
              return <Typography variant="h6">{children}</Typography>

            default:
              return null
          }
        },
      }}
      modifiers={{
        bold: ({ children }) => (
          <Typography variant="p-default-bold" as="strong">
            {children}
          </Typography>
        ),
        italic: ({ children }) => (
          <Typography variant="p-default" as="em" className_onlyWhenNecessary="italic">
            {children}
          </Typography>
        ),
        // We do not support underlined text on purpose because it goes against accessibility guidelines
        underline: ({ children }) => children,
      }}
    />
  )
}

export default BlockRendererClient
