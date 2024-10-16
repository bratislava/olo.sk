import Head from 'next/head'

import { SeoFragment, UploadImageEntityFragment } from '@/src/services/graphql/api'
import { UnionSlugEntityType, useGetFullPath } from '@/src/utils/useGetFullPath'

type SeoHeadProps = {
  title: string | undefined | null
  seo?: SeoFragment | null | undefined
  ogType?: string
  description?: string | null
  image?: UploadImageEntityFragment | null
  entity?: UnionSlugEntityType
  homepage?: boolean
}

/**
 *
 * Inspired by Marianum: https://github.com/bratislava/marianum.sk/blob/653826717683dd60c901295205a5c73d4391574e/next/components/atoms/Seo.tsx
 *
 * TODO
 *  - better usage with SEO strapi plugin
 *  - no texts in the code ("- OLO", ...), use translations
 *
 * @param title
 * @param seo
 * @param ogType
 * @param description
 * @param image
 * @param entity
 * @param homepage
 * @constructor
 */

const SeoHead = ({
  title,
  seo,
  ogType = 'website',
  description,
  image,
  entity,
  homepage = false,
}: SeoHeadProps) => {
  const { getFullPath } = useGetFullPath()

  const fullPath = getFullPath(entity)
  const fullPathWithDomain = homepage
    ? `https://testing.bratislava.sk/`
    : fullPath
      ? `https://testing.bratislava.sk${fullPath}`
      : null

  return (
    <Head>
      <title>{`${title || ''} – OLO`}</title>

      <meta name="title" content={`${seo?.metaTitle || title || ''} – OLO`} />
      <meta name="description" content={seo?.metaDescription || description || ''} />
      <meta name="keywords" content={seo?.keywords ?? ''} />
      <meta name="viewport" content={seo?.metaViewport ?? 'width=device-width, initial-scale=1'} />

      {fullPathWithDomain && <link rel="canonical" href={fullPathWithDomain} />}

      {/* Documentation: https://ogp.me/ */}
      <meta property="og:title" content={`${seo?.metaTitle || title || ''} – OLO`} />
      <meta property="og:type" content={ogType} />
      {fullPathWithDomain && <meta property="og:url" content={fullPathWithDomain} />}

      {/* TODO: Twitter's image size limit is only 1MB */}
      <meta property="og:image" content={image?.attributes?.url ?? ''} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Comments from: https://css-tricks.com/essential-meta-tags-social-media/ */}
      {/* Non-Essential, But Recommended */}
      <meta property="og:description" content={seo?.metaDescription || description || ''} />
      <meta property="og:site_name" content="OLO - Odvoz a likvidcáia odpadu" />
      <meta name="twitter:image:alt" content={image?.attributes?.alternativeText ?? ''} />

      {/* Non-Essential, But Required for Analytics */}
      {/* <meta property="fb:app_id" content="your_app_id" /> */}
      {/* <meta name="twitter:site" content="@website-username" /> */}
    </Head>
  )
}

export default SeoHead
