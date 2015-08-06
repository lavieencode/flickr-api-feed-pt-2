$(document).ready(function() {

// Form submit event (on click)
$('form').submit(function (evt) {
   evt.preventDefault(); //prevent moving off the page because AJAX
   var searchTerm = $('#search').val();

// AJAX yaaaasss
   var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  
   var flickrOptions = {
      tags: searchTerm,
      format: "json"
    };
  
   $.getJSON(flickrAPI, flickrOptions, displayPhotos);

}); // end click

// Display photos function
function displayPhotos( data ) {
      var photoHTML = '<ul>';
  
      $.each( data.items, function (i,photo ) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
  
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    };

}); // end ready