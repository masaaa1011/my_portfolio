import * as React from "react"
import { Link } from "gatsby"
import { ImageFormat, StaticImage } from "gatsby-plugin-image"

import Layout from '../components/share/layout/layout'

const IndexPage: React.FC = () => (
<>
  <Layout>
    <h1>This is Gatsby Sample Page</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
    />
    <p>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link><br/>
        <Link to="/samples/samplePage/">Go to "Sample Page"</Link><br/>
        <Link to="/samples/samplePageChildGraphql/">Go to graphql sample page</Link>
    </p>
  </Layout>
  </>
)

export default IndexPage
