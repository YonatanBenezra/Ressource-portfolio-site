/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import StyledFooter from "./StyledFooter"
import NavBar from "./navbar"


import "./layout.css"
import "./main.css"

const Layout = ({ children }) => {


  return (
    <>
      <div className="all-content">
        <NavBar />
        <main>{children}</main>
        <StyledFooter />
      </div>
    </>
  )
}


export default Layout
