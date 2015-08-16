// Instantiate services
TriviaL.Services = TriviaL.Services || {};

TriviaL.Services.Geocode = function() {

  geocoder: new google.maps.Geocoder(),

  geocode: function(address) {
    this.geocoder.geocode({'address': address},function(results, status) {
      if(status == google.maps.GeocoderStatus.OK) {
        /*
         * @TODO Check if search term is zip code or city.
         *        Then select the right address_components.
         */

         if (isNaN(address)) {
           //Search by city
           var city = results[0].address_components[0].long_name;
         } else {
           //Search by zip code.
           var zip = results[0].address_components[1].long_name;
         }


      } else {
        //console.log('Geocode was not successful.');
        return false;
      }
    });
  },

}
