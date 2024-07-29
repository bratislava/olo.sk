import React from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import cn from '@/src/utils/cn'

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=810-15763&m=dev
 */

const WasteIcon = ({
  variant,
}: {
  variant: 'paper' | 'plastic' | 'glass' | 'mixed' | 'organic'
}) => {
  return (
    <div
      className={cn('flex h-[3rem] w-[3rem] rounded-2xl p-3 text-background-primary', {
        'bg-waste-paper': variant === 'paper',
        'bg-waste-plastic text-content-secondary': variant === 'plastic',
        'bg-waste-glass': variant === 'glass',
        'bg-waste-mixed': variant === 'mixed',
        'bg-waste-organic': variant === 'organic',
      })}
    >
      <Icon name="kos" />
    </div>
  )
}

export default WasteIcon
