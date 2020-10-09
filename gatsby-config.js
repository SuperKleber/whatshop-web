const path = require(`path`);
const {
  siteTitle,
  siteDescription,
  siteUrl,
  siteLanguage,
  siteImage,
} = require("./config/seo.json");

module.exports = {
  siteMetadata: {
    siteTitle,
    siteDescription,
    siteUrl,
    siteLanguage,
    siteImage,
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img/`,
      },
    },
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WhatShop.digital`,
        short_name: `WhatShop`,
        start_url: `/`,
        background_color: `#2a2f36`,
        theme_color: `#00ffec`,
        display: `standalone`,
        icon: `static/favicon/favicon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
