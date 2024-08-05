import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import Typography from '@/src/components/common/Typography/Typography'
import { LinkFragment } from '@/src/services/graphql/api'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type ListingCardProps = {
  title: string
  link: LinkFragment | null | undefined
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1341-11042&mode=dev
 */

const ListingCard = ({
  title,
  link,
  // linkHref,
  hasWhiteBackground = true,
  className,
}: ListingCardProps) => {
  const { getLinkProps } = useGetLinkProps()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
    >
      <div className="flex h-full flex-col justify-between gap-6 p-4" title={title}>
        <Typography
          variant="h6"
          className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
        >
          {title}
        </Typography>
        <Button
          asLink
          stretched
          className="size-10 rounded-lg bg-background-secondary"
          variant="icon-wrapped"
          {...{ ...getLinkProps(link), children: null }}
        />
      </div>
    </CardBase>
  )
}

export default ListingCard
