import React, { Component } from "react";
// import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

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

          <div className="row vid">
                  <div className="card" >
                      <Link to="/movies'/m.id">
                      <figure className="figure">
                        <img src={`${prefix}${poster_path}`} className="figure-img img-fluid rounded" alt="poster" width="200" height="300"/>
                        <figcaption className="figure-caption" title={title}>{title}</figcaption>
                      </figure>
                    </Link>
                      <div>
                      <p className="r-date"><strong>{release_date}</strong></p>
                      <span className="fa fa-heart-o"></span>
                      <span className="fa fa-heart" ></span>
                    </div>
                  </div>
          </div>
    );
  }
}
