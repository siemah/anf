process.env.NODE_ENV !== "production" && require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `A-N-F`,
    description: `Association National des Financiers.`,
    author: `@siemah`,
    lang: 'fr-FR',
    local: 'fr_FR',
    site_name: 'Association National des Financiers',
    domain: 'https://www.anf-dz.com',
    mapboxApiAccessToken: process.env.MAPBOX_API_ACCESS_TOKEN,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Association-National-Des-Financiers`,
        short_name: `ANF`,
        start_url: `/`,
        background_color: `#1e0c65`,
        theme_color: `#1e0c65`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // add transition when user change pages
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layout`),
      },
    },
    // use wordpress to get the PDF files used on download page
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WORDPRESS_BASEURL,
        protocol: process.env.WORDPRESS_PROTOCOL,
        hostingWPCOM: (process.env.WORDPRESS_WPCOM === false),
        verboseOutput: process.env.WORDPRESS_VERBOSE,
        useACF: process.env.USE_ACF,
        // minimizeDeprecationNotice: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/media",
          "**/tags",
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
