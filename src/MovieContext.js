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

    return (
        <MovieContext.Provider value={{
            fav: [isFav, setIsFav],
            movies, addMovies,
            filtered, addFilteredMovies,
            prefix, url, apiKey, lang,

        }}>
            {props.children}
        </MovieContext.Provider>
    )
}