/*global TriviaL, Backbone*/

TriviaL.Collections = TriviaL.Collections || {};

(function () {
    'use strict';

    TriviaL.Collections.Events = Backbone.Collection.extend({

        el: '#host-events',

        model: TriviaL.Models.Event,

        template: JST['app/scripts/templates/host-events.ejs'],

        initialize: function(term,type) {
          switch (type) {
            case 'search':
              this.url = TriviaL.Services.apiUrl('eventsSearch',term);
              break;
            default:
              var owner = term;
              this.url = TriviaL.Services.apiUrl('eventsOwner', owner);
          }
        },

        parse: function(response) {
          console.log(response.events);
          return response.events;
        },

        setSearch: function(term) {
          this.url = TriviaL.Services.apiUrl('eventsSearch',term);
        }

    });

})();
