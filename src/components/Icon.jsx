import React from 'react';

function Document(props) {
    var scale = props.sizeX ? props.sizeX : 1;
    var color = props.color ? props.color : "black";
    return (
        <svg aria-hidden="true" focusable="false" width={`${200*scale}`} height={`${220*scale}`} fill={color} xmlns="http://www.w3.org/2000/svg">
            <rect width={`${200*scale}`} height={`${15*scale}`} rx={`${10*scale}`} />
            <rect y={`${205*scale}`} width={`${200*scale}`} height={`${15*scale}`} rx={`${10*scale}`} />
            <rect width={`${15*scale}`} height={`${220*scale}`} rx={`${10*scale}`} />
            <rect x={`${185*scale}`} width={`${15*scale}`} height={`${220*scale}`} rx={`${10*scale}`} />

            <rect x={`${30*scale}`} y={`${30*scale}`} width={`${60*scale}`} height={`${60*scale}`} rx={`${5*scale}`} />
            <rect x={`${100*scale}`} y={`${35*scale}`} width={`${70*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${100*scale}`} y={`${50*scale}`} width={`${70*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${100*scale}`} y={`${65*scale}`} width={`${70*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${100*scale}`} y={`${80*scale}`} width={`${70*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${100*scale}`} y={`${80*scale}`} width={`${70*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${30*scale}`} y={`${105*scale}`} width={`${140*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${30*scale}`} y={`${120*scale}`} width={`${140*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${30*scale}`} y={`${135*scale}`} width={`${140*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${30*scale}`} y={`${150*scale}`} width={`${140*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${30*scale}`} y={`${165*scale}`} width={`${140*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
            <rect x={`${30*scale}`} y={`${180*scale}`} width={`${140*scale}`} height={`${8*scale}`} rx={`${5*scale}`} />
        </svg>

    );
}

function Testt() {
    return (
        <h1>test</h1>
    )
}

export {Document, Testt}