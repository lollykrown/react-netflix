import React, { Component } from "react";
import MovieList from './MovieList'

export default class Home extends Component {

  render() {
    return (
      <MovieList cat={"popular"} />
    );
  }
}
