import { useTranslation } from 'next-i18next'
import { ReactNode, useState } from 'react'
import { DialogTrigger } from 'react-aria-components'

import CopyToClipboardButton from '@/src/components/common/CopyToCLipBoardButton/CopyToClipBoardButton'
import Icon from '@/src/components/common/Icon/Icon'
import Input from '@/src/components/common/Input/Input'
import Dialog from '@/src/components/common/ModalDialog/Dialog'
import Modal from '@/src/components/common/ModalDialog/Modal'
import SocialMediaButton from '@/src/components/common/SocialMediaButton/SocialMediaButton'
import Typography from '@/src/components/common/Typography/Typography'

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
                <SocialMediaButton
                  startIcon={<Icon name="social-media-facebook" />}
                  getSocialLink={(url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`}
                  fullWidth
                >
                  {t('shareModal.facebook')}
                </SocialMediaButton>
                <SocialMediaButton
                  // TODO discuss if we want to add twitterTextQuery as in bratislava.sk
                  getSocialLink={(url) => `https://twitter.com/intent/tweet?url=${url}`}
                  startIcon={<Icon name="social-media-twitter" />}
                  fullWidth
                >
                  {t('shareModal.xTwitter')}
                </SocialMediaButton>
                <SocialMediaButton
                  getSocialLink={(url) =>
                    `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
                  }
                  startIcon={<Icon name="social-media-linkedin" />}
                  fullWidth
                >
                  {t('shareModal.linkedIn')}
                </SocialMediaButton>
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
