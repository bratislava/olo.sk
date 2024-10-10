import { useTranslation } from 'next-i18next'
import { Dispatch, forwardRef, SetStateAction } from 'react'
import { Input, Label, SearchField } from 'react-aria-components'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Spinner from '@/src/components/common/Spinner/Spinner'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type SearchBarProps = {
  placeholder?: string
  input: string
  label?: string
  setInput: Dispatch<SetStateAction<string>>
  setSearchQuery: (value: string) => void
  isLoading?: boolean
  className?: string
}

/**
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/sections/SearchSection/SearchBar.tsx
 */

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ placeholder, label, input, setInput, setSearchQuery, isLoading, className }, forwardedRef) => {
    const { t } = useTranslation()

    const handleSearch = () => {
      setSearchQuery(input)
    }

    return (
      <SearchField
        ref={forwardedRef}
        // TODO PageHeader size dynamically
        // 10rem scroll margin works fine for all screen sizes
        className={cn('flex scroll-mt-[10rem] flex-col gap-y-1', className)}
        aria-label={t('searchBar.search')}
        defaultValue={placeholder ?? t('searchBar.enterKeyword')}
        value={input}
        onChange={setInput}
        onSubmit={handleSearch}
      >
        {label ? (
          <Label>
            <Typography variant="h6">{t('searchBar.whatAreYouLookingFor')}</Typography>
          </Label>
        ) : null}
        <div className="relative">
          {/* 0.75rem = 12px */}
          <Input
            className={cn(
              'w-full rounded-lg border border-border-default px-13 py-4 outline-none',
              'ring-offset-2 transition hover:border-border-hover focus:border-content-secondary focus-visible:ring',
            )}
            data-cy="search-field"
            aria-label={t('searchBar.enterKeyword')}
          />
          <Icon
            aria-hidden
            name="lupa"
            className="pointer-events-none absolute left-4 top-[calc(50%_-_0.75rem)]"
          />
          {isLoading ? (
            <Spinner size="small" className="absolute right-15 top-[calc(50%_-_0.75rem)]" />
          ) : null}
          {input ? (
            <Button
              // We don't want responsive sizing, to keep the button well aligned with the input
              size="large"
              icon={<Icon name="krizik" />}
              variant="icon-wrapped-negative-margin"
              // Keyboard users use Escape to erase the input, they can't focus this button, so empty aria-label is okay
              aria-label=""
              className="absolute right-4 top-[calc(50%_-_0.75rem)]"
            />
          ) : null}
        </div>
      </SearchField>
    )
  },
)

export default SearchBar
