

var socket =io();
$(document).ready(function(){
	    
	    // socket = io.connect('/');
		socket.on('message', function (data) {
			var content = $('#messages').html() + data + '<br/>';
			$('#messages').html(content); 
		});
		
		$("form").submit(function(e) {
			e.preventDefault();
		});

		$('#message').bind('keypress', function(e) {
			//var code = (e.keyCode ? e.keyCode : e.which); 
    		if(e.keyCode == 13){
        	postMessage();
    
  			  }
		});
  
			function postMessage(){
		if (socket) {
			var usuario = $("#names").text();
			var contenido = $("#message").val();
			var mensaje = {
				usuario: usuario,
				contenido: contenido
			};
			socket.emit('message', mensaje);
			$('#message').val('');
		}	 
            };
  
});
$('#live-chat header').on('click', function() {

		$('.chat').slideToggle(300, 'swing');
		$('.chat-message-counter').fadeToggle(300, 'swing');

	});
	/*
	function postMessage(){
		if (socket) {
			socket.emit('message', $('#message').val());
			$('#message').val('');
		}
	};

	$('#live-chat header').click(function() {
        $('.chat').slideToggle(300, 'swing');
		$('.chat-message-counter').fadeToggle(300, 'swing');

	});


	$('#live-chat header').on('click', function() {

		$('.chat').slideToggle(300, 'swing');
		$('.chat-message-counter').fadeToggle(300, 'swing');

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#live-chat').fadeOut(100);

	});
    

*/
