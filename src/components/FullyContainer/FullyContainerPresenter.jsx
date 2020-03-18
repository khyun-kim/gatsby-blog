import React from 'react';
import styled from "styled-components";


const FullyContainerPresenter = (props) => {
    const {backgroundColor} = props;
    return (
        <FullyContainer backgroundColor={backgroundColor}>
            {props.children}
        </FullyContainer>
    );
}

const FullyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin:0;
    padding:0;
    width: 100%;
    height:100vh;
    justify-content:center;
    align-items:center;
    position: relative;
    backgroundColor:${props=>props.backgroundColor ? props.backgroundColor : "#fff" };
`

export default FullyContainerPresenter;
