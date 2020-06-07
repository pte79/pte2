module.exports = {
  siteMetadata: {
    title: `Pearson Tests of English    `,
    description: `I hate Englist at all! This site uses Gatsby, Docz, ThemeUI and React to build.`,
    author: `@nguyenletan`,
  },
  plugins: [
    `gatsby-theme-docz`,
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pearson Tests of English`,
        short_name: `PTE`,
        start_url: `/`,
        background_color: `#47c1bf`,
        theme_color: `#47c1bf`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
