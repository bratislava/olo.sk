import Image from 'next/image'

import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { IconHeaderSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'

type Props = {
  header: IconHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13454&m=dev
 */

const PageHeaderIcon = ({ header }: Props) => {
  const { title, text, icon } = header

  const iconUrl = icon.data?.attributes?.url

  return (
    <SectionContainer background="secondary">
      {/* 50rem = 800px */}
      <div className="py-6 lg:max-w-[50rem] lg:py-12">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-6 ">
          <div className="rounded-2xl bg-background-primary p-4">
            <div className="relative size-6">
              {iconUrl ? <Image src={iconUrl} alt="" fill className="object-contain" /> : null}
            </div>
          </div>
          <div className={cn('flex flex-col items-start gap-4 lg:gap-5 lg:pt-1')}>
            <Typography variant="h1">{title}</Typography>
            {text ? <Typography variant="p-default">{text}</Typography> : null}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default PageHeaderIcon
