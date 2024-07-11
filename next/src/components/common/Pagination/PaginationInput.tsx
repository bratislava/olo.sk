import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Input from '@/src/components/common/Input/Input'
import { PaginationProps } from '@/src/components/common/Pagination/Pagination'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

const PaginationInput = ({
  currentPage,
  totalCount,
  onPageChange: handlePageChange,
}: PaginationProps) => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState(currentPage)

  const handleInputChange = (userInput: string, totalPagesState: number) => {
    let currentInputValue = +userInput
    const LOWER_BOUNDARY = 1

    if (Number.isNaN(currentInputValue) || currentInputValue < LOWER_BOUNDARY) {
      setInputValue(LOWER_BOUNDARY) // if string-based input, go back to the start
      currentInputValue = LOWER_BOUNDARY
    }

    if (currentInputValue > totalPagesState) {
      setInputValue(totalPagesState)
      currentInputValue = totalPagesState
    }

    handlePageChange?.(currentInputValue) // send to parent
  }

  return (
    <nav>
      <div className={cn('flex items-center justify-start gap-4')}>
        <Button
          variant="category-plain"
          isDisabled={inputValue === 1}
          onPress={() => {
            setInputValue(inputValue - 1)
            handlePageChange?.(inputValue - 1)
          }}
          aria-label={t('pagination.aria.goToPreviousPage', inputValue.toString())}
          icon={<Icon name="sipka-dolava" />}
          className="rounded-full"
        />

        <div className="flex items-center justify-center gap-2">
          <Input
            className="items-center justify-center"
            classNameInner={cn('!w-[3.75rem] text-center', {
              '!w-[4.37rem]': inputValue.toString().length > 3,
            })}
            maxLength={4}
            // @ts-ignore
            value={
              Number.isNaN(+inputValue)
                ? () => {
                    setInputValue(1) // change local state

                    return '1' // return immediately to the UI
                  }
                : inputValue
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(+event.target.value)
            }
            onBlur={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(event.target.value, totalCount)
            }
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
          isDisabled={inputValue === totalCount}
          onPress={() => {
            setInputValue(inputValue + 1)
            handlePageChange?.(inputValue + 1)
          }}
          aria-label={t('pagination.aria.goToNextPage', inputValue.toString())}
          icon={<Icon name="sipka-doprava" />}
          className="rounded-full"
        />
      </div>
    </nav>
  )
}

export default PaginationInput
