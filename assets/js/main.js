$(function() {
  		$.getJSON('https://api.dribbble.com/v1/users/wellscollins/shots?access_token=4644069fd6dfeba94b66e75c1b47e088f3444120a121ba0b481f9e7637a72ccb&callback=?', function(resp) {
    	if (resp.data.length > 0) {
    	console.log(resp);						
      	$.each(resp.data.reverse(), function(i, val) {
        $('#dribbble').prepend(
          '<li class="box"><img src="'+val.images.normal+'" /><h2>'+val.title+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p></li><li class="comments">'+val.comments_count+'</li><li class="likes">'+val.likes_count+'</li>'+'<li class="views">'+val.views_count+'</li>'
        )
      });
    	}else{
      		$('#dribbble').append('<li>No shots.</li>');
    		}
  		});		   							    
	});
