import React from 'react';
import { Link } from 'gatsby';
import "../css/postListItem.css";
import Card from './card'
export default function PostListItem({post ,mobile}) {
    const title = post.frontmatter.title;
    const imageSource = post.frontmatter.image.childImageSharp.fluid.src;
    const link = post.fields.slug;
    const mobileFlag = mobile;
    return (
        <Card width={mobileFlag ? "80%":"260px"} height="200px" padding="0" >
            <Link to={link} className="no-decorate-link">
                <figure className="blog-list-item-thumbnail">
                    <img src={imageSource} alt="thumnail"></img>
                </figure>
                <h3 className="single-line-text" style={{padding:"0 10px",height:"50px",lineHeight:"50px",margin:"0"}}>{title}</h3>
                <h2 className= "hoverbox">READ</h2>
            </Link>
        </Card>
    );
}