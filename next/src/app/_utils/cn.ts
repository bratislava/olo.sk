import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...args: any[]) {
  return twMerge(clsx(args))
}

export default cn
