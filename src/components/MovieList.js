import React, { useState, useEffect } from 'react';
import Movie from './Movie'
import axios from 'axios';
import { MovieConsumer } from '../context'

export default function MovieList(props) {
  const [movies, setMovies] = useState([]);
  const [pageTitle, setPageTitle] = useState('')

  const prefix = "https://image.tmdb.org/t/p/w500";

  const [isFav, setIsFav] = useState(false)

  useEffect(() =>{
    getMovies()
  }, [])

  const getMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/";
    // const movieslistUrl =
    //   "https://api.themoviedb.org/4/list/?page=1&api_key=0180207eb6ef9e35482bc3aa2a2b9672";
    // const searchUrl = "https://api.themoviedb.org/3/search/movie";
    const apiKey = "0180207eb6ef9e35482bc3aa2a2b9672";
    const lang = "en-US";

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
        setMovies(cachedFav);
        setIsFav(!isFav)
      }

    try {
      const response = await axios.get(movieUrl);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    this.setState(() => {
      return { searchString: e.target.value };
    });
  }
  const handleDetails = (el) => {
    this.setState(() => {
      return { movieDetails: el };
    });
  };

  const filter = () => {
    this.state.movies.map(movie => {
      return movie.title === this.state.searchString
    })
  }

    return (
      <div className="container-fluid px-5">
        <h2 className="white mt-4">{pageTitle}</h2>
        <div className="row">
        {/* <MovieConsumer>
            {value => {
              console.log('ml',value.movies)
            if(value.movies.length > 0 ){  */}
            {movies.map(movie => {
              // console.log('there\'s data', movie)
              return (
                // <h1 className="text-danger"> {m}</h1>
                <Movie
                  // details={this.handleDetails}
                  test={"test"}
                  key={movie.id}
                  movie={movie}
                  fav={isFav}
                  prefix={prefix}
                />
              );
            })}
            {/* }else{
              console.log('empty')
              return (<h1>Loading</h1>);

        }
        
          }}
          </MovieConsumer> */}
        </div>
      </div>
    );
}

