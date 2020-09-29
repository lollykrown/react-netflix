import React, { useState, useEffect, useContext } from 'react';
import Movie from './Movie'
import axios from 'axios';

// import Loading from './Loading'

import { MovieContext } from "../MovieContext";


export default function MovieList(props) {

  const { addMovies, filtered, url, apiKey, lang } = useContext(MovieContext)
 
  const [pageTitle, setPageTitle] = useState('')
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    const source = axios.CancelToken.source() 
    
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

    if (props.cat === "favorites") {
    let cachedFav = JSON.parse(localStorage.getItem("movies"));
    addMovies(cachedFav)
    // setLoading(false)
    }

    // setLoading(true)
    const getMovies = async () => {
      // const movieslistUrl =
      //   "https://api.themoviedb.org/4/list/?page=1&api_key=0180207eb6ef9e35482bc3aa2a2b9672";
      // const searchUrl = "https://api.themoviedb.org/3/search/movie";
    
      const movieUrl = `${url}${tit}?api_key=${apiKey}&language=${lang}`;
  
      try {
        const response = await axios.get(movieUrl, { cancelToken: source.token });
        addMovies(response.data.results);
        // setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          // handle error
          throw error
        }
      }
    };
    
    getMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      source.cancel()
  }
  }, [props, pageTitle])

  // if(loading) {
  //   return <Loading />
  // }

    return (
      <React.Fragment>
      <div className="container-fluid pl-5">
        <h2 className="white mt-4">{pageTitle}</h2>
        <div className="row">
            {filtered.map(movie => {
              return (
                <Movie 
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

