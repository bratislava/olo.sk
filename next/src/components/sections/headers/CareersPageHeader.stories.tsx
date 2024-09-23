import type { Meta, StoryObj } from '@storybook/react'

import { OloTruckImage } from '@/src/assets/images'
import { CareersHeaderSectionFragment } from '@/src/services/graphql/api'

import CareersPageHeaderComponent from './CareersPageHeader'

type Props = CareersHeaderSectionFragment

const meta: Meta<Props> = {
  title: 'Page Headers/Kariéra',
  args: {
    title: 'Kariéra v OLO',
    text: 'Dobre fungujúce mesto sa nezaobíde bez odvozu a zhodnocovania odpadu. OLO sa zasa nezaobíde bez spoľahlivých ľudí. Za vašu prácu vám ponúkame zázemie stabilnej a perspektívnej spoločnosti, ktorá si svojich zamestnancov a zamestnankyne váži a vie ich patrične oceniť. Viete, čo je dôkazom, že sme v OLO spokojní? Viac ako polovica zamestnancov je s nami vyše desať rokov!',
    videoUrl: 'https://www.youtube.com/embed/8QBjTTCj2JA',
    imageWithText: {
      title:
        'Zhodnocovaním odpadu robíme radosť deťom, z ktorých sme vyrástli, aj ďalším generáciám.',
      image: {
        data: {
          attributes: {
            url: OloTruckImage.src,
          },
        },
      },
    },
  },
}

type Story = StoryObj<Props>

export const CareersPageHeader: Story = {
  name: 'Kariéra',
  render: (args: Props) => <CareersPageHeaderComponent section={{ ...args }} />,
}

export default meta
