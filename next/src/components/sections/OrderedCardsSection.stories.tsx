import type { Meta, StoryObj } from '@storybook/react'

import {
  Enum_Componentsectionsorderedcards_Variant,
  OrderedCardsSectionFragment,
} from '@/src/services/graphql/api'

import OrderedCardsSectionComponent from './OrderedCardsSection'

type Props = OrderedCardsSectionFragment

const meta: Meta<Props> = {
  title: 'Sections/Ordered Cards',
  args: {
    title: 'Ako prispieť k čistým, pekným a udržateľným cintorínom?',
    variantOrderedCards: Enum_Componentsectionsorderedcards_Variant.Numbers,
    cards: [
      {
        title: 'Nakupujme zodpovedne, \nvoľme prírodné alternatívy',
        text: 'Koreňom problému s odpadom na cintorínoch sú materiály ozdôb, ktoré sa na Slovensku zvyknú nosiť na hroby. Cintorínsky sortiment sa väčšinou skladá z rôznych druhov materiálov – plastov, textilu, lepidiel, drôtov či sadry. Tie sa od seba oddeľujú len veľmi ťažko alebo sa nám to jednoducho nechce robiť. A tak sa z dekorácii stáva nerecyklovateľný odpad. Cintoríny sú prírodou v meste. Nenosme do nej odpad, zvoľme radšej prírodné, v mnohých prípadoch cenovo dostupnejšie alternatívy.',
        iconName: 'domcek',
      },
      {
        title: 'Živé/sušené kvety a plody \nnamiesto umelých aranžmánov',
        text: 'Umelé ikebany, kytice možno nahradiť živými alebo sušenými kvetmi zo záhrady či lokálneho kvetinárstva. Obzvlášť problematické sú ikebany z umelých kvetov zakotvené v betóne či sadre.  Na vence sa dá použiť slamený či prútený základ a ako ozdoby poslúžia šišky, suché trávy, konáriky, šípky, ihličie. Namiesto drôtu poslúži lyko alebo ľanový špagát.  ',
        iconName: 'domcek',
      },
      {
        title: 'Sviečky zo sóje/včelieho vosku namiesto \nparafínových/elektronických sviečok',
        text: 'Parafínové sviečky možno vymeniť za tie zo sóje či včelieho vosku a ich plastový alebo hliníkový obal za sklenené poháriky zo zaváranín. Náhradné náplne sa dajú kúpiť napríklad v bezobalovom obchode. Elektrické LED sviečky vystavené poveternostným podmienkam majú krátku životnosť, ohrozujú pôdu a vodu a navyše zvyšujú riziko požiaru na skládke. V Zariadení na energetické využitie odpadu (ZEVO) môžu vybuchnúť. ',
        iconName: 'domcek',
      },
      {
        title: 'Trieďme správne, dajme odpadu \nna cintorínoch druhú šancu',
        text: 'V téme cintorínskeho odpadu je taktiež potrebné osvojiť si dobré triediace návyky, pretože len správne vytriedený odpad môže byť ďalej spracovaný. Spoluprácou OLO, MARIANUM – Pohrebníctvo mesta Bratislavy, NATUR-PACK a CEEV Živica vznikli praktické rady a tipy, ako správne triediť odpad z cintorínov.',
        iconName: 'domcek',
      },
    ],
  },
  argTypes: {
    variantOrderedCards: {
      options: Object.values(Enum_Componentsectionsorderedcards_Variant),
      control: { type: 'inline-radio' },
    },
  },
}

type Story = StoryObj<Props>

export const OrderedCardsSection: Story = {
  name: 'Ordered Cards',
  render: (args) => <OrderedCardsSectionComponent section={args} />,
}

export default meta
