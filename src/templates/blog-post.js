import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/css/markdown.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1 style={{textAlign:"center",margin:"80px 0"}}>
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                display: `block`,
                textAlign:"center",
                fontStyle:"italic",
                fontSize:"0.8rem",
                color:"#777",
                margin:"40px"
              }}
            >
              ~ {post.frontmatter.date} ~
            </p>
          </header>
          <hr/>
          <div className="markdownPost">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <hr
            style={{
            }}
          />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin:`50px 20px`
            }}
          >
            <li style={{width:`50%`,overflow:`hidden`,position:`relative`,}}>
              {previous && (
                <Link style={{
                  display:`inline-block`,textDecoration:`none`,boxShadow:`none`,
                  fontWeight:`700`,color:`#fff`,background:`#999`,overflow:`hidden`,
                  padding:`8px`,whiteSpace:`nowrap`,borderRadius:`50%`,
                  width:`1.5rem`,height:`1.5rem`,lineHeight:`1.5rem`,textAlign:`center`,
                }} to={previous.fields.slug} rel="prev">
                  ← 
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link style={{
                  display:`inline-block`,textDecoration:`none`,boxShadow:`none`,
                  fontWeight:`700`,color:`#fff`,background:`#999`,overflow:`hidden`,
                  padding:`8px`,whiteSpace:`nowrap`,borderRadius:`50%`,
                  width:`1.5rem`,height:`1.5rem`,lineHeight:`1.5rem`,textAlign:`center`,
                }} to={next.fields.slug} rel="next"> →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
