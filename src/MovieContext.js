import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [isFav, setIsFav] = useState(false)
    const [movies, setMovies] = useState([]);
    const [filtered, setFilteredMovies] = useState([])

    const prefix = "https://image.tmdb.org/t/p/w500";  
    const url = "https://api.themoviedb.org/3/movie/";
    const apiKey = "0180207eb6ef9e35482bc3aa2a2b9672";
    const lang = "en-US"

    const addMovies = (res) => {        
        setMovies([...res]);
    }

    const addFilteredMovies = (res) => {        
        setFilteredMovies([...res]);
    }
    const setFav = () => {        
        setIsFav(!isFav);
    }

    const addToFav = (el) => {
        let movieCache = [];
        if (!localStorage.getItem("movies")) {
          console.log("no movie cached yet");
          movieCache.push(el);
          alert(`${el.title} added to your favorites`);
          localStorage.setItem("movies", JSON.stringify(movieCache));
        } else {
          console.log("merge/update cached data");
          let oldCache = JSON.parse(localStorage.getItem("movies"));
          const isthere = oldCache.find((e) => e.id === el.id);
          if (!isthere) {
            oldCache.push(el);
            localStorage.setItem("movies", JSON.stringify(oldCache));
            setIsFav(!isFav)
            alert(`${el.title} added to your favorites`);
          } else {
            alert(`${el.title} is already in your favorites`);
          }
        }
      };

      const deleteFromfav = (el) => {
        const fav = JSON.parse(localStorage.getItem("movies"));
        const index = fav.findIndex((e) => e.id === el.id);
        const title = fav[index].title;
        console.log(index);
        fav.splice(index, 1);
        alert(title, "successfully deleted");
        localStorage.removeItem("movies");
        localStorage.setItem("movies", JSON.stringify(fav));
        setIsFav(!isFav)
      };

    return (
        <MovieContext.Provider value={{
            isFav, setFav,
            movies, addMovies,
            filtered, addFilteredMovies,
            prefix, url, apiKey, lang,
            addToFav, deleteFromfav

        }}>
            {props.children}
        </MovieContext.Provider>
    )
}