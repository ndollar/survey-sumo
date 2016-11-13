'use strict';
module.exports = function(sequelize, DataTypes) {
  var Choice = sequelize.define('Choice', {
    text: DataTypes.STRING,
    QuestionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Choice.belongsTo(models.Question);
        Choice.hasMany(models.Answer);
      }
    }
  });
  return Choice;
};
