import React from 'react';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  // <BrowserRouter basename="/react-netflix/">
  <BrowserRouter>
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:activeVideo" component={Home} />
    </Switch>
    <GlobalStyle />
  </>
  </BrowserRouter>
)

export default App;