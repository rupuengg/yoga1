import React from 'react';
// You can choose your kind of histroy  here (e.g. browserHistory)
import { Router, hashHistory as history } from 'react-router';
// Render
import { render } from 'react-dom';
// Your routes.js file
import routes from './routes';

render(
  <Router routes={routes} history={history} />,
  document.getElementById('root')
);
