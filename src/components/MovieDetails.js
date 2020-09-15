import React, { useState, useEffect, useContext, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import Star from './Star'
import Loading from './Loading'

import { MovieContext } from "../MovieContext";

export default function MovieDetails(props) {
  const { prefix, url, apiKey, lang } = useContext(MovieContext)

  const [movie, setMovie] = useState({});
  // const [loading, setLoading] = useState(false)

  const getMovieById = async () => {
    const detailsUrl = `${url}${props.match.params.id}?api_key=${apiKey}&language=${lang}`;

    console.log(detailsUrl);

    try {
      const response = await axios.get(detailsUrl);
      setMovie(response.data);
      // setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // setLoading(true)
    getMovieById();
  },[]);

  const [cast, setCast] = useState([]);

  const getCast = async () => {
    const castUrl = `${url}${props.match.params.id}/credits?api_key=${apiKey}`;

    try {
      const response = await axios.get(castUrl);
      setCast(response.data.cast);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCast();
  });

  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const getTrailers = async () => {
      const trailersUrl = `${url}${props.match.params.id}$/videos?api_key=${apiKey}&language=${lang}`;
  
      try {
        const response = await axios.get(trailersUrl);
        setTrailers(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getTrailers();
  });

  // if(loading) {
  //   return <Loading />
  // }

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

  return (
    <MovieWrapper>
      <div className="parent">
        <div className="top-image">
          <img
            className="img-fluid img-bd"
            src={`${prefix}${backdrop_path}`}
            alt="backdrop poster"
          />
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
                  <span className="badge btn stars-no">{ratings}</span>
                  <Star rating={ratings}/>
                </p>
                <span className="fa fa-heart" title="add to favorites"></span>
                <span className="fa fa-trash" title="delete"></span>
              </div>

              <div className="col-lg-5 ml-3">
                <p className="card-title">Cast</p>
                <div className="cast row">
                  {cast.map(c => {
                    if (c.profile_path) {
                      return (
                        <div key={c.id} className="">
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
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="row card">
            <h3 className="card-title">Trailers</h3>
            <div className="trailer-div">
              {trailers.map(t => {
                if (t.key) {
                  return (
                    <div key={movie.id}>
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
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </MovieWrapper>
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
