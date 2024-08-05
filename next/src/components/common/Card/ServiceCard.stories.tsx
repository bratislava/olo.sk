import type { Meta, StoryObj } from '@storybook/react'

import { Enum_Servicecategory_Categorycolor } from '@/src/services/graphql/api'

import ServiceCardComponent from './ServiceCard'

type Props = {
  title: string
  serviceCategories: Array<'pre občanov' | 'pre firmy' | 'pre správcovské organizácie'>
}

const dummyServiceCategories = {
  'pre občanov': {
    attributes: {
      title: 'Pre občanov',
      slug: '',
      categoryColor: Enum_Servicecategory_Categorycolor.Red,
    },
  },
  'pre firmy': {
    attributes: {
      title: 'Pre firmy',
      slug: '',
      categoryColor: Enum_Servicecategory_Categorycolor.Green,
    },
  },
  'pre správcovské organizácie': {
    attributes: {
      title: 'Pre správcovské organizácie',
      slug: '',
      categoryColor: Enum_Servicecategory_Categorycolor.Blue,
    },
  },
}

const meta: Meta<Props> = {
  title: 'Components/Cards/ServiceCard',
  argTypes: {
    serviceCategories: {
      options: Object.keys(dummyServiceCategories),
      control: {
        type: 'check',
      },
    },
  },
  args: {
    title: 'Service name',
    serviceCategories: ['pre občanov', 'pre firmy', 'pre správcovské organizácie'],
  },
  parameters: {
    controls: { include: ['title', 'serviceCategories'] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<Props>

export const ServiceCard: Story = {
  decorators: [
    (Story) => (
      <div className="w-[288px] lg:w-[386px]">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <ServiceCardComponent
      title={args.title}
      linkHref="#"
      serviceCategories={args.serviceCategories.map((category) => {
        return {
          attributes: dummyServiceCategories[category].attributes,
        }
      })}
    />
  ),
}

export const ServiceCardRows: Story = {
  render: (args) => (
    <div className="flex grid-rows-1 gap-2 lg:gap-8">
      {Array.from({ length: 3 }).map(() => {
        return (
          <ServiceCardComponent
            title={args.title}
            linkHref="#"
            serviceCategories={args.serviceCategories.map((category) => {
              return { attributes: dummyServiceCategories[category].attributes }
            })}
          />
        )
      })}
    </div>
  ),
}
