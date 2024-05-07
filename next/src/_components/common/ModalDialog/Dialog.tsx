import { useTranslation } from 'next-i18next'
import React, { forwardRef, ReactNode } from 'react'
import { Dialog as ReactAriaDialog, DialogProps } from 'react-aria-components'

import Button from '@/_components/common/Button/Button'
import Icon from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'

type TitleProps = { title: string; 'aria-label'?: string } | { title?: never; 'aria-label': string }

type Props = { children: ReactNode } & TitleProps & Omit<DialogProps, 'children' | 'aria-label'>

/*
 * Component inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/ui/ModalDialog/Dialog.tsx
 *
 * Styling of Dialog to have fixed header and scrollable body is challenging.
 * Working solution was to use flexbox as mentioned here: https://stackoverflow.com/questions/4069734/fixed-header-footer-with-scrollable-content
 */

const Dialog = forwardRef<HTMLElement, Props>(({ children, title, ...props }, ref) => {
  const { t } = useTranslation()

  return (
    <ReactAriaDialog
      ref={ref}
      {...props}
      className="relative flex h-full flex-col overflow-y-hidden rounded-lg focus:outline-none"
    >
      {({ close }) => (
        <>
          {title ? (
            <div className="flex shrink-0 items-center gap-6 border-b border-border-default px-4 py-4.5 lg:px-6 lg:py-4">
              <Typography as="h2" variant="h5" className_onlyWhenNecessary="grow">
                {title}
              </Typography>
              <Button
                icon={<Icon name="krizik" className="size-5 lg:size-6" />}
                aria-label={t('aria.close')}
                variant="black-plain"
                onPress={close}
              />
            </div>
          ) : null}
          <div className="flex grow flex-col overflow-y-scroll px-4 py-6 lg:px-6">{children}</div>
          {/* Render the close button above content, without using z-index, if no Dialog title is provided */}
          {title ? null : (
            <Button
              icon={<Icon name="krizik" className="size-6" />}
              aria-label={t('aria.close')}
              className="absolute right-6 top-6 -m-2"
              variant="category-plain"
              onPress={close}
            />
          )}
        </>
      )}
    </ReactAriaDialog>
  )
})

export default Dialog
