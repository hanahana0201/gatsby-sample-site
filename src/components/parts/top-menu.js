import React from "react"
import { Link } from "gatsby"
import SiteLogo from "../../assets/images/site-logo"

export default (props) => (
  <div>
    <div className={ "box is-absolute" }>
      <div className={ `box is-top-menu  is-center ${props.class}` }>
        <Link className={ `box is-display header-item is-top ${props.class} `} to="/">
          <SiteLogo class={ `is-top ${props.class}` }/>
        </Link>
        <Link className={ `box is-display header-item is-top ${props.class} `} to="/about">
          わたしたち
        </Link>
        <Link className={ `box is-display header-item is-top ${props.class} `} to="/work">
          しごと
        </Link>
        <Link className={ `box is-display header-item is-top ${props.class} `} to="/blog">
          日々のこと
        </Link>
        <Link className={ `box is-display header-item is-top ${props.class} `} to="/contact">
          お問い合わせ
        </Link>
      </div>
    </div>
  </div>
)