const path = require(`path`);
const {
  siteTitle,
  siteDescription,
  siteUrl,
  siteLanguage,
  siteImage,
} = require("./config/seo.json");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
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
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_TOKEN_ID,
        dataset: process.env.SANITY_STUDIO_API_DATASET,

        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN_READ,

        // graphqlUrl: "--tag whatshop-web",
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",

        watchMode: true,
      },
    },
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
    // "gatsby-plugin-offline",
    "gatsby-plugin-remove-serviceworker",
  ],
};
