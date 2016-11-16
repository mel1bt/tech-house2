var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on("connection", function(client) {
	 client.on("conectando", function (usuario) {
    usuario.status = "Conected";
    console.log(usuario);
    client.broadcast.emit("conectado", usuario)
  });
});

server.listen(3000, function() {
	console.log("El servidor ha iniciado en el puerto 3000");
});

io.sockets.on('connection', function(client){
   var userName;
	console.log("user connected!");
	client.on('message', function(message){
      //serName =="meissa";
       /* if (!userName) {
			userName = message;
			console.log(userName + ' is connected :)');
			client.emit('message', '¿Cómo te puedo ayudar' + ' '+ userName + '?');
			client.broadcast.emit('message', userName + ' is connected');
		}
		else {*/
			client.emit('message', 'me: ' + message.contenido);
			client.broadcast.emit('message', message.usuario + ' says: ' + message.contenido);
		//}
    });

});