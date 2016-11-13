'use strict';

var express = require('express');
var models = require('../models');

var Questions = require('./questions')(models);
var Choices = require('./choices')(models);
var Answers = require('./answers')(models);
var Auth = require('./auth');
var auth = require('../helpers/auth');

var validate = function(request, response, success) {
  var errors = request.validationErrors(true);
  if (errors) {
    response.status(412).json(errors);
    return;
  }
  success(request, response);
}

var router = express.Router();

router.post('/questions', function(request, response) {
  request.checkBody('text', 'Question text is required').notEmpty();
  console.log('****** request', request.headers);
  request.checkHeaders('authorization', 'Authorization header is required')
    .notEmpty().isAuthenticated() // Update reponse code for this error
  validate(request, response, function() {
    Questions.create({
      text: request.body.text
    })
    .then(function(question) {
      Choices.bulkCreate(request.body.choices.map(function(choice) {
        return {
          QuestionId: question.id,
          text: choice.text,
        };
      }))
      .then(function() {
        question.Choices = request.body.choices;
        response.json(question);
      })
    });
  })
});

router.get('/questions', function(request, response) {
  Questions.findAll()
    .then(function(questions) {
      response.json(questions);
    });
});


router.get('/questions/withAnswers', function(request, response) {
  request.checkHeaders('authorization', 'Authorization header is required')
    .notEmpty().isAuthenticated() // Update reponse code for this error
  validate(request, response, function() {
    Questions.allWithAnswers()
      .then(function(questions) {
        response.json(questions);
      });
  });
});

router.get('/questions/:id', function(request, response) {
  request.checkParams('id', 'Question id is a required integer').notEmpty().isInt();
  validate(request, response, function() {
    Questions.findById(request.params.id)
      .then(function(question) {
        response.json(question);
      });
  });
});


router.post('/choices', function(request, response) {
  request.checkBody('text', 'Choice text is required').notEmpty();
  request.checkBody('questionId', 'Question id is required').notEmpty().isInt();
  validate(request, response, function() {
    Choices.create({
      text: request.body.text,
      questionId: request.body.questionId
    }).then(function(choice) {
      response.json(choice);
    });
  });
});


router.get('/choices', function(request, response) {
  Choices.findAll()
    .then(function(choices) {
      response.json(choices);
    });
});


router.post('/answers', function(request, response) {
  request.checkBody('choiceId', 'Choice id is a required integer').notEmpty().isInt();
  validate(request, response, function() {
    Answers.create({
      choiceId: request.body.choiceId
    }).then(function(answer) {
      response.json(answer);
    });
  })
});

router.post('/login', function(request, response) {
  request.checkBody('username', 'Username is required').notEmpty();
  request.checkBody('password', 'Password is required').notEmpty();
  validate(request, response, function() {
    Auth.login({
      username: request.body.username,
      password: request.body.password,
    }, function(err, result) {
        if (err) {
          response.status(500).json({
            error: 'An unexpected error ocurred',
          });
        } else if (!result) {
          response.status(412).json({
            error: 'Invalid username or password',
          });
        } else {
          auth.generateToken({ username: request.body.username }, function(err, token) {
            if (err) {
              response.status(500).json({
                error: 'An unexpected error ocurred',
              });
            } else {
              response.json({ token: token });
            }
          });
        }
    });
  });
});


module.exports = router;
