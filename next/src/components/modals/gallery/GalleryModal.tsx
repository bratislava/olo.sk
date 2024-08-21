import FocusTrap from 'focus-trap-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { ReactNode, useEffect, useRef } from 'react'
import { AriaOverlayProps, OverlayContainer, useModal, useOverlay } from 'react-aria'
import { useIsClient, useScrollLock } from 'usehooks-ts'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import cn from '@/src/utils/cn'

export type GalleryModalProps = {
  children: ReactNode
  showCloseButton?: boolean
  underlayClassName?: string
  overlayClassName?: string
  centerVertically?: boolean
  noAnimation?: boolean
} & AriaOverlayProps

// based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/Gallery/GalleryModal.tsx

const GalleryModal = (props: GalleryModalProps) => {
  const {
    isOpen,
    onClose,
    children,
    isDismissable,
    underlayClassName,
    overlayClassName,
    showCloseButton = false,
    centerVertically = true,
    noAnimation = false,
  } = props
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement | null>(null)
  const { overlayProps, underlayProps } = useOverlay(
    { ...props, isDismissable: isDismissable === undefined ? true : isDismissable },
    ref,
  )

  const { modalProps } = useModal()

  const isClient = useIsClient()

  const { unlock } = useScrollLock({ autoLock: isOpen })

  useEffect(() => {
    if (!isOpen) {
      unlock()
    }
  }, [isOpen, unlock])

  return isClient ? (
    <OverlayContainer>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="relative z-50"
            transition={{ duration: noAnimation ? 0 : 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div
              {...underlayProps}
              className={cn(
                // TODO discuss underlay opacity
                'fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-content-secondary/[0.8]',
                underlayClassName,
              )}
            >
              <div className={cn({ 'flex min-h-full items-center': centerVertically })}>
                <FocusTrap>
                  <div
                    className={cn('mx-auto flex w-fit items-center', overlayClassName)}
                    {...overlayProps}
                    {...modalProps}
                    ref={ref}
                  >
                    {showCloseButton && (
                      <Button
                        variant="category-solid"
                        className="pointer-events-auto fixed right-6 top-6 z-30 rounded-full"
                        aria-label={t('galleryModal.aria.closeGallery')}
                        onPress={onClose}
                        icon={<Icon name="krizik" />}
                      />
                    )}
                    {children}
                  </div>
                </FocusTrap>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </OverlayContainer>
  ) : null
}

export default GalleryModal
