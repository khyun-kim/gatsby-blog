import React from "react"
import styled from "styled-components"

const ProgressBarPresenter = props => {
  const percent = props.value

  return (
    <ProgressBarContainer>
      <ProgressBar percent={percent}>{percent}%</ProgressBar>
    </ProgressBarContainer>
  )
}

const ProgressBarContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: #eacad5;
  position: reletive;
`
const ProgressBar = styled.span`
  display: block;
  height: 12px;
  border-radius: 6px;
  width: ${props => (props.percent ? `${props.percent}%` : `0%`)};
  background-color: #9ab4d4;
  text-align: center;
  font-size: 8px;
  line-height: 12px;
`

ProgressBar.defaultProps = {
  value: 70,
}

export default ProgressBarPresenter
