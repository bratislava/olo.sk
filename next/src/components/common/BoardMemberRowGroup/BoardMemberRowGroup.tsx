import BoardMemberRowCard, {
  BoardMemberRowCardProps,
} from '@/src/components/common/Card/BoardMemberRowCard'
import cn from '@/src/utils/cn'

export type BoardMemberRowGroupProps = {
  BoardMemberRowCardData: BoardMemberRowCardProps[]
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-24859&t=GS5LOvt0zHZ1kXjq-4
 */

const BoardMemberRowGroup = ({ BoardMemberRowCardData, className }: BoardMemberRowGroupProps) => {
  return (
    <ul
      className={cn(
        'flex flex-col divide-y divide-border-default overflow-visible rounded-lg border border-border-default bg-background-primary px-4 py-2 lg:px-6',
        className,
      )}
    >
      {BoardMemberRowCardData.length > 0
        ? BoardMemberRowCardData.map((card, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <BoardMemberRowCard
                  {...card}
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

export default BoardMemberRowGroup
