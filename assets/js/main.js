$(document).ready(function() {


	$.getJSON('https://api.dribbble.com/v1/users/RypeArts/shots?access_token=a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea', function(data) {
			data.forEach(function(e){
				var titulo = e.title;
				console.log(titulo);
				$(".addp").append("<div class='caja-blanca'><img src='"+e.images.normal+"'><div class='overlay'><div class='text'>Hello World</div></div><br><i class='fa fa-eye' aria-hidden='true'></i>"+e.views_count+"<i class='fa fa-comment' aria-hidden='true'></i>"+e.comments_count+"<i class='fa fa-heart' aria-hidden='true'></i>"+e.likes_count+"</div>")
			});
	});
		

	var userName = function (data){
		
		var nameUser = "RypeArts";
		console.log(nameUser);
		$(".titulousuario-name").append("<h4>" + nameUser + "</h4>");
	}
	
});


