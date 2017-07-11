$(document).ready(function() {
	/*var user = 'RypeArts';
	var token = 'a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea';

	$.ajax({

		url: 'https://api.dribbble.com/v1/users/'+ user+'/shots?access_token='+token,
		type: 'GET',
		dataType: 'json',
		
	})
	.done(function(respuesta) {
		console.log("success");
		console.log(respuesta)
		addLikes(respuesta.results)
		userName();
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

*/

	$.getJSON('https://api.dribbble.com/v1/users/RypeArts/shots?access_token=a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea', function(data) {
			data.forEach(function(e){
				var titulo = e.title;
				console.log(titulo);
				$(".addp").append("<h2 class='name'>"+titulo+"</h2>")
			})
	});
	var userName = function (data){
		
		var nameUser = "RypeArts";
		console.log(nameUser);
		$(".titulousuario-name").append("<h4>" + nameUser + "</h4>");
	}
	
});

var addLikes = function(array){

	array.forEach(function(e){
		var titulo = e.title;
		$(".addp").append('<div class="name">'+titulo+'</div>')
	})

};

