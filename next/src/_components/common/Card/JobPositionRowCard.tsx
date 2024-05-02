import CardBase from '@/_components/common/Card/CardBase'
import Icon from '@/_components/common/Icon/Icon'
import Link from '@/_components/common/Link/Link'
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
      <div className="flex items-center gap-6 border-b border-border-default bg-background-primary px-4 py-3 lg:px-6 lg:py-4">
        <div className="flex grow flex-col gap-3">
          {/* TODO Add aria label */}
          <Link variant="unstyled" href={linkHref} aria-label="" stretched>
            <Typography
              variant="h5"
              className_onlyWhenNecessary="line-clamp-1 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
          </Link>
          {metaData?.length ? (
            <div className="flex items-center gap-3">
              {metaData.map((item, index) => (
                <>
                  {index > 0 ? (
                    <div aria-hidden className="size-1 rounded-full bg-content-secondary" />
                  ) : null}
                  <Typography variant="p-small">{item}</Typography>
                </>
              ))}
            </div>
          ) : null}
        </div>
        {/* Screen: desktop */}
        <Icon name="chevron-doprava" className="max-lg:hidden" />
      </div>
    </CardBase>
  )
}

export default JobPositionRowCard
