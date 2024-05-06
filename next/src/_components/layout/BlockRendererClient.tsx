'use client'

import { type BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer'

type Props = {
  readonly content: BlocksContent
}

const BlockRendererClient = ({ content }: Props) => {
  if (!content) {
    return null
  }

  return <BlocksRenderer content={content} />
}

export default BlockRendererClient
