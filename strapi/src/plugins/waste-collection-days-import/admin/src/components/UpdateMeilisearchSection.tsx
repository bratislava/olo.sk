import React, { useState } from 'react'
import { Alert, Box, Button, Link, Loader, Stack, Typography } from '@strapi/design-system'
import axiosInstance from '../utils/axiosInstance'

const updateMeilisearchUrls = {
  'waste-collection-days': '/waste-collection-days-import/update-meilisearch-waste-collection-days',
}

const headerTexts = {
  'waste-collection-days': 'Aktualizácia manuálne vykonaných zmien',
}

const links = {
  'waste-collection-days': () =>
    `/content-manager/collectionType/api::waste-collection-day.waste-collection-day`,
}

type UpdateMeilisearchSectionProps = {
  type: 'waste-collection-days'
}

const UpdateMeilisearchSection = ({ type }: UpdateMeilisearchSectionProps) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const handleSubmit = () => {
    setLoading(true)
    setSuccess(null)
    setError(null)

    axiosInstance
      .post(updateMeilisearchUrls[type])
      .then((response) => {
        setSuccess(response)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Box
      background="neutral0"
      hasRadius
      shadow="filterShadow"
      paddingTop={6}
      paddingBottom={6}
      paddingLeft={7}
      paddingRight={7}
    >
      <Stack spacing={4}>
        <Typography variant="delta" as="h2">
          {headerTexts[type]}
        </Typography>
        {loading && <Loader />}
        {success && (
          <Alert
            title="Aktualizácia zmien úspešná"
            action={success.data?.importId && <Link to={links[type]()}>Zobraziť Odvozové dni</Link>}
            variant="success"
            onClose={() => setSuccess(null)}
          >
            {success.data.message}
          </Alert>
        )}
        {error && (
          <Alert
            title="Aktualizácia zmien neúspešná"
            variant="danger"
            onClose={() => setError(null)}
          >
            {error?.response?.data?.message ?? error.toString()}
          </Alert>
        )}
        <div>
          <Button onClick={handleSubmit} loading={loading}>
            Aktualizovať odvozové dni
          </Button>
        </div>
      </Stack>
    </Box>
  )
}

export default UpdateMeilisearchSection
