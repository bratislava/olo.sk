import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import ModalShare from '@/src/components/modals/share/ModalShare'

type ShareBlockProps = {
  text: string
  buttonText: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=42-2722&m=dev
 */

const ShareBlock = ({ text, buttonText }: ShareBlockProps) => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-lg bg-background-secondary p-4 lg:flex-row lg:gap-2.5 lg:px-8 lg:py-6">
      <div className="grow ">
        <Typography variant="h5">{text}</Typography>
      </div>
      <ModalShare
        triggerButton={
          <Button
            variant="category-outline"
            startIcon={<Icon name="lietadlo" />}
            className="max-lg:w-full"
          >
            {buttonText}
          </Button>
        }
      />
    </div>
  )
}

export default ShareBlock
