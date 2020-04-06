import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

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
        <Container>
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
            <Button to="/about">About Me</Button>
          </WelcomeSection>
        </Container>
        <Container>
          <Bio id="index-aside" />
        </Container>
        <RecentlyPosts recentlyPosts={recentlyPosts} />
      </Layout>
    )
  }
}
const Container = styled.div`
  max-height: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
`

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
const Button = styled(Link)`
  background-color: #0275d8;
  color: white;
  text-decoration: none;
  padding: 15px;
  border-radius: 10px;
  text-shadow: 0 0 2px white;
  &:hover {
    background-color: #1386e9;
  }
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
