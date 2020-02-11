import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <span>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
                <div className="social">
                    <a href="https://github.com/khyun-kim">
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                    </a>
                    <a href="mailto:kh030728@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="1x" />
                    </a>
                </div>
            </footer>
        )
    }
}
