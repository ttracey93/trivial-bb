// Instantiate services
TriviaL.Services = TriviaL.Services || {};

TriviaL.Services.Geocode = function(searchQuery,callback) {
  //Create geocode object.
  var geocoder = new google.maps.Geocoder();
  
  geocoder.geocode({'address': searchQuery},function(results, status) {
    //Check is google finds a valid address.
    if(status == google.maps.GeocoderStatus.OK) {
      var data = getCityAndState(searchQuery,results[0]);
      //TODO: Need to solve when user enters a state name.
      callback(data.city,data.state);
    } 
    else {
      return false;
    }
  });
};

/**
 * Returns the city and state of the location the user searched
 * regardless of user input.
 */
function getCityAndState(search,results) {
  var data = {};
  //Determine what the user searched by. (I.E zip, state, or city.)
  if (isNaN(search)) {
    data.city = results.address_components[0].long_name;
    data.state = results.address_components[2].short_name;
  } else {
    data.city = results.address_components[1].long_name;
    data.state = results.address_components[2].short_name;
  }
  return data;
};