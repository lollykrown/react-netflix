import React, { Component } from 'react';
import Movie from './Movie'
import axios from 'axios';

export default class MovieList extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        movies: [],
        imgPrefix: 'https://image.tmdb.org/t/p/w500',
        pageTitle: '',
        movieDetails:{},
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
  
      let tit;
      if(this.props.cat === 'popular'){
        tit = 'popular';
        this.setState({pageTitle: 'Popular'})
      } else if(this.props.cat === 'top'){
        tit = 'top_rated';
        this.setState({pageTitle: 'Top rated'});
      } else if(this.props.cat === 'now'){
          tit = 'now_playing';
          this.setState({pageTitle: 'Now playing'})
      }
      console.log(tit)

      const movieUrl = `${url}${tit}?api_key=${apiKey}&language=${lang}`;

      try {
          const response = await axios.get(movieUrl);
          this.setState({movies: response.data.results})
        } catch (error) {
          console.error(error);
        }
    }

    getItem = (id) => {
        let movie;
        movie = this.state.movies.find((itmem) => m.id === id);
        return movie;        
    };
    
      handleDetail = (id) => {
        const movie = this.getItem(id);
        this.setState(() => {
          return { movieDetails: movie };
        });
      };

  
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

  render(){
    return (
        <div className="container-fluid px-5">
        <h2 className="white mt-4">{this.state.pageTitle}</h2>
         <div className="row">
              {this.state.movies.map(movie => {
               return <Movie key={movie.id} 
               movie={movie} prefix={this.state.imgPrefix} />
             })
           }
         </div>
     </div>
    );
  }
}

