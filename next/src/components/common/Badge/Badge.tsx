import { useTranslation } from 'next-i18next'

import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export type BadgeProps = {
  variant: 'public' | 'firms' | 'institutions'
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=4031-20882&t=WtDyPHEz6aYOukym-4
 */

const Badge = ({ variant, className }: BadgeProps) => {
  const { t } = useTranslation()

  const translationMap = {
    public: t('badge.public'),
    firms: t('badge.firms'),
    institutions: t('badge.institutions'),
  } satisfies Record<BadgeProps['variant'], string>

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded px-2 text-content-secondary',
        {
          'bg-background-tag-public': variant === 'public',
          'bg-background-tag-firms': variant === 'firms',
          'bg-background-tag-institutions': variant === 'institutions',
        },
        className,
      )}
    >
      <Typography variant="p-small">{translationMap[variant]}</Typography>
    </div>
  )
}

export default Badge
