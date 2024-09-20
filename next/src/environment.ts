// Inspired by https://jfranciscosousa.com/blog/validating-environment-variables-with-zod/
// Secures typesafe access to environmental variables.
// In browser process.env is an empty object, the values are replaced during the build time, so they need to be accessed
// via process.env.NEXT_PUBLIC_...

/* eslint-disable no-process-env */
function assertEnv<T>(variable: string, value: T) {
  if (!value) {
    throw new Error(`Missing environment variable: ${variable}`)
  }

  return value
}

export const environment = {
  nodeEnv: assertEnv('NODE_ENV', process.env.NODE_ENV),
  deployment: assertEnv('NEXT_PUBLIC_DEPLOYMENT', process.env.NEXT_PUBLIC_DEPLOYMENT),
  strapiUrl: assertEnv('NEXT_PUBLIC_STRAPI_URL', process.env.NEXT_PUBLIC_STRAPI_URL),
  mapboxAccessToken: assertEnv(
    'NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN',
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  ),
  mapboxUsername: assertEnv('NEXT_PUBLIC_MAPBOX_USERNAME', process.env.NEXT_PUBLIC_MAPBOX_USERNAME),
  mapboxStyleId: assertEnv('NEXT_PUBLIC_MAPBOX_STYLE_ID', process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID),
  nextHost: assertEnv('NEXT_PUBLIC_NEXT_HOST', process.env.NEXT_PUBLIC_NEXT_HOST),
}
