/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const BioPresenter = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          selfIntroduce
        }
      }
    }
  `)

  const { author, selfIntroduce } = data.site.siteMetadata
  return (
    <BioContainer>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: 0,
          Width: "150px",
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p
        style={{
          fontWeight: `700`,
          textTransform: `uppercase`,
        }}
      >
        {author}
      </p>
      <Description>{selfIntroduce}</Description>
    </BioContainer>
  )
}
const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
`
const Description = styled.p`
  text-align: center;
  padding: 10px;
`

export default BioPresenter
