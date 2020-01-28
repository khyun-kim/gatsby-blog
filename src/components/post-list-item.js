import React from 'react'
import { Link } from 'gatsby'
import "./css/PostListItem.css"
export default function PostListItem({post}) {
    const title = post.frontmatter.title;
    const date = post.frontmatter.date;
    const description = post.frontmatter.description;
    const imageSource = post.frontmatter.image.childImageSharp.fluid.src

    console.log(post);
    return (
        <div className="post-list-item">
            <img src={imageSource} style={{width:`240px`,height:`180px`}} alt={post.frontmatter.title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={post.fields.slug} className="post-list-item-button">Read</Link>
        </div>
    );
}