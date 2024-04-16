'use client'

import { twMerge } from 'tailwind-merge'

import CardBase from '@/app/_components/common/Card/CardBase'
import CardLink from '@/app/_components/common/Card/CardLink'
import Icon, { iconNameMap } from '@/app/_components/common/Icon/Icon'
import Typography from '@/app/_components/common/Typography/Typography'

type CategoryCardProps = {
  title: string
  linkHref: string
  iconName: keyof typeof iconNameMap | undefined
  linkText?: string
  className?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=44-6280&mode=dev
 */

const CategoryCardTitle = ({ text }: { text: string }) => (
  <Typography variant="h5" className_onlyWhenNecessary="line-clamp-3">
    {text}
  </Typography>
)
const CategoryCardIcon = ({ iconName }: { iconName?: keyof typeof iconNameMap }) => {
  return (
    <div className="rounded-xl bg-background-secondary p-4">
      {iconName ? <Icon name={iconName} className="size-6" /> : <div className="size-6" />}
    </div>
  )
}

const CategoryCard = ({ title, className, linkHref, linkText, iconName }: CategoryCardProps) => {
  return (
    <CardBase variant="border" className={twMerge('gap-8 bg-white p-5', className)}>
      <div className="self-start">
        <CategoryCardIcon iconName={iconName} />
      </div>
      <div className="flex flex-col gap-4 ">
        <CategoryCardTitle text={title} />
        <CardLink linkHref={linkHref} customText={linkText} />
      </div>
    </CardBase>
  )
}

export default CategoryCard
