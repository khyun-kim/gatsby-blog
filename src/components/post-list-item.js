import React from 'react'
import { Link } from 'gatsby'
import "./css/PostListItem.css"
export default function PostListItem({post}) {
    const title = post.frontmatter.title;
    const date = post.frontmatter.date;
    const description = post.frontmatter.description;
    return (
        <div className="post-list-item">
            <Link style={{display:`block`,textDecoration:`none`,boxShadow:`none`,color:`#111`,
            margin:`3%`,}} to={post.fields.slug}>
                <h1>{title}</h1>
                <p style={{textAlign:`right`}}><span role="img" aria-label="calander">📅</span>{date}</p>
                <p>{description}</p>
            </Link>
        </div>
    );
}