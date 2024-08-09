import * as Pictograms from '@/src/assets/pictograms'
import cn from '@/src/utils/cn'

export const pictogramNameMap = {
  // waste-types
  paper: 'WastePaperIcon',
  plastic: 'WastePlasticIcon',
  glass: 'WasteGlassIcon',
  civicAmenitySite: 'WasteCivicAmenitySiteIcon',
  cookingOilsAndFats: 'WasteOilsAndFatsIcon',
  kitchenWaste: 'WasteKitchenIcon',
  organic: 'WasteOrganicIcon',
  mixed: 'WasteMixedIcon',
  cemetery: 'WasteCemeteryIcon',
  christmasTrees: 'WasteChristmasTreesIcon',
  // other
  pigCoinBank: 'PigCoinBankIcon',
} satisfies Record<string, keyof typeof Pictograms>

type PictogramType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export type PictogramProps = {
  name: keyof typeof pictogramNameMap
  className?: string
}

const Pictogram = ({ name, className }: PictogramProps) => {
  const PictogramComponent: PictogramType = Pictograms[pictogramNameMap[name]]

  return <PictogramComponent className={cn('shrink-0', className)} />
}

export default Pictogram
