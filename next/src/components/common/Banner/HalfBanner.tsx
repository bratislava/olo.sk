import Button from '@/src/components/common/Button/Button'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type HalfBannerProps = {
  title: string
  buttonLinkHref: string
  buttonText: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2097-19933&t=Xi1ciaU2DOQaQbII-1
 */

const HalfBanner = ({ title, buttonLinkHref, buttonText, className }: HalfBannerProps) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-2xl [&>*]:basis-[50%] lg:[&>*]:basis-[100%]',
        className,
      )}
    >
      <div className="flex flex-col gap-4 bg-background-secondary px-4 py-6 lg:gap-12 lg:p-10">
        <Typography variant="h3">{title}</Typography>
        <Button href={buttonLinkHref} asLink hasLinkIcon variant="category-solid">
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default HalfBanner
