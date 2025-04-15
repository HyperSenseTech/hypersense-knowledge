import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "氦闪开源知识库",
  description: "这是一个知识库应用,用于平常的知识管理",
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  srcDir: './src',
  srcExclude: ['**/README.md', '**/TODO.md'], // 排除 README.md 和 TODO.md 文件
  // outDir: '../public',
  assetsDir: 'static',
  metaChunk : true,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/assets/logo.png',
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术栈', link: '/techstack/Ai/markdown-examples' },
      { text: '生活日常', link: '/dailylife/api-examples' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: {
      '/techstack/':[
        {
          text: '技术栈',
          collapsed: false,
          items: [
            { 
              text: '人工智能', 
              collapsed: false,
              items: [
                { text: 'markdown-examples', link: '/techstack/ai/markdown-examples' },
              ] 
            },
            { 
              text: 'C++', 
              collapsed: true,
              items: [
                { text: 'markdown-examples', link: '/techstack/cpp/markdown-examples' },
              ] 
            },
            { 
              text: 'Java', 
              collapsed: true,
              items: [
                { text: 'markdown-examples', link: '/techstack/java/markdown-examples' },
              ] 
            },
            { 
              text: '前端', 
              collapsed: true,
              items: [
                { text: 'markdown-examples', link: '/techstack/frontend/markdown-examples' },
              ] 
            },
            { 
              text: 'Go', 
              collapsed: true,
              items: [
                { text: 'markdown-examples', link: '/techstack/go/markdown-examples' },
              ] 
            },
            { 
              text: 'Python', 
              collapsed: true,
              items: [
                { text: 'markdown-examples', link: '/techstack/python/markdown-examples' },
              ] 
            },
            { 
              text: 'Rust', 
              collapsed: true,
              items: [
                { text: 'markdown-examples', link: '/techstack/rust/markdown-examples' },
              ] 
            },
          ]
        }
      ],
      '/dailylife/': [
        {
          text: '生活日常',
          collapsed: false,
          items: [
            { text:'markdown-examples', link: '/dailylife/api-examples' },
          ]
        },
      ]
      
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HyperSenseTech' }
    ],

    footer: {
      message: 'All Rights Reserved.',
      copyright: '<a href="http://beian.miit.gov.cn/">Copyright © 2025 hypersense.tech </a>'
    }
  }
  
})
