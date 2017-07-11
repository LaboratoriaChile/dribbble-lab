$(document).ready(function() {
	var user = 'RypeArts';
	var token = 'a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea';

	$.ajax({

		url: 'https://api.dribbble.com/v1/users/'+ user+'/shots?access_token='+token,
		type: 'GET',
		dataType: 'json',
		
	})
	.done(function(respuesta) {
		console.log("success");
		userName();
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});


	var userName = function (data){
		
		var nameUser = "RypeArts";
		console.log(nameUser);
		$(".titulousuario-name").append("<h4>" + nameUser + "</h4>");
	}
	
});