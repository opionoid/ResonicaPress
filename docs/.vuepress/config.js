module.exports = {
  // サイトの基本情報
  title: 'ResonicaPress',
  description: 'シークレットデータベース',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'og:url',
        content: 'https://resonica.firebaseapp.com/'
      }
    ],
    [
      'meta',
      {
        name: 'og:type',
        content: 'website'
      }
    ],
    [
      'meta',
      {
        name: 'og:title',
        content: 'Resonica'
      }
    ],
    [
      'meta',
      {
        name: 'og:description',
        content: 'secret database'
      }
    ],
    [
      'meta',
      {
        name: 'og:image',
        content: '/img/logo.png'
      }
    ]
  ],

  themeConfig: {
    // 言語設定
    locales: {
      '/': {
        lang: 'ja'
      }
    },

    // ナビゲーション
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Story',
        items: [
          {
            text: 'plot',
            link: '/story/plot/'
          },
          {
            text: 'character',
            link: '/story/character/'
          },
          {
            text: 'world',
            link: '/story/world/'
          }
        ]
      },
      {
        text: 'Rule',
        link: '/rule/'
      },
      {
        text: 'Ability',
        link: '/ability/'
      },
      {
        text: 'Weapon',
        items: [
          {
            text: '幻槍',
            link: '/weapon/spear/'
          },
          {
            text: '幻双',
            link: '/weapon/dual-daggers/'
          },
          {
            text: '幻弓',
            link: '/weapon/bow/'
          },
          {
            text: '幻杖',
            link: '/weapon/rod/'
          },
          {
            text: '幻琴',
            link: '/weapon/harp/'
          }
        ]
      },
      {
        text: 'Skill',
        items: [
          {
            text: '幻槍',
            link: '/skill/skill-spear/'
          },
          {
            text: '幻双',
            link: '/skill/skill-dual-daggers/'
          },
          {
            text: '幻弓',
            link: '/skill/skill-bow/'
          },
          {
            text: '幻杖',
            link: '/skill/skill-rod/'
          },
          {
            text: '幻琴',
            link: '/skill/skill-harp/'
          }
        ]
      },
      {
        text: 'Item',
        link: '/item/'
      },
      {
        text: 'Economy',
        link: '/economy/'
      },
      {
        text: 'Public',
        link: '/'
      }
    ],

    sidebar: 'auto',
    sidebarDepth: 2
  }
}
