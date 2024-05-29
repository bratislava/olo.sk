import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'
import { DialogTrigger } from 'react-aria-components'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Dialog from '@/src/components/common/ModalDialog/Dialog'
import Modal from '@/src/components/common/ModalDialog/Modal'
import Typography from '@/src/components/common/Typography/Typography'

// TODO share functionality

type ModalShareProps = {
  triggerButton: ReactNode
}

// Temporary placeholder to be replaced with Input field
const InputPlaceholder = () => {
  return (
    <Button variant="black-outline" isDisabled className="grow text-left max-lg:w-full  ">
      input placeholder
    </Button>
  )
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-11025&m=dev
 */

const ModalShare = ({ triggerButton }: ModalShareProps) => {
  const { t } = useTranslation()

  return (
    <DialogTrigger>
      {triggerButton}
      <Modal>
        <Dialog title={t('modalShare.share')}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Typography variant="h6">{t('modalShare.shareOnSocialMedia')}</Typography>
              <div className="flex items-stretch gap-3 max-lg:flex-col">
                <Button
                  variant="category-outline"
                  fullWidth
                  size="large"
                  startIcon={<Icon name="social-media-facebook" />}
                >
                  {t('modalShare.facebook')}
                </Button>
                <Button
                  variant="category-outline"
                  fullWidth
                  size="large"
                  startIcon={<Icon name="social-media-twitter" />}
                >
                  {t('modalShare.xTwitter')}
                </Button>
                <Button
                  variant="category-outline"
                  fullWidth
                  size="large"
                  startIcon={<Icon name="social-media-linkedin" />}
                >
                  {t('modalShare.linkedIn')}
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h6">{t('modalShare.copyLink')}</Typography>
              <div className="flex flex-wrap gap-3 max-lg:flex-col">
                {/* TODO change to Input field */}
                <InputPlaceholder />
                <Button
                  variant="category-outline"
                  startIcon={<Icon name="kopirovat" />}
                  className="max-lg:w-full max-lg:grow"
                >
                  {t('modalShare.copy')}
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

export default ModalShare
