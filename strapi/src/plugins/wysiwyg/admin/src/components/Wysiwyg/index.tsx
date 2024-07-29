import React, { useState } from 'react'
import { Stack } from '@strapi/design-system/Stack'
import { Box } from '@strapi/design-system/Box'
import { Button } from '@strapi/design-system/Button'
import { Typography } from '@strapi/design-system/Typography'
import Landscape from '@strapi/icons/Landscape'
import Editor from '../Editor'
import { useIntl } from 'react-intl'
import MediaLib from '../MediaLib'

type WysiwygProps = {
  description?: {
    id: string
    defaultMessage: string
  }
  disabled?: boolean
  error?: string
  intlLabel: {
    id: string
    defaultMessage: string
  }
  name?: string
  onChange?: (e: any) => void
  required?: boolean
  value?: string
}

const Wysiwyg = ({
  name = 'name',
  onChange = () => {},
  value = '',
  intlLabel,
  disabled = false,
  error,
  description,
  required = false,
}: WysiwygProps) => {
  console.log('Wysiwyg', value, error)

  const { formatMessage } = useIntl()
  const [mediaLibVisible, setMediaLibVisible] = useState(false)

  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev)

  const handleChangeAssets = (assets: any[]) => {
    let newValue = value ? value : ''

    assets.map((asset) => {
      if (asset.mime.includes('image')) {
        const imgTag = `![${asset.alt}](${asset.url})`
        // const imgTag = `<p><img src="${asset.url}" alt="${asset.alt}"></img></p>`

        newValue = `${newValue}${imgTag}`
      }

      // Handle videos and other type of files by adding some code
    })

    onChange({ target: { name, value: newValue } })
    handleToggleMediaLib()
  }

  return (
    <>
      <Stack size={1}>
        <Box>
          <Typography variant="pi" fontWeight="bold">
            {formatMessage(intlLabel)}
          </Typography>

          {required && (
            <Typography variant="pi" fontWeight="bold" textColor="danger600">
              *
            </Typography>
          )}
        </Box>

        <Button
          startIcon={<Landscape />}
          variant="secondary"
          fullWidth
          onClick={handleToggleMediaLib}
        >
          Media library
        </Button>

        <Editor disabled={disabled} name={name} onChange={onChange} value={value} />

        {error && (
          <Typography variant="pi" textColor="danger600">
            {formatMessage({ id: error, defaultMessage: error })}
          </Typography>
        )}

        {description && <Typography variant="pi">{formatMessage(description)}</Typography>}
      </Stack>
      <MediaLib
        isOpen={mediaLibVisible}
        onChange={handleChangeAssets}
        onToggle={handleToggleMediaLib}
      />
    </>
  )
}

export default Wysiwyg
