var io = require('socket.io').listen(9000);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });

	socket.on('message', function(msg) {
		socket.emit("Oh happy day.", msg);
	});
	
	socket.on('ackLessEvent', function(msg) {
		socket.emit('ackLessEvent', msg);
	});
	
	socket.on('ackWithArg', function (data, fn) {
    fn(data);
  });


	
	socket.on('ackWithArgs', function(first, second, fn) {
		fn(first, second);
	});
});
