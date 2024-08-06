import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import OloIcon from '@/src/components/common/Icon/OloIcon'
import Typography from '@/src/components/common/Typography/Typography'
import PlaceholderWrapper from '@/src/components/placeholder/PlaceholderWrapper'

const ServiceSideBarPlaceholder = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary p-4 lg:p-5">
      <PlaceholderWrapper className="-m-1 rounded-lg border border-action-background-default p-1">
        <div className="flex flex-col gap-4 lg:gap-6">
          <Typography variant="h5">Máte záujem o túto službu?</Typography>
          <div className="flex flex-col gap-4">
            <Button variant="category-solid" startIcon={<OloIcon name="chat" />} fullWidth>
              Formulár
            </Button>
            <Button variant="category-outline" startIcon={<Icon name="mail" />} fullWidth>
              Poslať e-mail
            </Button>
          </div>
        </div>
      </PlaceholderWrapper>
    </div>
  )
}

export default ServiceSideBarPlaceholder
