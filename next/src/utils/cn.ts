// cn helper function inspired by https://ui.shadcn.com/docs/installation/manual

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args))
}

export default cn
