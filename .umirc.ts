import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Rootnet Design',
  base: process.env.NODE_ENV === 'production' ? '/component/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/component/' : '/',
  favicon: process.env.NODE_ENV === 'production' ? '/component/logo.png' : '/logo.png',
  logo: process.env.NODE_ENV === 'production' ? '/component/logo.png' : '/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash',
  },
});
