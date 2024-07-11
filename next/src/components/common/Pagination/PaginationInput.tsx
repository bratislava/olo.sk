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
  const [page, setPage] = useState(currentPage)

  return (
    <nav>
      <div className={cn('flex items-center justify-start gap-4')}>
        <Button
          variant="category-plain"
          isDisabled={page === 1}
          onPress={() => {
            setPage(page - 1)
            handlePageChange?.(page - 1)
          }}
          aria-label={t('pagination.aria.goToPreviousPage', page.toString())}
          icon={<Icon name="sipka-dolava" />}
          className="rounded-full"
        />

        <div className="flex items-center justify-center gap-2">
          <Input
            className="items-center justify-center"
            classNameInner={cn('!w-[3.75rem] text-center', {
              '!w-[4.37rem]': page.toString().length > 3,
            })}
            maxLength={4}
            inputMode="numeric"
            value={page}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPage(+event.target.value as number)
            }
            onBlur={(event: React.ChangeEvent<HTMLInputElement>) =>
              handlePageChange?.(+event.target.value as number)
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
          isDisabled={page === totalCount}
          onPress={() => {
            setPage(page + 1)
            handlePageChange?.(page + 1)
          }}
          aria-label={t('pagination.aria.goToNextPage', page.toString())}
          icon={<Icon name="sipka-doprava" />}
          className="rounded-full"
        />
      </div>
    </nav>
  )
}

export default PaginationInput
