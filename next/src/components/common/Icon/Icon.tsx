import * as Icons from '@/src/assets/icons'
import cn from '@/src/utils/cn'

export const iconNameMap = {
  // size 20 px
  badge: 'BadgeIcon',
  directions: 'DirectionsIcon',
  'phone-filled': 'PhoneFilledIcon',
  'mail-outling': 'MailOutlineIcon',
  'thumb-up': 'ThumbUpIcon',
  'thumb-down': 'ThumbDownIcon',
  // size 24 px
  'calendar-olo': 'CalendarOloIcon',
  'chevron-dolava': 'ChevronLeftIcon',
  'chevron-dole': 'ChevronDownIcon',
  'chevron-dole-maly': 'ChevronDownSmallIcon',
  'chevron-doprava': 'ChevronRightIcon',
  'chevron-hore': 'ChevronUpIcon',
  'chevron-hore-maly': 'ChevronUpSmallIcon',
  delete: 'DeleteIcon',
  'directions-bus': 'DirectionsBusIcon',
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
  lietadlo: 'SendIcon',
  'live-help': 'LiveHelpIcon',
  'local-parking': 'LocalParkingIcon',
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
  'tri-bodky': 'EllipsisIcon',
  'tri-bodky-zvislo': 'EllipsisVerticalIcon',
  upload: 'UploadIcon',
  'vykricnik-kruh': 'ErrorIcon',
  'vykricnik-trojuholnik': 'AlertIcon',
  'vymazat-plny-kruh': 'RemoveIcon',
  web: 'WebIcon',
  zamok: 'LockIcon',
  'zrusit-kruh': 'CrossInCircleIcon',
  // size 32 px
  telefon: 'PhoneIcon',
  'social-media-facebook': 'FacebookIcon',
  'social-media-twitter': 'TwitterIcon',
  'social-media-linkedin': 'LinkedInIcon',
} satisfies Record<string, keyof typeof Icons>

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
