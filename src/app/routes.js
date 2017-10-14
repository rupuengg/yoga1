import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import all pages component here
import { App } from './components/App';
import { MainPage } from './components/App';

// All routes go here
// Don't forget to import the compoent above after adding new route
// <Route path="/about" componet={About} />
export default(
  <Route path="/" component="App">
    <IndexRoute component={MainPage} />
  </Route>
);
