/*var socket = io();

$(document).ready(function() {
	$("#login").submit(function(evt) {
		evt.preventDefault();
		var data = {
			name: $(this).find("input").val(),
			status: "Connecting..."
		};
		socket.emit("conectando", data);
	});
  $("#chat").submit(function(evt) {
		evt.preventDefault();
		var msj = {
			texto: $(this).find("input").val(),
			status: "Connecting..."
		};
		socket.emit("conectando", msj);
	});

});

socket.on("conectado", function (usuario) {
	$("#usuarios").append(usuario.name + "<br>");
  $("#chatUser").append(usuario.texto + "<br>");
});*/