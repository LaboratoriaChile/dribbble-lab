$(document).ready(function(){
  $(function() {
  		$.getJSON('https://api.dribbble.com/v1/users/wellscollins/shots?access_token=4644069fd6dfeba94b66e75c1b47e088f3444120a121ba0b481f9e7637a72ccb&callback=?', function(resp) {
    	if (resp.data.length > 0) {
    	console.log(resp);						
      	$.each(resp.data.reverse(), function(i, val) {
        $('.project').prepend('<div class="col-md-4 box-project"><img class="img-responsive" src="'+val.images.normal+'"/><div class="overlay"><div class="text">'+ val.description+'</div></div><span>'+val.views_count+'</span>'+'<span><i class="fa fa-eye" aria-hidden="true"></i>'+val.comments_count+'</span><span><i class="fa fa-comment-o" aria-hidden="true"></i>'+val.comments_count+'<i class="fa fa-heart" aria-hidden="true"></i></span></div>')
      });
    	}else{
      		$('.project').append('<li>No shots.</li>');
    		}
  		});		   							    
	});

  
});
