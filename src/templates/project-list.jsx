import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/layout"
import Paginator from "../components/paginator"
import PostListItem from "../components/post-list-item"
import SEO from "../components/seo"
import "../css/blog-list.css"

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardAction from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default class ProjectList extends React.Component {
  
  state = {
    mobileMode : false
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    let flag = window.innerWidth < 900;
    if(this.state.mobileMode !== flag)
      this.setState({mobileMode:flag})
    }

  render() {
    const projects = this.props.data.allMarkdownRemark.edges;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { currentPage, numPages } = this.props.pageContext;

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
        <SEO title ="Project"/>
        <h1 style={{margin:"32px",marginTop:"128px",fontSize:"36px",textTransform:"uppercase"}}>Posts</h1>
        
      <div style={{padding:"20px"}}>
      <Grid container spacing={2}>
        {projects.map((value) => {
          console.log(value.node.fields.slug);
          return (
            <Grid item xs={12} sm={3}>
              <Card className="CardRoot">
                <CardMedia className="CardMediaImage" image={value.node.frontmatter.image.childImageSharp.fluid.src}/>
                <CardContent>
                  <Typography noWrap="true" variant="h5" component="h2">
                    {value.node.frontmatter.title}
                  </Typography>
                  <CardHeader subheader={value.node.frontmatter.date} />
                </CardContent>
                <CardAction>
                  <Link to={value.node.fields.slug}>
                    <Button>
                      Read More
                    </Button>
                  </Link>
                </CardAction>
              </Card>
            </Grid>)
        })}
      </Grid>
      </div>
        <Paginator paginatorList={PaginatorList}/>
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
      sort: { fields: [frontmatter___date], order: DESC },
      limit: $limit,
      skip: $skip,
      filter: {fileAbsolutePath: {regex: "/(project)/.*\\\\md$/"}}
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
