var Server = require('./lib/server')
  , upgrade = require('doh').upgrade
  , Monitor = require('./lib/monitor')
  , debug = require('debug')('fuel')
  , config = require('./config');

var server = new Server(config.__CONFIG__[config.__ENVIRONMENT__]);

upgrade(server);

server.listen();

server.on('listening', function() {
	console.log("Server is listening");
});

server.on('error', function(err) {
	console.error(err);
	process.nextTick(function() { // Give the server a chance to return an error
		process.exit();
	});
});
