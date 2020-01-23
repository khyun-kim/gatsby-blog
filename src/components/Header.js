import React, { Component } from "react"
import { Link } from "gatsby"
import "./css/Header.css"
import Hamburger from "./Hamburger"

export default class Header extends Component {
  state = {
    menuisActive: false,
  }

  handleClick = () => {
    console.log(this.state.menuisActive)
    this.setState(state => ({ menuisActive: !state.menuisActive }))
  }

  render(props) {
    return (
      <div id="Header">
        <h1>{this.props.title}</h1>
        <div className="menu" onClick={this.handleClick}>
          <Hamburger />
        </div>
        <nav className={this.state.menuisActive ? "open" :"close"} >
          <Link className="menuitem" 
          activeClassName="active" 
          to="/" 
          style={{boxShadow:"none"}}>
            Home
          </Link>
          <Link className="menuitem" 
          activeClassName="active" 
          to="/blog"
          style={{boxShadow:"none"}}>
            blog
          </Link>
        </nav>
      </div>
    )
  }
}
