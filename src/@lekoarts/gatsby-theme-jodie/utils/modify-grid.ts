import type { IGatsbyImageData } from "gatsby-plugin-image"

interface IGridItem {
  slug: string
  title: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  //__typename: "MdxProject" | "MdxPage"
  __typename: "MdxProject"
}

export function shuffle(originalData: IGridItem[], seed = 1) {
  const data = [...originalData]
  let m = data.length
  let t
  let i

  while (m) {
    i = Math.floor(random(seed) * m--)
    t = data[m]
    data[m] = data[i]
    data[i] = t
    // eslint-disable-next-line no-param-reassign
    ++seed
  }

  return data
}

const modifyGrid = (data: Array<IGridItem>): Array<IGridItem> => data

export default modifyGrid;




