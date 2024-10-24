import React from 'react'
import { useWindowSize } from 'usehooks-ts'

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
  const { title, text, iframeTitle, url, isFullScreen } = section ?? {}

  return (
    // TODO: Padding-y should probably be managed by the SectionContainer
    <SectionContainer
      background="primary"
      classNameInner={cn({ 'mx-0 max-w-full px-0 lg:px-0': isFullScreen })}
      className={cn('py-6 lg:py-18', className)}
    >
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />
        <iframe
          title={iframeTitle}
          src={url}
          width="100%"
          style={{ height: height * 0.85 }}
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-forms"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="fullscreen"
          // 50rem = 800px
          className="max-h-screen min-h-[50rem]"
        />
      </div>
    </SectionContainer>
  )
}

export default IframeSection
