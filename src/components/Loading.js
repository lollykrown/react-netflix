import React from 'react';
import styled from "styled-components";

function Loading() {
    return (
        <Loader className="d-flex justify-content-center">
           <div className="">
                <h1 className="display-3 my-4">Loading...</h1>
                <img className="my-4" src={"loading_min.gif"} alt="loader" width="500" height="400"/>
           </div>
        </Loader>
    );
}

export default Loading;

const Loader = styled.div`
width:100%;
/* loader css */
#logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fill 0.5s ease infinite forwards 3.5s;
}
#logo path:nth-child(0) {
    stroke-dasharray: 6201px;
    stroke-dashoffset: 6201px;
    animation: line-anim 2s ease forwards 0.3s;
}
#logo path:nth-child(1) {
    stroke-dasharray: 535px;
    stroke-dashoffset: 535px;
    animation: line-anim 2s ease forwards;
}

#logo path:nth-child(2) {
    stroke-dasharray: 59px;
    stroke-dashoffset: 59px;
    animation: line-anim 2s ease forwards 0.3s;
}



@keyframes line-anim {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes fill {
    from {
        fill: transparent;
    }

    to {
        fill: white;
    }
}
`;
