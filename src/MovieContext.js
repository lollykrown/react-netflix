import React, { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [isFav, setIsFav] = useState(false)

    const checkIfFav = (el) => {
        const fav = JSON.parse(localStorage.getItem('movies'));
        const movie = fav.find(e => e.id === el.id)
        
        if(movie){
            console.log('set')
          setIsFav(!isFav)
        }
      }

    return (
        <MovieContext.Provider value={
            [isFav, setIsFav]
        }>
            {props.children}
        </MovieContext.Provider>
    )
}