import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentlyPosts from "../components/recently-posts"
import "../components/css/index.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    const recentlyPosts = data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home"/>
        <h2 style={{padding:"10%",margin:"0px",color:"white",backgroundColor:"#708098",textShadow:"0 0 2px rgba(0,0,0,.8)"}}>{siteDescription}</h2>

        <div id="index-contents">
            <Bio id="index-aside"/>
          <div id="index-main-contents">
            <RecentlyPosts id="index-main-contents" recentlyPosts={recentlyPosts}/>
          </div>
        </div>
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
          }
        }
      }
    }
  }
`