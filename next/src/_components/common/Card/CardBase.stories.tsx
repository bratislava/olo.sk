import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/_components/common/Button/Button'
import CardImage from '@/_components/common/Card/CardImage'
import Typography from '@/_components/common/Typography/Typography'
import cn from '@/app/_utils/cn'

import CardBaseComponent from './CardBase'

const meta: Meta<typeof CardBaseComponent> = {
  component: CardBaseComponent,
  title: 'Components/Cards/CardBase',
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col">
          <Story />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof CardBaseComponent>

const CardContent = ({ className = '' }) => {
  return (
    <>
      <CardImage className="aspect-[384/204]" />
      <div className={cn('flex flex-col gap-5 py-4', className)}>
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

const variants = ['background-white', 'background-yellow', 'unstyled'] as const

export const CardBase: Story = {
  name: 'All variants',
  render: () => {
    return (
      <div className="flex flex-row flex-wrap gap-6">
        {variants.map((variant) => (
          <div className="flex flex-col items-start gap-1">
            <p className="text-[0.7rem]">{`CardBase variant: ${variant}`}</p>
            <div className="flex flex-row border border-border-default [&>*]:w-[240px]">
              {
                // eslint-disable-next-line sonarjs/no-duplicate-string
                ['primary', 'secondary', 'transparent'].map((backgroundColor) => (
                  <div
                    className={cn('px-8 py-4', {
                      'bg-background-primary': backgroundColor === 'primary',
                      'bg-background-secondary': backgroundColor === 'secondary',
                    })}
                  >
                    <CardBaseComponent
                      key={variant}
                      variant={variant}
                      hasWhiteSectionBackground={backgroundColor === 'primary'}
                    >
                      <CardContent
                        className={cn({
                          'px-4 lg:px-5': variant !== 'unstyled',
                        })}
                      />
                    </CardBaseComponent>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    )
  },
}
