import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import '../css/about.css'
import ProgressBar from '../components/progressbar'

import Layout from "../layout/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteSelfIntroduce = data.site.siteMetadata.selfIntroduce;
    const siteAuthor = data.site.siteMetadata.author;
    const languages = data.site.siteMetadata.aboutMeData.programLangs;
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About me" />
        <section className="aboutSection">
          <article style={{flex: "1"}}>
            <div style={{textAlign:"center"}}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              style={{
                Width: "150px",
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            </div>
          </article>

          <article style={{ flex: "1",margin:"50px 50px"}}>
            <h2 style={{textTransform:"uppercase"}}>{siteAuthor}</h2>
            <p>{siteSelfIntroduce}</p>
          </article>
        </section>
              {languages.map((value)=>{
                return (
                  <section className="aboutSection" style={{backgroundColor:"#F2E3EA"}}>
                    <ScrollAnimationArticle>
                      <h2 style={{textAlign:"center"}}>{value.category}</h2>
                      <p>{value.description}</p>
                    </ScrollAnimationArticle>
                    <ScrollAnimationArticle>
                      {value.langs.map((v)=>{
                        return(
                          <div>
                          <p style={{marginLeft:"10px"}}><strong>{v.name}</strong></p>
                          <ProgressBar value={v.level}/>
                          </div>
                        );
                      })}
                    </ScrollAnimationArticle>
                  </section>
                );
              })}
      </Layout>
    )
  }
}

const ScrollAnimationArticle = ({children}) => {
  return (
    <article data-sal="slide-up"
    data-sal-duration="600"
    data-sal-easing="ease"
    style={{flex:1,margin:"50px 50px"}} >
      {children}
    </article>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        selfIntroduce
        aboutMeData {
          programLangs {
            category
            description
            langs {
              name
              level
            }
          }
        }
      }
    }
    
  }
`
