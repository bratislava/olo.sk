'use client'

import { twMerge } from 'tailwind-merge'

import CardBase from '@/app/_components/common/Card/CardBase'
import Icon from '@/app/_components/common/Icon/Icon'
import MLink from '@/app/_components/common/Link/Link'
import Typography from '@/app/_components/common/Typography/Typography'

type ListingCardProps = {
  title: string
  linkHref: string
  className?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1341-11042&mode=dev
 */

const ListingCardTitle = ({ text }: { text: string }) => (
  <Typography variant="h6" className_onlyWhenNecessary="line-clamp-3">
    {text}
  </Typography>
)

const ListingCard = ({ title, className, linkHref }: ListingCardProps) => {
  return (
    <CardBase variant="border" className={twMerge('gap-8 bg-white p-4', className)}>
      <ListingCardTitle text={title} />
      <div className="flex flex-row items-center gap-6 lg:justify-between lg:gap-0">
        {/* TODO change to button component */}
        <MLink href={linkHref} className="group-hover/CardBase:underline">
          {/* TODO Add translation */}
          <Typography variant="button-default">Zistiť viac</Typography>
        </MLink>
        <div className="ml-auto flex size-10 items-center justify-center rounded-lg bg-background-secondary">
          <Icon name="sipka-doprava" className="size-6" />
        </div>
      </div>
    </CardBase>
  )
}

export default ListingCard
