import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons"

import "./css/Header.css"
import { Component } from "react"

class Header extends Component {
  state ={
    showMenu:false
  }
  toggleMenu = () =>{
    this.setState({showMenu:!this.state.showMenu})
  }
  
  render() {
    const menuActive = this.state.showMenu ? "is-active":"";
    const iconActive = this.state.showMenu ? faTimes:faBars;
    return (
      <header id="header">
        <div className="titleBar">
          <Link to="/" className="title">{this.props.siteTitle}</Link>
          <div className="menu-container" onClick={this.toggleMenu}>
            <FontAwesomeIcon
              className="menu-icon"
              icon={iconActive}
              size="2x"
            />
          </div>
          <nav className="desktop-nav">
            <ul>
              <li>
                <Link className="desktop-nav-item" activeClassName="is-selected" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="desktop-nav-item" activeClassName="is-selected" to="/blog/">
                  Blog
                </Link>
              </li>

              <li>
                <Link className="desktop-nav-item" activeClassName="is-selected" to="/about/">
                  About me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav className={`toggle-menu-list ${menuActive}`}>
          <ul>
            <li>
              <Link
                className="toggle-menu-list-item"
                activeClassName="is-selected"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="toggle-menu-list-item"
                activeClassName="is-selected"
                to="/blog/"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="toggle-menu-list-item"
                activeClassName="is-selected"
                to="/about/"
              >
                About me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}


export default Header
