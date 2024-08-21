import Button from '@/src/components/common/Button/Button'
import CardImage from '@/src/components/common/Card/CardImage'
import Typography from '@/src/components/common/Typography/Typography'
import { LinkFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type PersonContactRowCardProps = {
  name: string
  position?: string | null | undefined
  imgSrc?: string
  link?: LinkFragment | null | undefined
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10950&m=dev
 */

const PersonContactRowCard = ({
  name,
  position,
  link,
  className,
  imgSrc,
}: PersonContactRowCardProps) => {
  const { getLinkProps } = useGetLinkProps()

  const shouldShowLink = isDefined(link)

  const linkButton = link ? <Button variant="black-link" asLink {...getLinkProps(link)} /> : null

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
          <div className="flex flex-col items-start gap-1 self-stretch">
            <Typography variant="p-default-black">{name}</Typography>
            {position ? <Typography variant="p-small">{position}</Typography> : null}
          </div>
          {shouldShowLink ? <div className="max-lg:hidden">{linkButton}</div> : null}
        </div>
      </div>
      {shouldShowLink ? <div className="lg:hidden">{linkButton}</div> : null}
    </div>
  )
}

export default PersonContactRowCard
