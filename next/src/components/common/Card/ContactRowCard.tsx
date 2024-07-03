import Image from 'next/image'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import cn from '@/src/utils/cn'

type ContactRowCardProps = {
  variant: 'phone' | 'mail'
  linkText: string
  linkHref: string
  iconSrc: string
  hasBottomBorder?: boolean
  className?: string
}

// Todo refactor to use Strapi contact types

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10784&m=dev
 */

const ContactRowCard = ({
  variant,
  linkText,
  linkHref,
  iconSrc,
  hasBottomBorder = false,
  className,
}: ContactRowCardProps) => {
  return (
    <CardBase
      className={cn(
        'bg-background-primary px-3 lg:px-5',
        {
          'border-b border-border-default': hasBottomBorder && variant === 'phone',
        },
        className,
      )}
    >
      <div
        className={cn('py-3 lg:py-4', {
          'border-b border-border-default': hasBottomBorder && variant === 'mail',
        })}
      >
        <div className="flex gap-3 lg:gap-4">
          <div className="relative size-5 shrink-0 lg:size-6">
            <Image src={iconSrc} alt="" fill className="object-contain" />
          </div>
          <Button variant="black-link" asLink href={linkHref} hasLinkIcon={false}>
            {linkText}
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default ContactRowCard
