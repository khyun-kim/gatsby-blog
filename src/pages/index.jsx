import React from "react"
import { graphql, Link } from "gatsby"

import Button from '@material-ui/core/Button'

import Bio from "../components/bio"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import RecentlyPosts from "../components/recently-posts"
import "../css/index.css"
import FullyContainer from "../components/fully-container"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    const recentlyPosts = data.allMarkdownRemark.edges;
    const siteDescriptionStyle = {
      fontWeight: "300",
      textShadow: "0 0 2px rgba(0,0,0,.8)",
      fontFamily: 'Nanum Gothic', textAlign: "center",
      padding: "0 10%",
      color: "white",
      marginBottom: "10vh"
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <FullyContainer>
          <picture style={{ overflow: 'hidden', width: "100%" }}>
            <img src="../../code-1920.jpg"
              alt="배경이미지"
              style={{ objectFit: "cover", }}
            />
          </picture>
          <section style={{
            display: "flex", position: "absolute", top: 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "rgba(0,0,0,0.4)",
          }}>
            <h2 style={{ color: "white" }}>{siteTitle}</h2>
            <h3 style={siteDescriptionStyle}>{siteDescription}</h3>
            <Link to="/about"><Button variant="contained" color="primary">About Me</Button></Link>
          </section>
        </FullyContainer>
          <RecentlyPosts recentlyPosts={recentlyPosts} />
        <FullyContainer>
          <Bio id="index-aside" />
        </FullyContainer>
      </Layout>
    )
  }
}

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