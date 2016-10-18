import React, { Component } from 'react';

import TrueOrFalse from './true-or-false-question';
import TextAnswer from './text-answer-question';

class CreateQuiz extends Component {
  constructor(props) {
    super();

    this.state = {questions: 0, questionType: null};
  }

  onQuizCompletion(event) {
    event.preventDefault();
    const form = event.target;
    fetchGyms(form.address.value, form.distance.value);
  }


  questionType(event) {
    event.preventDefault();
    const form = event.target;
    // console.log('form', form.thing.value);
    if (form.select.value === 'text') {
      this.setState({questions: this.state.questions + 1, questionType: 'text'});
    } else if (form.select.value === 'boolean') {
      this.setState({questions: this.state.questions + 1, questionType: 'boolean' });
    }
  }

  createQuestion() {
    if (this.state.questionType !== null && this.state.questionType === 'text') {
      return (
        <TextAnswer />
      );
    } else if (this.state.questionType !== null && this.state.questionType === 'boolean') {
      return (
        <TrueOrFalse />
      );
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onQuizCompletion.bind(this)}>
          <button type='submit'>Finished With Quiz</button>
        </form>
        <form onSubmit={this.questionType.bind(this)}>
          <input type='text' name='name' placeholder='enter quiz name here'/>
          <select name='select'>
            <option name='question' value='boolean'>true or false</option>
            <option name='question' value='text'>text</option>
          </select>
          <button type='submit'>Make New Question</button>
        </form>
        {this.createQuestion()}
      </div>
    );
  }
}



export default CreateQuiz;


//TODO
//create function on click for finished quiz to save in database
