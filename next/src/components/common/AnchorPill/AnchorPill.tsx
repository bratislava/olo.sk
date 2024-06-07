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
  return (
    // TODO change to link and implement scrolling in page through url
    <Button
      variant="unstyled"
      onPress={() => {
        const targetElement = document.querySelector(`#${targetId}`)
        targetElement?.scrollIntoView({ behavior: 'smooth' })
      }}
      endIcon={<Icon name="sipka-dole" />}
      className="text-bold flex items-center gap-2 rounded-full bg-background-primary py-3.5 pl-4 pr-3"
    >
      {text}
    </Button>
  )
}

export default AnchorPill
