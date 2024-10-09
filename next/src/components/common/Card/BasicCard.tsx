import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type BasicCardProps = {
  title: string
  subtext?: string | null | undefined
  imgSrc?: string
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1199-13816&mode=dev
 */

const BasicCard = ({
  title,
  subtext,
  imgSrc,
  hasWhiteBackground = true,
  className,
}: BasicCardProps) => {
  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={cn('hover:border-border-default', className)}
      title={title}
    >
      <CardImage imgSrc={imgSrc} className="aspect-[384/204]" />
      <div className="flex h-full flex-col justify-between gap-5 p-4 lg:px-5">
        <div className="flex flex-col gap-3">
          <Typography variant="h5">{title}</Typography>
          {subtext ? <Typography variant="p-default">{subtext}</Typography> : null}
        </div>
      </div>
    </CardBase>
  )
}

export default BasicCard
