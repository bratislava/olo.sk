'use client'

import CardBase from '@/app/_components/common/Card/CardBase'
import CardLink from '@/app/_components/common/Card/CardLink'
import Icon, { iconNameMap } from '@/app/_components/common/Icon/Icon'
import Typography from '@/app/_components/common/Typography/Typography'

type WorkshopCardProps = {
  title: string
  linkHref: string
  iconName: keyof typeof iconNameMap
  linkText?: string
  className?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=44-6280&mode=dev
 */

const WorkshopCard = ({ title, className, linkHref, linkText, iconName }: WorkshopCardProps) => {
  return (
    <CardBase background="white" variant="solid" className={className}>
      <div className="flex flex-col gap-6 p-4 lg:p-6">
        <div className="self-start rounded-2xl bg-background-secondary p-4">
          {iconName ? <Icon name={iconName} className="size-6" /> : <div className="size-6" />}
        </div>
        <div className="flex flex-col gap-4 lg:gap-10 ">
          <Typography variant="h4" className_onlyWhenNecessary="line-clamp-3">
            {title}
          </Typography>
          {/* TODO Replace CardLink with button when ready */}
          <CardLink linkHref={linkHref} customText={linkText} />
        </div>
      </div>
    </CardBase>
  )
}

export default WorkshopCard
