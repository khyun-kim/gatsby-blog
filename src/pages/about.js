import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteSelfIntroduce = data.site.siteMetadata.selfIntroduce;
    const siteAuthor = data.site.siteMetadata.author;
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About me" />
        <section>
          <Image
            fixed={data.avatar.childImageSharp.fixed}

            style={{
              marginBottom: 0,
              Width: "150px", 
              borderRadius: `100%`,
            }}

            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <p>{siteAuthor}</p>
          <p>{siteSelfIntroduce}</p>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        selfIntroduce
      }
    }
    
  }
`
