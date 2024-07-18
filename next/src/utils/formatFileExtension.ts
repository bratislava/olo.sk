import { isDefined } from '@/src/utils/isDefined'

// github.com/bratislava/bratislava.sk/blob/master/next/utils/formatFileExtension.ts

export const formatFileExtension = (ext: string | null | undefined) => {
  if (isDefined(ext)) {
    return ext.replace(/^\./, '').toUpperCase()
  }

  return ext
}
