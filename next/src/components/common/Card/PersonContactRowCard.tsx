import Button from '@/src/components/common/Button/Button'
import CardImage from '@/src/components/common/Card/CardImage'
import Typography from '@/src/components/common/Typography/Typography'
import { FileItemFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { useGetDownloadAriaLabel } from '@/src/utils/useGetDownloadAriaLabel'

type PersonContactRowCardProps = {
  // refactor type when Strapi contacts are implemented
  name: string
  position: string
  imgSrc?: string
  fileLinkLabel?: string
  fileItem?: FileItemFragment
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10950&m=dev
 */

const PersonContactRowCard = ({
  name,
  position,
  fileLinkLabel,
  fileItem,
  className,
  imgSrc,
}: PersonContactRowCardProps) => {
  const { getDownloadAriaLabel } = useGetDownloadAriaLabel()

  const shouldShowLink = isDefined(fileItem) && isDefined(fileLinkLabel)

  const linkButton = fileItem ? (
    <Button
      variant="black-link"
      asLink
      href={fileItem.media.data?.attributes?.url ?? '#'}
      aria-label={getDownloadAriaLabel(fileItem)}
    >
      {fileLinkLabel ?? fileItem?.title}
    </Button>
  ) : null

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="flex gap-4 lg:gap-6">
        {/* 7.5rem = 120px */}
        <CardImage imgSrc={imgSrc} className="size-12 rounded-lg lg:size-[7.5rem]" />
        <div
          className={cn('flex flex-col', {
            'justify-between': shouldShowLink,
            'justify-center': !shouldShowLink,
          })}
        >
          <div className="flex flex-col items-start gap-1 self-stretch lg:gap-2">
            <Typography variant="p-default-black">{name}</Typography>
            <Typography variant="p-small">{position}</Typography>
          </div>
          {shouldShowLink ? <div className="max-lg:hidden">{linkButton}</div> : null}
        </div>
      </div>
      {shouldShowLink ? <div className="lg:hidden">{linkButton}</div> : null}
    </div>
  )
}

export default PersonContactRowCard
