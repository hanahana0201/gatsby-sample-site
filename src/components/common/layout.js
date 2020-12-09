import React from "react"

// import Header from "./header"
import Footer from "./footer"
import Header from "./header"

import "../../assets/scss/project.scss"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => (
  <div>
    <Header />
    <main className="main">
        {children}
    </main>
    <Footer />
  </div>
)