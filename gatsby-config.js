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
  ],
};
