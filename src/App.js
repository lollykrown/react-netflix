import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Default from './components/Default';
import MovieList from './components/MovieList';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={() => <MovieList cat={"favorites"} />} />           
      <Route exact path="/popular" component={() => <MovieList cat={"popular"} />} /> 
      <Route exact path="/top rated" component={() => <MovieList cat={"top"} />} />      
      <Route exact path="/now playing" component={() => <MovieList cat={"now"} />} />           
      <Route component={Default} />
    </Switch>
    <Footer />
  </React.Fragment>
  );
}

export default App;
