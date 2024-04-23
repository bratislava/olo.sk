import React from 'react'

import Typography from '@/_components/common/Typography/Typography'
import Section from '@/_components/layout/Section/Section'

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
