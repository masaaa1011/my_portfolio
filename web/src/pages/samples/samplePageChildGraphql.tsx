import React from "react"
import { PageProps, graphql } from "gatsby"

type DataProps = {
  site: {
    siteMetadata: {
      key01: string,
      key02: string[],
      key03: {
        childKey01: string,
        childKey02: string,
        childKey03: string,
      }
    }
  }
}

const SamplePageChildGraphql: React.FC<PageProps<DataProps>> = ({data, path}) => (
  <div>
    {path}<br/>
    {data.site.siteMetadata.key01}<br/>
    {data.site.siteMetadata.key03.childKey01}
  </div>
)

export default SamplePageChildGraphql

export const sampleQuery  = graphql`{
    site {
      siteMetadata{
        key01,
        key02,
        key03{
          childKey01,
          childKey02,
          childKey03,
        }
      }
    }
}`
