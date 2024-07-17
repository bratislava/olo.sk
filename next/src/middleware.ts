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
 * This middleware rewrites path based on data from Strapi "Router" content type.
 * It requests data through api endpoint, to be able to use our graphql client
 * (it's not possible to use graphql client, because it depends on node and middleware uses edge runtime instead of node)
 *
 * @param request
 */
// eslint-disable-next-line consistent-return
export async function middleware(request: NextRequest) {
  // eslint-disable-next-line no-console
  // console.log('request.nextUrl', request.nextUrl)
  console.log('request.url', request.url)
  // const fetchUrl = `${request.nextUrl.origin}/api/sitemap${request.nextUrl.pathname}`
  const fetchUrl = `http://${request.nextUrl.host}/api/sitemap${request.nextUrl.pathname}`
  console.log('fetch url', fetchUrl)
  const response = await fetch(fetchUrl)
  const { destination } = await response.json()

  console.log('response destination', destination)

  if (destination && typeof destination === 'string' && destination.length > 0) {
    const newUrl = new URL(destination, request.nextUrl.origin)
    console.log('new url', newUrl.toString())

    return NextResponse.rewrite(newUrl)
  }

  // else do nothing
}
