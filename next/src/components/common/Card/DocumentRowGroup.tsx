import DocumentRowCard, { DocumentRowCardProps } from '@/src/components/common/Card/DocumentRowCard'
import cn from '@/src/utils/cn'

export type DocumentRowGroupProps = {
  documentRowCardData: DocumentRowCardProps[]
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=42-2223&t=saBmDcGK6L78yd2K-4
 */

const DocumentRowGroup = ({ documentRowCardData, className }: DocumentRowGroupProps) => {
  return (
    <ul
      className={cn(
        'flex flex-col overflow-visible rounded-lg border border-border-default bg-background-primary py-2',
        className,
      )}
    >
      {documentRowCardData.length > 0
        ? documentRowCardData.map((documentRowCard, index) => {
            return (
              <li>
                <DocumentRowCard
                  {...documentRowCard}
                  hasBottomBorder={index < documentRowCardData.length - 1}
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

export default DocumentRowGroup
