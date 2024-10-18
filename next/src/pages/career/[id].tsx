import { dehydrate, QueryClient } from '@tanstack/react-query'
import parse from 'html-react-parser'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useMemo, useState } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import Button from '@/src/components/common/Button/Button'
import CareerRowCard from '@/src/components/common/Card/CareerRowCard'
import Icon from '@/src/components/common/Icon/Icon'
import OloIcon from '@/src/components/common/Icon/OloIcon'
import SeoHead from '@/src/components/common/SeoHead'
import SidebarCareer from '@/src/components/common/Sidebar/SidebarCareer'
import Typography from '@/src/components/common/Typography/Typography'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery } from '@/src/services/graphql/api'
import { fetchPositionsDetailFromApi } from '@/src/services/nalgoo/fetchPositionsDetailFromApi'
import { getSalary, parseBenefits } from '@/src/services/nalgoo/utils'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import { JobOfferDetail } from '@/src/services/todo-openapi-nalgoo'
import { NOT_FOUND } from '@/src/utils/conts'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'
import { generalQuery } from '@/src/utils/queryOptions'

type PageProps = {
  general: GeneralQuery
  navigation: NavigationObject
  entity: JobOfferDetail
}

type StaticParams = {
  id: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  // TODO: fetch all open position ID and generate paths
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
  locale,
  params,
}) => {
  const id = params?.id

  if (!id || !locale) {
    return NOT_FOUND
  }

  const promises = [
    client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale),
  ]

  try {
    const [general, navigation, translations] = await Promise.all(
      promises.map((p) => p.catch((error) => error)),
    )

    const entityResponse = await fetchPositionsDetailFromApi(id)

    if (!entityResponse || entityResponse instanceof Error) {
      return NOT_FOUND
    }
    // Prefetch data
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(generalQuery(locale))

    const dehydratedState = dehydrate(queryClient)

    return {
      props: {
        entity: entityResponse,
        general,
        navigation,
        dehydratedState,
        ...translations,
      },
      revalidate: 10,
    }
  } catch (error) {
    return NOT_FOUND
  }
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=619-11100&m=dev
 */

// TODO: In a current version following features are missing: Breadcrumbs, HeaderImage and sanitization check

const Page = ({ entity: positionDetail, navigation, general }: PageProps) => {
  const { t } = useTranslation()
  const [positionBenefit, setPositionBenefit] = useState<IconTextPair[]>([])
  const HTML_REGEX = /(<([^>]+)>)/gi

  const breadcrumbs = useMemo(
    () => [
      ...getPageBreadcrumbs('o-nas/kariera', navigation.pagePathsMap),
      { title: t('career.openPositions'), path: null },
    ],
    [navigation.pagePathsMap, t],
  )

  useEffect(() => {
    if (!positionDetail) return

    const parsedBenefit =
      typeof positionDetail.benefit === 'string' ? parse(positionDetail.benefit) : []
    setPositionBenefit(parseBenefits(parsedBenefit))
  }, [positionDetail])

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      <SeoHead title={t('career.detailHeadline')} />

      {/* <PageHeaderSections
        title={positionDetail.title}
        header={{ media: { data: { attributes: { url: '', name: '' } } } }}
      /> */}

      <PageLayout>
        <SectionContainer background="secondary">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <HeaderTitleText
            title={positionDetail && positionDetail.name ? positionDetail.name : ''}
          />
        </SectionContainer>
        <SectionContainer background="primary">
          {positionDetail ? (
            <div
              id="career-section-content"
              className="relative mx-auto max-w-screen-xl bg-background-primary px-0 py-6 lg:py-12"
            >
              <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-8">
                <div className="order-2 flex w-full shrink flex-col md:order-1 md:w-[50rem]">
                  <div className="grid grid-cols-1 rounded-lg border border-border-default md:grid-cols-2 md:grid-rows-2">
                    <CareerRowCard
                      className="border-b border-border-default md:border-r"
                      icon={<OloIcon name="career-place" />}
                      label={t('career.address')}
                      value={positionDetail?.region_description?.replaceAll(HTML_REGEX, '') ?? ''}
                    />
                    <CareerRowCard
                      className="border-b border-border-default"
                      icon={<OloIcon name="career-calendar" />}
                      label={t('career.contractType')}
                      value={
                        positionDetail?.employment_forms?.map((eForm) => eForm.name).join(', ') ??
                        ''
                      }
                    />
                    <CareerRowCard
                      className="border-b border-border-default md:border-b-0 md:border-r"
                      icon={<OloIcon name="career-time" />}
                      label={t('career.start')}
                      value={positionDetail.date_start ?? ''}
                    />
                    <CareerRowCard
                      icon={<OloIcon name="career-salary" />}
                      label={t('career.salary')}
                      value={getSalary(positionDetail.salary_text)[0]}
                      toolTipText={getSalary(positionDetail.salary_text)[1]}
                    />
                  </div>
                  <div className="prose divide-y-1 divide-border-default prose-h2:mt-10 prose-p:last:mb-0 prose-ul:my-0 prose-li:list-disc">
                    <div className="pb-10">
                      <Typography variant="h2">{t('career.positionInformation')}</Typography>
                      <Typography variant="h4">{t('career.positionResponsibilities')}</Typography>
                      <div>{parse(positionDetail.job_note ?? '')}</div>
                    </div>
                    <div className="pb-10">
                      <Typography variant="h2">{t('career.interviewInformation')}</Typography>
                      <div>{parse(positionDetail.interview ?? '')}</div>
                    </div>
                    <div className="pb-10">
                      <Typography variant="h2">{t('career.employeeRequirements')}</Typography>
                      <div className="pb-2 pt-4">
                        <Typography variant="h5">{t('career.employeeEducation')}</Typography>
                      </div>
                      <div>
                        {positionDetail?.educations?.map((eForm) => eForm.name).join(', ') ?? ''}
                      </div>
                      {positionDetail.specialization && (
                        <>
                          <div className="pb-2 pt-4">
                            <Typography variant="h5">
                              {t('career.educationSpecialization')}
                            </Typography>
                          </div>
                          <div>{parse(positionDetail.specialization)}</div>
                        </>
                      )}
                      <div className="pb-2 pt-4">
                        <Typography variant="h5">{t('career.personalRequirements')}</Typography>
                      </div>
                      <div>{parse(positionDetail.personal_prerequisites ?? '')}</div>
                      {positionDetail.practise && (
                        <>
                          <div className="pb-2 pt-4">
                            <Typography variant="h5">{t('career.practice')}</Typography>
                          </div>
                          <div>{positionDetail.practise}</div>
                        </>
                      )}
                      {positionDetail.practise_sector && (
                        <>
                          <div className="pb-2 pt-4">
                            <Typography variant="h5">{t('career.practiceSector')}</Typography>
                          </div>
                          <div>{parse(positionDetail.practise_sector)}</div>
                        </>
                      )}
                    </div>
                    <div>
                      <Typography variant="h2">{t('career.benefits')}</Typography>
                      <div className="prose-p:my-0 prose-img:my-0">
                        {Array.isArray(positionBenefit) &&
                          positionBenefit.map((benefit) => (
                            <div key={benefit.key} className="flex items-center gap-4">
                              <div className="w-10">{benefit.icon ?? benefit.icon}</div>
                              <Typography variant="p-default">{benefit.text}</Typography>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <SidebarCareer className="order-1 w-full p-0 md:order-2 md:w-auto md:p-0">
                  <div className="px-5 py-4">
                    <div className="pb-2">
                      <Typography variant="p-default-black">{t('career.contact')}</Typography>
                    </div>
                    <Typography variant="p-default">
                      {positionDetail.user_consultant?.firstname}{' '}
                      {positionDetail.user_consultant?.lastname}
                    </Typography>
                    <Typography variant="p-default">
                      {positionDetail.user_consultant?.email}
                    </Typography>
                  </div>
                  <div className="flex flex-col gap-3 px-5 pb-4 pt-5">
                    <Typography variant="p-default-black">{t('career.interested')}</Typography>
                    <Button
                      variant="category-solid"
                      href={positionDetail.apply_url}
                      startIcon={<Icon name="karty-a-preukazy" />}
                      hasLinkIcon={false}
                      asLink
                    >
                      {t('career.sendCV')}
                    </Button>
                  </div>
                </SidebarCareer>
              </div>
            </div>
          ) : (
            <div className="p-20">
              <Typography variant="h4">{t('common.integrationError')}</Typography>
            </div>
          )}
        </SectionContainer>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
