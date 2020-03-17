import React from 'react';

const fullyContainer = (props) => {

    const fullyContainerStyle = {
        display:"flex",
        flexDirection:"column",
        margin:0,
        padding:0,
        height:"100vh",
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
      }
    return (
        <div style={fullyContainerStyle}>
            {props.children}
        </div>
    );
}

export default fullyContainer;
