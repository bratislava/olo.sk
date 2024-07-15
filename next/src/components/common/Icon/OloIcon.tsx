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
  'career-calendar': 'CareerCalendarIcon',
  directions: 'DirectionsIcon',
  'live-help': 'LiveHelpIcon',
  'social-media-facebook-footer': 'FacebookFooterIcon',
  'social-media-instagram-footer': 'InstagramFooterIcon',
  place: 'PlaceIcon',
  'directions-bus': 'BusIcon',
  'local-parking': 'ParkingIcon',
  // size 32 px
  'social-media-facebook': 'FacebookIcon',
  'social-media-twitter': 'TwitterIcon',
  'social-media-linkedin': 'LinkedInIcon',
} satisfies Record<string, keyof typeof OloIcons>

type OloIconType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export type OloIconProps = {
  name: keyof typeof oloIconNameMap
  className?: string
}

const OloIcon = ({ name, className }: OloIconProps) => {
  const OloIconComponent: OloIconType = OloIcons[oloIconNameMap[name]]

  return <OloIconComponent className={cn('shrink-0', className)} />
}

export default OloIcon
