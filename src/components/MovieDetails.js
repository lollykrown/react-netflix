import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function MovieDetails(props) {
  const url = "https://api.themoviedb.org/3/movie/";
  const apiKey = "0180207eb6ef9e35482bc3aa2a2b9672";
  const lang = "en-US";
  const prefix = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  const {
    backdrop_path,
    genre_ids,
    id,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;

  useEffect(() => {
    getMovieById();
  }, []);

  useEffect(() => {
    getCast(id);
  }, []);

  const getMovieById = async () => {
    const detailsUrl = `${url}${props.match.params.id}?api_key=${apiKey}&language=${lang}`;

    console.log(detailsUrl);

    try {
      const response = await axios.get(detailsUrl);
      console.log(response.data);
      setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCast = async (id) =>{
    const castUrl = `${url}${id}/credits?api_key=${apiKey}`;

    try {
      const response = await axios.get(castUrl);
      console.log('cast', response);
      // setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  // genre_ids: (5) [28, 12, 18, 14, 10752]
  // id: 337401
  // original_title: "Mulan"
  // popularity: 2340.511
  // vote_average: 7.7

  return (
    <MovieWrapper>
      <div className="">
        <div className="top-image">
          <img
            className="img-fluid img-bd"
            src={`${prefix}${backdrop_path}`}
            alt="backdrop poster"
          />
        </div>

        <div className="bg">
          <div className="row card mb-3">
            <div className="row no-gutters">
              <div className="col-sm-6 col-lg-2 ">
                <img
                  src={`${prefix}${poster_path}`}
                  className="card-img img-fluid"
                  alt="poster"
                />
              </div>
              <div className="col-sm-6 col-lg-4 card-body pt-0 ml-3">
                <h5 className="card-title ">{title}</h5>
                <p className="card-text">{overview}</p>
                <button type="button" className="btn mr-2">
                  PG-13
                </button>
                <span className="badge badge-info mr-2">Adventure</span>
                <span className="badge badge-danger mr-2">Drama</span>
                <span className="badge badge-success">Thriller</span>
                <p className="card-text">
                  <small>120mins</small>
                </p>
                <p className="card-text">
                  <small className="tt">{release_date}</small>
                </p>
                {/* <app-star className="stars" [rating]="movie.vote_average/2"
                                        (ratingClicked)='onRatingClicked($event)'>
                                </app-star> */}
                <span className="badge btn stars-no">{vote_average / 2}</span>
                <span className="fa fa-heart" title="add to favorites"></span>:
                <span className="fa fa-trash" title="delete"></span>
              </div>
              
              <div className="col-lg-5">
                <div className="cast">
                  <p>Cast</p>
                  <div>
                    <span className="cast-span">
                      <img
                        className="cast-img"
                        src="'https://image.tmdb.org/t/p/w500/' + c?.profile_path"
                        alt="c.name"
                        width="60px"
                        height="60px"
                      />
                      <p className="cast-text">{"name"}</p>
                      <p>{"name"}</p>
                    </span>
                  </div>
                </div>
                <div className="trailer">
                  <p>Trailer</p>
                  <div clclassNameass="trailer-div">
                    <span className="trailer-span">
                      {/* <iframe width="220px" height="140px"
                              src="sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + v.key + '?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com')"/>
                    </iframe> */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div``;
