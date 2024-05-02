import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import Icon from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'

type ListingCardProps = {
  title: string
  linkHref: string
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1341-11042&mode=dev
 */

const ListingCard = ({ title, className, linkHref }: ListingCardProps) => {
  return (
    <CardBase variant="solid" className={className}>
      <div className="flex flex-col gap-8 p-4">
        <Typography
          variant="h6"
          className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
        >
          {title}
        </Typography>
        {/* TODO Change text to dynamic translation */}
        <div className="flex items-center gap-6">
          <Button
            variant="black-link"
            asLink
            href={linkHref}
            stretched
            hasLinkIcon={false}
            className="font-bold"
          >
            <Typography variant="button-default">Zistiť viac</Typography>
          </Button>
          <div className="ml-auto flex size-10 items-center justify-center rounded-lg bg-background-secondary">
            <Icon name="sipka-doprava" className="size-6" />
          </div>
        </div>
      </div>
    </CardBase>
  )
}

export default ListingCard
