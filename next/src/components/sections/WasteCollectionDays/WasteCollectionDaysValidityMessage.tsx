import React from 'react'

import Markdown from '@/src/components/formatting/Markdown'

type Props = {
  content: string
}

// TODO implement separate reusable component, see also OpeningTimesChangeAlert
// TODO add warning icon
const WasteCollectionDaysValidityMessage = ({ content }: Props) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-warning-softBackground-default p-4">
      <Markdown content={content} />
    </div>
  )
}

export default WasteCollectionDaysValidityMessage
