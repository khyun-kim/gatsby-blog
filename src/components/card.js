import React from 'react'

const Card = (props) => {
    return (
        <div className="card" 
        style={{boxShadow:"0px 0px 15px rgba(0,0,0,.2)",
        boxSizing:"content-box",
        margin:"15px",
        padding:"10px",
        borderRadius:"2px"}}>
            {props.children}
        </div>
    )
}

export default Card;