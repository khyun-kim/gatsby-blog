import React from "react"
import Header from "./Header"
import '../css/layout.css'
import Footer from './Footer'
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div id="layout">
        <Header siteTitle={this.props.title} />
        <main style={{ marginTop: "64px" }}>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
