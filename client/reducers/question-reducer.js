import { SAVE_QUESTION } from '../actions/quiz-actions';

const initialState = { question: null, error: null, loaded: false};

export const questionReducer = (state=initialState, action) => {
  switch (action.type) {
    case `${SAVE_QUESTION}_PENDING`:
    return initialState;
    case `${SAVE_QUESTION}_FULFILLED`:
    return { question: action.payload, error: null, loaded: true};
    case `${SAVE_QUESTION}_REJECTED`:
    return { question: null, error: action.payload, loaded: false};
    default:
    return state;
  }
};
