import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "@material-ui/core/Button"

export default function PaginatorPresenter({ paginatorList }) {
  const pages = paginatorList

  return (
    <PageButtonContainer>
      {pages.map(value => {
        return value === 1 ? (
          <PageButton key={value} className="pageButton" to="/blog">
            {value}
          </PageButton>
        ) : (
          <Link key={value} className="pageButton" to={`/blog/${value}`}>
            <Button variant="outlined">a</Button>
          </Link>
        )
      })}
    </PageButtonContainer>
  )
}

const PageButton = styled(Link)`
  text-decoration: none;
  box-shadow: 0;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 10px;
  margin: 5px 0;
  border-radius: 6px;
`
const PageButtonContainer = styled.nav`
  text-align: center;
  margin: 10px;
`
