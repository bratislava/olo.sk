import React from 'react'

import Typography from '@/src/components/common/Typography/Typography'

type Props = {
  openingHours: { label: string; value: string }[]
}

const OpeningHoursBox = ({ openingHours }: Props) => (
  <div className="flex flex-col rounded-lg border border-border-default">
    <div className="flex flex-col divide-y divide-border-default">
      {openingHours.map(({ label, value }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="flex justify-between gap-6 px-4 py-3 lg:px-5 lg:py-4">
          <Typography variant="p-default-bold">{label}</Typography>
          <Typography variant="p-default">{value}</Typography>
        </div>
      ))}
    </div>
  </div>
)

export default OpeningHoursBox
