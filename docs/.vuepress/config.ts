import { DefaultThemeOptions, defineUserConfig } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '前端成长之路',
  description: '构建知识体系，并分类整理对应的技术实现。',
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: 'auto',
    navbar: [
      {
        text: 'summary',
        link: '/summary.md'
      },
      '/javascript/'
    ]
  },
});
