import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainPage from './components/quiz/base-component';
import HomePage from './components/home-page';
import CreateQuiz from './components/quiz/create-quiz';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={MainPage}>
    <IndexRoute component={HomePage} />
    </Route>
    <Route path='/createquiz' component={CreateQuiz}/>
  </Router>
);
