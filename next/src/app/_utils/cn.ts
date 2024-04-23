import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type CnArgs = (string | Record<string, boolean>)[]

function cn(...args: CnArgs) {
  return twMerge(clsx(args))
}

export default cn
