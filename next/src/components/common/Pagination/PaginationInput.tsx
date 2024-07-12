import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Input from '@/src/components/common/Input/Input'
import { PaginationProps } from '@/src/components/common/Pagination/Pagination'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

// can be moved to utils
const sanitizePaginationInput = (userInput: string, currentPage: number, totalCount: number) => {
  if (Number.isNaN(+userInput)) {
    return userInput.replaceAll(/\D/g, currentPage.toString()) // plain text entered
  }

  if (+userInput > totalCount) return totalCount.toString() // value entered goes over the page limit, adjust the UI to display our defined max

  return userInput === '0' ? '' : userInput // 0 entered, we leave it empty for users to type a value
}

const PaginationInput = ({
  currentPage,
  totalCount,
  onPageChange: handlePageChange,
}: PaginationProps) => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState(currentPage.toString())

  const handleDecrement = (userInput: string, parentHandler: any) => {
    const newUserInputValue = +userInput - 1 === 0 ? 1 : +userInput - 1
    setInputValue(newUserInputValue.toString())
    parentHandler(newUserInputValue)
  }

  const handleIncrement = (userInput: string, parentHandler: any, pagesCount: number) => {
    const newUserInputValue = +userInput + 1 === pagesCount ? pagesCount : +userInput + 1
    setInputValue(newUserInputValue.toString())
    parentHandler(newUserInputValue)
  }

  const handleInputChange = (userInput: string) => {
    if (userInput !== '') {
      handlePageChange?.(+userInput)
    }
  }

  return (
    <nav>
      <div className={cn('flex items-center justify-start gap-4')}>
        <Button
          variant="category-plain"
          isDisabled={+inputValue < 2}
          onPress={() => {
            handleDecrement(inputValue, handlePageChange)
          }}
          aria-label={t('pagination.aria.goToPreviousPage', inputValue)}
          icon={<Icon name="sipka-dolava" />}
          className="rounded-full"
        />

        <div className="flex items-center justify-center gap-2">
          <Input
            className="items-center justify-center"
            classNameInner={cn('w-[3.75rem] text-center', {
              // widen input field slightly for more than 3 digits
              'w-[4.37rem]': inputValue.toString().length > 3,
            })}
            maxLength={totalCount.toString().length}
            value={sanitizePaginationInput(inputValue, currentPage, totalCount)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(event.currentTarget.value)
            }
            onBlur={(event) => handleInputChange(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleInputChange(event.currentTarget.value)
              }
            }}
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
          isDisabled={+inputValue >= totalCount}
          onPress={() => {
            handleIncrement(inputValue, handlePageChange, totalCount)
          }}
          aria-label={t('pagination.aria.goToNextPage', inputValue)}
          icon={<Icon name="sipka-doprava" />}
          className="rounded-full"
        />
      </div>
    </nav>
  )
}

export default PaginationInput
