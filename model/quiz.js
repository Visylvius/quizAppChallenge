var orm = require('orm');

var Quiz = module.exports = {
  properties: {
    name: String,
    questions: Array,
    answers: Array,
    totalNumberCorrect: Number,
    id: {type: 'serial', key: true}
  }
};
