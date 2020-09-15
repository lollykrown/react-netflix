import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MovieContext } from "../MovieContext";

export default function Movie({movie, prefix}) {
  const value = useContext(MovieContext)
  console.log('con',value)
  // useEffect(() => {
  //   checkIfFav(movie)
  // }, [])
  const addToFav = (el) => {
    let movieCache = [];
    if (!localStorage.getItem("movies")) {
      console.log("no movie cached yet");
      movieCache.push(el);
      alert(`${el.title} added to your favorites`)
      localStorage.setItem("movies", JSON.stringify(movieCache));
    } else {
      console.log("merge/update cached data");
      let oldCache = JSON.parse(localStorage.getItem("movies"));
      const isthere = oldCache.find(e => e.id === el.id)
      if(!isthere){
      oldCache.push(el)
      localStorage.setItem("movies", JSON.stringify(oldCache));
      alert(`${el.title} added to your favorites`)
      } else {
        alert(`${el.title} is already in your favorites`)

      }
    }
  };
 const deleteFromfav = (el) => {
    const fav = JSON.parse(localStorage.getItem('movies'));
    const index = fav.findIndex(e => e.id === el.id)
    const title = fav[index].title
    console.log(index)
    fav.splice(index, 1);
    alert(title, 'successfully deleted');
    localStorage.removeItem('movies');
    localStorage.setItem('movies', JSON.stringify(fav));
  }

    const {
      poster_path,
      release_date,
      title,
    } = movie;
    
    return (
      <MovieWrapper className="card col-md-4 col-lg-2">
        {/* <Link to={`movie/${movie.id}`} detail={movie}>
          <div className="">
            <img
              src={`${prefix}${poster_path}`}
              className="card-img img-fluid"
              alt="poster"
            />
            <div className="card-body p-0 mb-0">
              <div className="title my-1" title={title}>
                {title}
              </div>
            </div>
          </div>
        </Link>
        <div className="bot">
          <p className="r-date text-muted">{release_date}</p> */}

          {/* {!isFav?          
          <span
            className="fa fa-heart"
            title="add to favorites"
            onClick={() => addToFav(movie)}
          ></span>:
          <span
            className="fa fa-trash"
            title="delete from favorites"
            onClick={() => deleteFromfav(movie)}
          ></span>
          } */}
        {/* </div> */}
      </MovieWrapper>
    );
}

const MovieWrapper = styled.div`
  .r-date {
    float: left;
    text-decoration: none;
  }

  .fa-heart,
  .fa-trash {
    float: right;
    color: var(--mainRed);
    transition: all 0.25s ease-in-out;
  }
  .fa-heart:hover, .fa-trash:hover {
    font-size: 1.35rem;
  }
  .card-image {
    width: 250;
    height: 300;
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
  .bot {
    margin-bottom: -1.25rem;
  }
`;
