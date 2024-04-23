import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

import * as Icons from '@/assets/icons'
import * as Pictograms from '@/assets/pictograms'

// TODO make it generic and typesafe (allow only defined filenames/components)

export const iconNameMap = {
  'chevron-dolava': 'ChevronLeftIcon',
  'chevron-dole': 'ChevronDownIcon',
  'chevron-dole-maly': 'ChevronDownSmallIcon',
  'chevron-doprava': 'ChevronRightIcon',
  'chevron-hore': 'ChevronUpIcon',
  'chevron-hore-maly': 'ChevronUpSmallIcon',
  disk: 'DiscIcon',
  domcek: 'HomeIcon',
  export: 'ExportIcon',
  fajka: 'CheckIcon',
  'fajka-kruh': 'CheckInCircleIcon',
  fotoaparat: 'PhotoIcon',
  hamburger: 'HamburgerIcon',
  hodiny: 'ClockIcon',
  import: 'ImportIcon',
  info: 'InfoIcon',
  kalendar: 'CalendarIcon',
  kniha: 'BookIcon',
  kopirovat: 'CopyIcon',
  kos: 'BinIcon',
  krizik: 'CrossIcon',
  lupa: 'SearchIcon',
  'mestske-konto': 'CityAccountIcon',
  'mestske-sluzby': 'ServicesIcon',
  'moje-podania': 'MySubmissionsIcon',
  nastavenia: 'SettingsIcon',
  'novy-tab': 'NewTabIcon',
  odhlasit: 'LogoutIcon',
  oko: 'EyeIcon',
  opakovat: 'RepeatIcon',
  pdf: 'PdfIcon',
  pero: 'EditIcon',
  platba: 'PaymentIcon',
  pomoc: 'HelpIcon',
  'presypacie-hodiny': 'SandGlassIcon',
  priloha: 'AttachmentIcon',
  profil: 'ProfileIcon',
  reproduktor: 'SpeakerIcon',
  'sipka-dolava': 'ArrowLeftIcon',
  'sipka-dole': 'ArrowDownIcon',
  'sipka-dole-mala': 'ArrowDownSmallIcon',
  'sipka-doprava': 'ArrowRightIcon',
  'sipka-hore': 'ArrowUpIcon',
  'sipky-spojenie': 'ConnectionIcon',
  stiahnut: 'DownloadIcon',
  telefon: 'PhoneIcon',
  'tri-bodky': 'EllipsisIcon',
  'tri-bodky-zvislo': 'EllipsisVerticalIcon',
  upload: 'UploadIcon',
  'vykricnik-kruh': 'ErrorIcon',
  'vykricnik-trojuholnik': 'AlertIcon',
  'vymazat-plny-kruh': 'RemoveIcon',
  zamok: 'LockIcon',
  'zrusit-kruh': 'CrossInCircleIcon',
} as const

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

type IconType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export type IconProps = {
  name: keyof typeof iconNameMap | keyof typeof pictogramNameMap
  className?: string
}

const Icon = ({ name, className }: IconProps) => {
  if (name in iconNameMap) {
    const IconComponent: IconType = Icons[iconNameMap[name]]

    return <IconComponent className={twMerge(cx('shrink-0', className))} />
  }
  if (name in pictogramNameMap) {
    const IconComponent: IconType = Pictograms[pictogramNameMap[name]]

    return <IconComponent className={twMerge(cx('shrink-0', className))} />
  }

  return null
}

export default Icon
