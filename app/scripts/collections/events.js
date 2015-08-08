/*global TriviaL, Backbone*/

TriviaL.Collections = TriviaL.Collections || {};

(function () {
    'use strict';

    TriviaL.Collections.Events = Backbone.Collection.extend({

        el: '#host-events',

        model: TriviaL.Models.Event,

        template: JST['app/scripts/templates/host-events.ejs'],

        initialize: function(owner) {
            this.url = TriviaL.api + '/events/byOwner/' + owner;
        },

        parse: function(response) {
          console.log(response);
          return response.events;
        }

    });

})();
