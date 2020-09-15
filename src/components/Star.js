import React from "react";
import styled from "styled-components";

export default function Star({ rating }) {
  // const rat = (rating * 75) / 5;
  return (
    <StarContainer className="crop" width={rating} title={rating}>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
    </StarContainer>
  );
}

const StarContainer = styled.button`
  cursor: pointer;
  border: none !important;
  margin-left: 0.5rem;
  background-color: transparent;
  .crop {
    overflow: hidden;
  }
  .fa-star {
    color: var(--mainRed);
  }
`;
