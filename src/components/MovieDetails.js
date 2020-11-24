import React from "react";
import styled from "styled-components";
import moment from "moment";
import Star from "./Star";

import Loading from './Loading'
import { useRequestMovie } from "../useRequest";
import { REQUEST_STATUS } from '../reducer';

function MovieDetails(props) {
  const prefix = "https://image.tmdb.org/t/p/w500";

  const movieId = props.match.params.id

  const { movie, cast, status, trailers, error } = useRequestMovie(movieId);

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasError = status === REQUEST_STATUS.ERROR;

  // genre_ids: (5) [28, 12, 18, 14, 10752]

  const {
    backdrop_path,
    // genre_ids,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;

  const ratings = vote_average / 2;
  const date = moment(release_date).format("MMMM YYYY");

  if (isLoading) {
    return <Loading />
  }

  return (
    <React.Fragment>
      {hasError && (
        <div className="container mt-4">
          <h2 className="white mt-4 ml-2">
            Loading error...
            <br /><br />
            <b>ERROR: {error.message}</b>
          </h2>
        </div>
      )}
      <MovieWrapper>
        <div className="parent">
          <div className="top-image">
            {backdrop_path ?
              (<img
                className="img-fluid img-bd"
                src={`${prefix}${backdrop_path}`}
                alt="backdrop poster"
              />) :
              (<h2 className="px-5 py-5 white">You need to connect to the internet</h2>)}

          </div>

          <div className="bg">
            <div className="row card ">
              <div className="row no-gutters">
                <div className="col-sm-5 col-lg-2 ">
                    <img
                      src={`${prefix}${poster_path}`}
                      className="card-img img-fluid"
                      alt="poster"
                    />
                </div>
                <div className="col-sm-6 col-lg-4 card-body pt-0 ml-3">
                  <h4 className="card-title ">{title}</h4>
                  <p className="card-text">{overview}</p>
                  <button type="button" className="btn mr-2 mt-2">
                    PG-13
                </button>
                  <span className="badge badge-info mr-2">Adventure</span>
                  <span className="badge badge-danger mr-2">Drama</span>
                  <span className="badge badge-success">Thriller</span>
                  <p className="card-text mt-3">
                    <small className="mr-3">{date}</small>
                    <span className="badge btn stars-no">
                      {ratings.toString()}
                    </span>
                    <Star rating={ratings} />
                  </p>
                </div>
                {success && (
                  <div className="col-lg-5 ml-3">
                    <p className="card-title">Cast</p>
                    <div className="cast row">
                      {cast.map((c) => {
                        return c.profile_path &&
                          (<div key={c.id} className="">
                            <div className="cast-span col-lg-2" title={c.name}>
                              <img
                                className="cast-img"
                                src={`${prefix}${c.profile_path}`}
                                alt={c.name}
                                width="60px"
                                height="60px"
                              />
                              <p className="cast-text">{c.name}</p>
                            </div>
                          </div>)

                      })}
                    </div>
                  </div>)}
              </div>
            </div>
            {success && (
              <div className="row card">
                <h3 className="card-title">Trailers</h3>
                <div className="trailer-div">
                  {trailers.map((t) => {
                    return t.key && (
                      <div key={t.id}>
                        <span className="trailer-span">
                          <iframe
                            title={movie.title}
                            width="350px"
                            height="200px"
                            src={`https://www.youtube.com/embed/${t.key}?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com`}
                          ></iframe>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>)}
          </div>
        </div>
      </MovieWrapper>
    </React.Fragment>
  );
}

const MovieWrapper = styled.div`
  .fa-heart,
  .fa-trash {
    color: var(--mainRed) !important;
    transition: all 0.25s ease-in-out;
  }
  .fa-heart:hover,
  .fa-trash:hover {
    font-size: 1.35rem;
  }
`;


export default MovieDetails;