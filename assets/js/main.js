$(document).ready(function() {

	$.getJSON('https://api.dribbble.com/v1/users/RypeArts/shots?access_token=a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea', function(data) {
			data.forEach(function(e){
				var shotCont = e.shots_count;
				console.log(shotCont);
				$(".shots").append(shotCont)
			});
	});
});

/*
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
*/