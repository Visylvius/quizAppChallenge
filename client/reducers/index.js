import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import { quizReducer } from './quiz-reducer';
import { questionReducer } from './question-reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise(), ReduxThunk, createLogger())(createStore);

const rootReducer = combineReducers({
  quiz: quizReducer,
  question: questionReducer
});

export default createStoreWithMiddleware(rootReducer);
