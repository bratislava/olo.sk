import React from 'react'

import Typography from '@/src/components/common/Typography/Typography'
import Section from '@/src/components/layout/Section/Section'

type Props = {
  title: string
}

const PageHeaderSection = ({ title }: Props) => {
  return (
    <Section background="secondary">
      <Typography variant="h1" className_onlyWhenNecessary="max-w-[600px]">
        {title}
      </Typography>
    </Section>
  )
}

export default PageHeaderSection
