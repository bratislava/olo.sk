import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import CardImage from '@/_components/common/Card/CardImage'
import Icon, { iconNameMap } from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'

type SearchResultRowCardProps = {
  title: string
  linkHref: string
  iconName?: keyof typeof iconNameMap
  imgSrc?: string
  metaData?: string[]
  className?: string
}

/**
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1521-17165&mode=dev
 */

const SearchResultRowCard = ({
  title,
  className,
  linkHref,
  metaData,
  iconName,
  imgSrc,
}: SearchResultRowCardProps) => {
  return (
    <CardBase variant="unstyled" className={className}>
      <div className="flex gap-4 border-b border-border-default bg-white p-4">
        {/* 3.5rem = 56px */}
        <div className="flex size-[3.5rem] items-center justify-center">
          {imgSrc ? (
            <CardImage imgSrc={imgSrc} className="aspect-square size-full rounded-lg" />
          ) : iconName ? (
            <Icon name={iconName} className="size-6" />
          ) : null}
        </div>
        <div className="flex flex-col gap-2 max-lg:gap-3">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="line-clamp-1 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          {metaData?.length ? (
            <div className="flex items-center gap-3 [&>*:first-child]:underline">
              {metaData.map((item, index) => (
                <>
                  {index > 0 ? <div className="size-1 rounded-full bg-content-secondary" /> : null}
                  <Typography variant="p-small">{item}</Typography>
                </>
              ))}
            </div>
          ) : null}
        </div>
        {/* TODO Change text to dynamic translation */}
        {/* TODO Add aria label */}
        <Button
          variant="unstyled"
          href={linkHref}
          asLink
          aria-label=""
          stretched
          icon={<Icon name="chevron-doprava" />}
          className="ml-auto self-center max-lg:hidden [&>svg:last-of-type]:hidden"
        />
      </div>
    </CardBase>
  )
}

export default SearchResultRowCard
