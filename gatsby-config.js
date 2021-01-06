/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/craft-sekkei`,
  siteMetadata: {
    title: `N'sクラフト設計室`,
    description: `N’ｓクラフト設計室は、春日井市にある夫婦二人の小さな設計事務所です。”丁寧な家づくり”　”心地よい空間づくり”　を大切に設計しています。魅力的な「暮らしづくり」のお手伝いをしてまいります。`,
    lang: `ja`,
    siteUrl: `https://craft-sekkei.com`,
    locale: `ja_JP`,
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
        name: `N'sクラフト設計室`,
        short_name: `N'sクラフト設計室`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#333333`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.microCMS_API_KEY,
        serviceId: "craftsekkei",
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
