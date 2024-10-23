import React, { useRef, useState } from 'react'
import { Alert, Box, Button, Link, Loader, Stack, Typography } from '@strapi/design-system'
import axiosInstance from '../utils/axiosInstance'

/**
 *
 * Inspired by Marianum: https://github.com/bratislava/marianum.sk/blob/72dc36cfb05d544680ef891d633af9cf59f5b9e5/strapi/src/plugins/ceremonies-debtor-list/admin/src/pages/ImportSection.tsx
 *
 */

const updateUrls = {
  'waste-collection-days': '/waste-collection-days-import/update-waste-collection-days',
}

const headerTexts = {
  'waste-collection-days': 'Import odvozových dní',
}

const importLinks = {
  'waste-collection-days': (importId: string) =>
    `/content-manager/collectionType/api::waste-collection-day.waste-collection-day?filters[$and][0][importId][$eq]=${importId}`,
}

type ImportSectionProps = {
  type: 'waste-collection-days'
}

const ImportSection = ({ type }: ImportSectionProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const handleSubmit = () => {
    const file = inputFileRef.current!.files![0] // TODO fix !

    const formData = new FormData()
    formData.append('file', file)

    setLoading(true)
    setSuccess(null)
    setError(null)

    axiosInstance
      .put(updateUrls[type], formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
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
            title="Nahrávanie úspešné"
            action={
              success.data?.importId && (
                <Link to={importLinks[type](success.data.importId)}>Zobraziť nahrané dáta</Link>
              )
            }
            variant="success"
            onClose={() => setSuccess(null)}
          >
            {success.data.message} ({success.data.executionTime}ms)
          </Alert>
        )}
        {error && (
          <Alert title="Nahrávanie neúspešné" variant="danger" onClose={() => setError(null)}>
            {error?.response?.data?.message ?? error.toString()}
          </Alert>
        )}
        <input type="file" ref={inputFileRef} />
        <div>
          <Button onClick={handleSubmit} loading={loading}>
            Nahrať
          </Button>
        </div>
      </Stack>
    </Box>
  )
}

export default ImportSection
