import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Movie extends Component {

  render() {
// backdrop_path: "/xl5oCFLVMo4d4Pgxvrf8Jmc2IlA.jpg"
// genre_ids: (5) [28, 12, 18, 14, 10752]
// id: 337401
// original_language: "en"
// original_title: "Mulan"
// overview: "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential."
// popularity: 2340.511
// poster_path: "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"
// release_date: "2020-09-04"
// title: "Mulan"
// vote_average: 7.7
  const {backdrop_path, genre_ids, id, overview, poster_path, release_date, title, vote_average } = this.props.movie;

  const prefix = this.props.prefix
  
    return (
      <MovieWrapper className="card col-md-4 col-lg-2" onClick={()=>this.props.handleDetail(id)}>
          <Link to="/details">
          <div className="">
            <img src={`${prefix}${poster_path}`} className="card-img img-fluid" alt="poster"/>            
            <div className="card-body p-0 mb-0">
              <div className="title my-1" title={title}>{title}</div>
            </div>
          </div>
        </Link >
          <div className="bot">
          <p className="r-date text-muted">{release_date}</p>
          {/* <span className="fa fa-heart-o">&#9825;</span> */}
          <span className="fa fa-heart" ></span>
        </div>
      </MovieWrapper>
    );
  }
}

const MovieWrapper = styled.div`
.r-date{
  float: left;
  text-decoration: none;
}

.fa-heart, fa-heart-o {
  float:right;
  color: var(--mainRed);
  transition: all 0.25s ease-in-out;
}
.fa-heart:hover {
  font-size: 1.25rem;
}
.card-image{
  width:250; 
  height:300;
}
.title {
  font-weight: 600;
  font-size: 1.2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;  
  color: var(--mainRed);
}
.figure-img {
  border: 1rem solid #fff;
  border-radius: 10px;
}
.bot{
  margin-bottom: -1.25rem
}
`;
