import { useTranslation } from 'next-i18next'
import React from 'react'

import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'

type Props = {
  alias: string | null | undefined
  variant?: 'page' | 'article'
}

// Inspired by hel.fi, e.g. here: https://www.hel.fi/fi/sosiaali-ja-terveyspalvelut/lasten-ja-perheiden-palvelut

const AliasInfoMessage = ({ alias, variant = 'page' }: Props) => {
  const { t } = useTranslation()

  if (!alias) {
    return null
  }

  const translationMap = {
    page: t('aliasInfoMessage.message.page'),
    article: t('aliasInfoMessage.message.article'),
  }

  return (
    <div className="py-8 italic">
      <Typography variant="p-default">
        {`${translationMap[variant]} `}
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Link href={`/${alias}`} variant="underlined">
          olo.sk/{alias}
        </Link>
        .
      </Typography>
    </div>
  )
}

export default AliasInfoMessage
