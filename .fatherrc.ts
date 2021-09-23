export default {
  esm: 'babel',
  cjs: 'babel',
  // esm: 'rollup',
  // cjs: 'rollup',
  extractCSS: true,
  disableTypeCheck: true,
  lessInBabelMode: true,
  extraPostCSSPlugins: [],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'rootnet-design',
        libraryDirectory: 'lib',
        style: true,
      },
    ],
  ],
  autoprefixer: {
    overrideBrowserslist: ['ie>8', 'Safari >= 6'],
  },
};
