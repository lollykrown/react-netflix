import React, { Component } from "react";
import axios from 'axios';

const MovieContext = React.createContext();

class MovieProvider extends Component {
    state = {
        movies: [],
        imgPrefix: "https://image.tmdb.org/t/p/w500",
        pageTitle: "",
        movieDetails: {},
        favorites:[],
        errorMessage: "",
        user: "",
        isFav: false,
        searchString:''
      };

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

      getItem = (id) => {
        let movie;
          movie = this.state.movies.find((item) => item.id === id);
          return movie;        
      };

      handleDetail = (category, id) => {
        const product = this.getItem(category, id);
        this.setState(() => {
          return { detailProduct: product };
        });
      };

      filter = () => {
        this.state.movies.map(movie => {
          return movie.title === this.state.searchString
        })
      }  


  render() {
    return (
      <MovieContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleDetails: this.handleDetails,
          handleSearch:this.handleSearch,
          filter: this.filter
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

const MovieConsumer = MovieContext.Consumer;

export { MovieProvider, MovieConsumer };
