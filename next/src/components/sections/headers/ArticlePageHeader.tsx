import Image from 'next/image'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import Tag from '@/src/components/common/Tag/Tag'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { ArticleEntityFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { formatDate } from '@/src/utils/formatDate'

type Props = {
  article: ArticleEntityFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13348&m=dev
 */

const ArticlePageHeader = ({ article }: Props) => {
  if (!article.attributes) return null

  const { title, coverMedia, category, addedAt } = article.attributes
  const tagText = category?.data?.attributes?.title
  const imageUrl = coverMedia?.data?.attributes?.url

  return (
    <SectionContainer background="secondary">
      {/* 50rem = 800px */}
      <div className="mx-auto lg:max-w-[50rem]">
        {/* Screen: Desktop */}
        <div className="flex flex-col items-start gap-6 py-12 max-lg:hidden">
          <Typography variant="h1">{title}</Typography>
          <div
            className={cn('flex w-full items-center', {
              'justify-end': !tagText,
              'justify-between': tagText,
            })}
          >
            {tagText ? <Tag variant="large" text={tagText} /> : null}
            <Typography>{formatDate(addedAt)}</Typography>
          </div>
        </div>
        {/* Screen: Mobile */}
        <div className="flex flex-col items-start gap-6 py-6 lg:hidden">
          {tagText ? <Tag variant="small" text={tagText} /> : null}
          <Typography variant="h1">{title}</Typography>
          <Typography variant="p-small">{formatDate(addedAt)}</Typography>
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
  )
}

export default ArticlePageHeader
