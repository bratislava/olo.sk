// cn helper function inspired by https://ui.shadcn.com/docs/installation/manual

import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export default cn
