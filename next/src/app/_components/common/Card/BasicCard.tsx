'use client'

import Button from '@/app/_components/common/Button/Button'
import CardBase from '@/app/_components/common/Card/CardBase'
import CardImage from '@/app/_components/common/Card/CardImage'
import Typography from '@/app/_components/common/Typography/Typography'

type BasicCardProps = {
  title: string
  subtext: string
  linkHref: string
  showBorder?: boolean
  linkText: string
  className?: string
  imgSrc?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1199-13816&mode=dev
 */

const BasicCard = ({
  title,
  subtext,
  className,
  linkHref,
  linkText,
  imgSrc,
  showBorder = true,
}: BasicCardProps) => {
  return (
    <CardBase variant={showBorder ? 'solid' : 'plain'} className={className}>
      <CardImage imgSrc={imgSrc} className="aspect-[384/204] rounded-t-lg" />
      <div className="flex flex-col gap-5 px-4 py-4 lg:px-5">
        <div className="flex flex-col gap-3">
          <Typography
            variant="h5"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
            {subtext}
          </Typography>
        </div>
        <Button variant="black-link" href={linkHref} asLink>
          {linkText}
        </Button>
      </div>
    </CardBase>
  )
}

export default BasicCard
