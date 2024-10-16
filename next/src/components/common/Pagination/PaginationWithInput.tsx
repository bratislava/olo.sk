import { useTranslation } from 'next-i18next'
import React from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Input from '@/src/components/common/Input/Input'
import { PaginationProps } from '@/src/components/common/Pagination/Pagination'
import { usePaginationWithInput } from '@/src/components/common/Pagination/usePaginationWithInput'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=37-1906&t=Ix6vxd23ycmma0c2-4
 */

const PaginationWithInput = ({
  currentPage,
  totalCount,
  onPageChange: handlePageChange,
}: PaginationProps) => {
  const { t } = useTranslation()

  const {
    handleInputFocus,
    inputValue,
    handleInputChange,
    handleDecrement,
    handleIncrement,
    handleBlur,
    handleKeyDown,
  } = usePaginationWithInput(currentPage, totalCount, handlePageChange)

  return (
    <nav>
      <div className={cn('flex items-center justify-start gap-4')}>
        <Button
          variant="category-plain"
          isDisabled={inputValue < 2}
          onPress={() => handleDecrement(inputValue)}
          aria-label={t('pagination.aria.goToPreviousPage', inputValue.toString())}
          icon={<Icon name="sipka-dolava" />}
          className="rounded-full"
        />

        <div className="flex items-center justify-center gap-2">
          <Input
            className="items-center justify-center"
            classNameInner={cn('w-15 text-center', {
              // widen input field slightly for more than 3 digits
              'w-[4.37rem]': inputValue.toString().length > 3,
            })}
            aria-label={t('pagination.aria.goToPage', { page: inputValue })}
            type="number"
            value={inputValue}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />

          <div className="flex gap-1">
            <div className="flex size-6 justify-center">
              <Typography variant="p-default">/</Typography>
            </div>
            <Typography variant="p-default">{totalCount}</Typography>
          </div>
        </div>

        <Button
          variant="category-plain"
          isDisabled={inputValue >= totalCount || inputValue.toString() === ''}
          onPress={() => handleIncrement(inputValue)}
          aria-label={t('pagination.aria.goToNextPage', inputValue.toString())}
          icon={<Icon name="sipka-doprava" />}
          className="rounded-full"
        />
      </div>
    </nav>
  )
}

export default PaginationWithInput
