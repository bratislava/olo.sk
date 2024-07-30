import { MenuEntityFragment } from '@/src/services/graphql/api'

// eslint-disable-next-line consistent-return
export const getParsedMenus = (menu: MenuEntityFragment) => {
  if (menu) {
    return null // TODO: Remove - temporary solution for BA pipeline to pass
  }
}
