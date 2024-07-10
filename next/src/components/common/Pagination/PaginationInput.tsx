import { useTranslation } from 'next-i18next'
import React, { useEffect, useReducer } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Input from '@/src/components/common/Input/Input'
import { PaginationProps } from '@/src/components/common/Pagination/Pagination'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

interface PageState {
  page: string
}

type Action = {
  type: 'SET' | 'INCREMENT' | 'DECREMENT'
  payload?: string
}

const reducer = (state: PageState, action: Action): PageState => {
  switch (action.type) {
    case 'SET':
      return { page: action.payload as string }

    case 'INCREMENT':
      return { page: (Number(state.page) + 1).toString() }

    case 'DECREMENT':
      return { page: (Number(state.page) - 1).toString() }

    default:
      return state
  }
}

// iba cislo, ziaden string
// 1 - total (13 - error) ak menej tak error

const PaginationInput = ({
  currentPage,
  totalCount,
  onPageChange: handlePageChange,
}: PaginationProps) => {
  const { t } = useTranslation()

  const initialState: PageState = {
    page: currentPage.toString(),
  }

  const [{ page }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (handlePageChange) {
      handlePageChange(Number(page))
    }
  }, [handlePageChange, page])

  return (
    <nav>
      <ul className={cn('flex items-center justify-start')}>
        <Button
          variant="category-plain"
          isDisabled={Number(page) === 1}
          onPress={() => dispatch({ type: 'DECREMENT' })}
          aria-label={t('pagination.aria.goToPreviousPage', page)}
          icon={<Icon name="sipka-dolava" />}
          className="rounded-full"
        />

        <div className="flex h-12 w-[102px] items-center justify-center">
          <Input
            className="h-12 w-12 shrink grow basis-0 items-center justify-start gap-3 px-4 py-3 text-center"
            disabled={false}
            value={page}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: 'SET', payload: event.target.value })
            }
          />

          <div className="flex items-center justify-start gap-1">
            <Typography variant="p-default">/</Typography>
            <Typography variant="p-default">{totalCount}</Typography>
          </div>
        </div>

        <Button
          variant="category-plain"
          isDisabled={Number(page) === totalCount}
          onPress={() => dispatch({ type: 'INCREMENT' })}
          aria-label={t('pagination.aria.goToNextPage', page)}
          icon={<Icon name="sipka-doprava" />}
          className="rounded-full"
        />
      </ul>
    </nav>
  )
}

export default PaginationInput
