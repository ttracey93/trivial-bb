TriviaL.Services = TriviaL.Services || {};

TriviaL.Services.upload = function(data) {
  $.ajax({
    url: 'https://api.imgur.com/3/image',
    headers: {
        'Authorization': 'Client-ID b9461b8251760da'
    },
    type: 'POST',
    data: {
        'image': 'http://cdn.embed.ly/providers/logos/imgur.png',
        'title': 'testing',
        'album': 'LIlCu'
    },
    success: function(json) { 
        console.log(json);
    }
  });
  return false;
}


/*
Upload parameters.
---------------------------------------------------------------------------------
Key	          Required	 Description
image	        required	 A binary file, base64 data, or a URL for an image. (up to 10MB)
album	        optional	 The id of the album you want to add the image to. For anonymous albums, {album} should be the deletehash that is returned at creation.
type	        optional	 The type of the file that's being sent; file, base64 or URL
name	        optional	 The name of the file, this is automatically detected if uploading a file with a POST and multipart / form-data
title 	      optional	 The title of the image.
description	  optional	 The description of the image.
*/