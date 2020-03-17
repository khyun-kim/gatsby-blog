import React from "react"
import Header from "./Header"
import '../css/layout.css'
import Footer from './Footer'

import Container from '@material-ui/core/Container'


class Layout extends React.Component {
  render() {
    const { children } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div id="layout">
        {/* <Header siteTitle={this.props.title} /> */}
        <Header title={this.props.title}/>
        <Container className="containerComponent">
          {children}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Layout
