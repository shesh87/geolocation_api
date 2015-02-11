//Tracks current location on map
$('.geo').on('click', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});

function success(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var src = 'https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&center=' + latitude + ',' + longitude;
  $('.map').html('<img src="' + src + '"/>');
}

function error(n) {
  console.log(n.message);
  $('.error_msg').text("Could not locate your location.");
}



//Tracks given coordinates on map
$('.get-geo').on('click', function() {
  var latitude = $('input#lat').val();
  var longitude = $('input#long').val();
  var src = 'https://maps.googleapis.com/maps/api/staticmap?zoom=7&size=600x300&center=' + latitude + ',' + longitude;
  $('.map').html('<img src="' + src + '"/>');
});