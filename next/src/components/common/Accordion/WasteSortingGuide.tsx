import React from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type WasteSortingColumnProps = {
  title: string
  items: { title: string }[]
}

type WasteSortingGuideProps = {
  leftColumn: WasteSortingColumnProps
  rightColumn: WasteSortingColumnProps
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1-5&m=dev
 */

const WasteSortingGuide = ({ leftColumn, rightColumn, className }: WasteSortingGuideProps) => {
  return (
    <div
      className={cn(
        'flex flex-col divide-y divide-border-default lg:flex-row lg:divide-x lg:divide-y-0',
        className,
      )}
    >
      <div className="flex flex-col gap-5 p-4 lg:w-1/2 lg:px-8 lg:py-5">
        <Typography variant="h6">{leftColumn.title}</Typography>
        <div className="flex flex-col gap-4">
          {leftColumn.items.length > 0
            ? leftColumn.items.map((item) => {
                return (
                  <div className="flex gap-4">
                    <Icon name="fajka-kruh" className="text-success" />
                    <Typography variant="p-default">{item.title}</Typography>
                  </div>
                )
              })
            : null}
        </div>
      </div>

      <div className="flex flex-col gap-5 p-4 lg:w-1/2 lg:px-8 lg:py-5">
        <Typography variant="h6">{rightColumn.title}</Typography>
        <div className="flex flex-col gap-4">
          {rightColumn.items.length > 0
            ? rightColumn?.items.map((item) => {
                return (
                  <div className="flex gap-4">
                    <Icon name="zrusit-kruh" className="text-error" />
                    <Typography variant="p-default">{item.title}</Typography>
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </div>
  )
}

export default WasteSortingGuide
