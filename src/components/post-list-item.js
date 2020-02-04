import React from 'react'
import { Link } from 'gatsby'
import "./css/PostListItem.css"
export default function PostListItem({post}) {
    const title = post.frontmatter.title;
    const date = post.frontmatter.date;
    const description = post.frontmatter.description;
    const imageSource = post.frontmatter.image.childImageSharp.fluid.src

    return (
        <div className="post-list-item">
            <div className="post-list-item-thumnail">
                <img src={imageSource} alt={post.frontmatter.title} />
            </div>
            <div className="post-list-item-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Link to={post.fields.slug} className="post-list-item-button">Read</Link>
        </div>
    );
}