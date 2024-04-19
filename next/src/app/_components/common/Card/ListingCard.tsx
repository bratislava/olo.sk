'use client'

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

const ListingCard = ({ title, className, linkHref }: ListingCardProps) => {
  return (
    <CardBase background="white" variant="solid" className={className}>
      <div className="flex flex-col gap-8 p-4">
        <Typography variant="h6" className_onlyWhenNecessary="line-clamp-3">
          {title}
        </Typography>
        {/* TODO Replace this div with Button when ready */}
        <div className="flex items-center gap-6 lg:justify-between lg:gap-0">
          <MLink href={linkHref} stretched className="group-hover/CardBase:underline">
            <Typography variant="button-default">Zistiť viac</Typography>
          </MLink>
          <div className="ml-auto flex size-10 items-center justify-center rounded-lg bg-background-secondary">
            <Icon name="sipka-doprava" className="size-6" />
          </div>
        </div>
      </div>
    </CardBase>
  )
}

export default ListingCard
