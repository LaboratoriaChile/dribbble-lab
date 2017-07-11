$(document).ready(function() {
	var user = 'eduardo';
	var token = 'a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea';

	$.ajax({

		url: 'https://api.dribbble.com/v1/users/'+ user+'/shots?access_token='+token,
		type: 'GET',
		dataType: 'json',
		
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});