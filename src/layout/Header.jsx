import React, { Component } from "react"
import styled from "styled-components"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { MenuOpen: false }
    this.handleToggleMenu = e => {
      if (this.state.MenuOpen) {
        this.setState({ ...this.state, MenuOpen: false })
      } else {
        this.setState({ ...this.state, MenuOpen: true })
      }
    }
  }
  render() {
    return (
      <HeaderContainer>
        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <Title to="/">Newbie Developer</Title>
          <MobileButton onClick={this.handleToggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </MobileButton>
        </div>
        <MenuContainer show={this.state.MenuOpen}>
          <MenuBtn to="/blog">POST</MenuBtn>
          <MenuBtn to="/project">PROJECT</MenuBtn>
          <MenuBtn to="/about">ABOUT ME</MenuBtn>
        </MenuContainer>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-around;
  border-bottom: 2px solid #ccc;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`
const ClearLink = styled(Link)`
  text-decoration: none;
  box-shadow: 0;
  color: #aaa;
`
const MobileButton = styled.button`
  width: 48px;
  height: 48px;
  border: 0px;
  background-color: white;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
const Title = styled(ClearLink)`
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  color: #ccc;
  font-weight: 100;
  margin-left: 10px;
  display: inline-block;
  flex: 1;
  @media only screen and (min-width: 768px) {
    flex: 1;
  }
`
const MenuBtn = styled(ClearLink)`
  height: 48px;
  line-height: 48px;
  margin: 0 10px;
  transition: color 0.3s;
  &:hover {
    color: black;
  }
`

const MenuContainer = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex: 1;
  }
`
export default Header
