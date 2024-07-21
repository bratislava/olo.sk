import React from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import cn from '@/src/utils/cn'

const WasteIcon = ({
  variant,
}: {
  variant: 'paper' | 'plastic' | 'glass' | 'mixed' | 'organic'
}) => {
  return (
    <div
      className={cn('flex h-[3rem] w-[3rem] rounded-2xl p-3 text-white', {
        'bg-waste-paper': variant === 'paper',
        'text-black bg-waste-plastic': variant === 'plastic',
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
