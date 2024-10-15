import * as Pictograms from '@/src/assets/pictograms'
import cn from '@/src/utils/cn'

export const pictogramNameMap = {
  // Bratislava DS
  dokumenty: 'DocumentsPictogram',
  'transparentne-mesto': 'TransparentCityPictogram',
  'doprava-a-mapy': 'TransportationAndMaps',
  'elektronicke-sluzby': 'DigitalServicesPictogram',
  // waste-types
  paper: 'WastePaperPictogram',
  plastic: 'WastePlasticPictogram',
  glass: 'WasteGlassPictogram',
  civicAmenitySite: 'WasteCivicAmenitySitePictogram',
  cookingOilsAndFats: 'WasteOilsAndFatsPictogram',
  kitchenWaste: 'WasteKitchenPictogram',
  organic: 'WasteOrganicPictogram',
  mixed: 'WasteMixedPictogram',
  cemetery: 'WasteCemeteryPictogram',
  christmasTrees: 'WasteChristmasTreesPictogram',
  // other
  pigCoinBank: 'PigCoinBankPictogram',
} satisfies Record<string, keyof typeof Pictograms>

export type PictogramName = keyof typeof pictogramNameMap

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
