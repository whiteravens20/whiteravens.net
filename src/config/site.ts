// Site facts: URLs, handles and service endpoints (successor of Jekyll's _config.yml).
// Human-readable copy lives in src/content/copy.yml.

export const site = {
  name: 'White Ravens',
  url: 'https://whiteravens.net',
  email: 'kontakt@whiteravens.net',

  docs: 'https://wrservices.link',
  blog: 'https://blog.whiteravens.net',
  status: 'https://status.wrservices.link',

  github: 'https://github.com/whiteravens20',
  mastodon: 'https://mastodon.social/@whiteravens',
  youtube: 'https://www.youtube.com/@whiteravens20',
  steam: 'https://steamcommunity.com/groups/whiteravensgaming',

  kofi: 'https://ko-fi.com/whiteravens20',
  goatcounter: 'https://stats.whiteravens.net/count',

  author: { name: 'pavlojs', url: 'https://github.com/pavlojs' },

  themeColor: '#060a0c',
  ogImage: '/android-chrome-512x512.png',
} as const;
