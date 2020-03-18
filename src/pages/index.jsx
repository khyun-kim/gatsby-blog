import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Button from "@material-ui/core/Button"

import Bio from "../components/Bio"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import RecentlyPosts from "../components/RecentlyPosts"
import FullyContainer from "../components/FullyContainer"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const recentlyPosts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <FullyContainer>
          <BackgroundImage>
            <img
              src="../../code-1920.jpg"
              alt="배경이미지"
              style={{ objectFit: "cover" }}
            />
          </BackgroundImage>
          <WelcomeSection>
            <h2 style={{ color: "white" }}>{siteTitle}</h2>
            <Description>{siteDescription}</Description>
            <Link to="/about">
              <Button variant="contained" color="primary">
                About Me
              </Button>
            </Link>
          </WelcomeSection>
        </FullyContainer>
        <RecentlyPosts recentlyPosts={recentlyPosts} />
        <FullyContainer>
          <Bio id="index-aside" />
        </FullyContainer>
      </Layout>
    )
  }
}
const WelcomeSection = styled.section`
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
`
const Description = styled.h3`
  font-weight: 300;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  font-family: "Nanum Gothic";
  text-align: center;
  padding: 0 10%;
  color: white;
  margin-bottom: 10vh;
`
const BackgroundImage = styled.picture`
  overflow: hidden;
  width: 100%;
`

export default BlogIndex

export const recentlyPostQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
