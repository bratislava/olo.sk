import { NextRequest, NextResponse } from 'next/server'

/* Docs: https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

/**
 * This middleware rewrites path based on given path and data from Strapi "Sitemap" content type.
 * The logic of rewrites lives in api handler, to be able to use our graphql client.
 * (it's not possible to use graphql client in middleware, because it depends on node runtime and middleware uses edge runtime)
 *
 * @param request
 */
// eslint-disable-next-line consistent-return
export async function middleware(request: NextRequest) {
  // TODO remove console logs when we will be sure it works as intended
  /**
   * The request is handled on server, so we have to use http instead of https.
   * `pathname` contains leading "/"
   */
  const fetchUrl = `http://${request.nextUrl.host}/api/sitemap${request.nextUrl.pathname}`
  console.log('Middleware: api fetchUrl', fetchUrl)

  const response = await fetch(fetchUrl)
  const { destination } = await response.json()
  console.log('Middleware: destination', destination)

  if (typeof destination === 'string' && destination.length > 0) {
    const newUrl = new URL(destination, request.nextUrl.origin)
    console.log('Middleware: newUrl', newUrl.toString())

    return NextResponse.rewrite(newUrl)
  }

  // else do nothing
}
