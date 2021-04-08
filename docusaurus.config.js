/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Project Duck',
  tagline: 'Something between a technical, infinitely flying duck living in the wild and an ostrich ramming its head into the ground.',
  url: 'https://your-docusaurus-test-site.com',
  //src: "img/duck_logo.png",
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ArzelaAscoIi', // Usually your GitHub org/user name.
  projectName: 'UAVDocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Duck',
      logo: {
        alt: 'Duck logo',
        src: 'img/duck_logo.png',
      },
      items: [
        {
          to: '/docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{ to: 'blog', label: 'Blog', position: 'left' },
        { to: 'aboutme', label: 'About Me', position: 'left' },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/ArzelaAscoIi/UAVDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/k_hermn',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/kgherr/',
            },
            {
              label: 'Discord',
              href: '/asdfa',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ArzelaAscoIi',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
            {
              label: 'Data Policy',
              href: 'https://opensource.facebook.com/legal/data-policy/',
            },
            {
              label: 'Cookie Policy',
              href: 'https://opensource.facebook.com/legal/cookie-policy/',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ArzelaAscoIi/UAVDocs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ArzelaAscoIi/UAVDocs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
