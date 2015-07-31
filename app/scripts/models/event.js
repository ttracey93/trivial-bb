/*global TriviaL, Backbone*/

TriviaL.Models = TriviaL.Models || {};

(function () {
    'use strict';

    TriviaL.Models.Event = Backbone.Model.extend({

        url: 'event',

        defaults: {
          id: '',
          host: 'Test',
          date: '',
          time: '',
          address: '',
          city: '',
          state: '',
          zip: ''
        },

        initialize: function() {
        },


        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
