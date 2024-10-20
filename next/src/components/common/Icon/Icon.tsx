import * as Icons from '@/src/assets/icons'
import cn from '@/src/utils/cn'

/*
 * This component is used only for icons from the Bratislava design system
 * For icons specific to OLO, use OloIcon component
 */

// Todo refactor type to ensure that we include all icon assets from the folder in the nameMap

export const iconNameMap = {
  // size 24 px
  'chevron-dolava': 'ChevronLeftIcon',
  'chevron-dole': 'ChevronDownIcon',
  'chevron-dole-maly': 'ChevronDownSmallIcon',
  'chevron-doprava': 'ChevronRightIcon',
  'chevron-hore': 'ChevronUpIcon',
  'chevron-hore-maly': 'ChevronUpSmallIcon',
  disk: 'DiscIcon',
  dokument: 'DocumentIcon',
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
  'karty-a-preukazy': 'CardsAndIdsIcon',
  kniha: 'BookIcon',
  kopirovat: 'CopyIcon',
  kos: 'BinIcon',
  krizik: 'CrossIcon',
  lietadlo: 'SendIcon',
  lupa: 'SearchIcon',
  mail: 'MailIcon',
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
  pridat: 'AddIcon',
  priloha: 'AttachmentIcon',
  profil: 'ProfileIcon',
  referenti: 'ReferentsIcon',
  reproduktor: 'SpeakerIcon',
  'sipka-dolava': 'ArrowLeftIcon',
  'sipka-dole': 'ArrowDownIcon',
  'sipka-dole-mala': 'ArrowDownSmallIcon',
  'sipka-doprava': 'ArrowRightIcon',
  'sipka-hore': 'ArrowUpIcon',
  'sipky-spojenie': 'ConnectionIcon',
  skenovanie: 'ScanIcon',
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
} satisfies Record<string, keyof typeof Icons>

export type IconName = keyof typeof iconNameMap

export const isBaIcon = (iconName: string | null | undefined): iconName is IconName => {
  if (!iconName) return false

  return iconName in iconNameMap
}

type IconType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export type IconProps = {
  name: IconName
  className?: string
}

const Icon = ({ name, className }: IconProps) => {
  const IconComponent: IconType = Icons[iconNameMap[name]]

  return <IconComponent className={cn('shrink-0', className)} />
}

export default Icon
