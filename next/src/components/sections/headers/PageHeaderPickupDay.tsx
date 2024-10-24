import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'

import AnchorPill from '@/src/components/common/AnchorPill/AnchorPill'
import Button from '@/src/components/common/Button/Button'
import ArticleCard from '@/src/components/common/Card/ArticleCard'
import ResponsiveCarousel from '@/src/components/common/Carousel/ResponsiveCarousel'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { PageHeaderBasicProps } from '@/src/components/sections/headers/PageHeaderBasic'
import { PickupDayHeaderSectionFragment } from '@/src/services/graphql/api'
import {
  articlesDefaultFilters,
  ArticlesFilters,
  getMeiliArticlesQueryKey,
  meiliArticlesFetcher,
} from '@/src/services/meili/fetchers/articlesFetcher'
import cn from '@/src/utils/cn'
import { getCurrentWeekOfYear } from '@/src/utils/getCurrentWeekOfYear'
import { isCurrentWeekEven } from '@/src/utils/isCurrentWeekEven'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

export const LATEST_ARTICLES_COUNT = 12

type Props = Pick<PageHeaderBasicProps, 'title'> & {
  header: PickupDayHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13579&m=dev
 */

const PageHeaderPickupDay = ({ title, header }: Props) => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language

  const { getFullPath } = useGetFullPath()
  const { getLinkProps } = useGetLinkProps()

  const { carouselTitle, tags, anchors, showMoreLink } = header

  const filteredAnchors = anchors?.filter(isDefined) ?? []

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredTagSlugs = tags?.data.map((tag) => tag.attributes?.slug).filter(isDefined) ?? []

  const filters: ArticlesFilters = {
    ...articlesDefaultFilters,
    pageSize: LATEST_ARTICLES_COUNT,
    tagSlugs: filteredTagSlugs,
  }

  const { data: articlesData } = useQuery({
    queryKey: getMeiliArticlesQueryKey(filters, locale),
    queryFn: () => meiliArticlesFetcher(filters, locale),
  })

  const filteredArticles =
    articlesData?.hits
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []

  // eslint-disable-next-line unicorn/prefer-spread
  const articlesToRender = Array.from(new Set(filteredArticles))

  return (
    <SectionContainer background="secondary">
      <div className="flex flex-col gap-6 pb-2 pt-6 lg:gap-8 lg:border-b lg:border-action-background-default lg:py-12">
        <div className="flex flex-col gap-3">
          <Typography variant="h1">{title}</Typography>
          <Typography variant="p-large">
            {isCurrentWeekEven()
              ? t('pageHeaderPickupDay.messageEvenWeek', { weekNumber: getCurrentWeekOfYear() })
              : t('pageHeaderPickupDay.messageOddWeek', { weekNumber: getCurrentWeekOfYear() })}
          </Typography>
        </div>
        {filteredAnchors?.length ? (
          <ul
            className={cn(
              'flex gap-2',
              'max-sm:negative-x-spacing scrollbar-hide max-sm:overflow-x-scroll',
            )}
          >
            {filteredAnchors
              ?.map((anchor, index) => {
                if (!anchor) return null

                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index} className="shrink-0">
                    <AnchorPill text={anchor.label} targetId={anchor.targetId} />
                  </li>
                )
              })
              // eslint-disable-next-line unicorn/no-array-callback-reference
              .filter(isDefined)}
          </ul>
        ) : null}
      </div>
      <div className="flex flex-col gap-6 py-6 lg:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Typography variant="h2">{carouselTitle}</Typography>
          <Button variant="black-link" asLink {...getLinkProps(showMoreLink)}>
            {t('pageHeaderPickupDay.allNews')}
          </Button>
        </div>
        {articlesToRender.length > 0 ? (
          <ResponsiveCarousel
            desktop={4}
            shiftVariant="byPage"
            controlsVariant="side"
            items={articlesToRender
              .map((article) => {
                if (!article.attributes) return null

                const {
                  title: articleTitle,
                  coverMedia,
                  articleCategory,
                  slug,
                } = article.attributes

                return (
                  <ArticleCard
                    key={slug}
                    title={articleTitle}
                    linkHref={getFullPath(article) ?? '#'}
                    imgSrc={coverMedia?.data?.attributes?.url}
                    tagText={articleCategory?.data?.attributes?.title}
                  />
                )
              })
              // eslint-disable-next-line unicorn/no-array-callback-reference
              .filter(isDefined)}
            hasVerticalPadding={false}
          />
        ) : null}
      </div>
    </SectionContainer>
  )
}

export default PageHeaderPickupDay
