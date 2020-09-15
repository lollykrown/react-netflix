import React, { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [isFav, setIsFav] = useState(false)
    const [movies, setMovies] = useState([]);

    // const checkIfFav = (el) => {
    //     const fav = JSON.parse(localStorage.getItem('movies'));
    //     const movie = fav.find(e => e.id === el.id)
        
    //     if(movie){
    //         console.log('set')
    //       setIsFav(!isFav)
    //     }
    //   }
    console.log('context', movies)
    return (
        <MovieContext.Provider value={
            [movies, setMovies]
        }>
            {props.children}
        </MovieContext.Provider>
    )
}