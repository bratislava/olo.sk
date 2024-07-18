import React, { useState } from 'react'

export const usePaginationWithInput = (
  currentPage: number,
  totalCount: number,
  handlePageChange: ((value: number) => void) | undefined,
) => {
  const [inputValue, setInputValue] = useState(currentPage)

  const sanitizeInput = (userInput: string | number): number => {
    if (userInput === '') {
      return currentPage
    }

    const numericUserInput = Number(userInput)

    if (numericUserInput > totalCount) {
      return totalCount
    }

    if (numericUserInput < 1) {
      return 1
    }

    return numericUserInput
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(sanitizeInput(event.target.value))
  }

  const handleInputFocus = () => {
    // @ts-ignore
    setInputValue('')
  }

  const handleDecrement = (userInput: number) => {
    const newUserInputValue = userInput - 1 === 0 ? 1 : userInput - 1
    setInputValue(newUserInputValue)
    handlePageChange?.(newUserInputValue)
  }

  const handleIncrement = (userInput: number) => {
    const newUserInputValue = userInput + 1 === totalCount ? totalCount : userInput + 1
    setInputValue(newUserInputValue)
    handlePageChange?.(newUserInputValue)
  }

  const handleBlur = () => {
    handlePageChange?.(sanitizeInput(inputValue))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (['e', 'E', '+', '-', '.', ','].includes(event.key)) {
      event.preventDefault() // Restrict input type number to integers only
    }

    if (event.key === 'Enter') {
      handleBlur()
    }
  }

  return {
    handleInputFocus,
    inputValue,
    handleInputChange,
    handleDecrement,
    handleIncrement,
    handleBlur,
    handleKeyDown,
  }
}
