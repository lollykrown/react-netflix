import React, { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    // const [isFav, setIsFav] = useState(false)
    const [mo, setMo] = useState([
        {name: 'kay'},
        {name: 'Agbo'}
    ])


    // const checkIfFav = (el) => {
    //     const fav = JSON.parse(localStorage.getItem('movies'));
    //     const movie = fav.find(e => e.id === el.id)
    //     console.log(movie)
    //     if(movie){
    //       setIsFav(!isFav)
    //     }
    //   }

    return (
        <MovieContext.Provider value='hi, this'>
            {props.children}
        </MovieContext.Provider>
    )
}