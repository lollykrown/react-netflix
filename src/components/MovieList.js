import React, { Component } from 'react';
import Movie from './Movie'
import axios from 'axios';
import { MovieConsumer } from '../context'

export default class MovieList extends Component {
  // state = {
  //   movies: [],
  //   imgPrefix: "https://image.tmdb.org/t/p/w500",
  //   pageTitle: "",
  //   movieDetails: {},
  //   favorites:[],
  //   errorMessage: "",
  //   user: "",
  //   isFav: false,
  //   searchString:''
  // };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/";
    // const movieslistUrl =
    //   "https://api.themoviedb.org/4/list/?page=1&api_key=0180207eb6ef9e35482bc3aa2a2b9672";
    // const searchUrl = "https://api.themoviedb.org/3/search/movie";
    const apiKey = "0180207eb6ef9e35482bc3aa2a2b9672";
    const lang = "en-US";

    let tit;
    if (this.props.cat === "popular") {
      tit = "popular";
      this.setState({ pageTitle: "Popular Movies" });
    } else if (this.props.cat === "top") {
      tit = "top_rated";
      this.setState({ pageTitle: "Top Rated Movies" });
    } else if (this.props.cat === "now") {
      tit = "now_playing";
      this.setState({ pageTitle: "Now playing" });
    }

    const movieUrl = `${url}${tit}?api_key=${apiKey}&language=${lang}`;

    if (this.props.cat === "favorites") {
        let cachedFav = JSON.parse(localStorage.getItem("movies"));
        this.setState({ movies: cachedFav, isFav:true});
      }

    try {
      const response = await axios.get(movieUrl);
      this.setState({ movies: response.data.results });
    } catch (error) {
      console.error(error);
    }
  };

  handleSearch = (e) => {
    this.setState(() => {
      return { searchString: e.target.value };
    });
  }
  handleDetails = (el) => {
    this.setState(() => {
      return { movieDetails: el };
    });
  };

  filter = () => {
    this.state.movies.map(movie => {
      return movie.title === this.state.searchString
    })
  }
  render() {
    return (
      <div className="container-fluid px-5">
        {/* <h2 className="white mt-4">{this.state.pageTitle}</h2> */}
        <div className="row">
        <MovieConsumer>
            {value => {
              console.log('ml',value)
          if(value.movies.length < 1){ 
            console.log('empty')
            return (<h1>Loading</h1>);
            }
            value.movies.map((movie) => {
            return (
              <Movie
                // details={this.handleDetails}
                key={movie.id}
                movie={movie}
                fav={value.isFav}
                prefix={value.imgPrefix}
              />
            );
          })
        
          }}
          </MovieConsumer>
        </div>
      </div>
    );
  }
}

