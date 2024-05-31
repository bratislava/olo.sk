import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type BasicHeaderProps = {
  title: string
  text?: string | null
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1189-12938&m=dev
 */

const BasicHeader = ({ title, text, className }: BasicHeaderProps) => {
  return (
    // 50rem = 800px
    <div
      className={cn(
        'flex flex-col items-start gap-4 py-6 lg:gap-6 lg:py-12 lg:[&>*]:w-[50rem]',
        className,
      )}
    >
      <Typography variant="h1">{title}</Typography>
      {text ? <Typography variant="p-default">{text}</Typography> : null}
    </div>
  )
}

export default BasicHeader
