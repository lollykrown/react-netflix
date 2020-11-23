import React, { createContext } from "react";
import { useRequest } from './useRequest';

const MovieContext = createContext();

const MovieProvider = ({children, title, fav}) => {
    const state = useRequest(title, fav);

    return (
        <MovieContext.Provider value={state}>{children}</MovieContext.Provider>
    )
}
export { MovieContext, MovieProvider };
