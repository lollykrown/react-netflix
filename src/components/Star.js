import React from "react";
import styled from "styled-components";
import StarRatings from 'react-star-ratings';

export default function Star({ rating }) {
  // const rat = (rating * 75) / 5;
  return (
    <StarContainer width={rating.toString()} title={rating.toString()}>
        {/* {[...Array(Math.round(rating)).keys()].map(n => {
          return (
            <span className="fa fa-star"/>
          );
        })} */}
       <StarRatings
          className="st"
          rating={rating}
          starRatedColor="var(--mainRed)"
          starDimension="20px"
          starSpacing="0"
          // ignoreInlineStyles={true}
          // changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />
    </StarContainer>
  );
}

const StarContainer = styled.div`
  cursor: pointer;
  display:inline;
  border: none !important;
  margin-left: 0.35rem;
  background-color: transparent;

  // overflow: hidden;
  // .fa-star {
  //   color: var(--mainRed);
  // }
`;
