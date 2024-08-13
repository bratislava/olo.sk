import Image from 'next/image'

import Button from '@/src/components/common/Button/Button'
import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { generateImageSizes } from '@/src/utils/generateImageSizes'

type BannerProps = {
  variant: 'background-grey' | 'background-black' | 'background-yellow'
  title: string
  subtext?: string | null | undefined
  button1LinkHref: string
  button1Text: string
  button2LinkHref?: string
  button2Text?: string
  imgSrc?: string
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1932-17987&mode=design&t=e6RDJ09bFVN8VTqn-0
 */

const Banner = ({
  variant,
  title,
  subtext,
  button1LinkHref,
  button1Text,
  button2LinkHref,
  button2Text,
  imgSrc,
  className,
}: BannerProps) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-2xl lg:flex-row [&>*]:basis-[50%]',
        {
          // eslint-disable-next-line sonarjs/no-duplicate-string
          'lg:[&>*]:basis-[100%]': variant === 'background-yellow',
        },
        className,
      )}
    >
      <div
        className={cn('flex flex-col items-start gap-6 p-6 lg:p-12', '', {
          'bg-background-tertiary': variant === 'background-grey',
          'bg-background-primaryInverted text-content-primaryInverted':
            variant === 'background-black',
          'gap-4 bg-background-secondary px-4 py-6 lg:gap-12 lg:p-10':
            variant === 'background-yellow',
        })}
      >
        <div className="flex flex-col gap-2 lg:gap-4">
          <Typography variant="h3">{title}</Typography>
          {variant === 'background-yellow' ? null : subtext ? (
            <Typography variant="p-default">{subtext}</Typography>
          ) : null}
        </div>
        <div className="flex gap-4">
          <Button
            href={button1LinkHref}
            asLink
            hasLinkIcon={variant === 'background-yellow'}
            variant="category-solid"
          >
            {button1Text}
          </Button>
          {button2LinkHref && button2Text ? (
            <Button
              href={button2LinkHref}
              asLink
              hasLinkIcon={false}
              variant="category-outline"
              // TODO this custom style should be handled by a dedicated Button variant
              className={cn({ 'text-content-primaryInverted': variant === 'background-black' })}
            >
              {button2Text}
            </Button>
          ) : null}
        </div>
      </div>
      {variant === 'background-yellow' ? null : (
        <div className="relative max-lg:aspect-[288/244]">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt=""
              fill
              sizes={generateImageSizes({ default: '50vw' })}
              className="object-cover"
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
      )}
    </div>
  )
}

export default Banner
