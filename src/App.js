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

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/accessories" component={() => <ProductList cat={"accessories"} />} />
    </Switch>
    <Footer />
  </React.Fragment>
  );
}

export default App;
