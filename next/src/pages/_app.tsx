import '../styles/globals.css'
import '../styles/table.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { NextAdapter } from 'next-query-params'
import { OverlayProvider } from 'react-aria'
import { QueryParamProvider } from 'use-query-params'

import { NavMenuContextProvider } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import BAQueryClientProvider from '@/src/providers/BAQueryClientProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e46054" /> */}
        {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
        <meta name="theme-color" content="#ffffff" />
        {/* look for CookieConsent component for 3rd party scripts you'd expect to find here */}
      </Head>

      {/* <PlausibleProvider */}
      {/*   domain={isProd ? 'bratislava.sk' : 'testing.bratislava.sk'} */}
      {/*   taggedEvents */}
      {/*   // uncomment for local testing, needs to be run with `yarn build && yarn start` */}
      {/*   // trackLocalhost */}
      {/* > */}
      <BAQueryClientProvider>
        <QueryParamProvider adapter={NextAdapter}>
          {/*       <BAI18nProvider> */}
          <OverlayProvider>
            <NavMenuContextProvider>
              {/* This root div is used for locked body when mobile menu ist open, see MobileNavMenu component */}
              <div id="root">
                <Component {...pageProps} />
              </div>
            </NavMenuContextProvider>
          </OverlayProvider>
          {/* </BAI18nProvider> */}
        </QueryParamProvider>
      </BAQueryClientProvider>
      {/* </PlausibleProvider> */}
      {/* </NextIntlClientProvider> */}
    </>
  )
}

export default appWithTranslation(MyApp)
