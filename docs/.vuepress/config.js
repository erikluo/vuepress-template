module.exports = {
  title: 'WmXiaozhi',
  head: [
    [
      'link', {
        rel: 'icon', href: 'https://www.wmxiaozhi.com/favicon.ico'
      }
    ]
  ],
  base: '/',
  locales: {
    '/': {
      lang: '简体中文',
      title: 'WmXiaozhi',
      description: 'AI 唯美小智新体验'
    },
    '/en/': {
      lang: 'English',
      title: 'WmXiaozhi',
      description: 'New Experience of Pictures Uploading and Management'
    }
  },
  description: 'AI 唯美小智新体验',
  themeConfig: {
    repo: 'none',
    docsRepo: 'none',
    docsDir: 'docs',
    editLinks: false,
    locales: {
      '/': {
        sidebar: {
          '/zh/guide/': getGuideSidebar('指南'),
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          }
        ]
      },
      '/en/': {
        sidebar: {
          '/en/guide/': getGuideSidebar('Guidelines'),
        },
        nav: [
          {
            text: 'Guidelines',
            link: '/en/guide/'
          }
        ]
      },
    }
  }
}

function getGuideSidebar (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started'
      ]
    }
  ]
}