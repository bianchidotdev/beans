import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Startup',
      href: getPermalink('/homes/startup'),
    },
    {
      text: 'About us',
      href: getPermalink('/about'),
    },
    // {
    //   text: 'Contact',
    //   href: getPermalink('/contact'),
    // },
    {
      text: 'Coming Soon or Pre-Launch',
      href: getPermalink('/landing/pre-launch'),
    },
    // {
    //   text: 'Subscription',
    //   href: getPermalink('/landing/subscription'),
    // },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'TODO', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [{ text: 'About', href: '#' }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // footNote: `
  //   <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
