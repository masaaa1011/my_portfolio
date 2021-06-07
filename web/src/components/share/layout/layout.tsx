import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, PageProps } from "gatsby"

import LayoutProps from './layoutProps'
import LayoutState from './layoutState'
import "./layout.css"
import Header from "../header/header"
import Footer from "../footer/footer"

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
