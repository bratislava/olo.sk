import Button from '@/src/components/common/Button/Button'
import Typography from '@/src/components/common/Typography/Typography'
import { LinkFragment } from '@/src/services/graphql/api'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type FormCtaBannerProps = {
  title: string
  link: LinkFragment
  isFullWidthButton?: boolean
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=5979-26245&m=dev
 */

const FormCtaBanner = ({ title, link, isFullWidthButton = false }: FormCtaBannerProps) => {
  const { getLinkProps } = useGetLinkProps()

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-lg border border-border-default bg-background-primary p-4 lg:gap-6 lg:p-6">
      <Typography variant="h5">{title}</Typography>
      <Button
        variant="category-solid"
        asLink
        {...getLinkProps(link)}
        fullWidth={isFullWidthButton}
      />
    </div>
  )
}

export default FormCtaBanner
