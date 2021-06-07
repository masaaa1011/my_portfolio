import * as React from 'react'
import { PageProps, Link , graphql } from 'gatsby'
import HeaderProps from './headerProps'
import HeaderState from './headerState'

const Header: React.FC<PageProps<HeaderProps, HeaderState>> = () => (
    <header>
        <div>
            <h1>
                <Link to="/"  style={{ color: `white`, textDecoration: `none` }}/>
            </h1>
        </div>
    </header>
)

export default Header