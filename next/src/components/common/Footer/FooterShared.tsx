import { useTranslation } from 'next-i18next'
import React from 'react'

import OloLogo from '@/src/assets/images/olo-logo.svg'
import Button from '@/src/components/common/Button/Button'
import OloIcon from '@/src/components/common/Icon/OloIcon'
import Link from '@/src/components/common/Link/Link'
import Markdown from '@/src/components/formatting/Markdown'
import { FooterFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

export const FooterContacts = ({ text, facebookUrl, instagramUrl }: FooterFragment) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col flex-wrap gap-6 text-border-default">
      {/* TODO consider extracting logo to a separate component */}
      <OloLogo fill="white" />
      <Markdown content={text} />
      <div className="flex gap-6 text-background-primary">
        {facebookUrl && (
          <Button
            variant="icon-wrapped-negative-margin"
            href={facebookUrl}
            asLink
            hasLinkIcon={false}
            icon={<OloIcon name="social-media-facebook-footer" />}
            aria-label={t('footer.aria.facebook')}
          />
        )}
        {instagramUrl && (
          <Button
            variant="icon-wrapped-negative-margin"
            href={instagramUrl}
            asLink
            hasLinkIcon={false}
            icon={<OloIcon name="social-media-instagram-footer" />}
            aria-label={t('footer.aria.instagram')}
          />
        )}
      </div>
    </div>
  )
}

export const FooterBottomLinks = ({ bottomLinks }: FooterFragment) => {
  const { getLinkProps } = useGetLinkProps()

  return bottomLinks?.filter(isDefined).map((bottomLink, index) => {
    return (
      <Link
        variant="underlined"
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        {...getLinkProps(bottomLink)}
        className="text-border-default"
      />
    )
  })
}
