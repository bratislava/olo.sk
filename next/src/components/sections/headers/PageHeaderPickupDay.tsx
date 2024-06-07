import { useTranslation } from 'next-i18next'

import AnchorPill from '@/src/components/common/AnchorPill/AnchorPill'
import Button from '@/src/components/common/Button/Button'
import ArticleCard from '@/src/components/common/Card/ArticleCard'
import ResponsiveCarousel from '@/src/components/common/Carousel/ResponsiveCarousel'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { PickupDayHeaderSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  header: PickupDayHeaderSectionFragment
}

// TODO replace these dummy items with actual articles when fetcher is implemented
// eslint-disable-next-line const-case/uppercase
const DUMMY_CAROUSEL_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
  return <ArticleCard key={item} title="Article headline" linkHref="#" tagText="TEST" />
})

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13579&m=dev
 */

const PageHeaderPickupDay = ({ header }: Props) => {
  const { t } = useTranslation()
  const { title, subTitle, anchors } = header

  const filteredAnchors = anchors?.filter(isDefined) ?? []

  return (
    <SectionContainer background="secondary">
      <div className="flex flex-col gap-6 pb-2 pt-6 lg:gap-8 lg:border-b lg:border-action-background-default lg:py-12">
        <div className="flex flex-col gap-3">
          <Typography variant="h1">{title}</Typography>
          {/* TODO Add even or odd week message */}
          <Typography variant="p-large">TODO: Even or odd week message</Typography>
        </div>
        <ul
          className={cn(
            'flex gap-2',
            'max-sm:negative-x-spacing scrollbar-hide max-sm:overflow-x-scroll',
          )}
        >
          {filteredAnchors?.length
            ? anchors
                ?.map((anchor) => {
                  if (!anchor) return null

                  return (
                    <li className="shrink-0">
                      <AnchorPill text={anchor.label} targetId={anchor?.targetId} />
                    </li>
                  )
                })
                // eslint-disable-next-line unicorn/no-array-callback-reference
                .filter(isDefined)
            : null}
        </ul>
      </div>
      <div className="flex flex-col gap-6 py-6 lg:py-12">
        <div className="flex flex-col max-lg:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Typography variant="h2">{subTitle}</Typography>
          <Button variant="black-link" href="/articles" asLink>
            {t('PageHeaderPickupDay.allNews')}
          </Button>
        </div>
        {/* TODO replace dummy items with actual articles when fetcher is implemented */}
        <ResponsiveCarousel
          desktop={4}
          shiftVariant="byPage"
          items={DUMMY_CAROUSEL_ITEMS}
          hasVerticalPadding={false}
        />
      </div>
    </SectionContainer>
  )
}

export default PageHeaderPickupDay
