// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ivan Martinez",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ivangabino.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Ivan Gabino Martinez Rodriguez", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/igmr/website/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/igmr/website/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Ivan Martinez",
        logo: {
          alt: "avatar",
          src: "img/avatar.svg",
        },
        items: [
          /*
          {
            type: "docSidebar",
            sidebarId: "databaseSidebar",
            position: "left",
            label: "🗃️ Base de datos",
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          */
          {
            href: "https://github.com/igmr/website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "🚀 Sitio web",
            items: [
              {
                label: "Inicio",
                to: "/",
              },
            ],
          },
          {
            title: "🌎 Social",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/igmr",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@igmr_",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/igmr/",
              },
            ],
          },
          {
            title: "⚒️ Herramientas",
            items: [
              {
                label: "Docusaurus",
                href: "https://docusaurus.io/",
              },
              {
                label: "Canvas",
                href: "https://www.canva.com/es_mx",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ivan Gabino`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
