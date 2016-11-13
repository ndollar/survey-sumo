'use strict';

module.exports = function(models) {

  var create = function(options) {
    return models.Choice.create({
      text: options.text,
      QuestionId: options.questionId
    });
  };

  var bulkCreate = function(choices) {
    console.log(choices);
    return models.Choice.bulkCreate(choices);
  };

  var findAll = function() {
    return models.Choice.findAll();
  }

  return {
    create: create,
    bulkCreate: bulkCreate,
    findAll: findAll
  };
};
