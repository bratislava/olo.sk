import pluginPkg from '../../package.json'
import pluginId from './pluginId'
import Initializer from './components/Initializer'
import PluginIcon from './components/PluginIcon'

const name = pluginPkg.strapi.name

export default {
  register(app: any) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: 'Import Excel súborov',
      },
      Component: async () => {
        const component = await import('./pages/App')

        return component
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    })
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    }

    app.registerPlugin(plugin)
  },

  bootstrap(app: any) {},
}
