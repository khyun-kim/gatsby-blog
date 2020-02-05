import React from "react"
import Header from "./Header"
import './css/layout.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div id="layout">
        <Header siteTitle={this.props.title} />

        <main style={{marginTop:"64px"}}>{children}</main>

        <footer>
          <span>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
          <div className="social">
            <a href="https://github.com/khyun-kim">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
