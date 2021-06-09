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
            <StaticImage src="../../../images/logo.png" className="img" quality={100}
              formats={["auto", "webp", "avif"]} alt="logo" sizes="20" />
          </Link>
        </div>
      </div>
      <nav className="area_nav_header">
        <ul className="list_nav_header">
          <li>
            <Link to="/" className="img">
              <StaticImage src="../../../images/contact/f_logo_RGB-Black_58.png" className="img" quality={100}
                formats={["auto", "webp", "avif"]} alt="logo" sizes="20" />
            </Link>
          </li>
          <li>
          <Link to="/" className="img">
              <StaticImage src="../../../images/contact/glyph-logo_May2016.png" className="img" quality={100}
                formats={["auto", "webp", "avif"]} alt="logo" sizes="20" />
            </Link>          </li>
          <li>
          <Link to="/" className="img">
              <StaticImage src="../../../images/contact/2021 Twitter logo - black.png" className="img" quality={100}
                formats={["auto", "webp", "avif"]} alt="logo" sizes="20" />
            </Link>          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
