import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type Props = {
  title: string
  text?: string | null
  className?: string
  hasVerticalPadding?: boolean
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1189-12938&m=dev
 */

const HeaderTitleText = ({ title, text, className, hasVerticalPadding = true }: Props) => {
  return (
    // 50rem = 800px
    <div
      className={cn(
        'flex flex-col items-start gap-4 lg:max-w-[50rem] lg:gap-6 ',
        { 'py-6 lg:py-12': hasVerticalPadding },
        className,
      )}
    >
      <Typography variant="h1">{title}</Typography>
      {text ? <Typography variant="p-default">{text}</Typography> : null}
    </div>
  )
}

export default HeaderTitleText
