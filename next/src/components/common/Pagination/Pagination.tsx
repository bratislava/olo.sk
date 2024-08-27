import { useTranslation } from 'next-i18next'
import React, { ReactNode } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import usePagination from '@/src/components/common/Pagination/usePagination'
import cn from '@/src/utils/cn'

export type PaginationProps = {
  currentPage: number
  totalCount: number
  onPageChange?: (value: number) => void
}

/**
 * Inspired by bratislava.sk https://github.com/bratislava/bratislava.sk/tree/master/next/components/ui/Pagination
 *
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=37-1730&mode=design&t=3OjB80TrL7MvAUkW-4
 *
 * @param currentPage
 * @param totalCount
 * @param onPageChange
 * @constructor
 */

const Pagination = ({ currentPage, totalCount, onPageChange = () => {} }: PaginationProps) => {
  const { t } = useTranslation()

  const { items } = usePagination({
    count: totalCount,
    page: currentPage,
    onChange: (event, value) => {
      // When not blurred the button stays focused and is confusing.
      ;(event.target as HTMLButtonElement).blur()
      onPageChange(value)
    },
  })

  return (
    <nav>
      <ul
        className={cn('flex flex-wrap items-center justify-center gap-1 lg:gap-2')}
        data-cy="pagination"
      >
        {items.map(
          ({ page, type, selected, disabled, onPress, 'aria-current': ariaCurrent }, index) => {
            let children: ReactNode = null

            // eslint-disable-next-line unicorn/prefer-switch
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…'
            } else if (type === 'page') {
              children = (
                <Button
                  variant={selected ? 'category-solid' : 'black-outline'}
                  isDisabled={disabled}
                  onPress={onPress}
                  aria-current={ariaCurrent}
                  aria-label={t('pagination.aria.goToPage', { page })}
                  // TODO this styling currently overrides current Button component to align with Figma Buttons
                  className={cn(
                    'flex h-10 w-10 shrink-0 grow-0 items-center justify-center rounded-full font-bold lg:h-12 lg:w-12',
                    { 'bg-background-primary': !selected },
                  )}
                >
                  {page}
                </Button>
              )
            } else if (type === 'previous' || type === 'next') {
              let icon: ReactNode
              let ariaLabel = ''
              if (type === 'previous') {
                icon = <Icon name="sipka-dolava" />
                ariaLabel = t('pagination.aria.goToPreviousPage', { page })
              }
              if (type === 'next') {
                icon = <Icon name="sipka-doprava" />
                ariaLabel = t('pagination.aria.goToNextPage', { page })
              }

              children = (
                <Button
                  variant="category-plain"
                  isDisabled={disabled}
                  onPress={onPress}
                  aria-label={ariaLabel}
                  icon={icon}
                  className="rounded-full"
                />
              )
            }

            return (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={cn({
                  'text-sm flex w-10 items-center justify-center lg:w-12':
                    type === 'start-ellipsis' || type === 'end-ellipsis',
                  'lg:mr-2': type === 'previous',
                  'lg:ml-2': type === 'next',
                })}
              >
                {children}
              </li>
            )
          },
        )}
      </ul>
    </nav>
  )
}

export default Pagination
