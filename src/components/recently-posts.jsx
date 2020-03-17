import React from "react";

import { Link } from "gatsby"

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardAction from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import '../css/RecentlyPosts.css';

export default function RecentlyPosts({ recentlyPosts }) {
  if (recentlyPosts.length === 0) {
    return (
      <Card>
        <h3 style={{ textAlign: "center", margin: "0px" }}>
          <span role="img" aria-label="Oops">😓</span>등록된 포스트가 없어요.
        </h3>
      </Card>
    )
  }
  return (
    <div style={{ padding: 20 }}>
      <h1>최근 포스트</h1>
      <Grid container spacing={2}>
        {recentlyPosts.map((value) => {
          console.log(value)
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
  )
}
