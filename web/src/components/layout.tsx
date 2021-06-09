import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, PageProps } from "gatsby"

import "./layout.css"
import Header from "./share/header/header"
import Footer from "./share/footer/footer"

const Layout: React.FC = ({children}) => (
  <>
    <Header></Header>
    <div>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  </>
)

export default Layout
