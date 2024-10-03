import React, { useState } from 'react'
import { Alert, Box, Button, Link, Loader, Stack, Typography } from '@strapi/design-system'
import axiosInstance from '../utils/axiosInstance'

const deleteUrls = {
  'waste-collection-days': '/waste-collection-days-import/delete-waste-collection-days',
}

const headerTexts = {
  'waste-collection-days': 'Vymazanie odvozových dní',
}

const links = {
  'waste-collection-days': () =>
    `/content-manager/collectionType/api::waste-collection-day.waste-collection-day`,
}

type DeleteSectionProps = {
  type: 'waste-collection-days'
}

const DeleteSection = ({ type }: DeleteSectionProps) => {
  const [inputValue, setInputValue] = useState('')

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const handleSubmit = () => {
    setLoading(true)
    setSuccess(null)
    setError(null)

    axiosInstance
      .post(`${deleteUrls[type]}/${inputValue}`)
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
            title="Vymazanie úspešné"
            action={
              success.data?.importId && <Link to={links[type]()}>Prejsť na odvozové dni</Link>
            }
            variant="success"
            onClose={() => setSuccess(null)}
          >
            {success.data.message}
          </Alert>
        )}
        {error && (
          <Alert title="Vymazanie neúspešné" variant="danger" onClose={() => setError(null)}>
            {error?.response?.data?.message ?? error.toString()}
          </Alert>
        )}

        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />

        <div>
          <Button onClick={handleSubmit} loading={loading} disabled={!inputValue}>
            Vymazať odvozové dni podľa uvedeného typu
          </Button>
        </div>
      </Stack>
    </Box>
  )
}

export default DeleteSection
