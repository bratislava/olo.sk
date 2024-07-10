import React from 'react'
import {
  Input as RACInput,
  Label as RACLabel,
  TextField as RACTextField,
} from 'react-aria-components'

import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelText?: string
}

const Input = ({ labelText, className, ...restProps }: InputProps) => {
  return (
    <RACTextField className={cn('flex flex-col gap-2', className)}>
      {labelText ? (
        <RACLabel>
          <Typography variant="h6">{labelText}</Typography>
        </RACLabel>
      ) : null}
      <RACInput
        className={cn(
          'rounded-lg border border-border-default px-4 py-3 outline-none',
          'ring-offset-2 transition hover:border-border-hover focus:border-content-secondary focus-visible:ring',
          className,
        )}
        {...restProps}
      />
    </RACTextField>
  )
}

export default Input
