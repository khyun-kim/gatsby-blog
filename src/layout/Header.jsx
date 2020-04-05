import React, { Component, useState, useEffect } from "react"
import styled from "styled-components"
import useDocumentScrollThrottled from "./useDocumentScrollThrottled"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

const Header = props => {
  // *** scroll event *** //
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShadowHeader, setShouldShadowHeader] = useState(false)

  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMiniumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShadowHeader(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMiniumScrolled)
    }, TIMEOUT_DELAY)
  })
  useEffect(() => {
    console.log(shouldShadowHeader)
    console.log(shouldHideHeader)
  }, [shouldHideHeader, shouldShadowHeader])

  // *** mobile button *** //
  const [menuOpen, setMenuOpen] = useState(false)
  const handleToggleMenu = e => {
    if (menuOpen) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }

  return (
    <HeaderContainer hide={shouldHideHeader} shadow={shouldShadowHeader}>
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <Title to="/">Newbie Developer</Title>
        <MobileButton onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </MobileButton>
      </div>
      <MenuContainer show={menuOpen}>
        <MenuBtn to="/blog">POST</MenuBtn>
        <MenuBtn to="/project">PROJECT</MenuBtn>
        <MenuBtn to="/about">ABOUT ME</MenuBtn>
      </MenuContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  top: ${props => (props.hide ? "-100%" : "0")};
  box-shadow: ${props => (props.shadow ? "0 0 10px rgba(0,0,0,.3)" : "0")};
  transition: top 0.4s;

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
