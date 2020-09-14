import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie() {
  // addToFav = (el) => {
  //   let movieCache = [];
  //   if (!localStorage.getItem("movies")) {
  //     console.log("no movie cached yet");
  //     movieCache.push(el);
  //     alert(`${el.title} added to your favorites`)
  //     localStorage.setItem("movies", JSON.stringify(movieCache));
  //   } else {
  //     console.log("merge/update cached data");
  //     let oldCache = JSON.parse(localStorage.getItem("movies"));
  //     const isthere = oldCache.find(e => e.id === el.id)
  //     if(!isthere){
  //     oldCache.push(el)
  //     localStorage.setItem("movies", JSON.stringify(oldCache));
  //     alert(`${el.title} added to your favorites`)
  //     } else {
  //       alert(`${el.title} is already in your favorites`)

  //     }
  //   }
  // };
  // deleteFromfav = (el) => {
  //   const fav = JSON.parse(localStorage.getItem('movies'));
  //   const index = fav.findIndex(e => e.id === el.id)
  //   const title = fav[index].title
  //   console.log(index)
  //   fav.splice(index, 1);
  //   alert(title, 'successfully deleted');
  //   localStorage.removeItem('movies');
  //   localStorage.setItem('movies', JSON.stringify(fav));
  // }

  // handleDetails = (el) => {
  //   this.setState(() => {
  //     return { movieDetails: el };
  //   });
  // };

    const {
      // backdrop_path,
      // genre_ids,
      // id,
      // overview,
      poster_path,
      release_date,
      title,
      // vote_average,
    } = this.props.mo;
    console.log('movie', this.props)

    const prefix = this.props.prefix;
    return (
      <MovieWrapper className="card col-md-4 col-lg-2">
        <Link to="/details" >
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

          {!this.props.fav?          
          <span
            className="fa fa-heart"
            title="add to favorites"
            onClick={() => this.addToFav(this.props.movie)}
          ></span>:
          <span
            className="fa fa-trash"
            title="delete"
            onClick={() => this.deleteFromfav(this.props.movie)}
          ></span>
          }
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
