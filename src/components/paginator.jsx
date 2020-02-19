import React from 'react'
import {Link} from 'gatsby'
import '../css/paginator.css'
export default function Paginator({paginatorList}) {
    const pages = paginatorList;

    return (
        <nav className="pageButtonList">
            {pages.map((value) => {
                return value === 1 ?
                (<Link key={value} className="pageButton" to="/blog">{value}</Link>) : 
                (<Link key={value} className="pageButton" to={`/blog/${value}`}>{value}</Link>);
            })}
        </nav>
    )
}