import React from 'react'
import { Link } from 'gatsby'
import "./css/PostListItem.css"
import Card from './card'
export default function PostListItem({post}) {
    const title = post.frontmatter.title;
    const date = post.frontmatter.date;
    const description = post.frontmatter.description;
    const imageSource = post.frontmatter.image.childImageSharp.fluid.src;
    const link = post.fields.slug;
    return (
        <Card width="200px" height="260px" padding="0" >
            <Link to={link} className="no-decorate-link">
                <figure className="blog-list-item-thumnail">
                    <img src={imageSource}></img>
                </figure>
                <h3 className="single-line-text" style={{padding:"0 10px"}}>{title}</h3>
                <h2 className= "hoverbox">READ</h2>
            </Link>
        </Card>
    );
}