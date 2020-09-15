import React, { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [isFav, setIsFav] = useState(false)
    const [movies, setMovies] = useState([]);
    const [home, setHome] = useState([]);

    const store = {
        fav: [isFav, setIsFav],
        moviesStore: [movies, setMovies],
        parent: [home, setHome],
      }

    console.log('context', movies)
    return (
        <MovieContext.Provider value={
            [movies, setMovies]
        }>
            {props.children}
        </MovieContext.Provider>
    )
}