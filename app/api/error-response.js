
module.exports = {
  preCondition: function (response, json) {
    response.status(412).json(json);
  },
  internalServerError: function (response) {
    response.status(500).json({ error: 'An error has occurred.' });
  }
};
