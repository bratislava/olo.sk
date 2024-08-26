import Icon, { isBaIcon } from '@/src/components/common/Icon/Icon'
import OloIcon, { isOloIcon } from '@/src/components/common/Icon/OloIcon'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { IconHeaderSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'

type Props = {
  title: string
  perex?: string | null | undefined
  header: IconHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13454&m=dev
 */

const PageHeaderIcon = ({ title, perex, header }: Props) => {
  const { iconName } = header

  return (
    <SectionContainer background="secondary">
      {/* 50rem = 800px */}
      <div className="py-6 lg:max-w-[50rem] lg:py-12">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-6">
          <div className="rounded-2xl bg-background-primary p-4">
            {
              // TODO This should be extracted to a separate component
              isBaIcon(iconName) ? (
                <Icon name={iconName} className="size-6" />
              ) : isOloIcon(iconName) ? (
                <OloIcon name={iconName} className="size-6" />
              ) : (
                <div className="size-6" aria-hidden />
              )
            }
          </div>
          <div className={cn('flex flex-col items-start gap-4 lg:gap-5 lg:pt-1')}>
            <Typography variant="h1">{title}</Typography>
            {perex ? <Typography variant="p-default">{perex}</Typography> : null}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default PageHeaderIcon
