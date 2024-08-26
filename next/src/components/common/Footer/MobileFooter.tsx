import { useTranslation } from 'next-i18next'
import React from 'react'

import { FooterBottomLinks, FooterContacts } from '@/src/components/common/Footer/FooterShared'
import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { useGeneralContext } from '@/src/providers/GeneralContextProvider'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

const MobileFooter = () => {
  const { getLinkProps } = useGetLinkProps()
  const { t } = useTranslation()
  const { footer } = useGeneralContext()

  const { text, facebookUrl, instagramUrl, columns, bottomLinks } = footer?.data?.attributes ?? {}

  return (
    <SectionContainer className="bg-content-primary">
      <div className="flex flex-col divide-y divide-border-dark">
        <div className="flex flex-col py-6">
          <FooterContacts {...{ text, facebookUrl, instagramUrl }} />
        </div>

        <div className="flex flex-col gap-6 py-6">
          {/* TODO Replace with Accordions */}
          {columns
            ?.map((column, columnIndex) => {
              if (!column) return null

              const filteredColumnLinks = column.links?.filter(isDefined) ?? []

              return (
                // eslint-disable-next-line react/no-array-index-key
                <div
                  className="flex flex-col flex-wrap gap-4"
                  // eslint-disable-next-line react/no-array-index-key
                  key={columnIndex}
                >
                  <Typography variant="h5" className_onlyWhenNecessary="text-background-primary">
                    {column.title}
                  </Typography>
                  <div className="flex flex-col gap-3 text-border-default">
                    {filteredColumnLinks.map((columnLink, index) => {
                      return (
                        <Link
                          variant="underlined"
                          // eslint-disable-next-line react/no-array-index-key
                          key={index}
                          {...getLinkProps(columnLink)}
                        />
                      )
                    })}
                  </div>
                </div>
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        </div>

        <div className="flex flex-col gap-6 py-6 text-center text-border-default">
          <div className="flex flex-col gap-6 text-size-p-small">
            <div className="flex flex-col gap-6">
              <FooterBottomLinks bottomLinks={bottomLinks} />
            </div>
          </div>
          <div className="border-t border-border-dark" aria-hidden />
          <Typography variant="p-small">
            {t('footer.copyrightMessage.mobile', { year: new Date().getFullYear() })}{' '}
            <Link
              variant="underlined"
              href="https://inovacie.bratislava.sk/"
              target="_blank"
              className="text-size-p-small"
            >
              {t('footer.copyrightMessage.innovationDepartment')}
            </Link>
          </Typography>
        </div>
      </div>
    </SectionContainer>
  )
}

export default MobileFooter
