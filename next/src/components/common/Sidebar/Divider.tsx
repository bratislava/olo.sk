import cn from '@/src/utils/cn'

type DividerProps = {
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10874&m=dev
 */

const Divider = ({ className }: DividerProps) => {
  return <div className={cn('w-full border-b border-border-default', className)} aria-hidden />
}

export default Divider
