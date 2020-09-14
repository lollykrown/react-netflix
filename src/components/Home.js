import React, { Component } from "react";
import MovieList from './MovieList'

export default function Home(){

    return (
      <MovieList cat={"popular"} />
    );
}
