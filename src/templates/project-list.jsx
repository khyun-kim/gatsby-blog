import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layout/layout"
import Paginator from "../components/Paginator"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import "../css/blog-list.css"

import Grid from "@material-ui/core/Grid"

const CardContainer = styled.div`
  padding: 20px;
`

export default class ProjectList extends React.Component {
  state = {
    mobileMode: false,
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }
  resize() {
    let flag = window.innerWidth < 900
    if (this.state.mobileMode !== flag) this.setState({ mobileMode: flag })
  }

  render() {
    const projects = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title
    const { currentPage, numPages } = this.props.pageContext

    const paginatorTemp = Array(5)
      .fill()
      .map((value, index) => {
        if (index + currentPage - 2 > numPages) return null
        if (index + currentPage - 2 <= 0) return null
        return index + currentPage - 2
      })

    const PaginatorList = paginatorTemp.filter(el => {
      return el != null
    })

    return (
      <Layout title={siteTitle}>
        <SEO title="Project" />
        <h1
          style={{
            margin: "32px",
            marginTop: "128px",
            fontSize: "36px",
            textTransform: "uppercase",
          }}
        >
          Posts
        </h1>

        <CardContainer>
          <Grid container spacing={2}>
            {projects.map((value, index) => {
              return (
                <Grid key={index} item xs={12} sm={3}>
                  <PostItem post={value} />
                </Grid>
              )
            })}
          </Grid>
        </CardContainer>
        <Paginator paginatorList={PaginatorList} />
      </Layout>
    )
  }
}

export const projectListQuery = graphql`
  query projectListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { fileAbsolutePath: { regex: "/(project)/.*\\\\md$/" } }
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
