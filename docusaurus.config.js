// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JumpCloud Technical Writer Portfolio',
  tagline: 'Docs-as-Code, Developer Docs & AI Workflow Optimization',
  favicon: 'img/favicon.ico',

  url: 'https://jumpcloud-docs-portfolio.vercel.app',
  baseUrl: '/',

  organizationName: 'your-github-username', 
  projectName: 'jumpcloud-docs-portfolio',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false, // Completely disables the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JumpCloud Portfolio',
        logo: {
          alt: 'JumpCloud Portfolio Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'portfolioSidebar',
            position: 'left',
            label: 'Portfolio Docs',
          },
          {
            href: 'https://github.com/your-github-username/jumpcloud-docs-portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio Pillars',
            items: [
              {
                label: 'Docs-as-Code & CI/CD',
                to: '/docs/docs-as-code/ci-cd-pipeline',
              },
              {
                label: 'Developer & UX Content',
                to: '/docs/developer-and-ux/scim-api-reference',
              },
              {
                label: 'AI & Workflow Optimization',
                to: '/docs/ai-and-workflow-optimization/system-prompts-library',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/your-github-username/jumpcloud-docs-portfolio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JumpCloud Technical Writing Portfolio. Built with Docusaurus.`,
      },
    }),
};

export default config;
