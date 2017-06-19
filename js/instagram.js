var token = '1085520.839cbb8.7adff04f35d249f48a12df7fecd9262a',
    userid = 1085520,
    num_photos = 1;

$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){

     let url = data.data[0].images.standard_resolution.url;
     const arr = url.split('/');
     url = url.replace(`${arr[4]}/${arr[5]}/`, '');   
     
     $('body').css('background-image','url('+url+')');

     var img = document.createElement('img');

     img.setAttribute('src', url)
     img.crossOrigin = "Anonymous";

     img.addEventListener('load', function() {
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches();
        const color = swatches.Vibrant.getHex();
        $("body").css("border-color", color);

    });
  }
});
