import type { Meta, StoryObj } from '@storybook/react'

import { BranchEntityFragment, BranchesSectionFragment } from '@/src/services/graphql/api'

import BranchesSectionComponent from './BranchesSection'

type Props = BranchesSectionFragment & { branchesCount: number }

const meta: Meta<Props> = {
  title: 'Sections/Branches',
  args: {
    title: 'Naše pobočky',
    text: '',
    branchesCount: 3,
  },
  argTypes: {
    branchesCount: {
      name: 'počet pobočiek',
      control: { type: 'number', min: 1 },
    },
  },
}

const getBranchesDummyData = (count: number): BranchEntityFragment[] => {
  const initialItems = [
    { attributes: { title: 'KOLO – Pestovateľská', slug: '#' } },
    { attributes: { title: 'KOLO – Nová adresa', slug: '#' } },
    { attributes: { title: 'KOLO – Nová adresa', slug: '#' } },
  ]

  const generatedItems = Array.from({ length: count - initialItems.length }).map((_, index) => ({
    attributes: { title: `Branch ${index + 1 + initialItems.length}`, slug: `#` },
  }))

  return [...initialItems, ...generatedItems].slice(0, count)
}

type Story = StoryObj<Props>

export const BranchesSection: Story = {
  name: 'Branches',
  render: (args) => (
    <BranchesSectionComponent
      section={{ ...args, branches: { data: getBranchesDummyData(args.branchesCount) } }}
    />
  ),
}

export default meta
