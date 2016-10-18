import React from 'react';

import { connect } from 'react-redux';
import store from '../../reducers/index';

import { saveQuestion } from '../../actions/quiz-actions';

const TrueOrFalse = () => {

  let questionName = '';
  let answerValue = '';

  const saveQuestionName = (e) => {
    questionName = e.target.value;
    console.log('questionName', questionName);
  };

  const saveBooleanValue = (e) => {
    console.log(e.target.value);
    // answerValue = e.
  };
  const saveQuestionValues = () => {

    store.dispatch(saveQuestion())
  }

  return (
    <div className='true-or-false-wrapper'>
      <input type='text' name='question_name' placeholder='enter the question here' onChange={saveQuestionName}/>
      <select onChange={saveBooleanValue}>
        <option value='true'>true</option>
        <option value='false'>false</option>
      </select>
      <button onClick={saveQuestionValues}>Finished With Question</button>
      <button>Finished With Quiz</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const question = state.question;
  return { question }
}


export default connect(mapStateToProps, null)(TrueOrFalse);
