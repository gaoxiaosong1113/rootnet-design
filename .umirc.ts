import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Rootnet Design',
  logo: '/logo.png',
  favicon: '/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash',
  },
});
