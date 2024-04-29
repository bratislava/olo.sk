import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import Icon from '@/_components/common/Icon/Icon'
import Typography from '@/_components/common/Typography/Typography'

type JobPositionRowCardProps = {
  title: string
  linkHref: string
  metaData?: string[]
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1949-19457&mode=dev
 */

const JobPositionRowCard = ({ title, className, linkHref, metaData }: JobPositionRowCardProps) => {
  return (
    <CardBase variant="unstyled" className={className}>
      <div className="flex gap-6 border-b border-border-default bg-white px-4 py-3 lg:gap-4 lg:px-6 lg:py-4">
        <div className="flex flex-col gap-3">
          <Typography
            variant="h5"
            className_onlyWhenNecessary="line-clamp-1 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          {metaData?.length ? (
            <div className="flex items-center gap-3">
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
        {/* TODO Add link */}
        <Button
          variant="unstyled"
          href={linkHref}
          asLink
          aria-label=""
          stretched
          icon={<Icon name="chevron-doprava" />}
          className="ml-auto self-center p-1.5 max-lg:hidden [&>svg:last-of-type]:hidden"
        />
      </div>
    </CardBase>
  )
}

export default JobPositionRowCard
