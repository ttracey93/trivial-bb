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
              var city = term;
              this.url = TriviaL.api + '/events/search/' + city;
              break;
            default:
              var owner = term.toLowerCase();
              this.url = TriviaL.api + '/events/byOwner/' + owner;
          }
        },

        parse: function(response) {
          console.log(response[0].name);
          this.set({ name: response[0].name})
          return response.events;
        }

    });

})();
