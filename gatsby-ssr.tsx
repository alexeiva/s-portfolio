import type { GatsbySSR } from "gatsby"
import * as React from "react"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="static/fonts/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="recursiveFont"
    />,
  ])
}
