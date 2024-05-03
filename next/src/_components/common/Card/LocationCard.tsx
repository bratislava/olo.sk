import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import Icon, { iconNameMap } from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'

type LocationCardProps = {
  title: string
  address: string
  linkHref: string
  iconName: keyof typeof iconNameMap
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=2094-18340&mode=dev
 */

const LocationCard = ({ title, className, linkHref, address, iconName }: LocationCardProps) => {
  return (
    <CardBase variant="solid" className={className}>
      <div className="flex flex-col items-start gap-6 p-6">
        <div className="rounded-full bg-background-secondary p-4">
          <Icon name={iconName} className="text-action-background size-6" />
        </div>
        <div className="flex flex-col gap-2 self-stretch lg:gap-3">
          <Typography
            variant="h5"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
            {address}
          </Typography>
        </div>
        {/* TODO Change text to dynamic translation */}
        <Button variant="category-outline" href={linkHref} asLink stretched fullWidth>
          Zistiť viac
        </Button>
      </div>
    </CardBase>
  )
}

export default LocationCard
