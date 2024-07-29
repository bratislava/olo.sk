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
    { __typename: 'BranchEntity', attributes: { title: 'KOLO – Pestovateľská', slug: '#' } },
    { __typename: 'BranchEntity', attributes: { title: 'KOLO – Nová adresa', slug: '#' } },
    { __typename: 'BranchEntity', attributes: { title: 'KOLO – Nová adresa', slug: '#' } },
  ] as const

  const generatedItems = Array.from({ length: count - initialItems.length }).map(
    (_, index) =>
      ({
        __typename: 'BranchEntity',
        attributes: {
          title: `Branch ${index + 1 + initialItems.length}`,
          slug: `#`,
        },
      }) as const,
  )

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
