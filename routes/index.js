var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz 2015' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

/* GET home page. */
router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Autores de Quiz 2015' });
});

module.exports = router;
