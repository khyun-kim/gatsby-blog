import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardAction from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import '../css/RecentlyPosts.css';
import { Link } from "gatsby"
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
  console.log(recentlyPosts);
  return (
    <div>
    {recentlyPosts.map((value)=>{
      return (
      <Card className="CardRoot">
        <CardHeader title={value.node.frontmatter.title} subheader={value.node.frontmatter.date}/>
        <CardAction>
          <Button>
            Read More
          </Button>
        </CardAction>
      </Card>)
    })}
    </div>
  )
}
