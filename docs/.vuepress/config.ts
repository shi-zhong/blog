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
    navbar: [
      // 这里进行一次大分类
      { text: 'typescript', link: '/typescript' },
      { text: '其余分类', children: [{ text: '历史笔记', link: '/历史笔记' }] },
      { text: 'home', link: '/' },
    ],
    sidebarDepth: 3,
    // sidebar进行小分类书写
    // sidebar: {
    //   '/': [''], // 根目录无法置空
    // },
  }),
});
