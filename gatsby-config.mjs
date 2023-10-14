// gatsby-config.mjs
import remarkGfm from "remark-gfm"
const config = {
  plugins: [
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
  ],
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Alexei Vanyashin — Portrolio`,
    // Default title of the page
    siteTitleAlt: `Personal website of Alexei Vanyashin`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Alexei Vanyashin Typography`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `http://110design.ru`,
    // Used for SEO
    siteDescription: `Alexei Vanyashin is a type designer, and educator.`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Set the default "lang" attribute on "html" element
    siteLanguage: `en`,
    // Twitter Handle
    author: `@avanyashin`,
  },
};

export default config;