var express = require('express');
var models = require('../models');

var Questions = require('./questions')(models);
var Answers = require('./answers')(models);
var Auth = require('./auth');
var errorResponse = require('./error-response');

var validate = function (request, response, success) {
  var errors = request.validationErrors(true);
  // TODO: Handle auth error
  if (errors) {
    errorResponse.preCondition(response, errors);
    return;
  }
  success(request, response);
};

// This is an express convention.
// eslint-disable-next-line new-cap
var router = express.Router();

router.post('/questions', function (request, response) {
  request.checkBody('text', 'Question text is required').notEmpty();
  request.checkHeaders('authorization', 'Authorization header is required')
    .notEmpty().isAuthenticated(); // TODO: Update reponse code for this error
  validate(request, response, Questions.create);
});

router.get('/questions', Questions.findAll);

router.get('/questions/withAnswers', function (request, response) {
  request.checkHeaders('authorization', 'Authorization header is required')
    .notEmpty().isAuthenticated(); // Update reponse code for this error
  validate(request, response, Questions.allWithAnswers);
});


router.post('/answers', function (request, response) {
  request.checkBody('choiceId', 'Choice id is a required integer').notEmpty().isInt();
  validate(request, response, Answers.create);
});

router.post('/login', function (request, response) {
  request.checkBody('username', 'Username is required').notEmpty();
  request.checkBody('password', 'Password is required').notEmpty();
  validate(request, response, Auth.login);
});


module.exports = router;
