type Props = {
  id: string
  headerOffset: number
}

export const handleOnClick = ({ id, headerOffset }: Props) => {
  const element = document.querySelector(id)
  if (!element) return

  const elementPosition = element?.getBoundingClientRect().top || 0 // current offset regarding to the current window scroll
  const windowOffset = window.scrollY
  const offsetPosition = elementPosition + windowOffset - headerOffset

  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
}
