import React from 'react'

const Card = (props) => {
    return (
        <div
        style={{boxShadow:"0px 0px 5px rgba(0,0,0,.2)",
        boxSizing:"content-box",
        margin:props.margin,
        padding:props.padding,
        borderRadius:"5px",
        overflow:"hidden",
        width:props.width,
        height:props.height,
        position:"relative",
        }}>
            {props.children}
        </div>
    )
}

Card.defaultProps = {
    width : "auto",
    height : "auto",
    padding : "10px",
    margin: "15px",
}

export default Card;