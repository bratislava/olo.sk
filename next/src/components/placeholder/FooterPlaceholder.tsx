import React from 'react'

import OloLogo from '@/src/assets/images/olo-logo.svg'
import Button from '@/src/components/common/Button/Button'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import PlaceholderWrapper from '@/src/components/placeholder/PlaceholderWrapper'

const FooterPlaceholder = () => {
  return (
    <PlaceholderWrapper>
      {/* Screen: desktop */}
      <SectionContainer className="bg-content-primary py-18 text-white">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[30.5rem_1fr_1fr]">
          <div className="flex flex-col flex-wrap gap-6 text-border-default">
            <OloLogo fill="white" />
            <div>
              <Typography variant="p-small">
                ODVOZ A LIKVIDÁCIA ODPADU a.s., v skratke: OLO a.s.
              </Typography>
              <Typography variant="p-small">Ivanská cesta 22, 821 04 Bratislava</Typography>
            </div>
            <div>
              <Typography variant="p-small">IČO: 00681300</Typography>
              <Typography variant="p-small">DIČ: 2020318256</Typography>
              <Typography variant="p-small">IČ DPH: SK2020318256</Typography>
            </div>
            <Typography variant="p-small" className_onlyWhenNecessary="underline">
              02/50 110 111
            </Typography>
            <Typography variant="p-small" className_onlyWhenNecessary="underline">
              zakazka@olo.sk
            </Typography>
          </div>
          {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Array.from({ length: 2 }).map((column, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div className="flex flex-col flex-wrap gap-4" key={index}>
                  <Typography variant="h5">Col headline</Typography>
                  <div className="flex flex-col gap-3">
                    {Array.from({ length: 8 }).map((footerItem, index2) => {
                      return (
                        <Button
                          // eslint-disable-next-line react/no-array-index-key
                          key={index2}
                          href="#"
                          asLink
                          hasLinkIcon={false}
                          className="text-border-default underline"
                          variant="unstyled"
                        >
                          <Typography variant="p-small">Footer item</Typography>
                        </Button>
                      )
                    })}
                  </div>
                </div>
              )
            })
          }
        </div>
      </SectionContainer>

      <SectionContainer className="bg-content-primary py-6">
        <div className="flex w-full flex-col items-baseline text-border-default max-lg:gap-6 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
            {['Všeobecné obchodné podmienky', 'Ochrana osobných údajov', 'Nastavenia cookies'].map(
              (item) => {
                return (
                  <Typography variant="p-small" key={item} className_onlyWhenNecessary=" underline">
                    {item}
                  </Typography>
                )
              },
            )}
          </div>
          <div className="flex">
            <Typography variant="p-small">© 2022 OLO a. s., vytvorili </Typography>
            <Typography variant="p-small" className_onlyWhenNecessary="underline">
              Inovácie mesta Bratislava
            </Typography>
          </div>
        </div>
      </SectionContainer>
    </PlaceholderWrapper>
  )
}

export default FooterPlaceholder
