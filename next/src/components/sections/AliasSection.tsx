import { useTranslation } from 'next-i18next'
import React from 'react'

import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'

type Props = {
  alias: string | null | undefined
}

// Inspired by hel.fi, e.g. here: https://www.hel.fi/fi/sosiaali-ja-terveyspalvelut/lasten-ja-perheiden-palvelut

const AliasSection = ({ alias }: Props) => {
  const { t } = useTranslation()

  if (!alias) {
    return null
  }

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer>
      <div className="py-8 italic">
        <Typography variant="p-default">
          {t('aliasSection.aliasInfoMessage')}{' '}
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <Link href={`/${alias}`} variant="underlined">
            olo.sk/{alias}
          </Link>
          .
        </Typography>
      </div>
    </SectionContainer>
  )
}

export default AliasSection
