/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import { twMerge } from 'tailwind-merge'

import Button from '@/_components/common/Button/Button'
import CardImage from '@/_components/common/Card/CardImage'
import Typography from '@/_components/common/Typography/Typography'

import CardBaseComponent, { CardBaseProps } from './CardBase'

const meta: Meta<typeof CardBaseComponent> = {
  component: CardBaseComponent,
  title: 'Components/Cards/CardBase',
}

export default meta
type Story = StoryObj<typeof CardBaseComponent>

const CardContent = () => {
  return (
    <>
      <CardImage className="aspect-[384/204] rounded-t-lg" />
      <div className="flex flex-col gap-5 px-4 py-4 lg:px-5">
        <div className="flex flex-col gap-3">
          <Typography
            variant="h5"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            Title
          </Typography>
          <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
            subtext
          </Typography>
        </div>
        <Button variant="black-link" href="#" asLink stretched>
          link text
        </Button>
      </div>
    </>
  )
}

const variants = ['unstyled', 'plain-white', 'plain-brand', 'solid'] as const

export const CardBase: Story = {
  name: 'All variants',
  render: (args) => (
    <div className="flex flex-row gap-2 [&>*]:w-[250px]">
      {variants.map((variant) => (
        <div className="flex flex-col gap-2">
          <p className="text-[0.7rem]">{`variant: ${variant}`}</p>
          <CardBaseComponent key={variant} variant={variant} {...args}>
            <CardContent />
          </CardBaseComponent>
        </div>
      ))}
    </div>
  ),
}
