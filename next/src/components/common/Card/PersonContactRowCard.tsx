import CardImage from '@/src/components/common/Card/CardImage'
import Icon from '@/src/components/common/Icon/Icon'
import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type PersonContactRowCardProps = {
  name: string
  position: string
  linkText?: string
  linkHref?: string
  className?: string
  imgSrc?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10950&m=dev
 */

const PersonContactRowCard = ({
  name,
  position,
  linkText,
  linkHref,
  className,
  imgSrc,
}: PersonContactRowCardProps) => {
  const hasLink = linkText && linkHref

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="flex gap-4 lg:gap-6">
        {/* 7.5rem = 120px */}
        <CardImage imgSrc={imgSrc} className="size-12 rounded-lg lg:size-[7.5rem]" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-start gap-1 self-stretch lg:gap-2">
            <Typography variant="p-default-black">{name}</Typography>
            <Typography variant="p-small">{position}</Typography>
          </div>
          {hasLink ? (
            <div className="max-lg:hidden">
              <div className="flex gap-1">
                <Link variant="underlined" href={linkHref}>
                  {linkText}
                </Link>
                <Icon
                  name={linkHref.startsWith('http') ? 'export' : 'sipka-doprava'}
                  className="size-5"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {hasLink ? (
        <div className="lg:hidden">
          <div className="flex items-center gap-1">
            <Link variant="underlined" href={linkHref}>
              <Typography variant="p-small">{linkText}</Typography>
            </Link>
            <Icon
              name={linkHref.startsWith('http') ? 'export' : 'sipka-doprava'}
              className="size-4"
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PersonContactRowCard
