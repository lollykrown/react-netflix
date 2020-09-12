import React, { Component } from "react";
import axios from 'axios';
import Movie from './Movie'

export default class Home extends Component {

    state = {
      movies: [],
      imgPrefix: 'https://image.tmdb.org/t/p/w500',
      pageTitle: '',
      errorMessage: '',
      user: ''
    };

  componentDidMount() {
    // this.saveLocal();
    this.getMovies();
  }
  
  getMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/';
    const movieslistUrl = 'https://api.themoviedb.org/4/list/?page=1&api_key=0180207eb6ef9e35482bc3aa2a2b9672';
    const searchUrl = 'https://api.themoviedb.org/3/search/movie';
    const apiKey = '0180207eb6ef9e35482bc3aa2a2b9672';
    const lang = 'en-US';

    const popularUrl = `${url}popular?api_key=${apiKey}&language=${lang}`;
    const topRatedUrl = `${url}top_rated?api_key=${apiKey}&language=${lang}`;
    const nowPlayingUrl = `${url}now_playing?api_key=${apiKey}&language=${lang}`;

    // (async function get() {
      try {
        const response = await axios.get(popularUrl);
        // console.log(response.data.results);
        this.setState({movies: response.data.results})
        // return response.data.results.map(movie => {
        //   return <Movie key={movie.id} 
        //   movie={movie} prefix={imgPrefix} />
        // })
      } catch (error) {
        console.error(error);
      }
    // }());
  }

  // saveLocal = () => {
  //   const cache = localStorage.getItem('movies');
  //   if (cache !== null) {
  //     const obj = JSON.parse(cache);
  //     // const arr = [];
  //     const arr = Object.keys(obj).map((key) => {
  //       return Number(key), obj[key];
  //     });
  //     console.log(arr);
  //     this.movies = arr;
  //     this.filteredMovies = this.movies;
  //   } else {
  //     this.movieService.getMovies().subscribe({
  //         next: movies => {
  //           // const { results } = movies;
  //           this.movies = movies;
  //           console.log(this.movies);
  //         },
  //         error: err => this.errorMessage = err
  //       });
  //   }
  // }
  render() {

    return (
      <section className="container-fluid my-3 custom-padd">
        <div className="container-fluid">
         <h2 className="vid">page title</h2>
          <div className="row">
              {/* <div *ngFor="let m of filteredMovies; index as j" class="col-md-4"> */}
               {this.state.movies.map(movie => {
                return <Movie key={movie.id} 
                movie={movie} prefix={this.state.imgPrefix} />
              })
            }
              {/* </div> */}
          </div>
      </div>

      </section>
    );
  }
}
