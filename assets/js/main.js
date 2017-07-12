/* Acá va todo el jquery */
$(document).ready( function(){
 // alert("working");
 /*menu desplegable (cony)*/
 $("#open-hide").click(function(){
 	$(this).toggleClass("show");
 });
 $.get('https://api.dribbble.com/v1/users/jonesandcompany/shots?access_token=c86586c1235b2e5e9aef166131195f67e2f792cbe5cf7eaee7ea66923fc1a8ce', function(x) {
		//console.log(x);
		// array 721
		x.forEach(function(element){
			// elemento
			//console.log(element.pokemon_species.name[0]);
			console.log(x);
			console.log(element.images.normal);
			var  titulo = element.description;
			$("#dribbble").append(	"<li class='port'><a href='" + element.html_url + "'>" + 
				"<img class='img-responsive' src='" + element.images.normal + "'><div class='overlay'><div class='text'>" + element.title[0] + "</div></div><div class='icon-port hidden-xs hidden-sm'>" +
				"<span class='view-icon'>" + 
				"<i class='fa fa-eye' aria-hidden='true'></i>" + " " +
				element.views_count + 
				"</span>" + 
				"<span class='coment-icon'>" +
				"<i class='fa fa-comment' aria-hidden='true'></i>" + " " +
				element.comments_count + 
				"</span>" + 
				"<span class='like-icon'>" +
				"<i class='fa fa-heart' aria-hidden='true'></i>" + " " +
				element.likes_count + 
				"</span></div></li>");
			$(".port").hover(function(){
                //s$(".port").append("<div class='overlay'><div class='text'>" +element.title+ titulo + "</div></div>");
                //$(".port").append("<div class='overlay'><div class='text'>" + element.title[0] + "</div></div>")
                
            })
		});
	});
	//Se enlazan url a  botón Hire Me
	$(".hire-me").attr("href","https://dribbble.com/pro?recipient_id=jonesandcompany");
 	//Se enlazan url a  iconos de RRSS  de perfil
 	$(".web").attr("href","https://dylanhowejones.myportfolio.com/");
 	$(".twitter").attr("href","https://twitter.com/iamtheoryone");
 	$(".instagram").attr("href","https://www.instagram.com/jonesandco_illustration/");
 	$(".behance").attr("href","https://www.behance.net/dylanhowejones");
 	//Se enlazan url a  iconos de SKILL de perfil
 	$(".skills-ilu").attr("href","https://dribbble.com/designers?skills=illustration");
 	$(".skills-icon").attr("href","https://dribbble.com/designers?skills=icons");
 	$(".skills-charac").attr("href","https://dribbble.com/designers?skills=characters");
 	$(".skills-chad").attr("href","https://dribbble.com/designers?skills=characterdesign");
 	$(".skills-vector").attr("href","https://dribbble.com/designers?skills=vector");
 	$(".skills-camping").attr("href","https://dribbble.com/designers?skills=campaign");
 	$(".skills-adv").attr("href","https://dribbble.com/designers?skills=advertising");
 	$(".skills-edit").attr("href","https://dribbble.com/designers?skills=editorial");
 	$(".skills-ui").attr("href","https://dribbble.com/designers?skills=ui");
});
