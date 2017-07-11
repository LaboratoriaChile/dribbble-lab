/* Acá va todo el jquery */
$(document).ready( function(){
 // aqui va el codigo
 // alert("working");
 	$.get('https://api.dribbble.com/v1/users/eduardo/shots?access_token=c86586c1235b2e5e9aef166131195f67e2f792cbe5cf7eaee7ea66923fc1a8ce', function(x) {
		//console.log(x);
		// array 721
		x.forEach(function(element){
			// elemento
			//console.log(element.pokemon_species.name[0]);
			console.log(x);
			console.log(element.images.normal);
			$("#dribbble").append(	"<li class='port'><img class='img-responsive' src='" + element.images.normal + "'><div>" +
										"<span class='view-icon'>" + 
											"<i class='fa fa-eye' aria-hidden='true'></i>" + 
											element.views_count + 
										"</span>" + 
										"<span class='coment-icon'>" +
											"<i class='fa fa-comment' aria-hidden='true'></i>" + 
										 	element.comments_count + 
										 "</span>" + 
										 "<span class='like-icon'>" +
										 	"<i class='fa fa-heart' aria-hidden='true'></i>" +
										 	element.likes_count + 
										 "</span></div></li>");
		});
 	});
});