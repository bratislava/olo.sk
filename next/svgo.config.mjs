/**
 * We use default preset, and additionally we disable `removeViewBox` plugin, because it prevents resizing icons by css.
 *
 * Docs: https://github.com/svg/svgo?tab=readme-ov-file#configuration
 */
const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
}

export default svgoConfig
