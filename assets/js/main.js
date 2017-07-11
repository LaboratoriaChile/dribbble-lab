$(function() {
  		$.getJSON('https://api.dribbble.com/v1/users/wellscollins/shots?access_token=4644069fd6dfeba94b66e75c1b47e088f3444120a121ba0b481f9e7637a72ccb&callback=?', function(resp) {
    	if (resp.data.length > 0) {
    	console.log(resp);						
      	$.each(resp.data.reverse(), function(i, val) {
        $('.project').prepend('<div class="col-md-4 box-project"><img class="img-responsive" src="'+val.images.normal+'"/><span>'+val.views_count+'</span>'+'<span><i class="fa fa-eye" aria-hidden="true"></i>'+val.comments_count+'</span><span><i class="fa fa-comment-o" aria-hidden="true"></i>'+val.comments_count+'<i class="fa fa-heart" aria-hidden="true"></i></span></div>')
      });
    	}else{
      		$('.project').append('<li>No shots.</li>');
    		}
  		});		   							    
	});
/*

'<li class="box"><img src="'+val.images.normal+'" /><h2>'+val.title+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p></li><li class="comments">'+val.comments_count+'</li><li class="likes">'+val.likes_count+'</li>'+'<li class="views">'+val.views_count+'</li>'


$(function() {     
      $.getJSON('https://api.dribbble.com/v1/users/simplebits', function(resp) {
      if (resp.data.length > 0) {
      console.log(resp);            
        $.each(resp.data.reverse(), function(i, val) {
        $('.img-project').prepend(
          '<li class="box"><img src="'+val.images.normal+'" /><h2>'+val.title+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p></li><li class="comments">'+val.comments_count+'</li><li class="likes">'+val.likes_count+'</li>'+'<li class="views">'+val.views_count+'</li>'
        )
      });
      }else{
          $('.img-project').append('<li>No shots.</li>');
        }
      });                       
  });*/
