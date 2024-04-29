import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import Icon, { iconNameMap } from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'

type WorkshopCardProps = {
  title: string
  linkHref: string
  iconName: keyof typeof iconNameMap
  className?: string
}

/**
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1202-14657&mode=dev
 */

const WorkshopCard = ({ title, className, linkHref, iconName }: WorkshopCardProps) => {
  return (
    <CardBase variant="solid" className={className}>
      <div className="flex flex-col gap-6 p-4 lg:p-6">
        <div className="self-start rounded-2xl bg-background-secondary p-4">
          <Icon name={iconName} className="size-6" />
        </div>
        <div className="flex flex-col gap-4 lg:gap-10 ">
          <Typography
            variant="h4"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          {/* TODO Change text to dynamic translation */}
          <Button variant="black-link" href={linkHref} asLink stretched>
            Čítať viac
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default WorkshopCard
