import React from 'react'
import styled from 'styled-components'
import { Box } from '@strapi/design-system/Box'
import { Editable, useEditor } from '@wysimark/react'

const Wrapper = styled(Box)`
  .ck-editor__main {
    min-height: ${200 / 16}em;
    > div {
      min-height: ${200 / 16}em;
    }
    // Since Strapi resets css styles, it can be configured here (h2, h3, strong, i, ...)
  }
`

type EditorProps = {
  onChange: (e: any) => void
  name: string
  value?: string
  disabled?: boolean
}

const Editor = ({ onChange, name, value = '', disabled = false }: EditorProps) => {
  const editor = useEditor({})

  return (
    <Wrapper>
      <Editable
        editor={editor}
        value={value}
        onChange={(data) => onChange({ target: { name, value: data } })}
        placeholder="Type something here..."
      />
      {/* TODO remove, useful for dev */}
      <div style={{ backgroundColor: '#eee', padding: 32, marginTop: 8, borderRadius: 8 }}>
        <code style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>{value}</code>
      </div>
    </Wrapper>
  )
}

export default Editor
