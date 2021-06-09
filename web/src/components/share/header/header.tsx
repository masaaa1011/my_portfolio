import * as React from 'react'
import {  Link } from 'gatsby'
import '../../layout'
import { StaticImage } from 'gatsby-plugin-image'

const Header: React.FC = () => (
  <header className="header">
    <div className="container">
      <div className="area_logo_header">
        <div className="logo">
          <Link to="/" className="img">
            <StaticImage src="../../../images/contact/logo.png" className="img" quality={100}
              formats={["auto", "webp", "avif"]} alt="logo" sizes="20" />
          </Link>
        </div>
      </div>
      <nav className="area_nav_header">
        <ul className="list_nav_header">
          <li>
            <a href="">Link1</a>
          </li>
          <li>
            <a href="">Link2</a>
          </li>
          <li>
            <a className="btn_contact" href="">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
