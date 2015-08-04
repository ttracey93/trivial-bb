/*global TriviaL, Backbone*/

TriviaL.Models = TriviaL.Models || {};

(function () {
    'use strict';

    TriviaL.Models.Event = Backbone.Model.extend({

        url: function() {
          return TriviaL.api + '/events/' + id ? id : '';
        },

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

        initialize: function(data) {
          console.log(this.time);
          console.log(this);
          console.log(data);
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
