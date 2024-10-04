import React from 'react'
import { useWindowSize } from 'usehooks-ts'

import Markdown from '@/src/components/formatting/Markdown'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { IframeSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'

type IframeSectionProps = {
  section: IframeSectionFragment
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=5980-28577&m=dev
 */

const IframeSection = ({ section, className }: IframeSectionProps) => {
  const { height } = useWindowSize()
  const { title, text, iframeTitle, body, url } = section ?? {}

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className={cn('py-6 lg:py-18', className)}>
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />

        {body?.length ? <Markdown content={body} /> : null}
        <iframe title={iframeTitle} src={url} width="100%" style={{ height: height * 0.85 }} />
      </div>
    </SectionContainer>
  )
}

export default IframeSection
