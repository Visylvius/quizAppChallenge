import { FETCH_QUIZ } from '../actions/quiz-actions';

const initialState = { quiz: null, error: null, loaded: false};

export const quizReducer = (state=initialState, action) => {
  switch (action.type) {
    case `${FETCH_QUIZ}_PENDING`:
    return initialState;
    case `${FETCH_QUIZ}_FULFILLED`:
    return { quiz: action.payload, error: null, loaded: true};
    case `${FETCH_QUIZ}_REJECTED`:
    return { quiz: null, error: action.payload, loaded: false};
    default:
    return state;
  }
};
