import React from "react";

import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PostItem from "../PostItem"

const CardContainer = styled.div`padding:20px`;

export default function RecentlyPosts({ recentlyPosts }) {
  if (recentlyPosts.length === 0) {
    return (
      <CardContainer>
        <Typography variant="h2">등록된 포스트가 없어요.</Typography>
      </CardContainer>
    )
  }
  return (
    <CardContainer>
      <h1>최근 포스트</h1>
      <Grid container spacing={2}>
        {recentlyPosts.map((value,index) => {
          return (
            <Grid key={index} item xs={12} sm={3}>
              <PostItem post={value}/>
            </Grid>)
        })}
      </Grid>
    </CardContainer>
  )
}
