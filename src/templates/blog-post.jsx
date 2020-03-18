import React from "react"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import Button from "@material-ui/core/Button"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import "../css/markdown.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const previous = this.props.pageContext.next
    const next = this.props.pageContext.previous
    const disqusShortname = "khyun-kim"
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article style={{ width: "100%", margin: 0 }}>
          <section>
            <h1
              style={{
                textAlign: "center",
                margin: "80px 0",
                fontWeight: "500",
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                display: `block`,
                textAlign: "center",
                fontStyle: "italic",
                fontSize: "0.8rem",
                color: "#777",
                margin: "40px",
              }}
            >
              ~ {post.frontmatter.date} ~
            </p>
          </section>
          <hr />

          <h4
            style={{
              textAlign: "center",
              fontWeight: "100",
              fontStyle: "italic",
              margin: "40px 0",
              color: "#555",
            }}
          >
            {post.frontmatter.description}
          </h4>
          <div className="markdownPost">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <hr style={{}} />
          <div style={{ margin: "0 1rem" }}>
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: `50px 20px`,
            }}
          >
            <li
              style={{ width: `50%`, overflow: `hidden`, position: `relative` }}
            >
              {previous ? (
                <Link to={previous.fields.slug} rel="prev">
                  <Button variant="contained" color="primary">
                    Prev
                  </Button>
                </Link>
              ) : (
                <Button variant="outlined" disabled>
                  Prev
                </Button>
              )}
            </li>
            <li>
              {next ? (
                <Link to={next.fields.slug} rel="prev">
                  <Button variant="contained" color="primary">
                    Next
                  </Button>
                </Link>
              ) : (
                <Button variant="outlined" disabled>
                  Next
                </Button>
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
  query blogPostBySlug($slug: String!) {
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
