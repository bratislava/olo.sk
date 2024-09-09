import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { FooterBottomLinks, FooterContacts } from '@/src/components/common/Footer/FooterShared'
import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { isDefined } from '@/src/utils/isDefined'
import { generalQuery } from '@/src/utils/queryOptions'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

const DesktopFooter = () => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language
  const { getLinkProps } = useGetLinkProps()

  const { data } = useQuery(generalQuery(locale))

  const footerAttributes = data?.footer?.data?.attributes
  if (!footerAttributes) {
    return null
  }

  const { columns, bottomLinks } = footerAttributes

  return (
    <div className="flex flex-col">
      <SectionContainer className="bg-content-primary py-18">
        <div className="grid grid-cols-[30.5rem_1fr_1fr] gap-8">
          <FooterContacts {...footerAttributes} />
          {columns
            ?.map((column, columnIndex) => {
              if (!column) return null

              const filteredColumnLinks = column.links?.filter(isDefined) ?? []

              return (
                // eslint-disable-next-line react/no-array-index-key
                <div className="flex flex-col flex-wrap gap-4" key={columnIndex}>
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

      {/* This visual divider spans the full page width, so it needs to be outside of SectionContainer */}
      <div className="border-t border-content-secondary" aria-hidden />

      <SectionContainer className="bg-content-primary py-6">
        <div className="flex w-full items-baseline justify-between gap-10 text-border-default">
          <div className="flex flex-row flex-wrap gap-6 gap-y-2 text-size-p-small">
            <FooterBottomLinks bottomLinks={bottomLinks} />
          </div>
          <Typography variant="p-small" className_onlyWhenNecessary="shrink-0">
            {t('footer.copyrightMessage.desktop', { year: new Date().getFullYear() })}{' '}
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
      </SectionContainer>
    </div>
  )
}

export default DesktopFooter
