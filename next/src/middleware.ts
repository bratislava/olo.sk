import { getNavigationMiddleware } from '@/src/services/navigation/getNavigationMiddleware'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'

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

export const middleware = getNavigationMiddleware(navigationConfig)
