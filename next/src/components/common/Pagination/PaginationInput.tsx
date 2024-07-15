import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Input from '@/src/components/common/Input/Input'
import { PaginationProps } from '@/src/components/common/Pagination/Pagination'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=37-1906&t=Ix6vxd23ycmma0c2-4
 */

const PaginationInput = ({
  currentPage,
  totalCount,
  onPageChange: handlePageChange,
}: PaginationProps) => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState(currentPage.toString())

  const sanitizeInput = (userInput: string) => {
    if (/^\D+$/.test(userInput)) {
      // arbitrary text entered
      setInputValue(currentPage.toString())

      return currentPage.toString()
    }

    if (+userInput > totalCount) {
      setInputValue(totalCount.toString()) // user input exceeds totalCount of pages

      return totalCount.toString()
    }

    return userInput === '0' ? '' : userInput // 0 is entered, displaying an empty field
  }

  const handleDecrement = (userInput: string) => {
    const newUserInputValue = +userInput - 1 === 0 ? 1 : +userInput - 1
    setInputValue(newUserInputValue.toString())
    handlePageChange?.(newUserInputValue)
  }

  const handleIncrement = (userInput: string, pagesCount: number) => {
    const newUserInputValue = +userInput + 1 === pagesCount ? pagesCount : +userInput + 1

    setInputValue(newUserInputValue.toString())
    handlePageChange?.(newUserInputValue)
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
            handleDecrement(inputValue)
          }}
          aria-label={t('pagination.aria.goToPreviousPage', inputValue)}
          icon={<Icon name="sipka-dolava" />}
          className="rounded-full"
        />

        <div className="flex items-center justify-center gap-2">
          <p>local value: {inputValue}</p>

          <Input
            className="items-center justify-center"
            classNameInner={cn('w-[3.75rem] text-center', {
              // widen input field slightly for more than 3 digits
              'w-[4.37rem]': inputValue.toString().length > 3,
            })}
            maxLength={totalCount.toString().length}
            value={sanitizeInput(inputValue)}
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
            handleIncrement(inputValue, totalCount)
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
