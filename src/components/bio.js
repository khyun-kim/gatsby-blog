/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Bio = () => {
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
          description
        }
      }
    }
  `)

  const { author , description } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexDirection:`column`,
        justifyContent:`center`,
        alignItems:`center`,
        maxWidth:`700px`,
        margin:`0 auto`
      }}
    >
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
        fontWeight:`700`,
        textTransform:`uppercase`,
      }}>{author}</p>
      <p style={{textAlign:`center`}}>
        {description}
      </p>
    </div>
  )
}

export default Bio
