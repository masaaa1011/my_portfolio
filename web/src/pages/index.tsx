import * as React from "react"
import { Link } from "gatsby"
import { ImageFormat, StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

import Topics from '../components/contents/topics/topics'
import Works from '../components/contents/works/works'
import Art from '../components/contents/art/art'
import Web from '../components/contents/web/web'
import Contact from '../components/contents/contact/contact'
import SamplePage from '../samples/samplePage'

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
    <div className="contents_wrapper">
      <Topics></Topics>
      <Works></Works>
      <Art></Art>
      <Web></Web>
      <Contact></Contact>
      <p>----------------------sample---------------------------------</p>
        <SamplePage ></SamplePage>
      <p>----------------------sample---------------------------------</p>
    </div>
    <p>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link><br/>
        <Link to="/sample-page-child-graphql/">Go to graphql sample page</Link>
    </p>
  </Layout>
  </>
)

export default IndexPage
