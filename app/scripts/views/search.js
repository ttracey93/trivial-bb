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
            this.render();
        },

        search: function(e) {
          var address = $("input[name='search-query']").val();
          var url = '#/search/' + address;
          window.router.navigate(url, {trigger: true});
          return false;
        },

        //Call back function for geolocator object on success.
        setUpHTML5Location: function(location) {
          var currentLocation = location.address.city + ", " + location.address.region;
          $("#search").val(currentLocation);
        },

        render: function () {
            this.$el.html(this.template(/*this.model.toJSON()*/));
            $(function() {
              $('.search-box').vegas({
                slides: [
                  { src: 'images/city0.jpg' },
                  { src: 'images/city1.jpg' },
                  { src: 'images/city2.jpg' }
                ]
              });
            });
            return this;
        }

    });

})();
