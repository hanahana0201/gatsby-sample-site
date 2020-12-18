import React from "react"

// import Header from "./header"
import Footer from "./footer"
import HeaderLight from "./header-light"

import "../../assets/scss/project.scss"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => (
  <div>
    <HeaderLight />
    <main className="main">
        {children}
    </main>
    <Footer />
  </div>
)