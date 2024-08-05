import { useTranslation } from 'next-i18next'

import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import FilesSection from '@/src/components/sections/FilesSection'
import { DocumentEntityFragment } from '@/src/services/graphql/api'
import { formatDate } from '@/src/utils/formatDate'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  document: DocumentEntityFragment
}

const DocumentPageContent = ({ document }: Props) => {
  const { t } = useTranslation()
  if (!document.attributes) return null

  const {
    files,
    description,
    documentCategory,
    identificationNumber,
    supplier,
    publishedAt,
    priceWithoutTax,
  } = document.attributes ?? {}

  const detailItems = [
    {
      label: t('documentPageContent.documentCategory'),
      value: documentCategory?.data?.attributes?.title,
    },
    { label: t('documentPageContent.identificationNumber'), value: identificationNumber },
    { label: t('documentPageContent.supplier'), value: supplier },
    { label: t('documentPageContent.publishedAt'), value: formatDate(publishedAt) },
    { label: t('documentPageContent.priceWithoutTax'), value: priceWithoutTax },
  ].filter((item) => !!item.value)

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredFiles = files.filter(isDefined) ?? []

  return (
    // TODO fix y-padding so we don't change it from here
    <div className="flex flex-col py-6 lg:gap-10 lg:pb-18 lg:pt-8">
      {filteredFiles.length > 1 ? (
        <FilesSection
          className="lg:py-0"
          section={{
            title: t('documentPageContent.fileGroupTitle'),
            files: filteredFiles,
          }}
        />
      ) : null}
      <SectionContainer>
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-4">
            <SectionHeader title={`${t('documentPageContent.detailsTitle')}`} />
            <div className="flex flex-col gap-4">
              {detailItems.map(({ label, value }, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="flex flex-col flex-wrap sm:flex-row sm:gap-x-6" key={index}>
                  <Typography className_onlyWhenNecessary="basis-1/3">{`${label}:`}</Typography>
                  <Typography>{value}</Typography>
                </div>
              ))}
            </div>
          </div>
          {description ? (
            <>
              <SidebarDivider />
              <div className="flex flex-col gap-4">
                <SectionHeader title={t('documentPageContent.descriptionTitle')} />
                <Typography>{description}</Typography>
              </div>
            </>
          ) : null}
        </div>
      </SectionContainer>
    </div>
  )
}

export default DocumentPageContent
