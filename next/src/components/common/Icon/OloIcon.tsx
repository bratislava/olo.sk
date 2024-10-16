import React from 'react'

import * as OloIcons from '@/src/assets/icons-olo'
import cn from '@/src/utils/cn'

/*
 * This component is used only for icons specific to OLO design
 * For icons from the Bratislava design system, use Icon component
 */

// Todo refactor type to ensure that we include all icon assets from the folder in the nameMap

export const oloIconNameMap = {
  // size 24 px
  accessible: 'AccessibleIcon',
  'career-calendar': 'CareerCalendarIcon',
  'career-place': 'CareerPlaceIcon',
  'career-salary': 'CareerSalaryIcon',
  'career-time': 'CareerTimeIcon',
  chat: 'ChatIcon',
  directions: 'DirectionsIcon',
  'live-help': 'LiveHelpIcon',
  'social-media-facebook-footer': 'FacebookFooterIcon',
  'social-media-instagram-footer': 'InstagramFooterIcon',
  'social-media-linkedin-footer': 'LinkedInFooterIcon',
  place: 'PlaceIcon',
  'directions-bus': 'BusIcon',
  'local-parking': 'ParkingIcon',
  // size 24 px - Google Material symbols
  'material-brush': 'MaterialBrushIconIcon',
  'material-compost': 'MaterialCompostIcon',
  'material-home-repair-service': 'MaterialHomeRepairServiceIcon',
  'material-location-away': 'MaterialLocationAwayIcon',
  'material-pedal-bike': 'MaterialPedalBikeIcon',
  'material-recycling': 'MaterialRecyclingIcon',
  'material-shopping-bag': 'MaterialShoppingBagIcon',
  'material-smart-toy': 'MaterialSmartToyIcon',
  'material-styler': 'MaterialStylerIcon',
  'material-takeout-dining': 'MaterialTakeoutDiningIcon',
  'material-tour': 'MaterialTourIcon',
  // size 32 px
  'social-media-facebook': 'FacebookIcon',
  'social-media-twitter': 'TwitterIcon',
  'social-media-linkedin': 'LinkedInIcon',
} satisfies Record<string, keyof typeof OloIcons>

export type OloIconName = keyof typeof oloIconNameMap

export const isOloIcon = (iconName: string | null | undefined): iconName is OloIconName => {
  if (!iconName) return false

  return iconName in oloIconNameMap
}

type OloIconType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export type OloIconProps = {
  name: OloIconName
  className?: string
}

const OloIcon = ({ name, className }: OloIconProps) => {
  const OloIconComponent: OloIconType = OloIcons[oloIconNameMap[name]]

  return <OloIconComponent className={cn('shrink-0', className)} />
}

export default OloIcon
