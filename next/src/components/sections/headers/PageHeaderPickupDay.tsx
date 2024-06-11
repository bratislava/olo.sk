import { LocalDate } from '@js-joda/core'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'

import AnchorPill from '@/src/components/common/AnchorPill/AnchorPill'
import Button from '@/src/components/common/Button/Button'
import ArticleCard from '@/src/components/common/Card/ArticleCard'
import ResponsiveCarousel from '@/src/components/common/Carousel/ResponsiveCarousel'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { client } from '@/src/services/graphql'
import { PickupDayHeaderSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  header: PickupDayHeaderSectionFragment
}

const getCurrentWeekOfYear = () => {
  return LocalDate.now().isoWeekOfWeekyear()
}

const isCurrentWeekEven = () => {
  return getCurrentWeekOfYear() % 2 === 0
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13579&m=dev
 */

const PageHeaderPickupDay = ({ header }: Props) => {
  const { t } = useTranslation()
  const { title, subTitle, anchors } = header

  const filteredAnchors = anchors?.filter(isDefined) ?? []

  const { data: articlesData } = useQuery({
    // TODO decide the limit of articles displayed in carousel
    queryFn: () => client.LatestArticles({ limit: 10 }),
    queryKey: ['articles'],
  })

  const filteredArticles =
    articlesData?.articles?.data.filter(
      (article) => isDefined(article) && isDefined(article.attributes),
    ) ?? []

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
              ?.map((anchor) => {
                if (!anchor) return null

                return (
                  <li className="shrink-0">
                    <AnchorPill text={anchor.label} targetId={anchor?.targetId} />
                  </li>
                )
              })
              // eslint-disable-next-line unicorn/no-array-callback-reference
              .filter(isDefined)}
          </ul>
        ) : null}
      </div>
      <div className="flex flex-col gap-6 py-6 lg:py-12">
        <div className="flex flex-col max-lg:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Typography variant="h2">{subTitle}</Typography>
          <Button variant="black-link" href="/articles" asLink>
            {t('PageHeaderPickupDay.allNews')}
          </Button>
        </div>
        {filteredArticles.length > 0 ? (
          <ResponsiveCarousel
            desktop={4}
            shiftVariant="byPage"
            controlsVariant="side"
            items={filteredArticles
              .map((article) => {
                if (!article.attributes) return null

                const { title: articleTitle, coverMedia, category, slug } = article.attributes

                return (
                  <ArticleCard
                    key={slug}
                    title={articleTitle}
                    linkHref={`/articles/${slug}`}
                    imgSrc={coverMedia?.data?.attributes?.url}
                    tagText={category?.data?.attributes?.title}
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
