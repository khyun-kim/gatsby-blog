import React from "react"
import styled from "styled-components"

import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"

import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import "../css/markdown.css"

class ProjectPostTemplete extends React.Component {
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
        <ArticleContainer>
          <section>
            <Title variant="h4">{post.frontmatter.title}</Title>
            <Date>~ {post.frontmatter.date} ~</Date>
          </section>
          <hr />
          <Description>{post.frontmatter.description}</Description>
          <div className="markdownPost">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <br />
          <hr />
          <br />
          <div style={{ margin: "0 1rem" }}>
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </ArticleContainer>

        <nav>
          <PaginationList>
            <li>
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
          </PaginationList>
        </nav>
      </Layout>
    )
  }
}
const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 50px 20px;
`
const Title = styled(Typography)`
  text-align: center;
`
const ArticleContainer = styled.article`
  width: 100%;
  margin: 0;
  padding: 10px;
  padding-top: 128px;
`

const Date = styled.p`
  display: block;
  text-align: center;
  font-style: italic;
  font-size: 0.8rem;
  color: #777;
  margin: 40px;
`
const Description = styled.h4`
  text-align: center;
  font-weight: 100;
  font-style: italic;
  margin: 40px 0;
  color: #555;
`

export default ProjectPostTemplete

export const pageQuery = graphql`
  query projectPostBySlug($slug: String!) {
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
