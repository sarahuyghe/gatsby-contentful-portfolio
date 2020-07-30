import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <>
      <header>
        <nav class={headerStyles.site_header}>
          <div href="index.php" class="site_header__logo-link">
            <p class="site-header__logo">
              <Link to="/">Sara Huyghe</Link>
              {/* <span class="d-none">Sara Huyghe</span> */}
            </p>
          </div>
          <ul class="site-header__nav">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
