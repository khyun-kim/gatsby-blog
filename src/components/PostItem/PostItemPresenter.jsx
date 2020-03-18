import React from "react"

import styled from "styled-components"

import { Link } from "gatsby"

import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardAction from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

const CardMediaImage = styled(CardMedia)`
  height: 200px;
`
const CardRoot = styled(Card)`
  height: 380px;
`

export default function PostListItem({ post }) {
  if (!post) {
    return
  }
  return (
    <CardRoot>
      <CardMediaImage
        image={post.node.frontmatter.image.childImageSharp.fluid.src}
      />
      <CardContent>
        <Typography noWrap={true} variant="h5" component="h2">
          {post.node.frontmatter.title}
        </Typography>
        <CardHeader subheader={post.node.frontmatter.date} />
      </CardContent>
      <CardAction>
        <Link to={post.node.fields.slug}>
          <Button>Read More</Button>
        </Link>
      </CardAction>
    </CardRoot>
  )
}
