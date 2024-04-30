import Typography from '@/_components/common/Typography/Typography'
import cn from '@/app/_utils/cn'

type PageHeaderBasicProps = {
  title: string
  text: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1189-12938&m=dev
 */

const PageHeaderBasic = ({ title, text, className }: PageHeaderBasicProps) => {
  return (
    // 50rem = 800px
    <div
      className={cn(
        'flex flex-col items-start gap-4 bg-background-secondary px-4 py-6 lg:gap-6 lg:px-28 lg:py-12 lg:[&>*]:w-[50rem]',
        className,
      )}
    >
      <Typography variant="h1">{title}</Typography>
      <Typography variant="p-default">{text}</Typography>
    </div>
  )
}

export default PageHeaderBasic
