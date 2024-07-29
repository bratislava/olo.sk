import Image from 'next/image'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import Tag from '@/src/components/common/Tag/Tag'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { ArticleEntityFragment } from '@/src/services/graphql/api'
import { formatDate } from '@/src/utils/formatDate'

type Props = {
  article: ArticleEntityFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13348&m=dev
 */

const ArticlePageHeader = ({ article }: Props) => {
  if (!article.attributes) return null

  const { title, coverMedia, articleCategory, addedAt } = article.attributes
  const tagText = articleCategory?.data?.attributes?.title
  const imageUrl = coverMedia?.data?.attributes?.url

  return (
    <>
      <SectionContainer background="secondary">
        {/* 50rem = 800px */}
        <div className="mx-auto lg:max-w-[50rem]">
          <div className="flex flex-row flex-wrap items-center gap-6 py-6 lg:py-12">
            <div className="order-1 w-full shrink-0 max-lg:order-2">
              <Typography variant="h1">{title}</Typography>
            </div>
            {tagText ? (
              <Tag variant="large" text={tagText} className="order-2 max-lg:order-1" />
            ) : null}
            <div className="order-3 ml-auto max-lg:w-full">
              <Typography variant="p-default">{formatDate(addedAt)}</Typography>
            </div>
          </div>
        </div>
        {/* 63rem = 1008px */}
        <div className="mx-auto lg:max-w-[63rem]">
          <div className="relative aspect-[1008/559] overflow-hidden max-lg:-mx-4 lg:top-18 lg:-mt-18 lg:rounded-2xl">
            {imageUrl ? (
              <Image src={imageUrl} alt="" fill className="z-1 object-cover" />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
        </div>
      </SectionContainer>
      {/* This div serves as an empty space for the image to overlap correctly */}
      <div aria-hidden className="h-18 bg-background-primary max-lg:hidden" />
    </>
  )
}

export default ArticlePageHeader
