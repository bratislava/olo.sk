import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import CardImage from '@/src/components/common/Card/CardImage'
import Typography from '@/src/components/common/Typography/Typography'
import { LinkFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type BasicCardProps = {
  title: string
  subtext?: string | null | undefined
  link?: LinkFragment | null | undefined
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
  link,
  imgSrc,
  hasWhiteBackground = true,
  className,
}: BasicCardProps) => {
  const { getLinkProps } = useGetLinkProps()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
      title={title}
    >
      <CardImage imgSrc={imgSrc} className="aspect-[384/204] rounded-t-lg" />
      <div className="flex h-full flex-col justify-between gap-5 px-4 py-4 lg:px-5">
        <div className="flex flex-col gap-3">
          <Typography
            variant="h5"
            className_onlyWhenNecessary={cn('line-clamp-3', {
              'group-hover/CardBase:underline': !!link,
            })}
          >
            {title}
          </Typography>
          {subtext ? (
            <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
              {subtext}
            </Typography>
          ) : null}
        </div>
        {link ? <Button variant="black-link" {...getLinkProps(link)} asLink stretched /> : null}
      </div>
    </CardBase>
  )
}

export default BasicCard
