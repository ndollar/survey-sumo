module.exports = function(models) {

  var create = function(options) {
    return models.Question.create({
      text: options.text
    });
  };

  var findAll = function() {
    return models.Question.findAll({
      include: [{
        model: models.Choice,
        required: true
      }]
    });
  };

  var allWithAnswers = function() {
    return models.Question.findAll({
      include: [{
        model: models.Choice,
        required: true,
        include: [{
          model: models.Answer,
          required: true
        }]
      }]
    });
  };

  var findById = function(id) {
    return models.Question.findById(id, {
      include: [models.Choice]
    });
  };

  return {
    create: create,
    findAll: findAll,
    allWithAnswers: allWithAnswers,
    findById: findById
  };
};
