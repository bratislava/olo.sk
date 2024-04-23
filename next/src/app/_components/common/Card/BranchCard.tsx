'use client'

import Button from '@/app/_components/common/Button/Button'
import CardBase from '@/app/_components/common/Card/CardBase'
import CardImage from '@/app/_components/common/Card/CardImage'
import Typography from '@/app/_components/common/Typography/Typography'

type BranchCardProps = {
  title: string
  linkHref: string
  address: string
  className?: string
  imgSrc?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1205-14699&mode=dev
 */

const BranchCard = ({ title, address, className, linkHref, imgSrc }: BranchCardProps) => {
  return (
    <CardBase variant="solid" className={className}>
      <div className="flex flex-col gap-6 p-4 lg:flex-row lg:p-6">
        {/* 4 rem = 64px, 8 rem = 128px */}
        <CardImage
          imgSrc={imgSrc}
          className="aspect-square size-[4rem] rounded-lg lg:size-[8rem]"
        />
        <div className="flex flex-col gap-6 lg:justify-between lg:gap-0">
          <div className="flex flex-col gap-2">
            <Typography
              variant="h4"
              className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
            <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
              {address}
            </Typography>
          </div>
          {/* TODO Change text to dynamic translation */}
          <Button variant="black-link" href={linkHref} asLink>
            Čítať viac
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default BranchCard
