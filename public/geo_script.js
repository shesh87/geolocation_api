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



//Find given city location on map
$('.city').on('click', function() {
  var place = $('input#city').val();
  console.log(place);
  
  $.ajax({
    type: 'GET',
    url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text%3D%22' + place + '%22&format=json&callback=',
    dataType: 'json'
  }).done(function(data){
    console.log(data.query.results.Result.latitude);
    var lat = data.query.results.Result.latitude;
    var long = data.query.results.Result.longitude;
    var src = 'https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x300&center=' + lat + ',' + long;
  $('.map').html('<img src="' + src + '"/>');
  }).error(function(error) {
    console.log(error);
  });
  
});
