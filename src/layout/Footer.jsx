import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer(props) {
  return (
    <FooterContainer>
      <span>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
      <SocialContainer>
        <SocialIcon href="https://github.com/khyun-kim">
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </SocialIcon>
        <SocialIcon href="mailto:kh030728@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </SocialIcon>
      </SocialContainer>
    </FooterContainer>
  )
}
const FooterContainer = styled.footer`
    text-align:center;
    padding 15px 0;
    background-color:#F2E3EA;
`
const SocialContainer = styled.div`
  display: inline-block;
  padding: 10px;
`
const SocialIcon = styled.a`
  color: black;
  margin: 0 5px;
`
