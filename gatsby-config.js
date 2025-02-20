const path = require('path')
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Architekt Dębica – Projekty Budynków i Wnętrz – K.Projekt`,
    description: `Kompleksowe usługi architektoniczne.`,
    siteUrl: `https://www.kurylo-projekt.pl`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "SyC42GkurfcdaeFOIDBbCWGVQLRceIHQ-h6AsxdB7zE",
      "spaceId": "46t6ogndhnak"
      }
    }, 
    "gatsby-plugin-image", 
    `gatsby-plugin-react-icons`,
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-styled-components", 
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ['G-4ERQ56KEGQ'],
      }
    },
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/images/logo-light.png"
      }
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        resolveModules: [path.join(__dirname, "libs")],
        assets: path.join(__dirname, 'src', 'assets'),
        components: path.join(__dirname, 'src', 'components'),
      },
    }, 
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:100,200, 400,600,700`
        ],
        display: 'swap'
      }
    },
  ]
};