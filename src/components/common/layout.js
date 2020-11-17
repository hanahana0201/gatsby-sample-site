import React from "react"

import Header from "./header"
import Footer from "./footer"

// import "./layout.css"
import "../../assets/scss/project.scss"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => (
  <div>
    <Header />

    {children}

    <Footer />
  </div>
)