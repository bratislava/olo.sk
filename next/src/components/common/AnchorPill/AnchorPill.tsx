import { useRouter } from 'next/router'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'

type AnchorPillProps = {
  text: string
  targetId: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1932-17958&m=dev
 */

const AnchorPill = ({ text, targetId }: AnchorPillProps) => {
  const router = useRouter()

  const handleAnchorPress = async () => {
    const targetElement = document.querySelector(`#${targetId}`)
    if (targetElement) {
      await router.replace({ query: { ...router.query, scrollId: targetId } }, undefined, {
        shallow: true,
      })
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button
      variant="unstyled"
      onPress={handleAnchorPress}
      endIcon={<Icon name="sipka-dole" />}
      className="text-bold flex items-center gap-2 rounded-full bg-background-primary py-3.5 pl-4 pr-3"
    >
      {text}
    </Button>
  )
}

export default AnchorPill
