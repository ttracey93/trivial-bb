/*global TriviaL, Backbone*/

TriviaL.Models = TriviaL.Models || {};

(function () {
    'use strict';

    TriviaL.Models.Event = Backbone.Model.extend({

        defaults: {
        },

        initialize: function(id) {
          this.url = TriviaL.api + '/events/' + id;
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
