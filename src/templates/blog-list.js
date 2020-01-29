import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Paginator from "../components/paginator"
import PostListItem from "../components/post-list-item"
import "./blog-list.css"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    const paginatorTemp = Array(5).fill().map(((value,index)=>{
      if(index+currentPage-2 > numPages)
        return null;
      if(index+currentPage-2 <= 0)
        return null;
      return index+currentPage-2;
    }));
    
    const PaginatorList = paginatorTemp.filter((el) => {return el != null})

    return (
      <Layout title={siteTitle}>
        <nav id="blog-list">
        {posts.map(({node}) => {
          return <PostListItem key={node.fields.slug} post={node} />;
        })}
        </nav>
        <Paginator paginatorList={PaginatorList}/>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
