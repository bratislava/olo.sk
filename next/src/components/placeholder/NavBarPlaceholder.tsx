import { LocalDate } from '@js-joda/core'
import { useTranslation } from 'next-i18next'
import * as React from 'react'

import OloLogo from '@/src/assets/images/olo-logo.svg'
import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import PlaceholderWrapper from '@/src/components/placeholder/PlaceholderWrapper'

// import { useElementSize } from 'usehooks-ts'

// TODO extract into utils
const getCurrentWeekOfYear = () => {
  // returns the number of the current week in current year
  return LocalDate.now().isoWeekOfWeekyear()
}

const isCurrentWeekEven = () => {
  return getCurrentWeekOfYear() % 2 === 0
}

const Divider = () => {
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
      <div className="fixed top-0 z-30 w-full border-b border-border-default bg-white ">
        <PlaceholderWrapper>
          {/* <AlertBanner ref={alertRef} /> */}
          {/* Screen: desktop */}
          <div className="relative w-full max-lg:hidden">
            {/* <NavBarHeader /> */}
            {/* <NavMenu /> */}
            <SectionContainer className="bg-action-background-default py-3">
              <div className="flex items-center justify-between">
                {/* TODO replace py-2px with better */}
                <div className="flex gap-4 py-[2px]">
                  {/* TODO replace by proper logo component */}
                  <Button
                    variant="unstyled"
                    href="/"
                    asLink
                    aria-label={t('navBar.aria.logoButton')}
                    icon={<OloLogo />}
                    hasLinkIcon={false}
                  />
                  <Divider />
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
                    <Divider />
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
                          <div className="flex items-center gap-[0.125rem]" key={item}>
                            <Typography variant="p-default-bold">{item}</Typography>
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
          {/* Screen: mobile */}
          <div className="lg:hidden">
            <SectionContainer className="bg-action-background-default py-2">
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
            </SectionContainer>
            <SectionContainer className="bg-background-primary py-4">
              <div className="flex items-center justify-between">
                {/* TODO replace by proper logo component */}
                <div className="text-action-background-default">
                  <Button
                    variant="unstyled"
                    href="/"
                    asLink
                    aria-label={t('navBar.aria.logoButton')}
                    icon={<OloLogo />}
                    hasLinkIcon={false}
                  />
                </div>
                {/* Set opacity to 25% to suggest that it should not be interacted with */}
                <div className="flex gap-6 opacity-25">
                  <Icon name="lupa" className="size-6" />
                  <Icon name="hamburger" className="size-6" />
                </div>
              </div>
            </SectionContainer>
          </div>
        </PlaceholderWrapper>
      </div>
      {/* TODO Fix height */}
      <div aria-hidden className="h-[5.9rem] lg:h-28" />
      {/* <div style={{ height }} aria-hidden className="hidden lg:block" /> */}
      {/* <div className="hidden h-[137px] lg:block" aria-hidden /> */}

      {/* <MobileNavBar className="lg:hidden" /> */}
    </>
  )
}

export default NavBarPlaceholder
