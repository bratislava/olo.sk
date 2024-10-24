import '../styles/globals.css'
import '../styles/table.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

import { HydrationBoundary } from '@tanstack/react-query'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import PlausibleProvider from 'next-plausible'
import { NextAdapter } from 'next-query-params'
import { OverlayProvider } from 'react-aria'
import { QueryParamProvider } from 'use-query-params'

import { NavMenuContextProvider } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import BAQueryClientProvider from '@/src/providers/BAQueryClientProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* Favicon files generated with https://realfavicongenerator.net/ */}
        <link rel="icon" type="image/png" href="favicon/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="OLO.sk" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e46054" /> */}
        {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
        <meta name="theme-color" content="#ffffff" />
        {/* look for CookieConsent component for 3rd party scripts you'd expect to find here */}
      </Head>

      <PlausibleProvider
        domain="testing.bratislava.sk"
        taggedEvents
        // uncomment for local testing, needs to be run with `yarn build && yarn start`
        // trackLocalhost
      >
        <BAQueryClientProvider>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <QueryParamProvider adapter={NextAdapter}>
              {/* <BAI18nProvider> */}
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
          </HydrationBoundary>
        </BAQueryClientProvider>
      </PlausibleProvider>
      {/* </NextIntlClientProvider> */}
    </>
  )
}

export default appWithTranslation(MyApp)
