import React, { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [isFav, setIsFav] = useState(false)
    const [movies, setMovies] = useState([]);
    const [home, setHome] = useState([]);
    const [filtered, setFilteredMovies] = useState([])

    const prefix = "https://image.tmdb.org/t/p/w500";  


    return (
        <MovieContext.Provider value={{
            fav: [isFav, setIsFav],
            moviesList: [movies, setMovies],
            filteredMovies: [filtered, setFilteredMovies],
            prefix
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}