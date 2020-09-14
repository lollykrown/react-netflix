import React from 'react';
import styled from "styled-components";

function Loading(props) {
    const logo = document.querySelectorAll('#logo path');
    console.log(logo);

    for (let i =0; i<logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
    }
    console.log(props)
    return (
        <Loader className="container">
           <div className="row">
              {/* <div className="col-10 mx-auto text-center text-title
              text-capitalize pt-5 white"> */}
                <h1 className="display-3 mx-auto">Loading...</h1>
                <div >
                    <svg id="logo" width="342" height="246" viewBox="0 0 514 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M502.593 150.163H113.409L487.224 81.1905C490.129 80.6541 492.58 79.4025 494.042 77.7166C495.503 76.028 495.851 74.0413 495.009 72.1908L475.447 29.1789C467.631 11.9996 442.517 0 414.374 0C408.443 0 402.534 0.536407 396.804 1.59219L45.8294 66.3499C29.5963 69.3441 16.1438 76.2181 7.94033 85.7003C-0.258646 95.1825 -2.18362 106.101 2.51742 116.437L21.6291 158.459V331.565C21.6291 353.861 50.1071 372 85.1088 372H222.183C228.484 372 233.591 368.747 233.591 364.734C233.591 360.721 228.484 357.469 222.183 357.469H85.1132C62.6863 357.469 44.4436 345.849 44.4436 331.565V232.69H102.884H102.91H102.933H192.266H192.293H192.319H281.653H281.679H281.706H371.039H371.066H371.088H491.185V331.565C491.185 345.849 472.943 357.469 450.516 357.469H313.441C307.145 357.469 302.034 360.721 302.034 364.734C302.034 368.747 307.145 372 313.441 372H450.516C485.522 372 514 353.861 514 331.565V157.428C514 153.415 508.893 150.163 502.593 150.163ZM301.446 218.159L349.914 164.694H412.952L364.489 218.159H301.446ZM212.059 218.159L260.527 164.694H323.565L275.102 218.159H212.059ZM122.677 218.159L171.14 164.694H234.183L185.716 218.159H122.677ZM165.089 124.1L83.9279 74.45L144.739 63.2308C145.166 63.6281 145.665 64.0028 146.236 64.3519L227.397 114.002L166.586 125.221C166.158 124.824 165.655 124.447 165.089 124.1ZM317.946 32.6698L399.107 82.3201L338.297 93.5392C337.869 93.1419 337.37 92.7644 336.8 92.4182L255.639 42.7679L316.449 31.5487C316.877 31.946 317.376 32.3207 317.946 32.6698ZM232.089 48.5122L313.25 98.1597L252.439 109.382C252.011 108.984 251.512 108.607 250.942 108.261L169.781 58.6103L230.592 47.3912C231.024 47.7857 231.523 48.1631 232.089 48.5122ZM403.153 15.5501C406.816 14.8747 410.59 14.5312 414.374 14.5312C432.425 14.5312 448.524 22.2169 453.533 33.2232L469.922 69.2533L424.154 77.6968C423.722 77.2994 423.223 76.9248 422.653 76.5757L341.496 26.9282L403.153 15.5501ZM27.9253 92.7105C33.1834 86.6284 41.7968 82.2236 52.1792 80.3079L58.8809 79.0704C59.3132 79.4678 59.8122 79.8452 60.3782 80.1915L141.539 129.842L40.8209 148.426L24.4319 112.396C21.4241 105.786 22.6673 98.7955 27.9253 92.7105ZM44.4436 164.694H144.796L96.3333 218.159H44.4436V164.694ZM390.833 218.159L439.296 164.694H491.185V218.159H390.833Z" fill="#FF001F"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M346.692 294.34C346.692 291.743 344.517 289.345 340.988 288.048L240.769 251.195C237.24 249.898 232.891 249.898 229.362 251.195C225.833 252.492 223.658 254.89 223.658 257.487V331.193C223.658 333.787 225.833 336.186 229.362 337.483C231.126 338.133 233.096 338.459 235.065 338.459C237.035 338.459 239.004 338.133 240.769 337.483L340.988 300.632C344.517 299.335 346.692 296.937 346.692 294.34ZM246.473 318.609V270.071L312.47 294.34L246.473 318.609Z" fill="#FF001F"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M267.812 357.469C261.529 357.469 256.405 360.733 256.405 364.734C256.405 368.736 261.529 372 267.812 372C274.1 372 279.22 368.736 279.22 364.734C279.22 360.733 274.1 357.469 267.812 357.469Z" fill="#FF001F"/>
                    </svg>

                </div>

              {/* </div> */}
           </div>
        </Loader>
    );
}

export default Loading;

const Loader = styled.div`
/* loader css */
#logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fill 0.5s ease infinite forwards 3.5s;
}

#logo path:nth-child(1) {
    stroke-dasharray: 59px;
    stroke-dashoffset: 54px;
    animation: line-anim 2s ease forwards;
}

#logo path:nth-child(2) {
    stroke-dasharray: 245px;
    stroke-dashoffset: 245px;
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
