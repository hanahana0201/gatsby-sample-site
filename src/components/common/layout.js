import React from "react"

import Header from "./header"
import Footer from "./footer"
import Navbar from "../parts/navbar"

// import "./layout.css"
import "../../assets/scss/project.scss"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => (
  <div>
    <Navbar />
    <Header />

    {children}

    <Footer />
  </div>
)