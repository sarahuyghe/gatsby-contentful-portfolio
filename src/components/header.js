import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <>
      <header>
        <nav className={headerStyles.site_header}>
          <div href="index.php" className="site_header__logo-link">
            <p className={headerStyles.header_logo}>
              <Link to="/">Sara Huyghe</Link>
            </p>
          </div>
          <ul className="site-header__nav">
            <li>
              <Link to="/" activeClassName="test">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="test">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
