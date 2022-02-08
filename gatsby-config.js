module.exports = {
  siteMetadata: {
      title: 'Sarah GHP Art Site',
      siteUrl: 'https://art.sarahghp.com/',
      author: '@sarahgp',

  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-pages',
      },
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    // This is vital for referring to relative images in markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/contact-sheets`,
        name: 'contact-sheet-images',
        },
    },
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/valie-i`,
        name: 'pages-images-valie',
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/img`,
        name: 'markdown-images',
      },
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};