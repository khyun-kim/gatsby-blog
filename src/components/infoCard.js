import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from './card'
import './css/infocard.css'
import {Document ,Testt} from './Icon.jsx'


const InfoCard = () => {
  const data = useStaticQuery(graphql`
    {
      avatar: file(absolutePath: { regex: "/profile.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Card width="200px" height="260px" padding="0">
      <Document sizeX="0.5" />
    </Card>
  );
}

export default InfoCard;