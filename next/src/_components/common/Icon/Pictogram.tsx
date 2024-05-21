import cn from '@/app/_utils/cn'
import * as Pictograms from '@/assets/pictograms'

// TODO make it generic and typesafe (allow only defined filenames/components)

export const pictogramNameMap = {
  paper: 'WastePaperIcon',
  plastic: 'WastePlasticIcon',
  glass: 'WasteGlassIcon',
  civicAmenitySite: 'WasteCivicAmenitySiteIcon',
  cookingOilsAndFats: 'WasteOilsAndFatsIcon',
  kitchenWaste: 'WasteKitchenIcon',
  organic: 'WasteOrganicIcon',
  mixed: 'WasteMixedIcon',
} as const

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
