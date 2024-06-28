import { LocalDate } from '@js-joda/core'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import * as React from 'react'

import OLOlogo from '@/src/assets/images/olo-logo.svg?url'
import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'

// import { useElementSize } from 'usehooks-ts'

const getCurrentWeekOfYear = () => {
  // returns the number of the current week in current year
  return LocalDate.now().isoWeekOfWeekyear()
}

const isCurrentWeekEven = () => {
  return getCurrentWeekOfYear() % 2 === 0
}

const HorizontalDivider = () => {
  return <div aria-hidden className="border-black border-l" />
}

/*
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/NavBar/NavBar.tsx
 */

const NavBarPlaceholder = () => {
  const { t } = useTranslation()

  // const [alertRef, { height }] = useElementSize<HTMLDivElement>()

  return (
    <>
      {/* <div className="fixed top-0 z-30 hidden w-full border-b border-border-default bg-white lg:block"> */}
      <div className="fixed top-0 z-30 w-full border-b border-border-default bg-white ">
        {/* <AlertBanner ref={alertRef} /> */}
        <div className="relative w-full">
          {/* <NavBarHeader /> */}
          {/* <NavMenu /> */}
          <SectionContainer className="bg-action-background-default py-3">
            <div className="flex items-center justify-between">
              {/* TODO replace py-2px with better */}
              <div className="flex gap-4 py-[2px]">
                {/* TODO replace by proper logo component */}
                <Button href="/" variant="unstyled" asLink hasLinkIcon={false} className="shrink-0">
                  <Image alt="" src={OLOlogo} />
                </Button>
                <HorizontalDivider />
                {/* TODO Isolate currentWeekMessage into a function that returns the message as string */}
                <Typography variant="p-small">
                  {isCurrentWeekEven()
                    ? t('pageHeaderPickupDay.messageEvenWeek', {
                        weekNumber: getCurrentWeekOfYear(),
                      })
                    : t('pageHeaderPickupDay.messageOddWeek', {
                        weekNumber: getCurrentWeekOfYear(),
                      })}
                </Typography>
              </div>
              {/* Set opacity to 25% to suggest that it should not be interacted with */}
              <div className="opacity-25">
                <div className="flex gap-4">
                  <Typography variant="p-small">Kontakty</Typography>
                  <HorizontalDivider />
                  <Typography variant="p-small">SK</Typography>
                </div>
              </div>
            </div>
          </SectionContainer>

          <SectionContainer className="bg-background-primary py-5">
            {/* Set opacity to 25% to suggest that it should not be interacted with */}
            <div className="opacity-25">
              <div className="flex items-center justify-between ">
                <div className="flex w-full items-center justify-between">
                  <div className="flex gap-8">
                    {['Odpad', 'Služby', 'Aktuality', 'KOLO', 'ZEVO', 'O nás'].map((item) => {
                      return (
                        // TODO Comment rem to px
                        <div className="flex items-center gap-[0.125rem]">
                          <Typography key={item} variant="p-default-bold">
                            {item}
                          </Typography>
                          <Icon name="chevron-dole" className="size-5" />
                        </div>
                      )
                    })}
                  </div>
                  {/* TODO Should be button */}
                  <Icon name="lupa" className="size-6" />
                </div>
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>
      {/* TODO Fix height */}
      <div style={{ height: '112px' }} aria-hidden className="hidden lg:block" />
      {/* <div style={{ height }} aria-hidden className="hidden lg:block" /> */}
      {/* <div className="hidden h-[137px] lg:block" aria-hidden /> */}

      {/* <MobileNavBar className="lg:hidden" /> */}
    </>
  )
}

export default NavBarPlaceholder
