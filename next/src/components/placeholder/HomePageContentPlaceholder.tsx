import { useQuery } from '@tanstack/react-query'
import React from 'react'

import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { client } from '@/src/services/graphql'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

const HomePageContentPlaceholder = () => {
  const { getFullPath } = useGetFullPath()

  const { data: pagesData } = useQuery({
    queryFn: () => client.Pages(),
    queryKey: ['pages'],
  })

  const { data: articlesData } = useQuery({
    queryFn: () => client.Articles(),
    queryKey: ['articles'],
  })

  const filteredPagesData = pagesData?.pages?.data.filter(
    (page) => isDefined(page?.attributes?.slug) && isDefined(page?.attributes?.title),
  )

  const filteredArticlesData = articlesData?.articles?.data.filter(
    (article) => isDefined(article?.attributes?.slug) && isDefined(article?.attributes?.title),
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
      </div>
    </SectionContainer>
  )
}

export default HomePageContentPlaceholder
