import React from "react"

import Header from "./header"
import Footer from "./footer"

import "bootstrap/dist/css/bootstrap.min.css"
import layoutStyles from "./layout.module.scss"
import "./../styles/index.scss"

const Layout = props => {
  return (
    <>
      <Header />
      <main className={layoutStyles.main}>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
