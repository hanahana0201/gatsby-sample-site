import React from "react"

// import Header from "./header"
import Footer from "./footer"
import Navbar from "../parts/navbar"

import "../../assets/scss/project.scss"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => (
  <div>
    <Navbar />
    <div className="section is-main">
      <div className="inner">
        {children}
      </div>
    </div>
    <Footer />
  </div>
)