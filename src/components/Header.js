import React from "react"
import { Link } from "gatsby"

export default function Header() {
    return (
        <div>
        <Link to="/">
            Home
        </Link>
        <Link to="/blog">
            blog
        </Link>
        </div>
    )
}