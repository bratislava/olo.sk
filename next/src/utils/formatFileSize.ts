import prettyBytes from 'pretty-bytes'

import { isDefined } from '@/src/utils/isDefined'

// Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/utils/formatFileSize.ts

export const formatFileSize = (size: number | undefined, language: string) => {
  if (isDefined(size)) {
    return prettyBytes(size * 1000, {
      locale: language,
    })
  }

  return size
}
