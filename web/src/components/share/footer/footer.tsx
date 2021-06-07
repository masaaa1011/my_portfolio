import * as React from 'react'
import { PageProps, Link , graphql } from 'gatsby'
import FooterProps from './footerProps'
import FooterState from './footerState'

const Footer: React.FC = () => (
  <footer> © {new Date().getFullYear()}, Built with
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

export default Footer
