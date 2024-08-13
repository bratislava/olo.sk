// https://github.com/th3rdwave/react-native-safe-area-context/issues/409
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string
    readonly NEXT_PUBLIC_DEPLOYMENT: string
    readonly NEXT_PUBLIC_STRAPI_URL: string
  }
}
