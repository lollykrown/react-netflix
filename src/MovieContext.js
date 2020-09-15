import React, { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [isFav, setIsFav] = useState(false)
    const [movies, setMovies] = useState([]);
    const [home, setHome] = useState([]);
    const [filtered, setFilteredMovies] = useState([])

    return (
        <MovieContext.Provider value={{
            moviesList: [movies, setMovies],
            filteredMovies: [filtered, setFilteredMovies]
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}