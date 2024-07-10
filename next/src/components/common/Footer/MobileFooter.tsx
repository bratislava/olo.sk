import { useTranslation } from 'next-i18next'
import React from 'react'

import { FooterBottomLinks, FooterContacts } from '@/src/components/common/Footer/FooterShared'
import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { useGeneralContext } from '@/src/providers/GeneralContextProvider'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

const DesktopFooter = () => {
  const { getLinkProps } = useGetLinkProps()
  const { t } = useTranslation()
  const { footer } = useGeneralContext()
  const footerAttributes = footer?.data?.attributes
  if (!footerAttributes) {
    return null
  }

  const { columns, bottomLinks } = footerAttributes

  return (
    <div className="flex flex-col divide-y divide-border-dark">
      {/* Contacts */}
      <SectionContainer className="bg-content-primary py-6">
        <div className="flex flex-col">
          <FooterContacts {...footerAttributes} />
        </div>
      </SectionContainer>

      {/* Columns */}
      <SectionContainer className="bg-content-primary py-6">
        <div className="flex flex-col gap-6">
          {columns?.length &&
            columns
              .map((column, columnIndex) => {
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
      </SectionContainer>

      {/* Bottom links & Copyright */}
      <SectionContainer className="bg-content-primary py-6">
        <div className="flex flex-col gap-6 text-center text-border-default">
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
              {t('footer.innovationDepartment')}
            </Link>
          </Typography>
        </div>
      </SectionContainer>
    </div>
  )
}

export default DesktopFooter
