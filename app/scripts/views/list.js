/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.List = Backbone.View.extend({
        
        selectedDayFilters: [],
        
        el: "#view",

        template: JST['app/scripts/templates/list.ejs'],

        eventTemplate: JST['app/scripts/templates/host-event.ejs'],

        events: {
          "click #list-date-picker": "pickDate",
          "submit #listing-search": "searchListing"
        },

        initialize: function (data) {
          //console.log(data);
          this.eventCollection = new TriviaL.Collections.Events(data,'search');
          this.render();
        },

        render: function() {
          var _thisEl = this.$el;
          var _thisTmp = this.template;
          var events = this.eventCollection
          
          events.fetch(
            {
              success: function() {
                _thisEl.html(_thisTmp( {data: events} ));
                $('.collapsible').collapsible({
                  // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                  accordion : false,
                  expandable: true
                });
              }
            }
          );
        },

        //Renders a new listing based off new search term.
        searchListing: function(e) {
          
          console.log(this._getFilterData());
          
          /** 
           * I will need to create a couple of back end routes to 
           *  handle the added filters.
           * 
           * Example: "#/search/jacksonville/from-date/to-date/distance"
           * 
           * I believe that will be the best way to handle it.
           */
          
          /*
          var term = $("#search-listing-input").val();
          TriviaL.Services.Geocode(term,function(city,state) {
            var url = '#/search/' + city + "," + state;
            window.router.navigate(url, {trigger: true});  
          });
          */
           
          return false;
        },
        
        _getFilterData: function() {
          return {
            'location': $("#location-filter").val(),
            'from-date-filter': $("#from-date-filter").val(),
            'to-date-filter': $("#to-date-filter").val(),
            'distance-radius': $("#distance-radius").val() 
          };
        }
    
    });

})();
