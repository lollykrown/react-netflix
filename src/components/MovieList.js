import React, { useState, useEffect, useContext } from 'react';
import Movie from './Movie'
import axios from 'axios';
import Navbar from '../components/Navbar';
import Loading from './Loading'

import { MovieContext } from "../MovieContext";

export default function MovieList(props) {
  const url = "https://api.themoviedb.org/3/movie/";
  const apiKey = "0180207eb6ef9e35482bc3aa2a2b9672";
  const lang = "en-US";

  const { addMovies, filtered} = useContext(MovieContext)
 
  const [pageTitle, setPageTitle] = useState('')
  const [loading, setLoading] = useState(false)

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
      setPageTitle("Favorite Movies")
    let cachedFav = JSON.parse(localStorage.getItem("movies"));
    addMovies(cachedFav)
    setLoading(false)
    }

    const getMovies = async (ti) => {    
      const movieUrl = `${url}${ti}?api_key=${apiKey}&language=${lang}`;
  
      try {
        const response = await axios.get(movieUrl, { cancelToken: source.token });
        addMovies(response.data.results);
        setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          throw error
        }
      }
    };
    
    getMovies(tit)
    return () => {
      source.cancel()
  }
  }, [props, pageTitle])

  if(loading) {
    return <Loading />
  }

    return (
      <React.Fragment>
      <Navbar/>

      <div className="container-fluid pl-5">
        {(filtered.length < 1 && props.cat === 'favorites')?
          <h2 className="white mt-4 ml-2">You have not made any movie your favorite.</h2>:
        <h2 className="white mt-4">{pageTitle}</h2>}

        <div className="row">
            {filtered.map(movie => {
              return (
                <Movie 
                  cat={props.cat}
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

