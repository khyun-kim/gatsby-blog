import React from "react"
import Card from "./card"
import { Link } from "gatsby"

export default function RecentlyPosts({ recentlyPosts }) {
  console.log(recentlyPosts)
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
    <Card>
      <div style={{
          display:"flex",
          flexDirection:"column"
      }}>
        <h3
          style={{
            margin: "0",
            padding: "10px 0",
            borderBottom: "1px solid #d1d1d",
          }}
        >
          최근 포스트
        </h3>
        {recentlyPosts.map(value => (
          <div key={value.node.fields.slug} 
          style={{
            display:"flex",
          }}><Link to={value.node.fields.slug}
          style={{
            textDecoration:"none",
            boxShadow:"none",
            paddingLeft:"10px",
            flex:"1",
            lineHeight:"30px",
            fontSize:"1rem",
            // ... 말줄임 ...
            whiteSpace:`nowrap`,
            overflow:`hidden`,
            textOverflow:`ellipsis`
          }}>{value.node.frontmatter.title}</Link><span role="img" aria-label="calander">📅</span><span style={{fontStyle:"italic",lineHeight:"30px",fontSize:"0.8rem"}}>{value.node.frontmatter.date}</span></div>
        ))}
        <Link
          to="/blog"
          style={{
            boxShadow: "none",
            alignSelf:"flex-end",
            backgroundColor:"#d1d1d1",
            fontWeight:"800",
            color:"#fff",
            fontSize:"0.7rem",
            padding:"1px 10px",
            borderRadius:"50vh",
            textDecoration:"none"
          }}
        >
          더보기
        </Link>
      </div>
    </Card>
  )
}
