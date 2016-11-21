var path = require("path");
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var apiRoutes = require('./app/api/routes');
var validators = require('./app/api/validators');
var emitter = require('./app/helpers/events').emitter;

app.use(express.static('./lib/'));
app.use(express.static('./assets/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator({ customValidators: validators }));
app.use('/api', apiRoutes);

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './assets/index.html'));
});

var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('Listening on port', port);
});

io.on('connection', function(socket) {
  emitter.on('io:emit', function(name, data) {
    socket.emit(name, data);
  });
});
