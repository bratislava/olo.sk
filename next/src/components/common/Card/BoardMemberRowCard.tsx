import Button from '@/src/components/common/Button/Button'
import CardImage from '@/src/components/common/Card/CardImage'
import Typography from '@/src/components/common/Typography/Typography'
import { LinkFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

export type BoardMemberRowCardProps = {
  name: string
  position: string
  imgSrc?: string | null
  links?: LinkFragment[] | null | undefined
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10950&m=dev
 */

const BoardMemberRowCard = ({
  name,
  position,
  links,
  className,
  imgSrc,
}: BoardMemberRowCardProps) => {
  const { getLinkProps } = useGetLinkProps()

  const filteredLinks = links?.length
    ? // eslint-disable-next-line unicorn/no-array-callback-reference
      links.filter(isDefined).map((link, index) => {
        return (
          <Button
            variant="black-link"
            className="text-size-p-small [&_svg]:size-5"
            asLink
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            {...getLinkProps(link)}
          />
        )
      })
    : []

  return (
    <div
      className={cn('flex flex-col py-4', { 'gap-4': imgSrc || filteredLinks?.length }, className)}
    >
      <div className="flex gap-4">
        {imgSrc ? (
          // 7.5rem = 120px
          <CardImage imgSrc={imgSrc} className="size-12 rounded-lg lg:size-[7.5rem]" />
        ) : null}

        <div
          className={cn('flex flex-col justify-between', {
            'gap-6': filteredLinks?.length, // The design doesn't specify a gap for desktop, so gap-6 was chosen as suitable
          })}
        >
          <div className="flex flex-col items-start gap-1 self-stretch">
            <Typography variant="p-default-black">{name}</Typography>
            <Typography variant="p-small">{position}</Typography>
          </div>
          {/* Screen: Desktop */}
          {filteredLinks ? (
            <div className="max-lg:hidden">
              <div className="flex flex-col gap-2">{filteredLinks}</div>
            </div>
          ) : null}
        </div>
      </div>
      {/* Screen: Mobile */}
      {filteredLinks ? (
        <div className="lg:hidden">
          <div className="flex flex-col gap-1">{filteredLinks}</div>
        </div>
      ) : null}
    </div>
  )
}

export default BoardMemberRowCard
