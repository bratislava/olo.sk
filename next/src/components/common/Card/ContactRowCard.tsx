import { useMemo } from 'react'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import cn from '@/src/utils/cn'

export type ContactRowCardProps = {
  variant: 'phone' | 'mail'
  // Todo refactor to use Strapi contact types
  contact: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10784&m=dev
 */

const ContactRowCard = ({ variant, contact, className }: ContactRowCardProps) => {
  const linkHref = useMemo(() => {
    if (variant === 'phone') {
      return `tel:${contact.replaceAll(/\s+/g, '')}`
    }
    if (variant === 'mail') {
      return `mailto:${contact}`
    }

    return null
  }, [contact, variant])

  if (!linkHref) {
    return null
  }

  return (
    <CardBase className={cn('bg-background-primary py-3 lg:py-4', className)}>
      <div className="flex gap-3 lg:gap-4">
        <div>
          {variant === 'phone' && <Icon name="telefon" className="size-5 lg:size-6" />}
          {variant === 'mail' && <Icon name="mail" className="size-5 lg:size-6" />}
        </div>
        <Button variant="black-link" asLink href={linkHref} hasLinkIcon={false}>
          {contact}
        </Button>
      </div>
    </CardBase>
  )
}

export default ContactRowCard
