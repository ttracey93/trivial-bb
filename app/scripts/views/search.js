/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Search = Backbone.View.extend({

        el: '#view',

        template: JST['app/scripts/templates/search.ejs'],

        events: {
          "submit #search-form": "search"
        },

        initialize: function () {
            this.render();
        },

        search: function(e) {
          var address = $("input[name='search-query']").val();
          
          //Sending to geocode.
          TriviaL.Services.Geocode(address, function(city,state) {
            var url = '#/search/' + city + "," + state;
            window.router.navigate(url, {trigger: true});
          });
          return false;
        },

        //Call back function for geolocator object on success.
        setUpHTML5Location: function(location) {
          var currentLocation = location.address.city + ", " + location.address.region;
          $("#search").val(currentLocation);
        },

        render: function () {
            geolocator.locate(this.setUpHTML5Location);
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
