'use client'

import Button from '@/app/_components/common/Button/Button'
import CardBase from '@/app/_components/common/Card/CardBase'
import CardImage from '@/app/_components/common/Card/CardImage'
import Typography from '@/app/_components/common/Typography/Typography'

type CategoryCardProps = {
  title: string
  linkHref: string
  linkText: string
  className?: string
  imgSrc?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1199-13816&mode=dev
 */

const CategoryCard = ({ title, className, linkHref, linkText, imgSrc }: CategoryCardProps) => {
  return (
    <CardBase variant="plain" className={className}>
      <div className="flex flex-col gap-4">
        <CardImage imgSrc={imgSrc} className="aspect-square rounded-lg" />
        <div className="flex flex-col gap-2 ">
          <Typography variant="h5" className_onlyWhenNecessary="line-clamp-3">
            {title}
          </Typography>
          <Button variant="black-link" href={linkHref} asLink>
            {linkText}
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default CategoryCard
