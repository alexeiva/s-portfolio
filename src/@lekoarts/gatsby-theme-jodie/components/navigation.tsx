/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import { replaceSlashes } from "@lekoarts/gatsby-theme-jodie/src/utils/replace-slashes"
import useJodieConfig from "@lekoarts/gatsby-theme-jodie/src/hooks/use-jodie-config"

const Navigation = ({ bg }: { bg: string }) => {
  const { navigation, basePath } = useJodieConfig()

  return (
    <nav
      aria-label="Primary Navigation"
      sx={{
        a: {
          color: readableColor(bg),
          textDecoration: `none`,
          fontSize: [1, 2, 3, 4],
          marginLeft: [2, 3, 3, 0],
          "&:active": {
            fontStyle: "normal",
          },
          "&:hover,&:focus": {
            color: readableColor(bg, `grayDark`, `primaryHover`, false),
            //fontFamily: "Helvetica",
            // fontStyle: "italic",
            // fontVariationSettings: "italic",
            // class: "italic",
            // backgroundColor: 'yellow',
            // fontStyle: "italic",
          },
        },
        ul: {
          margin: 0,
          padding: 0,
          li: {
            listStyle: `none`,
            display: [`inline-block`, `inline-block`, `inline-block`, `block`],
          },
        },
        variant: `navigation`,
      }}
    >
      <ul>
        {navigation.map((navItem) => (
          <li key={navItem.slug}>
            <Link sx={(t) => ({ ...t.styles?.a })} to={replaceSlashes(`/${basePath}/${navItem.slug}`)}>
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
