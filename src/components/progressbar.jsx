import React from 'react'

const ProgressBar = (props) => {
    const temp = props.value;
    return (
        <div style={{width:"100%",borderRadius:"15px",backgroundColor:"#EACAD5",position:"relative"}}>
            <span style={{display:"block",height:"12px",borderRadius:"6px", width:temp+"%", backgroundColor:"#9AB4D4",textAlign:"center",fontSize:"8px   ",lineHeight:"12px"}}>{props.value}%</span>
        </div>

    )
}

ProgressBar.defaultProps = {
    value:70
}

export default ProgressBar;