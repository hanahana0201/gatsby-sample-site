import React from 'react'
import { Link } from 'gatsby'

import SiteLogo from "../../assets/images/site-logo"
import Navbar from "../parts/navbar"

export default () => (
  <header className="section is-header" id="header">
    <div className="inner is-padding-right-sm is-padding-left-md">
      <div className="box is-padding-top-safe">
        <div className="grid is-middle is-between">
          <div className="column">
            <div className="box is-flex is-bottom">
              <div className="box is-margin-right-sm">
                  <Link className="site-logo-link" to={`/`}>
                    <SiteLogo />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)