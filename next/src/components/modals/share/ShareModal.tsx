import { useTranslation } from 'next-i18next'
import { ReactNode, useState } from 'react'
import { DialogTrigger } from 'react-aria-components'

import Button from '@/src/components/common/Button/Button'
import CopyToClipboardButton from '@/src/components/common/CopyToCLipBoardButton/CopyToClipBoardButton'
import Icon from '@/src/components/common/Icon/Icon'
import Input from '@/src/components/common/Input/Input'
import Dialog from '@/src/components/common/ModalDialog/Dialog'
import Modal from '@/src/components/common/ModalDialog/Modal'
import Typography from '@/src/components/common/Typography/Typography'

// TODO social buttons share functionality

type ShareModalProps = {
  triggerButton: ReactNode
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-11025&m=dev
 */

const ShareModal = ({ triggerButton }: ShareModalProps) => {
  const { t } = useTranslation()

  const [inputValue, setInputValue] = useState(
    // inspired by https://stackoverflow.com/a/65200178
    typeof window === 'undefined' ? '' : window.location.href,
  )

  return (
    <DialogTrigger>
      {triggerButton}
      <Modal>
        <Dialog title={t('shareModal.share')}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Typography variant="h6">{t('shareModal.shareOnSocialMedia')}</Typography>
              <div className="flex items-stretch gap-3 max-lg:flex-col">
                <Button
                  variant="category-outline"
                  fullWidth
                  size="large"
                  startIcon={<Icon name="social-media-facebook" />}
                >
                  {t('shareModal.facebook')}
                </Button>
                <Button
                  variant="category-outline"
                  fullWidth
                  size="large"
                  startIcon={<Icon name="social-media-twitter" />}
                >
                  {t('shareModal.xTwitter')}
                </Button>
                <Button
                  variant="category-outline"
                  fullWidth
                  size="large"
                  startIcon={<Icon name="social-media-linkedin" />}
                >
                  {t('shareModal.linkedIn')}
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="grow"
                labelText={t('shareModal.copyLink')}
                disabled
              />
              <CopyToClipboardButton copyText={inputValue} className="max-lg:w-full max-lg:grow">
                {t('shareModal.copy')}
              </CopyToClipboardButton>
            </div>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

export default ShareModal
