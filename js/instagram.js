
var token = '1085520.839cbb8.7adff04f35d249f48a12df7fecd9262a',
    userid = 1085520,
    num_photos = 1;

$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('body').css('background-image','url('+data.data[x].images.standard_resolution.url+')');
		}
	},
	error: function(data){
		console.log(data);
	}
});
