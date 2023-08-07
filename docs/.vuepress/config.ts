/** @format */

import { defaultTheme, defineUserConfig } from 'vuepress';
import { path, getDirname } from '@vuepress/utils';
import vuepressPluginIndexContent from './vuepress-plugin-index-content';

const __dir = getDirname(import.meta.url);

export default defineUserConfig({
  lang: 'zh-CN',
  title: '学习笔记',
  // description: '这是我的第一个 VuePress 站点',
  plugins: [vuepressPluginIndexContent()],
  base: '/blog/',
  pagePatterns: [
    '**/*.md',
    '!**/README.md',
    '!**/template.md',
    '!.vuepress',
    '!node_modules',
  ],
  alias: {
    '@@': path.resolve(__dir, './components'),
  },
  open: false,
  theme: defaultTheme({
    navbar: [{ text: 'home', link: '/' }],
    sidebar: {
      '/': [''], // 根目录无法置空
    },
  }),
});
