import Typography from '@/_components/common/Typography/Typography'
import Section from '@/_components/layout/Section/Section'
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
    <Section background="secondary">
      {/* 50rem = 800px */}
      <div className={cn('flex flex-col items-start gap-6 lg:[&>*]:w-[50rem]', className)}>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="p-default">{text}</Typography>
      </div>
    </Section>
  )
}

export default PageHeaderBasic
