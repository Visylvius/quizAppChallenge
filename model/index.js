var quizSchema = require('./quiz');

var config = {
  define: function(db, models, next) {
    models.quiz = db.define('quiz', quizSchema.properties);
    db.sync(function(err) {
      if (err) {
        throw err;
      }
      next();
    });
  }
};
