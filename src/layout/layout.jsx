import React from "react"
import Header from "./Header"
import styled, { createGlobalStyle } from "styled-components"
import Footer from "./Footer"

import Container from "@material-ui/core/Container"
const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Do+Hyeon|Nanum+Gothic&display=swap');

  *{
    font-family: 'Nanum Gothic', sans-serif;
  }

  body {
    padding:0px;
    margin:0px;
  }
`
const Layout = props => {
  return (
    <React.Fragment>
      <GlobalStyled />
      <RootContainer>
        <Header title={props.title} />
        <ContentContainer>{props.children}</ContentContainer>
        <Footer />
      </RootContainer>
    </React.Fragment>
  )
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 0;
`
const ContentContainer = styled.div`
  background-color: white;
  padding: 0;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  flex: 1;
  margin-top: 48px;
`

export default Layout
