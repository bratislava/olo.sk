import { useTranslation } from 'next-i18next'
import React from 'react'

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

  return (
    <nav>
      <div className={cn('flex items-center justify-start gap-4')}>
        <Button
          variant="category-plain"
          isDisabled={currentPage === 1}
          onPress={() => handlePageChange?.(currentPage - 1)}
          aria-label={t('pagination.aria.goToPreviousPage', currentPage.toString())}
          icon={<Icon name="sipka-dolava" />}
          className="rounded-full"
        />

        <div className="flex items-center justify-center gap-2">
          <Input
            className="items-center justify-center"
            classNameInner="max-w-[3.2rem]"
            disabled={false}
            value={currentPage}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handlePageChange?.(Number(event.target.value))
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
          isDisabled={currentPage === totalCount}
          onPress={() => handlePageChange?.(currentPage + 1)}
          aria-label={t('pagination.aria.goToNextPage', currentPage.toString())}
          icon={<Icon name="sipka-doprava" />}
          className="rounded-full"
        />
      </div>
    </nav>
  )
}

export default PaginationInput
