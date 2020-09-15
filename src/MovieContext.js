import React, { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    return (
        <MovieContext.provider> value={
            }
            {props.children}
        </MovieContext.provider>
    )
}