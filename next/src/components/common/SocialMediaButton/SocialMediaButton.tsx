import { PropsWithChildren } from 'react'

import Button, { PolymorphicProps } from '@/src/components/common/Button/Button'

/**
 * Inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/page-contents/BlogPostPageContent.tsx
 */

export const SocialMediaButton = ({
  getSocialLink,
  children,
  startIcon,
  fullWidth,
}: PropsWithChildren<{
  getSocialLink: (link: string) => string
  startIcon: PolymorphicProps['startIcon']
  fullWidth?: PolymorphicProps['fullWidth']
}>) => {
  const openSharePage = () => {
    const W = 600
    const H = 400
    // eslint-disable-next-line const-case/uppercase, no-restricted-globals
    const L = screen.width / 2 - W / 2
    // eslint-disable-next-line const-case/uppercase, no-restricted-globals
    const T = screen.height / 2 - H / 2

    window.open(
      getSocialLink(window.location.href),
      'pop',
      `width=${W},height=${H},top=${T},left=${L},scrollbars=0`,
    )
  }

  return (
    <Button
      variant="category-outline"
      onPress={openSharePage}
      startIcon={startIcon}
      fullWidth={fullWidth}
      size="large"
    >
      {children}
    </Button>
  )
}

export default SocialMediaButton
