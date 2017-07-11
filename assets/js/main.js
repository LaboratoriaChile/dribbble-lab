$(document).ready(function() {

	$.getJSON('https://api.dribbble.com/v1/users/RypeArts/shots?access_token=a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea', function(data) {
			data.forEach(function(e){
				var titulo = e.title;
				console.log(titulo);
				$(".addp").append("<h2 class='name'>"+titulo+"</h2><img src='"+e.images.normal+"'>")
			})

	});
	var userName = function (data){
		
		var nameUser = "RypeArts";
		console.log(nameUser);
		$(".titulousuario-name").append("<h4>" + nameUser + "</h4>");
	}
	
});
