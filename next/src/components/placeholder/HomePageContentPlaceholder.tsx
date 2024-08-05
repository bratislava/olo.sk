import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React from 'react'

import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { client } from '@/src/services/graphql'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

const HomePageContentPlaceholder = () => {
  const { getFullPath } = useGetFullPath()
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { data: pagesData } = useQuery({
    queryFn: () => client.Pages({ locale }),
    queryKey: ['pages', locale],
  })

  const { data: articlesData } = useQuery({
    queryFn: () => client.Articles(),
    queryKey: ['articles'],
  })

  const { data: workshopsData } = useQuery({
    queryFn: () => client.Workshops(),
    queryKey: ['workshops'],
  })

  const { data: faqCategoriesData } = useQuery({
    queryFn: () => client.FaqCategories({ locale: 'sk' }),
    queryKey: ['faqcategories'],
  })

  const { data: documentsData } = useQuery({
    queryFn: () => client.Documents(),
    queryKey: ['documents'],
  })

  const { data: servicesData } = useQuery({
    queryFn: () => client.Services({ locale: 'sk' }),
    queryKey: ['services'],
  })

  const filteredPagesData = pagesData?.pages?.data.filter(
    (page) => isDefined(page?.attributes?.slug) && isDefined(page?.attributes?.title),
  )

  const filteredArticlesData = articlesData?.articles?.data.filter(
    (article) => isDefined(article?.attributes?.slug) && isDefined(article?.attributes?.title),
  )

  const filteredWorkshopsData = workshopsData?.workshops?.data.filter(
    (workshop) => isDefined(workshop?.attributes?.slug) && isDefined(workshop?.attributes?.title),
  )

  const filteredFaqCategoryData = faqCategoriesData?.faqCategories?.data.filter(
    (faqCategory) =>
      isDefined(faqCategory?.attributes?.slug) && isDefined(faqCategory?.attributes?.title),
  )

  const filteredDocumentsData = documentsData?.documents?.data.filter(
    (document) => isDefined(document?.attributes?.slug) && isDefined(document?.attributes?.title),
  )

  const filteredServicesData = servicesData?.services?.data.filter(
    (service) => isDefined(service?.attributes?.slug) && isDefined(service?.attributes?.title),
  )

  return (
    <SectionContainer className="min-h-[50vh] py-12">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <Typography variant="h4">Stránky</Typography>
          <div className="flex flex-col gap-2">
            {filteredPagesData?.map((page) => (
              <div key={page.id}>
                <div className="flex flex-row gap-2">
                  <Typography variant="p-default">•</Typography>
                  <Link variant="underlined" href={getFullPath(page) ?? '#'}>
                    {page.attributes?.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="h4">Články</Typography>
          <div className="flex flex-col gap-2">
            {filteredArticlesData?.map((article) => (
              <div key={article.id}>
                <div className="flex flex-row gap-2">
                  <Typography variant="p-default">•</Typography>
                  <Link variant="underlined" href={getFullPath(article) ?? '#'}>
                    {article.attributes?.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="h4">Workshopy</Typography>
          <div className="flex flex-col gap-2">
            {filteredWorkshopsData?.map((workshop) => (
              <div key={workshop.id}>
                <div className="flex flex-row gap-2">
                  <Typography variant="p-default">•</Typography>
                  <Link variant="underlined" href={getFullPath(workshop) ?? '#'}>
                    {workshop.attributes?.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="h4">FAQ kategórie</Typography>
          <div className="flex flex-col gap-2">
            {filteredFaqCategoryData?.map((faqCategory) => (
              <div key={faqCategory.id}>
                <div className="flex flex-row gap-2">
                  <Typography variant="p-default">•</Typography>
                  <Link variant="underlined" href={getFullPath(faqCategory) ?? '#'}>
                    {faqCategory.attributes?.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="h4">Dokumenty</Typography>
          <div className="flex flex-col gap-2">
            {filteredDocumentsData?.map((document) => (
              <div key={document.id}>
                <div className="flex flex-row gap-2">
                  <Typography variant="p-default">•</Typography>
                  <Link variant="underlined" href={getFullPath(document) ?? '#'}>
                    {document.attributes?.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="h4">Služby</Typography>
          <div className="flex flex-col gap-2">
            {filteredServicesData?.map((service) => (
              <div key={service.id}>
                <div className="flex flex-row gap-2">
                  <Typography variant="p-default">•</Typography>
                  <Link variant="underlined" href={getFullPath(service) ?? '#'}>
                    {service.attributes?.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HomePageContentPlaceholder
