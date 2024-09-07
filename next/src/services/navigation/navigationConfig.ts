import { environment } from '@/src/environment'
import { NavigationConfig } from '@/src/services/navigation/typesNavigation'

export const navigationConfig: NavigationConfig = {
  cacheTtl: 10_000,
  host: environment.nextHost,
}
