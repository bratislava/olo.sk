import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import CardImage from '@/_components/common/Card/CardImage'
import Tag from '@/_components/common/Tag/Tag'
import Typography from '@/_components/common/Typography/Typography'

type ArticleRowCardProps = {
  title: string
  linkHref: string
  tagText: string
  className?: string
  imgSrc?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=8-4117&mode=dev
 */

const ArticleRowCard = ({ title, className, linkHref, imgSrc, tagText }: ArticleRowCardProps) => {
  return (
    <CardBase className={className}>
      <div className="flex flex-col items-start gap-3 lg:flex-row lg:gap-8">
        {/* 6.25rem = 100px, 14.5rem = 232px */}
        <CardImage
          imgSrc={imgSrc}
          className="aspect-[232/130] rounded-lg max-lg:w-[6.25rem] lg:w-[14.5rem]"
        />
        <div className="flex flex-col items-start self-stretch max-lg:gap-3 lg:justify-between">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <Tag variant="without-bg" text={tagText} />
            <Typography
              variant="h5"
              className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
            >
              {title}
            </Typography>
          </div>
          {/* TODO Change text to dynamic translation */}
          <Button variant="black-link" href={linkHref} asLink stretched>
            Čítať viac
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default ArticleRowCard
