import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import Icon, { iconNameMap } from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'
import cn from '@/app/_utils/cn'

type DocumentRowCardProps = {
  title: string
  linkHref: string
  metaData?: string[]
  iconName: keyof typeof iconNameMap
  hasBottomBorder?: boolean
  className?: string
}

/**
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=42-2223&mode=dev
 */

const DocumentRowCard = ({
  title,
  className,
  linkHref,
  metaData,
  iconName,
  hasBottomBorder = false,
}: DocumentRowCardProps) => {
  return (
    <CardBase variant="unstyled" className={className}>
      <div className="bg-white px-4 lg:px-5">
        <div
          className={cn('flex gap-3 py-4 lg:gap-4', {
            'border-b border-border-default': hasBottomBorder,
          })}
        >
          <div className="lg:rounded-lg lg:bg-background-secondary lg:p-3">
            <Icon name={iconName} className="size-5 lg:size-6" />
          </div>
          <div className="flex flex-col gap-1">
            <Typography
              variant="h6"
              className_onlyWhenNecessary="line-clamp-1 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
            {metaData?.length ? (
              <div className="flex items-center gap-3">
                {metaData.map((item, index) => (
                  <>
                    {index > 0 ? (
                      <div className="size-1 rounded-full bg-content-secondary" />
                    ) : null}
                    <Typography variant="p-small">{item}</Typography>
                  </>
                ))}
              </div>
            ) : null}
          </div>
          {/* TODO Change text to dynamic translation */}
          {/* Screen: desktop */}
          <Button
            variant="category-outline"
            href={linkHref}
            asLink
            startIcon={<Icon name="stiahnut" />}
            className="ml-auto max-lg:hidden [&>svg:last-of-type]:hidden"
          >
            Stiahnuť
          </Button>
          {/* Screen: mobile */}
          {/* TODO Add aria label */}
          <Button
            variant="unstyled"
            href={linkHref}
            asLink
            aria-label=""
            icon={<Icon name="stiahnut" />}
            className="ml-auto self-center p-1.5 lg:hidden [&>svg:last-of-type]:hidden"
          />
        </div>
      </div>
    </CardBase>
  )
}

export default DocumentRowCard
