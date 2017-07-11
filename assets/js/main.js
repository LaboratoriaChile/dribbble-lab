
/*aca va js*/

$(document).ready(function() {
  /*var user = 'RypeArts';
	var token = 'a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea';


  $.getJSON('https://api.dribbble.com/v1/users/RypeArts/shots?access_token=a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea', function(data) {
      data.forEach(function(e){
        var titulo = e.title;
        console.log(titulo);
        $(".addp").append("<div class='box col-md-3'><img class='img-responsive imges' src='"+e.images.normal+"'><br><div class='contadores'><div class='cont'><i class='fa fa-eye icont' aria-hidden='true'></i>"+e.views_count+"</div><div class='cont'><i class='fa fa-comment icont' aria-hidden='true'></i>"+e.comments_count+"</div><div class='cont'><i class='fa fa-heart icont' aria-hidden='true'></i>"+e.likes_count+"</div></div></div>")
      });

  });
  var userName = function (data){
    
    var nameUser = "RypeArts";
    console.log(nameUser);
    $(".titulousuario-name").append("<h4>" + nameUser + "</h4>");
  }
  
});


	});

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
				$(".addp").append("<div class='caja-blanca'><img src='"+e.images.normal+"'><div class='overlay'><div class='text'>Hello World</div></div><br><i class='fa fa-eye' aria-hidden='true'></i>"+e.views_count+"<i class='fa fa-comment' aria-hidden='true'></i>"+e.comments_count+"<i class='fa fa-heart' aria-hidden='true'></i>"+e.likes_count+"</div>")
			});
			userName();
	});


	var userName = function (data){
		
		var nameUser = "RypeArts";
		console.log(nameUser);
		$(".titulousuario-name").append("<a href='#'><h4>" + nameUser + "</h4></a>");
	}
	
});



var addLikes = function(array){

	array.forEach(function(e){
		var titulo = e.title;
		$(".addp").append('<div class="name">'+titulo+'</div>')
	})

};

