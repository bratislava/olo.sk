import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { Fragment } from 'react'

import Button from '@/src/components/common/Button/Button'
import Divider from '@/src/components/common/Sidebar/Divider'
import Typography from '@/src/components/common/Typography/Typography'
import { client } from '@/src/services/graphql'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

const OpeningTimesChangeAlert = () => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language

  const { getFullPath } = useGetFullPath()

  const { data: articlesData } = useQuery({
    queryFn: () => client.OpeningTimesChangeArticles({ locale }),
    queryKey: ['OpeningTimesChangeArticles', locale],
  })

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredArticles = articlesData?.articles?.data.filter(isDefined) ?? []

  if (filteredArticles.length === 0) return null

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-warning-softBackground-default p-4">
      <Typography variant="h6">{t('openingTimesChangeAlert.title')}</Typography>
      <div className="flex flex-col gap-6">
        {filteredArticles
          ?.map((article, index) => {
            if (!article.attributes) return null

            const { title } = article.attributes

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                {index > 0 && <Divider className="border-warning-background-default" />}
                <div className="flex flex-col gap-4">
                  <Typography variant="p-default">{title}</Typography>
                  <Button variant="black-link" asLink href={getFullPath(article)}>
                    {t('openingTimesChangeAlert.goToArticle')}
                  </Button>
                </div>
              </Fragment>
            )
          })
          // eslint-disable-next-line unicorn/no-array-callback-reference
          .filter(isDefined)}
      </div>
    </div>
  )
}

export default OpeningTimesChangeAlert
