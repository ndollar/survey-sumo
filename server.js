
var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var apiRoutes = require('./app/api/routes');
var validators = require('./app/api/validators');

var app = express();

app.use(express.static('./assets/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator({ customValidators: validators }));
app.use('/api', apiRoutes);

app.get('*', function(req, res) {
  res.sendfile('./assets/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Listening on port', port);
});
