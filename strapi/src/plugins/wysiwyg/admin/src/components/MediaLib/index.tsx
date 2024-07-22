import React from 'react'
import { prefixFileUrlWithBackendUrl, useLibrary } from '@strapi/helper-plugin'

type MediaLibProps = {
  isOpen?: boolean
  onChange?: (files: any[]) => void
  onToggle?: () => void
}

const MediaLib = ({ isOpen = false, onChange = () => {}, onToggle = () => {} }: MediaLibProps) => {
  const { components } = useLibrary()
  const MediaLibraryDialog = components['media-library']

  const handleSelectAssets = (files: any[]) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl(f.url),
      mime: f.mime,
    }))

    onChange(formattedFiles)
  }

  if (!isOpen) {
    return null
  }

  return <MediaLibraryDialog onClose={onToggle} onSelectAssets={handleSelectAssets} />
}

export default MediaLib
