/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.List = Backbone.View.extend({

        el: "#view",

        template: JST['app/scripts/templates/list.ejs'],

        eventTemplate: JST['app/scripts/templates/host-event.ejs'],

        events: {
          "click #list-date-picker": "pickDate",
          "submit #listing-search": "searchListing"
        },

        initialize: function (data) {
          //console.log(data);

          this.render(data);
        },

        render: function(data) {
          var _thisEl = this.$el;
          var _thisTmp = this.template;
          var events = new TriviaL.Collections.Events(data,'search');

          events.fetch(
            {
              success: function() {
                //console.log(events);
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
          /*
           * @TODO Run the search term thought a google's geocoding service.
           */
          var term = $("#search-listing-input").val();
          var url ="#/search/" + term;
          window.router.navigate(url, {trigger: true});
          return false;
        },

        /* Event functions */
        pickDate: function(e) {
          $('.datepickerList').pickadate(
            {
              closeOnSelect: true,
              closeOnClear: true,
            }
          );
        },

    });

})();
