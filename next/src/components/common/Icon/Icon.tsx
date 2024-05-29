import * as Icons from '@/src/assets/icons'
import cn from '@/src/utils/cn'
// TODO make it generic and typesafe (allow only defined filenames/components)

export const iconNameMap: Record<string, keyof typeof Icons> = {
  // size 24 px
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
  'live-help': 'LiveHelpIcon',
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
  place: 'PlaceIcon',
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
  // size 32 px
  'social-media-facebook': 'FacebookIcon',
  'social-media-twitter': 'TwitterIcon',
  'social-media-linkedin': 'LinkedInIcon',
} as const

type IconType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export type IconProps = {
  name: keyof typeof iconNameMap
  className?: string
}

const Icon = ({ name, className }: IconProps) => {
  const IconComponent: IconType = Icons[iconNameMap[name]]

  return <IconComponent className={cn('shrink-0', className)} />
}

export default Icon
