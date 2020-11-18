import React from 'react'
import { Link } from 'gatsby'
import SiteLogo from "../../assets/images/site-logo"

const Navbar = class extends React.Component {
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
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="site-logo-link" to={`/`}>
              <SiteLogo />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
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
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="box is-center navbar-start">
              <Link className="box is-display navbar-item" to="/">
                ホーム
              </Link>
              <Link className="box is-display navbar-item" to="/about">
                わたしたち
              </Link>
              <Link className="box is-display navbar-item" to="/work">
                しごと
              </Link>
              <Link className="box is-display navbar-item" to="/blog">
                日々のこと
              </Link>
              <Link className="box is-display navbar-item" to="/contact">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar