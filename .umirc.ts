import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  logo: '/icon.png',
  favicon: '/icon.png',
  title: 'ff-docs',
  description: '一些简单的记录',
  mode: 'doc',
  locales: [['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
});
