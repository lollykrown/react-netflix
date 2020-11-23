import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import ErrorBoundary from '../ErrorBoundary';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MovieComponent(props) {
  const [isFav, setIsFav] = useState(false)
  const prefix = "https://image.tmdb.org/t/p/w500";  

  const {movie,showErrorCard} = props

  const notify = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }); 

    useEffect(() => {
    const checkIfFav = (id) => {
      let fav = JSON.parse(localStorage.getItem("movies"));
      if(fav){
        const moviee = fav.find((e) => e.id === id);
        if(moviee !== undefined) {
          if(!moviee.isFav){
            setIsFav(false)
          } 
          setIsFav(true);
        } 
      }
    };

    checkIfFav(movie.id);
  },[movie]);

  console.time('add to fav') //check how long it takes for the function to run
  const addToFav = (el) => {
    let movieCache = [];
    if (!localStorage.getItem("movies")) {
      console.log("no movie cached yet");
      el.isFav = true
      movieCache.push(el);
      notify(`${el.title} added to your favorites`)
      localStorage.setItem("movies", JSON.stringify(movieCache));
      const path = props.history.location.pathname
      props.history.push(path)
    } else {
      console.log("merge/update cached data");
      let oldCache = JSON.parse(localStorage.getItem("movies"));
      console.log(oldCache)

      const isthere = oldCache.find((e) => e.id === el.id);
      if (!isthere) {
        el.isFav = true
        oldCache.push(el);
        localStorage.setItem("movies", JSON.stringify(oldCache));
        const path = props.history.location.pathname
        props.history.push(path)
        setIsFav(!isFav)
        notify(`${el.title} added to your favorites`)
      } else {
        notify(`${el.title} is already in your favorites`);
      }
    }
  };
  console.timeEnd('add to fav')

  const deleteFromfav = (el) => {
    const fav = JSON.parse(localStorage.getItem("movies"));
    el.isFav = false;
    const index = fav.findIndex((e) => e.id === el.id);
    const title = fav[index].title;
    console.log(index);
    fav.splice(index, 1);
    notify(`${title} successfully deleted from your favorites`);
    localStorage.removeItem("movies");
    localStorage.setItem("movies", JSON.stringify(fav));
    setIsFav(false)
    const path = props.history.location.pathname
    props.history.push(path)
  };

  const { poster_path, release_date, title } = movie;

  if (showErrorCard) {
    return (
      <div className="rounded overflow-hidden shadow-lg p-6 bg-white">
        <div className="grid grid-cols-4 mb-6">
          <div className="font-bold text-lg col-span-3">
            Error Showing Speaker
          </div>
        </div>
        <div className="mb-6">
          <img src="./dummy-speaker-image.jpg" alt="Placeholder"/>
        </div>
        <div>Contact site owner for resolution.</div>
      </div>
    );
  }

  return (
    <MovieWrapper className="card col-md-4 col-lg-2">
      <Link to={`movie/${movie.id}`}>
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
        <p className="r-date text-muted">{release_date}</p>

        {!isFav ? (
          <span
            className="fa fa-heart"
            title="add to favorites"
            onClick={() => addToFav(movie)}
          ></span>
        ) : (
          <span
            className="fa fa-trash"
            title="delete from favorites"
            onClick={() => deleteFromfav(movie)}
          ></span>
        )}
        <ToastContainer />  
      </div>
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
    transition: all 0.5s ease-in-out;
  }
  .fa-heart:hover,
  .fa-trash:hover {
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

const Movie = React.memo((props) => {
  return (
    <ErrorBoundary
      errorUI={<MovieComponent showErrorCard={true}></MovieComponent>}
    >
      <MovieComponent {...props} />
    </ErrorBoundary>
  );
});

export default withRouter(Movie)