import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import { FormCtaBannerLinkFragment } from '@/src/services/graphql/api'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type FormCtaBannerProps = {
  title: string | null | undefined
  text: string | null | undefined
  link: FormCtaBannerLinkFragment
  isFullWidthButton?: boolean
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=5979-26245&m=dev
 */

const FormCtaBanner = ({ title, text, link, isFullWidthButton = false }: FormCtaBannerProps) => {
  const { getLinkProps } = useGetLinkProps()

  const isEmailLink = !!link.email

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-lg border border-border-default bg-background-primary p-4 lg:gap-6 lg:p-6">
      {title || text ? (
        <div className="flex flex-col gap-3">
          {/* TODO find solution how to render it as heading, but not showing in Table of Contents */}
          {title ? (
            <Typography variant="h5" as="p">
              {title}
            </Typography>
          ) : null}
          {text ? <Typography variant="p-default">{text}</Typography> : null}
        </div>
      ) : null}
      <Button
        variant="category-solid"
        asLink
        {...getLinkProps(link)}
        fullWidth={isFullWidthButton}
        hasLinkIcon={!isEmailLink}
        startIcon={isEmailLink ? <Icon name="mail" /> : undefined}
      />
    </div>
  )
}

export default FormCtaBanner
