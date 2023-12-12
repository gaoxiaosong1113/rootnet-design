import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Rootnet Design',
  base: process.env.NODE_ENV === 'production' ? '/components/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/components/' : '/',
  favicon: process.env.NODE_ENV === 'production' ? '/components/logo.png' : '/logo.png',
  logo: process.env.NODE_ENV === 'production' ? '/components/logo.png' : '/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash',
  },
});
