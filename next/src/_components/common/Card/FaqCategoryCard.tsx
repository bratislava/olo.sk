'use client'

import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import Icon, { iconNameMap } from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'

type FaqCategoryCardProps = {
  title: string
  linkHref: string
  iconName: keyof typeof iconNameMap
  className?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=44-6280&mode=dev
 */

const FaqCategoryCard = ({ title, className, linkHref, iconName }: FaqCategoryCardProps) => {
  return (
    <CardBase variant="solid" className={className}>
      <div className="flex flex-col gap-8 p-5">
        <div className="self-start rounded-[20px] bg-background-secondary p-4">
          <Icon name={iconName} className="size-6" />
        </div>
        <div className="flex flex-col gap-4 ">
          <Typography
            variant="h5"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          {/* TODO Change text to dynamic translation */}
          <Button variant="black-link" href={linkHref} stretched asLink>
            Zobraziť viac
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default FaqCategoryCard
