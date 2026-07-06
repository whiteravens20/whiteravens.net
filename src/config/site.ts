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
  steam: 'https://steamcommunity.com/groups/whiteravensgaming',

  kofi: 'https://ko-fi.com/N4N4E0LR2',
  kofiButton: 'https://storage.ko-fi.com/cdn/kofi5.png?v=6',
  goatcounter: 'https://whiteravens.goatcounter.com/count',

  author: { name: 'pavlojs', url: 'https://github.com/pavlojs' },

  themeColor: '#0a0f1e',
  ogImage: '/android-chrome-512x512.png',
} as const;
