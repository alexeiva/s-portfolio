import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.mjs
    siteTitle: `Alexei Vanyashin Typography`,
    siteTitleAlt: `Portfolio of Alexei Vanyashin`,
    siteHeadline: `Alexei Vanyashin — Graphic and Type Design`,
    siteUrl: `http://110design.ru`,
    siteDescription: `Personal portfolio of Alexei Vanyashin.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@alexeiva`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        mdx: false,
        homepagePageLimit: -1,
        homepageProjectLimit: 12,
        navigation: [
          { name: `Projects`, slug: `/projects` },
          { name: `Music`, slug: `/music` },
          { name: `Services`, slug: `/services` },
          { name: `Resources`, slug: `/resources` },
          { name: `About`, slug: `/about` },
          { name: `Contact`, slug: `/contact` },
        ],
      },
    },
  /*
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            remarkGfm,
          ],
        },
      },
    },
  */

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // Add GitHub Flavored Markdown (GFM) support
          //`remarkGfm`,
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
              // as we assume you'll use gatsby-remark-images to handle
              // images in markdown as it automatically creates responsive
              // versions of images.
              //
              // If you'd like to not use gatsby-remark-images and just copy your
              // original images to the public directory, set
              // `ignoreFileExtensions` to an empty array.
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  
    /*
    `gatsby-plugin-sharp`,
    // gatsby video
    /*
    {
      resolve: `gatsby-remark-videos`,
      options: {
        pipelines: [
          {
            name: 'vp9',
            transcode: chain =>
              chain
                .videoCodec('libvpx-vp9')
                .noAudio()
                .outputOptions(['-crf 20', '-b:v 0']),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: 'webm',
          },
          {
            name: 'h264',
            transcode: chain =>
              chain
                .videoCodec('libx264')
                .noAudio()
                .addOption('-profile:v', 'main')
                .addOption('-pix_fmt', 'yuv420p')
                .outputOptions(['-movflags faststart'])
                .videoBitrate('1000k'),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: 'mp4',
          },
        ],
      }
    },
    */
    // plugin to copy linked files
    {
      resolve: `gatsby-remark-copy-linked-files`,
      options: {},
    },
    // Added new SVG Plugin
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    // Added new GIF Plugin
    //{
    //    resolve: "gatsby-transformer-remark",
    //    options: {
    //        plugins: ["gatsby-remark-gifs"],
    //    },
    //},
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alexeiva`,
        short_name: `alexeiva`,
        description: `Portfolio of Alexei Vanyashin, type design and typography.`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
