import type { GatsbySSR } from "gatsby"
import * as React from "react"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="static/fonts/Rubik-VariableFont_wght.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="rubikFont"
    />,
    <link
      rel="preload"
      href="static/fonts/Rubik-Italic-VariableFont_wght.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="rubikFont"
    />,
  ])
}
