import FileRowCard, { FileRowCardProps } from '@/src/components/common/Card/FileRowCard'
import cn from '@/src/utils/cn'

export type FileRowGroupProps = {
  fileRowCardData: FileRowCardProps[]
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=42-2223&t=saBmDcGK6L78yd2K-4
 */

const FileRowGroup = ({ fileRowCardData, className }: FileRowGroupProps) => {
  return (
    <ul
      className={cn(
        'flex flex-col overflow-visible rounded-lg border border-border-default bg-background-primary py-2',
        className,
      )}
    >
      {fileRowCardData.length > 0
        ? fileRowCardData.map((fileRowCard, index) => {
            return (
              <li>
                <FileRowCard
                  {...fileRowCard}
                  hasBottomBorder={index < fileRowCardData.length - 1}
                  // elevate z-index to show focus ring on top of other cards
                  className="focus-within:z-1 focus-within:ring-offset-0"
                />
              </li>
            )
          })
        : null}
    </ul>
  )
}

export default FileRowGroup
