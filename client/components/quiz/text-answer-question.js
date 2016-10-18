import React from 'react';

const TextAnswer = () => {
  return (
    <div className='text-answer-wrapper'>
      <input type='text' placeholder='enter the question here'/>
      <input type='text' placeholder='enter the answer here' />
      <button>create next question</button>
      <button>Finished With Quiz</button>
    </div>
  );
};

export default TextAnswer;
