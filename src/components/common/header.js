import React from 'react'
import { Link } from 'gatsby'
import SiteLogo from "../../assets/images/site-logo"

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <header
        className="section is-header is-fixed"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="header-brand">
            <Link className="site-logo-link" to={`/`}>
              <SiteLogo />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`header-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`header-menu ${this.state.navBarActiveClass}`}
          >
            <div className="box is-center header-start">
              <Link className="box is-display header-item" to="/">
                ホーム
              </Link>
              <Link className="box is-display header-item" to="/about">
                わたしたち
              </Link>
              <Link className="box is-display header-item" to="/work">
                しごと
              </Link>
              <Link className="box is-display header-item" to="/blog">
                日々のこと
              </Link>
              <Link className="box is-display header-item" to="/contact">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header