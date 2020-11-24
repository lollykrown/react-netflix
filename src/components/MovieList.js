import React, { useContext, useEffect, useState } from 'react';
import Movie from './Movie'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from './Loading'
import { REQUEST_STATUS } from '../reducer';

import { MovieContext, MovieProvider } from "../MovieContext";
import { ThemeContext, THEMELIST } from '../ThemeContext';

function MovieListComponent(props) {
  const { theme } = useContext(ThemeContext)

  const classNameValue =
    theme === THEMELIST.DARK
      ? 'bg-black'
      : 'bg-white';
      
  const { records: movies, status, error } = useContext(MovieContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageTitle, setPageTitle] = useState('')

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasError = status === REQUEST_STATUS.ERROR;

  useEffect(() => {
    if (props.cat === "favorites") {
      setPageTitle('Favorites')
    } else if (props.cat === "popular") {
      setPageTitle('Popular Movies')
    } else if (props.cat === "top") {
      setPageTitle('Top Rated Movies')
    } else if (props.cat === "now") {
      setPageTitle('Now playing')
    }

  }, [props.cat])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={classNameValue}>
      <Navbar searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} />

      {hasError && (
        <div className="container mt-4">
          <h2 className="white mt-4 ml-2">
            Loading error...
          <br /><br />
            <b>ERROR: {error.message}</b>
          </h2>
        </div>
      )}
      { success && (
        <div className="container">
          {(props.cat === 'favorites' && movies.length <1) ?
            <h2 className="white mt-4 ml-2">You have not added any movie to your favorites list.</h2> :
            (<><h2 className="white mt-4">{pageTitle}</h2>

              <div className="row">
                {movies
                  .filter((m) => {
                    // return m.title.toLowerCase().includes(search.toLowerCase())

                    return searchQuery.length === 0
                      ? true
                      : m.title.toLowerCase().includes(searchQuery.toLowerCase());
                  })
                  .map(movie => {
                    return (
                      <Movie
                        key={movie.id}
                        movie={movie}
                      />
                    );
                  })}
              </div></>)}
        </div>
      )}
      <Footer />

    </div>
  );
}

const MoviesList = (props) => {

  let tit;
  let fav = false;
  if (props.cat === "favorites") {
    fav = true;
  } else if (props.cat === "popular") {
    tit = "popular";
  } else if (props.cat === "top") {
    tit = "top_rated";
  } else if (props.cat === "now") {
    tit = "now_playing";
  }

  return (
    <MovieProvider title={tit} fav={fav}>
      <MovieListComponent {...props} cat={props.cat}></MovieListComponent>
    </MovieProvider>
  );
};

export default MoviesList;