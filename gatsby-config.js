/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/craft-sekkei`,
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `おいしい食材と食事を探求するサイト`,
    lang: `ja`,
    siteUrl: `http://hanahana0201.xsrv.jp`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/assets/images/bg`,
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ESSENTIALS エッセンシャルズ`,
        short_name: `ESSENTIAL`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.microCMS_API_KEY,
        serviceId: "essentials_blog",
        apis: [
          {
            endpoint: "blog",
          },
          {
            endpoint: "category",
          },
          {
            endpoint: "work",
          },
        ],
      },
    },
  ],
}
