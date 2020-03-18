import React from 'react';

const fullyContainer = (props) => {
    const background_color = props.backgroundColor || "#fff";
    const fullyContainerStyle = {
        display:"flex",
        flexDirection:"column",
        margin:0,
        padding:0,
        height:"100vh",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        backgroundColor:background_color
    }
    return (
        <div style={fullyContainerStyle}>
            {props.children}
        </div>
    );
}

export default fullyContainer;
