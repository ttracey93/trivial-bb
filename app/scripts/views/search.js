/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Search = Backbone.View.extend({

        el: '#view',

        template: JST['app/scripts/templates/search.ejs'],

        //Create a google map geocoder object
        geocoder: new google.maps.Geocoder(),

        events: {
          "submit": "search"
        },

        initialize: function () {
            /*
             * @description: Sets up the location via HTML5 geolocation.
             * @param {function} setUpHTML5Location - Called on success.
             * @param {function} setUpHTML5Location - Called on success.
             */
            geolocator.locate(this.setUpHTML5Location);

            $(function() {
              $('.search-box').vegas({
                slides: [
                  { src: 'images/city0.jpg' },
                  { src: 'images/city1.jpg' },
                  { src: 'images/city2.jpg' }
                ]
              });
            });

            this.render();
        },

        search: function(e) {
          var address = $("input[name='search-query']").val();
          this.geocoder.geocode({'address': address},function(results, status) {
            if(status == google.maps.GeocoderStatus.OK) {
               console.log(results[0]);
               //Send to /search for listings.
            } else {
              console.log('Geocode was not successful.');
            }
          });
          return false;
        },

        //Call back function for geolocator object on success.
        setUpHTML5Location: function(location) {
          var currentLocation = location.address.city + ", " + location.address.region;
          $("#search").val(currentLocation);
        },

        render: function () {
            this.$el.html(this.template(/*this.model.toJSON()*/));
            return this;
        }

    });

})();
