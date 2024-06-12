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

type ModalShareProps = {
  triggerButton: ReactNode
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-11025&m=dev
 */

const ModalShare = ({ triggerButton }: ModalShareProps) => {
  const { t } = useTranslation()

  const [inputValue, setInputValue] = useState(
    // inspired by https://stackoverflow.com/a/65200178
    typeof window === 'undefined' ? '' : window.location.href,
  )

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
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="grow"
                labelText={t('modalShare.copyLink')}
                disabled
              />
              <CopyToClipboardButton copyText={inputValue} className="max-lg:w-full max-lg:grow">
                {t('modalShare.copy')}
              </CopyToClipboardButton>
            </div>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

export default ModalShare
