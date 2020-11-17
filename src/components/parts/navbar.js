import React from 'react'
import { Link } from 'gatsby'

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
              <Link className="box is-display navbar-item" to="/about">
                About
              </Link>
              <Link className="box is-display navbar-item" to="/products">
                Products
              </Link>
              <Link className="box is-display navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="box is-display navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="box is-display navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            {/*<div className="navbar-end has-text-centered">*/}
            {/*  <a*/}
            {/*    className="navbar-item"*/}
            {/*    href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    <span className="icon">*/}
            {/*      <img src={github} alt="Github" />*/}
            {/*    </span>*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar