import React from 'react'

const ProgressBar = (props) => {
    const temp = props.value;
    return (
        <div style={{width:"100%",borderRadius:"15px",backgroundColor:"#EACAD5",position:"relative"}}>
            <span style={{display:"block",height:"24px",borderRadius:"12px", width:temp+"%", backgroundColor:"#9AB4D4",textAlign:"right",lineHeight:"24px",border:"2px solid #708098"}}>{props.value}%</span>
        </div>

    )
}

ProgressBar.defaultProps = {
    value:70
}

export default ProgressBar;