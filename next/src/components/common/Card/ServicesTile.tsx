import React from 'react'

import Button from '@/src/components/common/Button/Button'
import CardBase, { CardBaseProps } from '@/src/components/common/Card/CardBase'
import Divider from '@/src/components/common/Sidebar/Divider'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { LinkProps } from '@/src/utils/useGetLinkProps'

type Props = {
  title: string
  text?: string | null | undefined
  linkProps?: LinkProps
  className?: string
} & Omit<CardBaseProps, 'variant'>

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2094-19259&t=KpDlPbubYbVcw7ey-4&mode=dev
 */

const ServiceCard = ({ title, text, linkProps, className, ...rest }: Props) => {
  return (
    <CardBase
      hasWhiteSectionBackground={false}
      variant="background-white"
      className={cn('px-6 py-5', className)}
      {...rest}
    >
      <div className="flex h-full flex-col gap-5">
        <div className="flex grow flex-col gap-2">
          <Typography
            variant="h6"
            as="h3"
            className_onlyWhenNecessary="group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          {text ? <Typography>{text}</Typography> : null}
        </div>

        <Divider />

        {linkProps ? (
          <Button
            asLink
            variant="black-link"
            fullWidth
            className="justify-between"
            stretched
            {...linkProps}
          />
        ) : null}
      </div>
    </CardBase>
  )
}

export default ServiceCard
