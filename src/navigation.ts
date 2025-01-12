//import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Brief',
      href: 'https://docs.google.com/document/d/11jCN2TfN-sIVuEjzjUChzqA18VYQUwwWDWn7rW0U9t8/edit?tab=t.0#heading=h.bsgneoiwl1hw',
      target: '_blank',
    },
    { text: 'FAQs', href: '#faq' },
    {
      text: '1RG',
      links: [
        { text: 'Space', href: 'https://1rg.space', target: '_blank' },
        { text: 'Labs', href: 'https://labs.1rg.space', target: '_blank' },
        { text: 'Words', href: 'https://words.1rg.space', target: '_blank' },
      ],
    },
  ],
  actions: [{ text: 'Apply', href: 'https://forms.gle/i5AZy1ZyDVwv9riV9', target: '_blank' }],
};

export const footerData = {
  showTitle: false,
  links: [],
  secondaryLinks: [],
  /*links: [
    {
      title: '1RG Incubator',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: '1RG',
      links: [
        { text: 'Labs', href: '#' },
        { text: 'Space', href: '#' },

      ],
    },

  ],
  secondaryLinks: [
    { text: 'Labs', href: getPermalink('/terms') },
    { text: 'Space', href: getPermalink('/privacy') },
  ],*/
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    //{ ariaLabel: 'BlueSky', icon: 'tabler:brand-bluesky', href: '#' },
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://cosocial.ca/@1rg' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/1rgspace.bsky.social' },
    { ariaLabel: 'X', icon: 'tabler:brand-instagram', href: 'https://x.com/1RGSpace' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/1rg.space' },
    //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    //    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/1rglabs' },
  ],
};
