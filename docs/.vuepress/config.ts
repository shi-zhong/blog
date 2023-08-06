/** @format */

import { defaultTheme, defineUserConfig } from 'vuepress';
import { path, getDirname } from '@vuepress/utils'

const __dir = getDirname(import.meta.url);

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  alias: {
    '@@': path.resolve(__dir, '../../components')
  },
  theme: defaultTheme({
    navbar: [{ text: 'home', link: '/' }],
    sidebar: [
      {
        text: 'hello',
        link: '#red',
        children: [
          {
            text: 'hello',
            link: '/hello/',
          },
        ],
      }, '/before/class'
    ],
  }),
});
