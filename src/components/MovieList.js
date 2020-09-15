import React, { useState, useEffect, useContext } from 'react';
import Movie from './Movie'
import Loading from './Loading'
import Navbar from './Navbar'

import { MovieContext } from "../MovieContext";

import axios from 'axios';

export default function MovieList(props) {

  const { moviesList, filteredMovies, url, apiKey, lang } = useContext(MovieContext)
  const [movies, setMovies] = moviesList
  const [filtered] = filteredMovies
 
  const [pageTitle, setPageTitle] = useState('')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const getMovies = async () => {
      // const movieslistUrl =
      //   "https://api.themoviedb.org/4/list/?page=1&api_key=0180207eb6ef9e35482bc3aa2a2b9672";
      // const searchUrl = "https://api.themoviedb.org/3/search/movie";
  
      let tit;
      if (props.cat === "popular") {
        tit = "popular";
        setPageTitle("Popular Movies");
      } else if (props.cat === "top") {
        tit = "top_rated";
        setPageTitle("Top Rated Movies");
      } else if (props.cat === "now") {
        tit = "now_playing";
        setPageTitle("Now playing");
      }
    
      const movieUrl = `${url}${tit}?api_key=${apiKey}&language=${lang}`;
  
      if (props.cat === "favorites") {
          let cachedFav = JSON.parse(localStorage.getItem("movies"));
          // setFavMovies(prev => [...prev, cachedFav]);
          setMovies(cachedFav)
          setLoading(false)
        }
  
      try {
        const response = await axios.get(movieUrl);
        setMovies(response.data.results);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
    setLoading(true)
    getMovies()
  },[props.cat, url, apiKey, lang, setMovies])

  if(loading) {
    return <Loading />
  }

    return (
      <React.Fragment>
      <Navbar mov={movies}/>

      <div className="container-fluid pl-5">
        <h2 className="white mt-4">{pageTitle}</h2>
        <div className="row">
            {filtered.map(movie => {
              return (
                <Movie 
                  // details={this.handleDetails}                  
                  key={movie.id}
                  movie={movie}
                />
              );
            })}
        </div>
      </div>
      </React.Fragment>
    );
}

