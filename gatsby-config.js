const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Association National des Financiers`,
    description: `Association National des Financiers.`,
    author: `@siemah`,
    lang: 'fr-FR',
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
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
